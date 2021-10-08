import React from 'react'
import carritoLight from './carrito_negro.png';
import carritoDark from './carrito_blanco.png';

export const CartWidget = ({theme}) => {
    return (
        <div className="cartWidget">
            <img className="carrito" src={theme ? carritoLight : carritoDark} alt="Carrito de compras"/>
            <div className="cantidadCarrito">0</div> 
        </div>
    )
}
