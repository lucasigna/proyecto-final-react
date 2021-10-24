import React,{useContext, useState} from 'react'
import "./Filters.scss"
import { PriceFilter } from "./PriceFilter"
import { PowerFilter } from "./PowerFilter"
import { RangeFilter } from "./RangeFilter"
import { ThemeContext } from './../../context/ThemeContext';

export const Filters = () => {

    const {theme} = useContext(ThemeContext)

    const { innerWidth } = window;
    console.log(innerWidth);
    let init = true;

    if(innerWidth < 700){
        init = false;
    }

    const [showFilter,setShowFilter] = useState(init);

    const styleShow = {
        display: 'initial',
        height: 'auto'
    }

    const styleHide = {
        display: 'none',
        height: '0'
    }

    function showFilters() {
        setShowFilter(!showFilter)
    }

    return (
        <div className={theme ? 'Filters light' : 'Filters dark'}>
            <button id="showFilters" className={theme ? 'btn btnLight' : 'btn btnDark'} onClick={showFilters}>{showFilter ? 'Ocultar filtros' : 'Mostrar filtros'}</button>
            <PriceFilter estilo={showFilter ? styleShow : styleHide}/>
            <PowerFilter estilo={showFilter ? styleShow : styleHide}/>
            <RangeFilter estilo={showFilter ? styleShow : styleHide}/>
            <button style={showFilter ? styleShow : styleHide} className={theme ? 'btn btnLight' : 'btn btnDark'}>Aplicar filtros</button>
        </div>
    )
}
