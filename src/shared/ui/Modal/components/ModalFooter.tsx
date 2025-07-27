import cls from '@/shared/ui/Modal/Modal.module.css';

type ModalFooterProps = {
  children: string;
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
