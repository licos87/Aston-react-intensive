import { createPortal } from 'react-dom'
import React, { type ReactNode, useContext, useEffect } from 'react';
import clsx from 'clsx';

import cls from './Modal.module.css'
import { ModalContext } from './ModalContext';
import { Button } from '@/shared/ui/Button';
import CloseIcon from '@/shared/assets/close.svg';

type ModalProps = {
  children?: ReactNode;
  className?: string;
  onClose: () => void;
}

const Modal = ({children, className, onClose}: ModalProps) => {
  const modalRoot = document.getElementById('modal-root');

  useEffect(() => {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      const handleEscDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleEscDown);

      return () => {
        window.removeEventListener('keydown', handleEscDown);
        document.body.style.overflow = originalOverflow;
      }
  }, [onClose]);

  if(!modalRoot) {
    return null;
  }

  const handleOverlayClick = () => {
    onClose();
  };

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return createPortal(
    <ModalContext.Provider value={{ onClose }}>
    <div className={cls.overlay} onClick={handleOverlayClick}>
      <div className={clsx(cls.modal, className)} onClick={handleContentClick}>
        {children}
      </div>
    </div>
    </ModalContext.Provider>,
    modalRoot
  )
}

// Компоненты

Modal.Header = function ModalHeader ({children}: {children: string}) {
  const context = useContext(ModalContext);

  return (
    <div className={cls.modalTop}>
      <h4 className={cls.title}>{children}</h4>
      <Button className={cls.closeBtn}
              variant="outlined"
              size="s"
              onClick={context?.onClose}
              title="Закрыть"
      >
        <img src={CloseIcon}
             width={30}
             height={30}
             alt="Закрыть"
        />
      </Button>
    </div>
  );
}

Modal.Body = function ModalBody ({children}: {children: string}){
  return (
    <div className={cls.body}>
      <p className={cls.text}>
        {children}
      </p>
    </div>
  );
};

Modal.Footer = function ModalFooter ({children}: {children: string}){
  return (
    <div className={cls.footer}>
      <p className={cls.text}>
        {children}
      </p>
    </div>
  );
};

export {Modal};
