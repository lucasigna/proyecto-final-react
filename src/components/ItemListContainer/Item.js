import React from 'react'

export const Item = ({name,price,image,theme}) => {
    return (
        <div className={theme ? 'item light' : 'item dark'}>
            <img src={image} alt="Imagen del producto"/>
            <h3>{name}</h3>
            <h4>${price}</h4>
            <button className={theme ? 'btn btnLight' : 'btn btnDark'}>Agregar al carrito</button>
        </div>
    )
}
