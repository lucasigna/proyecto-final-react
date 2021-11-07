import React, { useContext, useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import TextField from '@mui/material/TextField';
import './Checkout.scss'
import { ThemeContext } from '../../context/ThemeContext';
import { CartContext } from './../../context/CartContext';
import { generarOrden } from './../../firebase/generarOrden';
import { CircularProgress } from '@mui/material';
import { useHistory } from 'react-router';

export const Checkout = () => {

    const {theme} = useContext(ThemeContext)
    const {carrito,calcularPrecioTotal,vaciarCarrito} = useContext(CartContext)
    const [loading, setLoading] = useState(false)

    const {push} = useHistory()

    if(carrito.length == 0) {
        push("/")
    }

    const [values, setValues] = useState({
        nombre: '',
        apellido: '',
        email: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.id]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        setLoading(true)

        generarOrden(values, carrito, calcularPrecioTotal())
        .then((res) => {
            Swal.fire({
                icon: 'success',
                title: 'Orden registrada!',
                text: `Guarde su número: ${res}`,
                willClose: () => {
                    vaciarCarrito()
                }
            })
        })
        .catch((err) => {
            Swal.fire({
                icon: 'error',
                title: 'Productos sin stock',
                text: `No hay stock de los siguientes productos: ${err.map(el => el.name).join(', ')}`
            })
        })
        .finally(() => {
            setLoading(false)
        })
        
    }

    useEffect( () => {

    },[values])


    return (
        <div className={theme ? 'checkout light' : 'checkout dark'}>
            
                { loading ? 
                    <CircularProgress disableShrink />
                    :
                    <>
                    <h2>Complete sus datos</h2>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            required
                            id="nombre"
                            label="Nombre"
                            size="small"
                            className="inputCheckout"
                            type="text"
                            value={values.nombre}
                            onChange={handleInputChange}
                            color="primary"
                            sx={{
                                width: 300,
                                color: 'success.main',
                            }}
                        />
                        <TextField
                            required
                            id="apellido"
                            label="Apellido"
                            size="small"
                            className="inputCheckout"
                            type="text"
                            value={values.apellido}
                            onChange={handleInputChange}
                        />
                        <TextField
                            required
                            id="email"
                            label="Correo electrónico"
                            size="small"
                            className="inputCheckout"
                            type="email"
                            value={values.email}
                            onChange={handleInputChange}
                        />
                            <button type="submit" className={theme ? 'btn btnLight' : 'btn btnDark'}>Finalizar comprar</button>
                        
                    </form>
                    </>
                }
        </div>
    )
}
