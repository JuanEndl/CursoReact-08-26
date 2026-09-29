
import { createContext } from "react"
import { useState } from "react";













const CartContext = createContext();

export function CartContextProvider({ children }) {
    
    const [producCart, setItemcard] = useState([])
    const [carrito, setcarrito] = useState(0)
    const [itemTotalCarrito, setitemTotalCarrito] = useState(0)
    
    console.log(itemTotalCarrito)


    ////// 
    const sumar = (valor, multiplicador) => {
        return valor * multiplicador
    }
    //////

    ////// agregar producto + la cantidad
    function addItem (product, qty,) {
        if (insideShopCart(product.id)) {
            let index = producCart.findIndex(i => i.id === product.id)
            let productCopy = [...producCart]
            productCopy[index].qty += qty;            
            setcarrito(carrito + sumar(product.price, qty))
            console.log(productCopy[index].countPrice);
            setItemcard(productCopy)
            setitemTotalCarrito(itemTotalCarrito + qty)
        }
        else {
            let countPrice;
            countPrice = product.price * qty;
            const addproduct = {...product, qty, countPrice} // junta el producto entero con el qty y el countPrice
            setItemcard( [...producCart, addproduct] );  /// buscar lo que quiero del array de los productos
            setcarrito(carrito + sumar(addproduct.price, addproduct.prodQty))
            setitemTotalCarrito(itemTotalCarrito + addproduct.qty)
        }
    }
    ///////

    ////// agregar el total
    function addPrice (productCart){
        let total = 0;
        productCart.forEach(product => {total += product.countPrice});
        return total;
    }
    /////////
    
    function insideShopCart(id){
        return  producCart.some( function(inside){
            return(inside.id === id)
        })
    }
    
    ////////////////////////////////////////////// limpiar carrito entero
    function clearAll () {
        setItemcard([])
        setitemTotalCarrito(0)
        setcarrito(0)
    }

    const cartItemIndex = (product) => {
        return (producCart.findIndex(i => i.id === product))
    }


    ////////// remover producto
    function removeItem(product){
        if(producCart.length  !== 0){
            let index = producCart.findIndex(i => i.id === product)
            let productCopy = [...producCart]
            productCopy.splice(index, 1)
            setItemcard(productCopy)
            setitemTotalCarrito(itemTotalCarrito - producCart[cartItemIndex(product)].qty)
            
        }
    }
    //////////// 
    
    

    return(

        <CartContext.Provider value={ { addItem, producCart, clearAll, addPrice, removeItem, itemTotalCarrito } }>
        
            {children}

        </CartContext.Provider>

    )



}

export default CartContext