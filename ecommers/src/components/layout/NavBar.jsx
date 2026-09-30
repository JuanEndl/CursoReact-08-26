import React from 'react';

import CartWidget from './CartWidget';
import logo from '../../assets/iconos/logo.png';
import { ImSearch } from 'react-icons/im';
import { Link } from 'react-router-dom';

import './Navbar.css';


//navbar futuro search filter

const NavBar = () => {

	return (
	<>
		<section className="navBAr">
			<div className="header">
				<div className="">
					<div className="">
						<Link to="/">
							<img className="logoApp" src={logo} alt="logo" />
						</Link>
					</div>
					<div className="flex flex-row-reverse mr-4 ml-4 md:hidden">
						<i className="fas fa-bars" />
					</div>
					<div className="flex flex-row-reverse mr-8 hidden md:flex">
						<CartWidget/>
					</div>
				</div>
			</div>
		</section>
				
		<section className='containerButtonNavBar'>
			<div className='buttonNavBar'>
				<Link to="/">  
					<h2 className="title-font font-medium text-gray-900 tracking-widest text-sm">Todos</h2>
				</Link>
			</div>
			<div className='buttonNavBar'>
				<Link to={`/categoria/fuentes`}>
					<h2 className="title-font font-medium text-gray-900 tracking-widest text-sm">Fuentes</h2>
				</Link>
			</div>
			<div className='buttonNavBar'>
				<Link to={`/categoria/Placa de Video`}>
					<h2 className="title-font font-medium text-gray-900 tracking-widest text-sm">Placa de video</h2>
				</Link>
			</div>
			<div className='buttonNavBar'>
				<Link to={`/categoria/Memoria ram`}>
					<h2 className="title-font font-medium text-gray-900 tracking-widest text-sm">Memoria Ram</h2>
				</Link>
			</div>
			<div className='buttonNavBar'>
				<Link to={`/categoria/Motherboard`}>
					<h2 className="title-font font-medium text-gray-900 tracking-widest text-sm">Motherboard</h2>
				</Link>
			</div>
			<div className='buttonNavBar'>
				<Link to={`/categoria/Procesador`}>
					<h2 className="title-font font-medium text-gray-900 tracking-widest text-sm">Procesador</h2>
				</Link>
			</div>
		</section>
	</>
	);
};

export default NavBar;
