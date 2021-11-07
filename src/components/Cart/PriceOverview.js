import React, { useContext, useEffect} from 'react'
import { ThemeContext } from '../../context/ThemeContext';
import { CartContext } from './../../context/CartContext';
import { Link } from 'react-router-dom';

export const PriceOverview = () => {

    const {carrito,calcularPrecioTotal} = useContext(CartContext)
    const {theme} = useContext(ThemeContext)

    useEffect(() => {

    },[carrito])

    return (
        <div className={theme ? "priceOverview light" : "priceOverview dark"}>
            <h4>Productos</h4>
            <hr/>
            {carrito.map( (item) => {
                return (
                    <div className="flexPrice">
                        <p className="price">{item.cantidad}x {item.name}</p>
                        <p className="price">${(item.precio*item.cantidad).toLocaleString('es-AR')}</p>
                    </div>
                )
                
            })}
            <hr/>
            <p className="totalPrice">Total a pagar: <span>${calcularPrecioTotal().toLocaleString('es-AR')}</span></p>
            <Link to="/checkout" className="buttonLink">
                <button className={theme ? 'btn btnLight' : 'btn btnDark'}>Ir a finalizar comprar</button>
            </Link>
        </div>
    )
}
