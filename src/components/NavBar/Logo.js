import React from 'react'
import logoLight from './scooter_negro.png';
import logoDark from './scooter_blanco.png';

export const Logo = ({theme}) => {
    return (
        <div className={theme ? 'logoHeader light' : 'logoHeader dark'}>
            <img className="logo" src={theme ? logoLight : logoDark} alt="Logo Scooter"/>
            <h1>SCOOTERS <span>ELÉCTRICOS</span></h1>
        </div>
    )
}
