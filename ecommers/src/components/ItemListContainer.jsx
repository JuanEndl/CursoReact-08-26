


import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import './ItemList.css';


const ItemListContainer = () => {
	
	
	useEffect(() => {
		
		//// traigo todos los productos
		getProducts().then(data => {
			setproductos(data)
		})
		
		/// traigo el category de firebase
		getProductsCategory('category' , 'category').then ( data => {
			console.log(data)
		})
		
		
	}, [])
	
		// guardo los archivos traidos en productos
		const [productos, setproductos] = useState([]) 
		console.log(productos)
		
		/// uso el parametro category del producto
		const {category} = useParams ()
	

	///////////////////////// filtrado de prodcutos
    let filterCategory = productos.filter(products => products.category === category) 
    console.log(filterCategory)
    

    if ( category
    ) {
            filterCategory = productos.filter(products => products.category === category) 
    } else {
        filterCategory = productos 
    }
	//////////////////


//filtro y .map a itemList

	return (
    <>
		<section className="cardForm">
			{filterCategory.length ? (
				filterCategory.map((product) => { 
					return (
						<div key={product.id}>
							<ItemList product={product}/>
						</div>
					);
				})
			) : (
				<p className="loader" />
			)}
		</section>
    </>
	);
};

export default ItemListContainer;
