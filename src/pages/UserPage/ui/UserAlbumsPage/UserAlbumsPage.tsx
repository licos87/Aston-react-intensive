import { useParams } from 'react-router-dom';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector.ts';
import { postsSelector } from '@/app/providers/StoreProvider/config/selectors.ts';

export const UserAlbumsPage = () => {
  const {userId} = useParams();
  const postList = useAppSelector(postsSelector);
  const user = postList.find(post => post.author.userId === userId)?.author;

  return (
    <>
      <h3>Список фотоальбомов</h3>
      <ul style={{listStyleType: 'auto'}}>
        {user?.albums.map(album => (
          <li style={{cursor: 'pointer'}} key={album.id}>
            {user.albums && <p>{album.title}</p>}
            <ul>
              {album.photo.map(photo => <li key={photo.id}><p>{photo.url}</p></li>)}
            </ul>
          </li>
        ))}
      </ul>
    </>
  )
    ;
};
