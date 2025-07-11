import type { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
import clsx from 'clsx';

import cls from './Button.module.css';

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode;
  variant: 'contained' | 'outlined';
  size: 's' | 'm' | 'l';
}

export const Button = ({
                         children,
                         variant,
                         className,
                         size,
                         ...props
                       }: ButtonProps) => {

  return (
    <>
      <button
        className={clsx(cls.button, className, {
          [cls.contained]: variant === 'contained',
          [cls.outlined]: variant === 'outlined',
          [cls.s]: size === 's',
          [cls.m]: size === 'm',
          [cls.l]: size === 'l',
        })}
        {...props}
      >
        {children}
      </button>
    </>
  )
}
