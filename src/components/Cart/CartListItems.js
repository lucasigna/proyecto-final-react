import React, { useContext, useEffect} from 'react'
import { CartItem } from './CartItem';
import { CartContext } from './../../context/CartContext';

export const CartListItems = () => {

    const {carrito} = useContext(CartContext)

    useEffect(() => {

    },[carrito])

    return (
        <div className="list">
            { carrito.length > 0 ? carrito.map( (item) => <CartItem item={item}/>)
            : <p className="carritoVacio">Carrito vacío</p> }
        </div>
    )
}
