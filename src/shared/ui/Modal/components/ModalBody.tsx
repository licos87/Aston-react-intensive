import cls from '@/shared/ui/Modal/Modal.module.css';

type ModalBodyProps = {
  children: string;
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
