import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import './Cart.scss'
import { CartListItems } from './CartListItems'
import { PriceOverview } from './PriceOverview'
import { CartContext } from './../../context/CartContext';
import { Link } from 'react-router-dom';

export const Cart = () => {

    const {theme} = useContext(ThemeContext)
    const {carrito} = useContext(CartContext)

    return (
        <>
        { carrito.length > 0 ? 
            <div className={theme ? "cartView light" : "cartView dark"}>
                <h2>Mi carrito</h2>
                <CartListItems/>
                <PriceOverview/>
            </div>
        :
            <div className={theme ? "flexCarritoVacio light" : "flexCarritoVacio dark"}>
                <p className={theme ? "carritoVacio light" : "carritoVacio dark"}>Carrito vacío</p>
                <Link to="/">
                    <button className={theme ? 'btn btnLight' : 'btn btnDark'}>Volver al inicio</button>
                </Link>
            </div>
        }
        </>   
    )
}
