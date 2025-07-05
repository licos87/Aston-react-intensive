import type {ReactNode} from "react";

import { ThemeSwitcher } from "@/features/ThemeSwitcher";
import { CompanyLogo } from "@/shared/ui/CompanyLogo";
import { COMPANY_URL } from "@/shared/constants";

import cls from './LayoutHeader.module.css'

interface LayoutHeaderProps  {
  children?: ReactNode
}

export const LayoutHeader = ({children}: LayoutHeaderProps) => {
  return (
    <header className={cls.header}>
      <CompanyLogo companyUrl={COMPANY_URL} imgUrl='src/shared/assets/LogoAston.svg'/>
      <div className={cls.content}>
        {children ?? <h2 className={cls.stub}>Домашняя работа React интенсива</h2>}
      </div>
      <ThemeSwitcher/>
    </header>
  )
}
