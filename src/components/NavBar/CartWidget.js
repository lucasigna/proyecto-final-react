import React from 'react'
import carrito from './carrito_negro.png';

export const CartWidget = () => {
    return (
        <div className="cartWidget">
            <img className="carrito" src={carrito} alt="Carrito de compras"/>
            <div className="cantidadCarrito">0</div> 
        </div>
    )
}
