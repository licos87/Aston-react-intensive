import { useState, useMemo, type FC, type ReactNode } from 'react';
import { type Theme, ThemeContext } from './ThemeContext';

interface ThemeProviderProps {
  children: ReactNode;
  initialTheme?: Theme;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({
                                                        children,
                                                        initialTheme = 'light'
                                                      }) => {
  const [theme, setTheme] = useState<Theme>(initialTheme);

  const contextValue = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      <div className={`app ${theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
