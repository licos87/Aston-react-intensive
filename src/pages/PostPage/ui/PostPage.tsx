import { Link, useNavigate, useParams } from 'react-router-dom';
import { postsSelector } from '@/app/providers/StoreProvider/config/selectors.ts';
import { CommentList } from '@/widgets/CommentList';
import { COMMENTS } from '@/widgets/CommentList/mock/comments.ts';
import { User } from '@/entities/User';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector.ts';
import { RoutePath } from '@/shared/constants';

import cls from './PostPage.module.css'

export const PostPage = () => {
  const {postId} = useParams();
  const navigate = useNavigate();
  const postsList = useAppSelector(postsSelector);
  const post = postsList.find(post=> post.id === postId);

  if (!post) {
    navigate(RoutePath.NOT_FOUND)
    return
  }

  return (
    <section className={cls.post}>
      <h2 className={cls.title}>{post.title}</h2>
      <img className={cls.img} src={post.imgUrl} width={200} height={200} alt={post.imgAlt}/>
      <p>{post.text}</p>
      <Link className={cls.authorBlock} to={RoutePath.USER.replace(':userId', post.author.userId)}>
        <User userAvatar={post.author.avatar} userName={post.author.name}/>
      </Link>
      <CommentList className={cls.comments} commentList={COMMENTS}/>
    </section>
  );
};
