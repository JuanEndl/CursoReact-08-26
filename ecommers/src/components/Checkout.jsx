import React from 'react';
import { useContext } from 'react';
import CartContext from './CartContext/CartContext';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Checkout = () => {
	const { producCart, addPrice, clearAll } = useContext(CartContext);

	const [ buyerData, setBuyerData ] = useState({});
	const [ orderId, setOrderId ] = useState('');
	const [ ordenProcesada, setOrdenProcesada ] = useState(false);

	//////// crear una variable afuera del carrito para hacer el precio total
	let cart = {
		totalPrice: addPrice(producCart),
		//discount: this.totalPrice * 0.10,
		product: producCart
	};
	///////////////////////////

	const handleInput = (e) => {
		setBuyerData({
			...buyerData,
			[e.target.name]: e.target.value
		});
	};

	const handlerSubmit = (e) => {
		e.preventDefault();

		const order = {
			comprador: {
				Name: buyerData.buyerName,
				Email: buyerData.buyerEmail,
				Tel: buyerData.buyerTel
			},
			items: producCart,
			totalprice: cart.totalPrice
		};
        
		addOrder(order).then((data) => {
			setOrderId(data)
		});

        setOrdenProcesada(true)
        clearAll()
		

		console.log(order);
	};

	return (
		<div className="containerAll">
			<div className="text-center flexContainer">
				{ordenProcesada ? (
					<div className="orderEmitida">
						<h2 className="title uppercase text-5xl m-12 font-bold text-center">Gracias por su compra</h2>
						<div className=" borderDescription">
							<p className="text-xl mb-12 mb-65 ">
								Guarde el seguiente codigo para el seguimiento del mismo
							</p>
						</div>
						<div className="">
							<p className=" textOrder title uppercase text-3xl font-bold">N° de orden:{orderId}</p>
						</div>
						<Link to="/">
							<button className="buttonBuy">ir al menu</button>
						</Link>
					</div>
				) : (
					<div className="borderContainer ">
						<h2 className="  title uppercase text-5xl m-12 font-bold text-center">Finalizar compra</h2>
						<p className="text-xl mb-12">
							Para finalizar complete los siguientes campos y se le asignara un codigo de seguimiento del
							producto.
						</p>
						<div>
							<form className="containerForm mx-auto w-1/4" onSubmit={handlerSubmit}>
								<div className="m-10">
									<label  htmlFor="buyerName">Ponga su nombre:</label>
									<input 
										type="text"
										name="buyerName"
										autoFocus
										id="buyerNombre"
										className="bg-slate-100 mx-4 w-60 px-2 rounded-xl, formu"
										placeholder="Juan"
										onChange={handleInput}
									/>
								</div>
								<div className="m-10">
									<label htmlFor="buyerEmail">Ponga su correo electronico:</label>
									<input
										type="email"
										name="buyerEmail"
										id="buyerEmail"
										className="bg-slate-100 mx-4 w-60 px-2 rounded-xl, formu"
										placeholder="Juan@correo.com"
										onChange={handleInput}
									/>
								</div>
								<div className="m-10">
									<label htmlFor="buyerTel">Ponga su teléfono:</label>
									<input
										type="text"
										name="buyerTel"
										id="buyerTel"
										className="bg-slate-100 mx-4 w-60 px-2 rounded-xl, formu"
										placeholder="1569325471"
										onChange={handleInput}
									/>
								</div>
								<button type="submit" className="buttonBuy">
									Realizar compra
								</button>
							</form>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Checkout;
