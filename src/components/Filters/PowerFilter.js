import React,{useContext, useState} from 'react'
import Slider from '@material-ui/core/Slider'
import { FilterContext } from './../../context/FilterContext';

function valuetext(value) {
  return `${value}W`;
}

export const PowerFilter = ({estilo}) => {
    
    const [value, setValue] = useState([80, 2000]);
    
    const {newPower} = useContext(FilterContext)

    const handleChange = (event, newValue) => {
        newPower(newValue)
        setValue(newValue);
    };

    return (
        <div style={estilo}>
            <h4>Potencia</h4>
            <Slider
                className="slider"
                getAriaLabel={() => 'Power range'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                disableSwap={true}
                max={2000}
                min={80}
                step={10}
            />
            <p>Mín: {value[0]}W</p>
            <p>Max: {value[1]}W</p>
        </div>
    )
}
