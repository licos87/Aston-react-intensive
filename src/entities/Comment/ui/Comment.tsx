import type { CommentType } from '../model/types/CommentType.ts';
import { formatDate } from '@/shared/lib/formatDate/formatDate.ts';

import cls from './Comment.module.css';
import { memo } from 'react';

interface CommentProps {
  comment: CommentType;
}

export const Comment = memo(({comment}: CommentProps) => {
  const date = formatDate(comment.date);

  return (
    <div className={cls.comment}>
        <img className={cls.avatar} src={comment.avatar} alt="Аватар" width={45} height={45}/>
      <div className={cls.body}>
        <h3 className={cls.title}>{comment.username}</h3>
        <p className={cls.text}>{comment.text}</p>
        <span className={cls.date}>{date}</span>
      </div>
    </div>
  );
});
