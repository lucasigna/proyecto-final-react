import React,{useContext, useState} from 'react'
import "./Filters.scss"
import { PriceFilter } from "./PriceFilter"
import { PowerFilter } from "./PowerFilter"
import { RangeFilter } from "./RangeFilter"
import { ThemeContext } from './../../context/ThemeContext';
import { FilterContext } from './../../context/FilterContext';

export const Filters = () => {

    const {theme} = useContext(ThemeContext)
    const {aplicarFiltros} = useContext(FilterContext)

    const { innerWidth } = window;
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

    // Evento para manejar filtros responsive
    window.addEventListener('resize', () => {
        const { innerWidth } = window;
        if(innerWidth < 700){
            setShowFilter(false)
        } else {
            setShowFilter(true)
        }
    });

    return (
        <div className={theme ? 'Filters light' : 'Filters dark'}>
            <button id="showFilters" className={theme ? 'btn btnLight' : 'btn btnDark'} onClick={showFilters}>{showFilter ? 'Ocultar filtros' : 'Mostrar filtros'}</button>
            <PriceFilter estilo={showFilter ? styleShow : styleHide}/>
            <PowerFilter estilo={showFilter ? styleShow : styleHide}/>
            <RangeFilter estilo={showFilter ? styleShow : styleHide}/>
            <button style={showFilter ? styleShow : styleHide} className={theme ? 'btn btnLight' : 'btn btnDark'} onClick={aplicarFiltros}>Aplicar filtros</button>
        </div>
    )
}
