import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from './../../context/ThemeContext';
import { agregarPuntos } from './../../helpers/agregarPuntos';

export const Item = ({id,name,price,image}) => {

    const {theme} = useContext(ThemeContext)

    
    return (
        <Link to={`/productos/${id}`} className={theme ? 'item light' : 'item dark'}>
            <img src={image} alt="Imagen del producto"/>
            <h3>{name}</h3>
            <h4>${agregarPuntos(price)}</h4>
            <button className={theme ? 'btn btnLight' : 'btn btnDark'}>Agregar al carrito</button>
        </Link>
    )
}
