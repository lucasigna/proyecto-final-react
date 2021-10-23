import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import './Cart.scss'
import { CartListItems } from './CartListItems'
import { PriceOverview } from './PriceOverview'

export const Cart = () => {

    const {theme} = useContext(ThemeContext)

    return (
        <div className={theme ? "cartView light" : "cartView dark"}>
            <h2>Mi carrito</h2>
            <CartListItems/>
            <PriceOverview/>
        </div>
    )
}
