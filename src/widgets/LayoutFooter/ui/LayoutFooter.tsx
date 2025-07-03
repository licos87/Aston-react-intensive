import type { ReactNode } from "react";
import { CompanyLogo } from "@/shared/ui/CompanyLogo";
import { COMPANY_URL, TEACHERS } from "@/shared/constants";

import cls from './LayoutFooter.module.css'

interface LayoutFooterProps {
  children?: ReactNode
}

export const LayoutFooter = ({children}: LayoutFooterProps) => {
  return (
    <footer className={cls.footer}>
      <CompanyLogo companyUrl={COMPANY_URL} imgUrl='src/shared/assets/LogoAston.svg'/>
      {children}
      <ul className={cls.teachersList}>
        {
          TEACHERS.map((teacher, i) => (
            <li className={cls.teachersItem} key={i}>
              <ul className={cls.teacherInfoList}>
                <li className={cls.teacherInfoItem}>Преподаватель <a href={teacher.profile}>{teacher.name}</a></li>
                <li className={cls.teacherInfoItem}><a href={`mailto:{teacher.email}`}>Написать письмо</a></li>
              </ul>
            </li>
          ))
        }
      </ul>
    </footer>
  )
}
