import React, { useContext, useEffect} from 'react'
import { CartItem } from './CartItem';
import { CartContext } from './../../context/CartContext';
import { ThemeContext } from '../../context/ThemeContext';

export const CartListItems = () => {

    const {carrito} = useContext(CartContext)
    const {theme} = useContext(ThemeContext)

    useEffect(() => {

    },[carrito])

    return (
        <div className="list">
            { carrito.length > 0 ? carrito.map( (item) => <CartItem item={item}/>)
            : <p className={theme ? "carritoVacio light" : "carritoVacio dark"}>Carrito vacío</p> }
        </div>
    )
}
