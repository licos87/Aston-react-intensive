import { createPortal } from 'react-dom'
import React, { type ReactNode, useEffect } from 'react';
import clsx from 'clsx';

import cls from './Modal.module.css'
import { ModalContext } from './ModalContext';
import { ModalFooter } from '@/shared/ui/Modal/components/ModalFooter.tsx';
import { ModalBody } from '@/shared/ui/Modal/components/ModalBody.tsx';
import { ModalHeader } from '@/shared/ui/Modal/components/ModalHeader.tsx';

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
Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export {Modal};
