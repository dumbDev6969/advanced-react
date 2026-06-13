import { createContext, useState, useContext } from "react";

// Create the contxt obj
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [ theme, setTheme] = useState('light');

    const toggle = () => {
        setTheme((theme) => 
            theme === 'light' ? 'dark' : 'light'
        );
    }

    return (
        <ThemeContext.Provider value={{ theme, toggle }}>
            { children }
        </ThemeContext.Provider>
    );
} 

export const useTheme = () => useContext(ThemeContext);
