import React, { useContext, useEffect } from 'react'
import './AddCartAdvice.scss'
import { CartContext } from '../../context/CartContext';

export const AddCartAdvice = () => {

    const {nuevoItem,itemAgregado} = useContext(CartContext)

    useEffect(() => {
        setTimeout(() => {
            itemAgregado()
        },2000)
    },[nuevoItem])

    return (
        <>
        { nuevoItem 
        && 
        <div className="addCartAdvice">
            Agregado al carrito
        </div>
        }
        </>
    )
}
