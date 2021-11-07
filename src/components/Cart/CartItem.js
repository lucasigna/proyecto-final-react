import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import { CartItemQuantity } from '../CartItemQuantity/CartItemQuantity'
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import { CartContext } from './../../context/CartContext';


export const CartItem = ({item}) => {

    const {theme} = useContext(ThemeContext)
    const {eliminarItems} = useContext(CartContext)

    function eliminar() {
        eliminarItems(item.id)
    }

    return (
        <div className={theme ? "cartItem light" : "cartItem dark"}>
            <div className="imgName">
                <img src={item.image} alt="cart"/>
                <h3>{item.name}</h3>
            </div>
            <CartItemQuantity item={item}/>
            <p className="priceItem">${item.precio.toLocaleString('es-AR')}</p>
            <CancelRoundedIcon className={theme ? "removeItem light" : "removeItem dark"} onClick={eliminar}/>
        </div>
    )
}
