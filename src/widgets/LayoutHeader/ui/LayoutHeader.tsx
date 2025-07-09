import type {ReactNode} from "react";

import { CompanyLogo } from "@/shared/ui/CompanyLogo";
import { COMPANY_URL } from "@/shared/constants";
import { LogoAston } from '@/shared/assets';

import cls from './LayoutHeader.module.css'

interface LayoutHeaderProps  {
  children?: ReactNode
}

export const LayoutHeader = ({children}: LayoutHeaderProps) => {
  return (
    <header className={cls.header}>
      <CompanyLogo companyUrl={COMPANY_URL} imgUrl={LogoAston}/>
      <div className={cls.content}>
        {children ?? <h2 className={cls.stub}>Домашняя работа React интенсива</h2>}
      </div>
    </header>
  )
}
