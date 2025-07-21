import { useAppSelector } from '@/shared/lib/hooks/useAppSelector.ts';
import { postsSelector } from '@/app/providers/StoreProvider/config/selectors.ts';
import { useParams } from 'react-router-dom';
import { PostCard } from '@/entities/Post';

export const PostsPage = () => {
  const postsList = useAppSelector(postsSelector)
  const {userId} = useParams();

  const userPosts = postsList.filter(post => post.author.userId === userId)

  return (
    <div>
      <p>Все посты пользователя</p>
      <ul style={{listStyleType: 'none', padding: '0', display: 'flex', flexDirection: 'column', gap: '20px'}}>
        {
          userPosts.map((post) =>
            <li key={post.id}><PostCard postId={post.id} title={post.title} text={post.text} authorAvatar={post.author.avatar} author={post.author.name}/></li>)
        }
      </ul>
    </div>
  );
};
