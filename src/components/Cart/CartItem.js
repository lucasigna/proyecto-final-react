import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import { CartItemQuantity } from '../CartItemQuantity/CartItemQuantity'

export const CartItem = ({item}) => {

    const {theme} = useContext(ThemeContext)

    return (
        <div className={theme ? "cartItem light" : "cartItem dark"}>
            <img src="https://dapas.com.ar/wp-content/uploads/2020/04/H6.jpg" alt="cart"/>
            <h3>{item.name}</h3>
            <CartItemQuantity item={item}/>
            <p className="priceItem">${item.precio}</p>
        </div>
    )
}
