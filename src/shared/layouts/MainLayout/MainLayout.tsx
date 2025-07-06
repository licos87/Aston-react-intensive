import type { ReactNode } from "react";

import { LayoutHeader } from "@/widgets/LayoutHeader";
import { LayoutFooter } from "@/widgets/LayoutFooter";
import { STUDENT } from "@/shared/constants";

import cls from './MainLayout.module.css'

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({children}: MainLayoutProps) => {

  return (
    <div className={cls.container}>
      <LayoutHeader>
        <h2 className={cls.title}>Домашняя работа React интенсива - {STUDENT.streamNumber}&nbsp;поток</h2>
        <p className={cls.student}> Выполнил студент <a href={STUDENT.resumeLink}>{STUDENT.name}</a></p>
      </LayoutHeader>
      <div className={cls.content}>
      {children}
      </div>
      <LayoutFooter/>
    </div>
  )
}
