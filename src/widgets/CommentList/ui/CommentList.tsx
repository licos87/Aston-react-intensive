import { useEffect, useState } from 'react';
import { Comment, type CommentType, useGetCommentListQuery } from '@/entities/comment';
import { Button } from '@/shared/ui/Button';

import cls from './CommentList.module.css'
import { useParams } from 'react-router-dom';

type CommentListProps = {
  className?: string
};

export const CommentList = ({className}: CommentListProps) => {
  const {postId} = useParams()
  const [pageNumber, setPageNumber] = useState(1);

  const commentList = useGetCommentListQuery(Number(postId)).data;
  const [comments, setComments] = useState<CommentType[]>([]);

  useEffect(() => {
    if (commentList) {
      setComments(commentList.slice(1, pageNumber * 5))
    }
  }, [commentList, pageNumber]);

  const handleShowComments = () => setPageNumber(pageNumber + 1)


  if (!commentList) {
    return
  }


  return (
    <div className={className}>
      <h3>Комментарии</h3>
      <ul className={cls.list}>
        {comments?.map(comment => <li key={comment.id}><Comment comment={comment} /></li>)}
      </ul>
      <Button variant="contained" size="m" onClick={handleShowComments}>Показать ещё</Button>
    </div>
  );
};
