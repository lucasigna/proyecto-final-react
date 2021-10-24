import React,{useState} from 'react'
import Slider from '@material-ui/core/Slider'

function valuetext(value) {
  return `$${value}`;
}

export const PriceFilter = ({estilo}) => {

    const [value, setValue] = useState([5000, 50000]);

    const handleChange = (newValue) => {
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
                max={50000}
                min={5000}
                step={500}
            />
            <p>Mín: ${value[0]}</p>
            <p>Max: ${value[1]}</p>
        </div>
    )
}
