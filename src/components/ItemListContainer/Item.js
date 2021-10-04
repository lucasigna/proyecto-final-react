import React from 'react'

export const Item = ({name,price,image}) => {
    return (
        <div className="item">
            <img src={image} alt="Imagen del producto"/>
            <h3>{name}</h3>
            <h4>${price}</h4>
            <button className="btn">Agregar al carrito</button>
        </div>
    )
}
