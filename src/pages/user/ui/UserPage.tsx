import { NavLink, Outlet, useParams } from 'react-router-dom';
import { RoutePath } from '@/shared/constants';

import cls from './UserPage.module.css'
import { setActiveUser, useGetUserQuery } from '@/entities/user';
import { useAppDispatch } from '@/app/providers/storeProvider/hooks';
import { useEffect } from 'react';


export const UserPage = () => {
  const dispatch= useAppDispatch();
  const {userId} = useParams();
  const user = useGetUserQuery(Number(userId)).data;

  useEffect(() => {
    if(user) dispatch(setActiveUser(user));
  }, [user, dispatch]);

  return (
    <section className={cls.UserInfo}>
      <nav className={cls.navbar}>
        <h2 className={cls.userName}>{user?.name}</h2>
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
