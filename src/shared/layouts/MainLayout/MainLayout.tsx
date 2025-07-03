import type { ReactNode } from "react";

import cls from './MainLayout.module.css'

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({children}: MainLayoutProps) => {

  return (
    <div className={cls.container}>
      {children}
    </div>
  )
}
