import cls from '@/shared/ui/Modal/Modal.module.css';
import type { ReactNode } from 'react';

type ModalBodyProps = {
  children: ReactNode;
};

export const ModalBody = ({children}: ModalBodyProps) => {

  return (
    <div className={cls.body}>
      <p className={cls.text}>
        {children}
      </p>
    </div>
  );
};
