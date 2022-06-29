import { ThemeContext } from './../contexts/ThemeContext';
import { useContext } from 'react';


export const useTheme = () => {
    const context = useContext(ThemeContext);

    return {
        isDark: context.isDark,
        toggleDarkMode: context.toggleDarkMode,
    }
}