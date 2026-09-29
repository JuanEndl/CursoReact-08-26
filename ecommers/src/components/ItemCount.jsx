

//itemCount

import React,{ useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

import { useContext } from 'react';
import CartContext from './CartContext/CartContext';


export default function ItemCount({ stock, addCart }) {
    
    // traer el precio al ItemCount
    const {id} = useParams()
    
    
    useEffect(() => {                                          
        
        getProductsCategory('id' , id ).then(data => {
            setproductos(data[0])
			
		}) 
		
		
	}, [])
	
	const [productos, setproductos] = useState([])
    

    const [count, setcount] = useState(1)
    console.log(count)
    
    
    function add() {
        if (count < stock)  setcount(count + 1) 
    }

    function subtract() {
        if (count > 1)  setcount(count - 1)
    } 


    return(
    <>
        <div className="flex  border-b border-gray-200 py-2">
            <span className="text-gray-500">Agregar Cantidad</span>
            <button className="ml-auto text-gray-900 buttomPlusRest" onClick={()=>subtract()}> - </button>
            <span className='my-auto px-5 numberCount'>{count}</span>
            <button className=" text-gray-900 buttomPlusRest" onClick={()=>add()}> + </button>
        </div>
        <div>
            <div className="flex mt-2">
				<span className="title-font font-medium text-2xl text-gray-900" >${productos.price}</span>
				<button onClick={() => addCart(count)} className="flex ml-auto buttonBuy">
					Agregar al carrito
				</button>
			</div>
        </div>
    </>

    )           
}

