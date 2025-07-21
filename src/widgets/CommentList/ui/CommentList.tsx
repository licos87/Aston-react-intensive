import { useCallback, useMemo, useRef, useState } from 'react';
import clsx from 'clsx';
import { sortComments } from '@/widgets/CommentList/lib/sortComments.ts';
import { randomList } from '@/widgets/CommentList/lib/randomLengthList.ts';
import { Comment } from '@/entities/Comment';
import type { CommentType } from '@/entities/Comment/model/types/CommentType.ts';
import { Button } from '@/shared/ui/Button';

import cls from './CommentList.module.css'

type CommentListProps = {
  className?: string
  commentList: CommentType[];
};

export const CommentList = ({className, commentList}: CommentListProps) => {
  const [showAll, setShowAll] = useState(false);
  const subList = useRef<HTMLUListElement>(null);
  const randomComments = useMemo(() => {
    const randomComments = randomList(commentList)
    return sortComments(randomComments);
  }, [commentList]);

  const [firstComment, coverComments] = useMemo(() => {
    const [first, ...rest] = randomComments;
    return [first, rest];
  }, [randomComments]);

  const handleShowComments = useCallback(() => {
    setShowAll(true);
  }, []);

  const handleCoverComments = useCallback(() => {
    setShowAll(false);
  }, []);


  return (
    <div className={className}>
      <h3>Комментарии</h3>
      <Comment comment={firstComment} />
        {
          !showAll && (
              <Button variant="contained" size="s" onClick={handleShowComments}>Показать больше комментариев</Button>
          )
        }
        {
          showAll && (
              <ul className={clsx(cls.list, cls.subList)} ref={subList}>
                {coverComments?.map(comment => <li key={comment.id}><Comment comment={comment} /></li>)}
              </ul>
          )
        }
        {(showAll &&
            <Button variant="contained" size="s" onClick={handleCoverComments}>Показать меньше комментариев</Button>
        )}
    </div>
  );
};
