import React from 'react';
import solNegro from './sol_negro.png';
import lunaNegra from './luna_negra.png';
import solBlanco from './sol_blanco.png';
import lunaBlanca from './luna_blanca.png';

export const DarkModeSwitch = ({theme,handleTheme}) => {



    return (
        <div className="darkModeSwitch">
            <img src={theme ? solNegro : solBlanco} alt="Sol - Modo diurno"/>
            <label className="switch">
                <input type="checkbox" onChange={handleTheme}/>
                <span className={theme ? 'sliderMode light' : 'sliderMode dark'}></span>
            </label>
            <img src={theme ? lunaNegra : lunaBlanca} alt="Luna - Modo nocturno"/>
        </div>
    )
}
