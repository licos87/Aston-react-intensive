import React from "react";
import { useTheme } from "@/shared/lib/theme/useTheme";

import cls from './ThemeSwitcher.module.css'
import { Button } from '@/shared/ui/Button';

export const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button className={cls.switcher} variant='contained' size='s' onClick={toggleTheme}>
      {theme === "light" ? "Светлая тема" : "Тёмная тема"}
    </Button>
  );
};
