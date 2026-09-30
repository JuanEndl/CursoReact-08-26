import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import './ItemList.css';

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    const { category } = useParams();

    useEffect(() => {

        fetch('/datos/productos.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('No se pudieron cargar los productos');
                }

                return response.json();
            })
            .then((data) => {
                console.log('Productos cargados:', data);
                setProductos(data);
            })
            .catch((error) => {
                console.error('Error al cargar productos:', error);
            })
            .finally(() => {
                setLoading(false);
            });

    }, []);

    // Filtrar productos por categoría
    const filterCategory = category
        ? productos.filter((product) => product.category === category)
        : productos;

    console.log('Categoría:', category);
    console.log('Productos filtrados:', filterCategory);

    if (loading) {
        return <p className="loader">Cargando productos...</p>;
    }

    return (
        <section className="cardForm">

            {filterCategory.length > 0 ? (

                filterCategory.map((product) => (
                    <div key={product.id}>
                        <ItemList product={product} />
                    </div>
                ))

            ) : (

                <p>No se encontraron productos.</p>

            )}

        </section>
    );
};

export default ItemListContainer;