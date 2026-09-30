import React, { useState } from 'react';

export default function ItemCount({ stock, addCart, precio }) {


const [count, setCount] = useState(1);

function add() {
    if (count < stock) {
        setCount(count + 1);
    }
}

function subtract() {
    if (count > 1) {
        setCount(count - 1);
    }
}

return (
    <>
        <div className="flex border-b border-gray-200 py-2">
            
            <span className="text-gray-500">
                Agregar Cantidad
            </span>

            <button
                className="ml-auto text-gray-900 buttomPlusRest"
                onClick={subtract}
            >
                -
            </button>

            <span className="my-auto px-5 numberCount">
                {count}
            </span>

            <button
                className="text-gray-900 buttomPlusRest"
                onClick={add}
            >
                +
            </button>

        </div>

        <div>
            <div className="flex mt-2">

                <span className="title-font font-medium text-2xl text-gray-900">
                    ${precio}
                </span>

                <button
                    onClick={() => addCart(count)}
                    className="flex ml-auto buttonBuy"
                >
                    Agregar al carrito
                </button>

            </div>
        </div>
    </>
);

}
