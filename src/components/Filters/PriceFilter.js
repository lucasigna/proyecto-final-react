import React,{useContext, useState} from 'react'
import Slider from '@material-ui/core/Slider'
import { FilterContext } from './../../context/FilterContext';

function valuetext(value) {
  return `$${value}`;
}

export const PriceFilter = ({estilo}) => {

    const [value, setValue] = useState([25000, 200000]);

    const {newPrice} = useContext(FilterContext)

    const handleChange = (event, newValue) => {
        newPrice(newValue)
        setValue(newValue);
    };

    return (
        <div style={estilo}>
            <h4>Precio</h4>
            <Slider
                className="slider"
                getAriaLabel={() => 'Price range'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                disableSwap={true}
                max={200000}
                min={25000}
                step={500}
            />
            <p>Mín: ${value[0]}</p>
            <p>Max: ${value[1]}</p>
        </div>
    )
}
