import { LayoutFooter } from "@/widgets/LayoutFooter";
import { LayoutHeader } from "@/widgets/LayoutHeader";
import { STUDENT } from "@/shared/constants";
import { MainLayout } from "@/shared/layouts";

import cls from "./App.module.css";
import { PostList } from "@/widgets/PostList";

export const App = () => {

  return (
    <MainLayout>
      <LayoutHeader>
        <h2 className={cls.title}>Домашняя работа React интенсива - {STUDENT.streamNumber} поток</h2>
        <p className={cls.student}> Выполнил студент <a href={STUDENT.resumeLink}>{STUDENT.name}</a></p>
      </LayoutHeader>
      <div className={cls.content}>
        <PostList/>
      </div>
      <LayoutFooter/>
    </MainLayout>
  )
}
