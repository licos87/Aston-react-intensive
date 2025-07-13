import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { NotFoundPage } from '@/pages/NotFoundPage';
import { RoutePath } from '@/shared/constants';
import { MainLayout } from '@/shared/layouts';
import { MainPage } from '@/pages/MainPage';
import { PostPage } from '@/pages/PostPage';
import { AlbumsPage } from '@/pages/UserPage/ui/AlbumsPage';
import { UserPage } from '@/pages/UserPage';
import { PostsPage } from '@/pages/UserPage/ui/PostsPage';
import { TodosPage } from '@/pages/UserPage/ui/TodosPage';

export const AppRouter = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutePath.MAIN} element={<MainLayout />}>
          <Route index element={<MainPage />} />
          <Route path={RoutePath.POST} element={<PostPage />} />
          <Route path={RoutePath.USER} element={<UserPage />}>
            <Route path={RoutePath.ALBUMS} element={<AlbumsPage />} />
            <Route path={RoutePath.POSTS} element={<PostsPage />} />
            <Route path={RoutePath.TODOS} element={<TodosPage />} />
          </Route>
        </Route>
        <Route path={RoutePath.NOT_FOUND} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
