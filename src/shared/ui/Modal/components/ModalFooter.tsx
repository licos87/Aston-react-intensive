import cls from '@/shared/ui/Modal/Modal.module.css';
import type { ReactNode } from 'react';

type ModalFooterProps = {
  children: ReactNode;
};

export const ModalFooter = ({children}: ModalFooterProps) => {

    return (
      <div className={cls.footer}>
        <p className={cls.text}>
          {children}
        </p>
      </div>
    );
  }
;
