import { createContext, useContext, useEffect, useState } from "react";

// Create a new context
const ThemeContext = createContext();


// Custom hook to access the context value
export const useTheme = () => {
    return useContext(ThemeContext);
};

// Provider component
export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(prevState => !prevState);
    };

    const theme = isDarkMode ? "dark" : "light";

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [isDarkMode]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};