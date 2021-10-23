import React, { useContext } from 'react'
import { Logo } from "./Logo";
import { DarkModeSwitch } from "./DarkModeSwitch";
import { CartWidget } from "./CartWidget";
import './NavBar.scss';
import { Link } from 'react-router-dom';
import { ThemeContext } from './../../context/ThemeContext';


export const NavBar = () => {

    const {theme} = useContext(ThemeContext)

    return (
        <header className={theme ? 'headerLight' : 'headerDark'}>
            <DarkModeSwitch/>
            <Link to="/"><Logo/></Link>
            <Link to="/carrito"><CartWidget/></Link>
        </header>
    )
}
