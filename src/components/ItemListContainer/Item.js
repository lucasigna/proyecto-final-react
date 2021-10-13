import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ({id,name,price,image,theme}) => {
    return (
        <Link to={`/productos/${id}`} className={theme ? 'item light' : 'item dark'}>
            <img src={image} alt="Imagen del producto"/>
            <h3>{name}</h3>
            <h4>${price}</h4>
            <button className={theme ? 'btn btnLight' : 'btn btnDark'}>Agregar al carrito</button>
        </Link>
    )
}
