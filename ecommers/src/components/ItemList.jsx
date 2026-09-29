
//Item list card con toda la info

import React from 'react';
import { Link } from 'react-router-dom';

const ItemList = ({ product }) => {
	return (
		<>
		<article className='itemList'>
			<div className='ItemContainer'>
				<div className='cardContainer'>
					<div className='itemListImg'>
						<img className='itemImg' src={product.img}/>
					</div>
					<div className='itemListSet'>
						<div className='iltemListCategory'>
							<p>{product.category}</p>
						</div>
						<div>
							<h4>{product.title}</h4>
						</div>
						<div>
							<h2>${product.price}</h2>
						</div>
						<div className='btnSeeMore'>
							<Link to={`/detail/${product.id}`}>
								<button className='text-color btn'>Ver mas</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</article>
		</>
	);
};

export default ItemList;
