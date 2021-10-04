import React from 'react'
import "./Filters.scss"
import { PriceFilter } from "./PriceFilter"
import { PowerFilter } from "./PowerFilter"
import { RangeFilter } from "./RangeFilter"

export const Filters = () => {
    return (
        <div className="Filters">
            <PriceFilter/>
            <PowerFilter/>
            <RangeFilter/>
            <button className="btn">Aplicar filtros</button>
        </div>
    )
}
