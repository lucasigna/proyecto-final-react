import React from 'react'
import './CartItemQuantity.scss'
import { useContext, useEffect } from 'react';
import { CartContext } from './../../context/CartContext';
import { ThemeContext } from '../../context/ThemeContext';

export const CartItemQuantity = ({item}) => {

    const {carrito,agregarAlCarrito,eliminarItem} = useContext(CartContext)
    const {theme} = useContext(ThemeContext)

    useEffect(() => {

    },[carrito])

    return (
        <div className="cartItemQuantity">
            <button className={theme ? 'btn upAndDown btnLight' : 'btn upAndDown btnDark'} onClick={() => eliminarItem(item)}>-</button>
            <p className="quantity">{item.cantidad}</p>
            <button className={theme ? 'btn upAndDown btnLight' : 'btn upAndDown btnDark'} onClick={() => agregarAlCarrito(item)}>+</button>
        </div>
    )
}
