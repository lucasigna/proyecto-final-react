import React, { createContext, useState, useEffect } from 'react'

export const FilterContext = createContext()

export const FilterProvider = ( {children} ) => {

    const [range,setRange] = useState([10,50])    
    const [power,setPower] = useState([80,2000])    
    const [price,setPrice] = useState([25000,200000])
    const [apply,setApply] = useState({range:range,power:power,price:price})
    
    const newRange = (min,max) => {
        setRange(min,max)
    }
    
    const newPower = (min,max) => {
        setPower(min,max)
    }
    
    const newPrice = (min,max) => {
        setPrice(min,max)
    }

    const aplicarFiltros = () => {
        setApply({range,power,price})
    }
    
    useEffect( () => {

    },[apply])

    return (
        <FilterContext.Provider value={{range,power,price,newPower,newPrice,newRange,aplicarFiltros,apply}}>
            {children}
        </FilterContext.Provider>
    )

}