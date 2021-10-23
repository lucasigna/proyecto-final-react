import React, { createContext, useState, useEffect } from 'react'

export const CartContext = createContext()

const init = JSON.parse(localStorage.getItem('carrito')) || []

export const CartProvider = ({children}) => {

    const [carrito, setCarrito] = useState(init)
    const [nuevoItem, setNuevoItem] = useState(false)

    function getCantidad(id) {
        for (const prod of carrito) {
            if( id === prod.id){
                // Ya esta en el carrito
                return prod.cantidad
            }
        }
        return 0
    }

    function agregarAlCarrito(item) {
        // Primero me fijo si el item ya esta en el carrito
        item.cantidad += 1;
        let estaEnElCarrito = false;
        const carrito2 = [];
        for (const prod of carrito) {
            if( item.id === prod.id){
                // Ya esta en el carrito
                estaEnElCarrito = true;
                carrito2.push(item)
            } else {
                carrito2.push(prod)
            }
        }
        if(!estaEnElCarrito){
            setCarrito([...carrito, item])
        } else {
            setCarrito(carrito2)
        }
        setNuevoItem(true)
    }

    const itemAgregado = () => { setNuevoItem(false) }

    function eliminarItem(item) {

        if(item.cantidad !== 0) {

            if(item.cantidad > 1) {
                const carrito2 = [];
                for (const prod of carrito) {
                    if( item.id === prod.id){
                        item.cantidad -= 1;
                        carrito2.push(item)
                    } else {
                        carrito2.push(prod)
                    }
                }
                setCarrito(carrito2);
            } else {
                const carrito2 = [];
                for (const prod of carrito) {
                    if( item.id !== prod.id){
                        carrito2.push(prod)
                    }
                }
                item.cantidad -= 1;
                setCarrito(carrito2);
            }

        }

    }

    const calcularCantidad = () => {
        return carrito.reduce( (acc, prod) => acc + prod.cantidad, 0 )
    }

    const calcularPrecioTotal = () => {
        return carrito.reduce( (acc, prod) => acc + (prod.precio*prod.cantidad), 0 )
    }

    useEffect(()=>{
        localStorage.setItem('carrito', JSON.stringify(carrito))
    }, [carrito])

    function createItem(name,id,cantidad,price) {
        return {
            name: name,
            id: id,
            cantidad: cantidad,
            precio: price
        }
    }

    return (
        <CartContext.Provider value={{carrito,agregarAlCarrito,eliminarItem,calcularCantidad,calcularPrecioTotal,getCantidad,createItem,nuevoItem,itemAgregado}}>
            {children}
        </CartContext.Provider>
    )

}