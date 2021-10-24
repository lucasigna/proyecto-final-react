import React,{useState} from 'react'
import Slider from '@material-ui/core/Slider'

function valuetext(value) {
  return `${value}W`;
}

export const PowerFilter = ({estilo}) => {
    
    const [value, setValue] = useState([20, 1000]);

    const handleChange = (event, newValue) => {
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
                max={1000}
                min={20}
                step={10}
            />
            <p>Mín: {value[0]}W</p>
            <p>Max: {value[1]}W</p>
        </div>
    )
}
