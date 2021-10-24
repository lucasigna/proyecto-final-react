import React,{useState} from 'react'
import Slider from '@material-ui/core/Slider'

function valuetext(value) {
  return `${value} Km`;
}

export const RangeFilter = ({estilo}) => {
    
    const [value, setValue] = useState([8, 100]);

    const handleChange = (newValue) => {
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
                max={100}
                min={8}
            />
            <p>Mín: {value[0]} Km</p>
            <p>Max: {value[1]} Km</p>
        </div>
    )
}
