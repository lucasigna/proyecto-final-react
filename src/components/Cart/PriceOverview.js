import React, { useContext, useEffect} from 'react'
import { ThemeContext } from '../../context/ThemeContext';
import { CartContext } from './../../context/CartContext';

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
                        <p className="price">${item.precio*item.cantidad}</p>
                    </div>
                )
                
            })}
            <hr/>
            <p className="totalPrice">Total a pagar: <span>${calcularPrecioTotal()}</span></p>
            <button className={theme ? 'btn btnLight' : 'btn btnDark'}>Pagar</button>
        </div>
    )
}
