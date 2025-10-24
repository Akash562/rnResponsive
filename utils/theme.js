import React, { createContext, useContext, useState, useEffect } from "react";
import { useColorScheme } from "react-native";
import { LightColors, DarkColors } from "./colors";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const systemScheme = useColorScheme();
    const [theme, setTheme] = useState(systemScheme || "light");

    useEffect(() => {
        setTheme(systemScheme);
    }, [systemScheme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    const colors = theme === "dark" ? DarkColors : LightColors;

    return (
        <ThemeContext.Provider value={{ theme, colors, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Hook to use theme
export const useTheme = () => useContext(ThemeContext);
