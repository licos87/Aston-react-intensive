import { createContext } from 'react';

type ModalContextProps = {
  onClose: () => void;
};

export const ModalContext = createContext<ModalContextProps | undefined>(undefined);
