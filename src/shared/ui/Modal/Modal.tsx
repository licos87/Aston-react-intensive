import { createPortal } from 'react-dom'
import React, { type ReactNode, useEffect } from 'react';
import clsx from 'clsx';
import { Button } from '@/shared/ui/Button';
import CloseIcon from '@/shared/assets/close.svg'

import cls from './Modal.module.css'

type ModalProps = {
  children?: ReactNode;
  className?: string;
  onClose: () => void;
}

export const Modal = ({children, className, onClose}: ModalProps) => {
  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) return null;

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

  const handleOverlayClick = () => {
    onClose();
  };

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return createPortal(
    <div className={cls.overlay} onClick={handleOverlayClick}>
      <div className={clsx(cls.modal, className)} onClick={handleContentClick}>
        <div className={cls.modalTop}>
          <h4 className={cls.title}>О проекте</h4>
          <Button className={cls.closeBtn}
                  variant="outlined"
                  size="s"
                  onClick={onClose}
                  title="Закрыть"
          >
            <img src={CloseIcon}
                 width={30}
                 height={30}
                 alt="Закрыть"
            />
          </Button>
        </div>
        <div className={cls.body}>
          <p className={cls.text}>
            Проект создан для глубокого освоения современного стека разработки на React. Мы используем Vite для
            сверхбыстрой сборки и TypeScript для строгой типизации, реализуя архитектуру Feature-Sliced Design (FSD) для
            масштабируемости. Динамическое управление классами компонентов обеспечивается библиотекой clsx, а качество
            кода контролируется ESLint и Stylelint. Интеграция этих инструментов создаёт отлаженный workflow с
            автоматическими проверками. Этот стек служит эталонным шаблоном для production-приложений.
          </p>
          {children}
        </div>
      </div>
    </div>,
    modalRoot
  )
}
