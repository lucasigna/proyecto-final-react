import React, { createContext, useState, useEffect } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = ( {children} ) => {

    // Estado de theme
    const [theme, setTheme] = useState(true);

    //Función para cambiar de theme
    const handleTheme = () => {
        setTheme(!theme);
    };

    useEffect( () => {

    }, [theme])

    return (
        <ThemeContext.Provider value={{theme,handleTheme}}>
            {children}
        </ThemeContext.Provider>
    )

}