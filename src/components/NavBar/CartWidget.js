import React,{useContext, useEffect} from 'react'
import carritoLight from './carrito_negro.png';
import carritoDark from './carrito_blanco.png';
import { ThemeContext } from './../../context/ThemeContext';
import { CartContext } from './../../context/CartContext';

export const CartWidget = () => {

    const {theme} = useContext(ThemeContext)
    const {carrito,calcularCantidad} = useContext(CartContext)

    useEffect(() => {

    },[carrito])

    return (
        <div className="cartWidget">
            <img className="carrito" src={theme ? carritoLight : carritoDark} alt="Carrito de compras"/>
            <div className="cantidadCarrito">{calcularCantidad()}</div> 
        </div>
    )
}
