import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import { CartItemQuantity } from '../CartItemQuantity/CartItemQuantity'

export const CartItem = ({item}) => {

    const {theme} = useContext(ThemeContext)

    return (
        <div className={theme ? "cartItem light" : "cartItem dark"}>
            <div className="imgName">
                <img src={item.image} alt="cart"/>
                <h3>{item.name}</h3>
            </div>
            <CartItemQuantity item={item}/>
            <p className="priceItem">${item.precio.toLocaleString('es-AR')}</p>
        </div>
    )
}
