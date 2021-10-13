import React from 'react'
import { useHistory } from 'react-router'

export const ItemDetail = ({id,name,description,price,range,power,speed,image,theme}) => {

    const {goBack} = useHistory()

    return (
        <div className={theme ? 'ItemDetail light' : 'ItemDetail dark'}>
            <div className="div1">
                <img src={image} alt='Foto scooter'/>
                <h3>${price}</h3>
                <button className={theme ? 'btn btnLight' : 'btn btnDark'}>Agregar al carrito</button>
                <button className={theme ? 'btnBack btnBackLight' : 'btnBack btnBackDark'} onClick={ () => goBack() }>Volver</button>
            </div>
            <div className="div2">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
            <div className="div3">
                <p>Autonomía: {range} Km</p>
                <p>Potencia: {power} W</p>
                <p>Velocidad Máxima: {speed} Km/h</p>
            </div>
        </div>
    )
}
