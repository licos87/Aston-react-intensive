import { NavLink, Outlet, useNavigate, useParams } from 'react-router-dom';
import { postsSelector } from '@/app/providers/StoreProvider/config/selectors.ts';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector.ts';
import { RoutePath } from '@/shared/constants';

import cls from './UserPage.module.css'


export const UserPage = () => {
  const navigate = useNavigate();
  const posts = useAppSelector(postsSelector);
  const {userId} = useParams();
  const user = posts.find(post => post.author.userId === userId)?.author;

  if (!user) {
    navigate(RoutePath.NOT_FOUND)
    return
  }

  return (
    <section className={cls.UserInfo}>
      <nav className={cls.navbar}>
        <h2 className={cls.userName}>{user.name}</h2>
        <ul className={cls.list}>
          <li>
            <NavLink className={({isActive}) => (isActive ? cls.active : '')} to={RoutePath.TODOS}>Todos</NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => (isActive ? cls.active : '')} to={RoutePath.POSTS}>Posts</NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => (isActive ? cls.active : '')} to={RoutePath.ALBUMS}>Albums</NavLink>
          </li>
        </ul>
        <NavLink className={cls.linkToHome} to="/">На главную</NavLink>
      </nav>
      <div className={cls.content}>
        <h3>Информация о пользователе</h3>
        <Outlet />
      </div>
    </section>
  );
};
