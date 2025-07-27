import { Button } from '@/shared/ui/Button';
import CloseIcon from '@/shared/assets/close.svg';
import cls from '../Modal.module.css';
import { useContext } from 'react';
import { ModalContext } from '@/shared/ui/Modal/ModalContext.tsx';

type ModalHeaderProps = {
  children: string;
};

export const ModalHeader = ({children}: ModalHeaderProps) => {
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
};
