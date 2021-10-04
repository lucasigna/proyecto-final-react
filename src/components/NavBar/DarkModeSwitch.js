import React from 'react';
import sol from './sol_negro.png';
import luna from './luna_negra.png';

export const DarkModeSwitch = () => {
    return (
        <div className="darkModeSwitch">
            <img src={sol} alt="Sol - Modo diurno"/>
            <label className="switch">
                <input type="checkbox"/>
                <span className="sliderMode round"></span>
            </label>
            <img src={luna} alt="Luna - Modo nocturno"/>
        </div>
    )
}
