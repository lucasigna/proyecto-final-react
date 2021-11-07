import React, { useContext, useEffect} from 'react'
import { CartItem } from './CartItem';
import { CartContext } from './../../context/CartContext';
import { ThemeContext } from '../../context/ThemeContext';
import { Link } from 'react-router-dom';

export const CartListItems = () => {

    const {carrito} = useContext(CartContext)
    const {theme} = useContext(ThemeContext)

    useEffect(() => {

    },[carrito])

    return (
        <div className="list">
            { carrito.map( (item) => <CartItem item={item}/>) }
        </div>
    )
}
