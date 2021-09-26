import React from 'react'
import logo from './scooter_negro.png';

export const Logo = () => {
    return (
        <div className="logoHeader">
            <img className="logo" src={logo} alt="Logo Scooter"/>
            <h1>SCOOTERS <span>ELÉCTRICOS</span></h1>
        </div>
    )
}
