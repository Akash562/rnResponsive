import React, { createContext, useContext, useState, useEffect } from "react";
import { useColorScheme, Dimensions, Platform } from "react-native";

const ThemeContext = createContext();
const { width, height } = Dimensions.get("window");

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

export const scale = (size) => (width / guidelineBaseWidth) * size;
export const verticalScale = (size) => (height / guidelineBaseHeight) * size;
export const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;

// Colors for both android & ios (Dark & Light)
const LightColors = {
    background: "#FFFFFF",
    textPrimary: "#000000",
    textSecondary: "#555555",
    border: "#E0E0E0",
    accent: "#fefb00",
    accentLight: "#f9fff6",
    success: "#8bc34a",
    danger: "#FF5252",
    locationBg: "#f9f9f9",
};

const DarkColors = {
    background: "#121212",
    textPrimary: "#FFFFFF",
    textSecondary: "#BBBBBB",
    border: "#333333",
    accent: "#FFEB3B",
    accentLight: "#333C0A",
    success: "#A4D96C",
    danger: "#FF6B6B",
    locationBg: "#1E1E1E",
};

// font scaling
export const FontSizes = {
    small: moderateScale(12 * (Platform.OS === "android" ? 0.95 : 1)),
    medium: moderateScale(14 * (Platform.OS === "android" ? 0.95 : 1)),
    large: moderateScale(16 * (Platform.OS === "android" ? 0.95 : 1)),
    xlarge: moderateScale(18 * (Platform.OS === "android" ? 0.95 : 1)),
    title: moderateScale(20 * (Platform.OS === "android" ? 0.95 : 1)),
};

// font Type
export const fontType = {
    Bold: 'Roboto-Bold',
    Regular: 'Roboto-Regular',
    Medium: 'Roboto-Medium',
    Light: 'Roboto-Light'
}

// Spacing and Radius (shared for both)
export const Spacing = {
    xs: scale(4),
    sm: scale(8),
    md: scale(12),
    lg: scale(16),
    xl: scale(20),
};

// for hanle radius
export const Radius = {
    sm: scale(6),
    md: scale(8),
    lg: scale(12),
};

//  For Use Theme
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