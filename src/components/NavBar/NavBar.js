import React from 'react'
import { Logo } from "./Logo";
import { DarkModeSwitch } from "./DarkModeSwitch";
import { CartWidget } from "./CartWidget";
import './NavBar.scss';


export const NavBar = ({theme,handleTheme}) => {
    return (
        <header className={theme ? 'headerLight' : 'headerDark'}>
            <DarkModeSwitch theme={theme} handleTheme={handleTheme}/>
            <Logo theme={theme}/>
            <CartWidget theme={theme}/>
        </header>
    )
}
