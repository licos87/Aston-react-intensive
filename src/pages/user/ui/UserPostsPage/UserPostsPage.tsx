import { useParams } from 'react-router-dom';
import { PostCard, useGetUserPostListQuery } from '@/entities/post';

export const UserPostsPage = () => {
  const {userId} = useParams();
  const postsList = useGetUserPostListQuery(Number(userId)).data;

  return (
    <div>
      <h3>Все посты пользователя</h3>
      <ul style={{listStyleType: 'none', padding: '0', display: 'flex', flexDirection: 'column', gap: '20px'}}>
        {
          postsList?.map((post) =>
            <li key={post.id}>
              <PostCard
                postId={post.id}
                title={post.title}
                text={post.body}
                userId={post.userId}
              />
            </li>
          )
        }
      </ul>
    </div>
  );
};
