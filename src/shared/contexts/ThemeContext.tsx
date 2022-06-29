import React, { createContext, useCallback, useEffect, useState } from 'react';

interface IThemeContextData {
    toggleDarkMode: (value?: boolean) => void;
    isDark: boolean;
}
export const ThemeContext = createContext<IThemeContextData>({} as IThemeContextData);

interface IThemeProvider {
    children: JSX.Element
  }

export const ThemeProvider: React.FC<IThemeProvider> = ({ children }) => {
  const [isDark, setIsDark] = useState(localStorage.getItem('dark-mode') === 'true' || false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.style.setProperty('--bg-color-primaray', '#15172E');
      document.documentElement.style.setProperty('--bg-color-secondary', '#272A43');
      document.documentElement.style.setProperty('--text-color-primary', '#E8EAFF');
      document.documentElement.style.setProperty('--accent-color-primary', '#DF963D');
      document.documentElement.style.setProperty('--accent-color-secundary', '#0B0D23');
    } else {
      document.documentElement.style.setProperty('--bg-color-primaray', '#fafafa');
      document.documentElement.style.setProperty('--bg-color-secondary', '#E8EAFF');
      document.documentElement.style.setProperty('--text-color-primary', '#15172E');
      document.documentElement.style.setProperty('--accent-color-primary', '#7479A9');
      document.documentElement.style.setProperty('--accent-color-secundary', '#000');
    }

    localStorage.setItem('dark-mode', String(isDark));
  }, [isDark]);

  const toggleDarkMode = useCallback((value?: boolean) => {
    if (value === undefined) {
        setIsDark(!isDark);
    } else {
        setIsDark(value);
    }
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}