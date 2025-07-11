import { useParams } from 'react-router-dom';

import { getUserListSelector,  } from '@/entities/user';
import { useAppSelector } from '@/app/providers/storeProvider/hooks';

import cls from './User.module.css'

interface UserProps {
  userID: number
}

export const User = ({userID}: UserProps) => {
  const {userId} = useParams()
  const id = userId ? Number(userId) : userID
  const userList = useAppSelector(getUserListSelector)
  const user = userList.find(user => user.id === id)
  return (
    <div className={cls.userDescription}>
      <h2>{user?.name}</h2>
    </div>
  );
};
