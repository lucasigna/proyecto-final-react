import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

export const ItemsNotFound = () => {

    const {theme} = useContext(ThemeContext)

    return (
        <div className={theme ? 'itemsNotFound light' : 'itemsNotFound dark'}>
            <h3>No se encontraron resultados</h3>
            <p>Prueba usando otros filtros</p>
        </div>
    )
}
