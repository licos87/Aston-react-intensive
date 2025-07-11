import { useState } from 'react';

import { LayoutHeader } from '@/widgets/LayoutHeader';
import { LayoutFooter } from '@/widgets/LayoutFooter';
import { STUDENT } from '@/shared/constants';
import { Button } from '@/shared/ui/Button';
import { Modal } from '@/shared/ui/Modal';

import cls from './MainLayout.module.css'
import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleModalToggle = () => setIsOpen(!isOpen);

  return (
    <div className={cls.container}>
      <LayoutHeader>
        <h2 className={cls.title}>Домашняя работа React интенсива - {STUDENT.streamNumber}&nbsp;поток</h2>
        <p className={cls.student}> Выполнил студент <a href={STUDENT.resumeLink}>{STUDENT.name}</a>
        </p>
      </LayoutHeader>
      <main className={cls.content}>
        <div className={cls.contentTop}>
          <Button
            className={cls.infoBtn}
            variant="contained"
            size="m"
            onClick={handleModalToggle}
          >
            О проекте
          </Button>
          {isOpen && <Modal onClose={handleModalToggle}>
            <p>Дополнительный контент</p>
          </Modal>}
        </div>
        <Outlet/>
      </main>
      <LayoutFooter />
    </div>
  )
}
