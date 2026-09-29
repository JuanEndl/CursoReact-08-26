import React from 'react'
import { useContext } from 'react';
import CartContext from '../CartContext/CartContext';
import carrito from '../../assets/iconos/carrito.png';
import { Link } from 'react-router-dom';

const CartWidget = () => {

	/*const {count, setcount} = useContext(CartContext)
	console.log(count)*/
	const {itemTotalCarrito} = useContext(CartContext);
	console.log(itemTotalCarrito)


	return (
    <>
    <div className="text-gray-700 text-center  px-4 py-2 m-2">
			<Link to="/cart">
				<img className="shoppingCart" src={carrito} alt="carrito" />
			</Link>
	</div>
	<div className="qty">{itemTotalCarrito && <p className='cartQuantity'>{itemTotalCarrito}</p>}</div>
    </>
	)
}

export default CartWidget