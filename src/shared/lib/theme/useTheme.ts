import { useContext } from 'react';
import { ThemeContext } from './';

export const useTheme = () => {
  const {theme, setTheme} = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return {
    theme,
    toggleTheme,
    setTheme,
  };
};
