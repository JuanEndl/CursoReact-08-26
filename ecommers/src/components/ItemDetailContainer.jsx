import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';

import ItemCount from './ItemCount';
import CartContext from './CartContext/CartContext';

const ItemDetailContainer = () => {


const { id } = useParams();

const [producto, setProducto] = useState(null);

const { addItem } = useContext(CartContext);

const [inCard, setInCard] = useState(false);


useEffect(() => {

    fetch('/datos/productos.json')
        .then((response) => {

            if (!response.ok) {
                throw new Error('No se pudo cargar el archivo de productos');
            }

            return response.json();

        })
        .then((data) => {

            const productoEncontrado = data.find(
                (product) => String(product.id) === String(id)
            );

            setProducto(productoEncontrado);

        })
        .catch((error) => {
            console.error('Error cargando producto:', error);
        });

}, [id]);


function addCart(qty) {

    addItem(producto, qty);

    setInCard(true);
}


// Mientras carga el producto
if (!producto) {

    return (
        <div className="flex justify-center items-center py-20">
            <p className="text-gray-500 text-xl">
                Cargando producto...
            </p>
        </div>
    );

}


return (
    <section className="itemListDetail">
        <div>
            <div className="">
                <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                    <h2 className="text-sm title-font text-gray-500 tracking-widest">
                        {producto.category}
                    </h2>
                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                        {producto.nombre}
                    </h1>
                    <div className="flex mb-4">
                        <a className="flex-grow text-indigo-500 border-indigo-500 py-2 text-lg px-1 borderDescription">
                            Description
                        </a>
                    </div>
                    <p className="leading-relaxed mb-4">
                        {producto.detail}
                    </p>
                    <div className="flex border-t border-b mb-2 border-gray-200 py-2">
                        <span className="text-gray-500">
                            Stock
                        </span>
                        <span className="ml-auto text-gray-900">
                            {producto.stock}
                        </span>
                    </div>
                    <div>
                        {inCard ? (
                            <>
                                <Link to="/">
                                    <button className="mr-15 buttonBuy">
                                        Seguir comprando
                                    </button>
                                </Link>


                                <Link to="/cart">
                                    <button className="ml-20 buttonBuy">
                                        Terminar Compra
                                    </button>
                                </Link>
                            </>
                        ) : (
                            <ItemCount
                                addCart={addCart}
                                stock={producto.stock}
                                precio={producto.precio}
                            />
                        )}
                    </div>
                </div>
                <img alt={producto.nombre} className="mb-5"src={producto.img}/>
            </div>
        </div>
    </section>
);


};

export default ItemDetailContainer;
