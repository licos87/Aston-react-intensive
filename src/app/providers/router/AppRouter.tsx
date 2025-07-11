import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { NotFoundPage } from '@/pages/notFound';
import { RoutePath } from '@/shared/constants';
import { MainLayout } from '@/shared/layouts';
import { MainPage } from '@/pages/main';
import { PostPage } from '@/pages/post';
import { UserAlbumsPage } from '@/pages/user';
import { UserPage } from '@/pages/user';
import { UserPostsPage } from '@/pages/user';
import { UserTodosPage } from '@/pages/user';

export const AppRouter = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutePath.MAIN} element={<MainLayout />}>
          <Route index element={<MainPage />} />
          <Route path={RoutePath.POST} element={<PostPage />} />
          <Route path={RoutePath.USER} element={<UserPage />}>
            <Route path={RoutePath.ALBUMS} element={<UserAlbumsPage />} />
            <Route path={RoutePath.POSTS} element={<UserPostsPage />} />
            <Route path={RoutePath.TODOS} element={<UserTodosPage />} />
          </Route>
        </Route>
        <Route path={RoutePath.NOT_FOUND} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
