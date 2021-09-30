import React from 'react'
import { Logo } from "./Logo";
import { DarkModeSwitch } from "./DarkModeSwitch";
import { CartWidget } from "./CartWidget";
import './NavBar.scss';


export const NavBar = () => {
    return (
        <header>
            <DarkModeSwitch/>
            <Logo/>
            <CartWidget/>
        </header>
    )
}
