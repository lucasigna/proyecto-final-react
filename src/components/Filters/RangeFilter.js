import React,{useContext, useState} from 'react'
import Slider from '@material-ui/core/Slider'
import { FilterContext } from './../../context/FilterContext';

function valuetext(value) {
  return `${value} Km`;
}

export const RangeFilter = ({estilo}) => {
    
    const [value, setValue] = useState([10, 50]);

    const {newRange} = useContext(FilterContext)

    const handleChange = (event, newValue) => {
        newRange(newValue)
        setValue(newValue);
    };

    return (
        <div style={estilo}>
            <h4>Autonomía</h4>
            <Slider
                className="slider"
                getAriaLabel={() => 'Range'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                disableSwap={true}
                max={50}
                min={10}
            />
            <p>Mín: {value[0]} Km</p>
            <p>Max: {value[1]} Km</p>
        </div>
    )
}
