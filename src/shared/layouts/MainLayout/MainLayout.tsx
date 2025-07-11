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
          {isOpen &&
            <Modal onClose={handleModalToggle}>
              <Modal.Header>О проекте</Modal.Header>
              <Modal.Body>
                Проект создан для глубокого освоения современного стека разработки на React. Мы используем Vite для
                сверхбыстрой сборки и TypeScript для строгой типизации, реализуя архитектуру Feature-Sliced Design (FSD) для
                масштабируемости. Динамическое управление классами компонентов обеспечивается библиотекой clsx, а качество
                кода контролируется ESLint и Stylelint. Интеграция этих инструментов создаёт отлаженный workflow с
                автоматическими проверками. Этот стек служит эталонным шаблоном для production-приложений.
              </Modal.Body>
              <Modal.Body>Также в проекте используются такие технологии как React Router для управления навигацией и маршрутизацией в приложении. Для управления состоянием мы применяем Redux Toolkit с асинхронным middleware redux-thunk, что позволяет удобно и гибко обрабатывать побочные эффекты и делать асинхронные запросы. В качестве эффективного инструмента для работы с API мы используем RTK Query — он упрощает загрузку, кэширование и обновление данных, сокращая количество шаблонного кода. Для хранения и управления коллекциями сущностей используется `createEntityAdapter`, который нормализует данные и облегчает обновление отдельных элементов в состоянии. В совокупности, эти технологии обеспечивают масштабируемость, предсказуемость и высокую производительность нашего React-приложения.</Modal.Body>
              <Modal.Footer>2025 год</Modal.Footer>
            </Modal>}
        </div>
        <Outlet/>
      </main>
      <LayoutFooter />
    </div>
  )
}
