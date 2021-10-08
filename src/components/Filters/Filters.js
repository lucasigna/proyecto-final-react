import React from 'react'
import "./Filters.scss"
import { PriceFilter } from "./PriceFilter"
import { PowerFilter } from "./PowerFilter"
import { RangeFilter } from "./RangeFilter"

export const Filters = ({theme}) => {
    return (
        <div className={theme ? 'Filters light' : 'Filters dark'}>
            <PriceFilter/>
            <PowerFilter/>
            <RangeFilter/>
            <button className={theme ? 'btn btnLight' : 'btn btnDark'}>Aplicar filtros</button>
        </div>
    )
}
