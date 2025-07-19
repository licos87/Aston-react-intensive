import { Link, useNavigate, useParams } from 'react-router-dom';
import { CommentList } from '@/widgets/CommentList';
import { useAppSelector } from '@/app/providers/storeProvider/hooks';
import { RoutePath } from '@/shared/constants';

import cls from './PostPage.module.css'
import { getPostListSelector } from '@/entities/post';
import { User } from '@/entities/user';
import { capitalizeFirstLetter } from '@/shared/lib/capitalizeFirstLetter';

export const PostPage = () => {
  const {postId} = useParams();
  const navigate = useNavigate();
  const postsList = useAppSelector(getPostListSelector);
  const post = postsList.find(post=> post.id === Number(postId));

  if (!post) {
    navigate(RoutePath.NOT_FOUND)
    return
  }

  return (
    <section className={cls.post}>
      <h2 className={cls.title}>{capitalizeFirstLetter(post.title)}</h2>
      <p>{capitalizeFirstLetter(post.body)}</p>
      <Link className={cls.authorBlock} to={RoutePath.USER.replace(':userId', String(post.userId))}>
        <User userID={post.userId}/>
      </Link>
      <CommentList className={cls.comments}/>
    </section>
  );
};
