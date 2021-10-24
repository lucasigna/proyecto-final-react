import React,{useContext} from 'react'
import { useHistory } from 'react-router'
import { CartItemQuantity } from '../CartItemQuantity/CartItemQuantity';
import { ThemeContext } from './../../context/ThemeContext';
import { CartContext } from './../../context/CartContext';

export const ItemDetail = ({id,name,description,price,range,power,speed,image}) => {

    const {theme} = useContext(ThemeContext)
    const {getCantidad,createItem} = useContext(CartContext)

    const {goBack} = useHistory()

    return (
        <div className={theme ? 'ItemDetail light' : 'ItemDetail dark'}>
            <div className="div1">
                <img src={image} alt='Foto scooter'/>
                <h3>${price}</h3>
                <CartItemQuantity item={createItem(name,id,getCantidad(id),price,image)}/>
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
