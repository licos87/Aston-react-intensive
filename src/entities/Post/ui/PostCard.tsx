import { NavLink } from 'react-router-dom';

import { RoutePath } from '@/shared/constants';

import cls from './PostCard.module.css'
import { User } from '@/entities/User';

interface PostCardProps {
  postId: string;
  title: string;
  text: string;
  authorAvatar: string;
  author: string
}

export const PostCard = ({postId, title, text, authorAvatar, author}: PostCardProps) => {

  return (
    <NavLink to={RoutePath.POST.replace(':postId', postId)}>
      <div className={cls.card}>
        <div className={cls.cardTop}>
          <h3 className={cls.title}>{title}</h3>
        </div>
        <div className={cls.body}>
          <p className={cls.text}>{text}</p>
          <User userAvatar={authorAvatar} userName={author}/>
        </div>
      </div>
    </NavLink>
  )
}
