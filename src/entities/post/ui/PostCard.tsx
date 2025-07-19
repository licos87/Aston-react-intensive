import { NavLink } from 'react-router-dom';

import { RoutePath } from '@/shared/constants';

import cls from './PostCard.module.css'
import { User } from '@/entities/user';
import { capitalizeFirstLetter } from '@/shared/lib/capitalizeFirstLetter';

interface PostCardProps {
  postId: number;
  title: string;
  text: string;
  userId?: number
}

export const PostCard = ({postId, userId, title, text}: PostCardProps) => {

  return (
    <NavLink to={RoutePath.POST.replace(':postId', String(postId))}>
      <div className={cls.card}>
        <div className={cls.cardTop}>
          <h4 className={cls.title}>{capitalizeFirstLetter(title)}</h4>
        </div>
        <div className={cls.body}>
          <p className={cls.text}>{capitalizeFirstLetter(text)}</p>
          {userId && <User userID={userId}/>}
        </div>
      </div>
    </NavLink>
  )
}
