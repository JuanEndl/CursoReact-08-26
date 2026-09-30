import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ItemList from './ItemList';

import './ItemList.css';

const ItemListContainer = () => {


const [productos, setProductos] = useState([]);

const { category } = useParams();


useEffect(() => {

    fetch(`${import.meta.env.BASE_URL}datos/productos.json`)
        .then((response) => {

            if (!response.ok) {
                throw new Error('No se pudo cargar productos.json');
            }

            return response.json();

        })
        .then((data) => {

            console.log('Productos cargados:', data);

            setProductos(data);

        })
        .catch((error) => {

            console.error('Error cargando productos:', error);

        });

}, []);


let productosFiltrados = productos;


if (category) {

    productosFiltrados = productos.filter(
        (producto) =>
            producto.categoria.toLowerCase() === category.toLowerCase()
    );

}


return (
    <section className="cardForm">

        {productosFiltrados.length > 0 ? (

            productosFiltrados.map((product) => (

                <div key={product.id}>
                    <ItemList product={product} />
                </div>

            ))

        ) : (

            <p className="text-center text-gray-500 py-10">
                Cargando productos...
            </p>

        )}

    </section>
);


};

export default ItemListContainer;
