import React, { useContext, useEffect } from 'react'
import './AddCartAdvise.scss'
import { CartContext } from '../../context/CartContext';

export const AddCartAdvise = () => {

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
        <div className="addCartAdvise">
            Agregado al carrito
        </div>
        }
        </>
    )
}
