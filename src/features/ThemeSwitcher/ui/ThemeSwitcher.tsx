import React from "react";
import { useTheme } from "@/shared/lib/theme/useTheme";

import cls from './ThemeSwitcher.module.css'

export const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className={cls.switcher} onClick={toggleTheme}>
      {theme === "light" ? "Светлая тема" : "Тёмная тема"}
    </button>
  );
};
