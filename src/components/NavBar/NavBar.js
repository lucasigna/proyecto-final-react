import React from 'react'
import { Logo } from "./Logo";
import { DarkModeSwitch } from "./DarkModeSwitch";
import { CartWidget } from "./CartWidget";
import './NavBar.scss';
import { Link } from 'react-router-dom';


export const NavBar = ({theme,handleTheme}) => {
    return (
        <header className={theme ? 'headerLight' : 'headerDark'}>
            <DarkModeSwitch theme={theme} handleTheme={handleTheme}/>
            <Link to="/"><Logo theme={theme}/></Link>
            <Link to="/carrito"><CartWidget theme={theme}/></Link>
        </header>
    )
}
