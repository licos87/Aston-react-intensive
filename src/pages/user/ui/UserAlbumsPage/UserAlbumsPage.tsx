import { useParams } from 'react-router-dom';
import { useGetUserAlbumListQuery, AlbumCard } from '@/entities/album';

export const UserAlbumsPage = () => {
  const {userId} = useParams();
  const albumList = useGetUserAlbumListQuery(Number(userId)).data;


  return (
    <>
      <h3>Список фотоальбомов</h3>
      <ul style={{listStyleType: 'auto'}}>
        {albumList?.map(album => (
          <li style={{cursor: 'pointer'}} key={album.id}>
            {albumList && <AlbumCard title={album.title} albumId={album.id} />}
          </li>
        ))}
      </ul>
    </>
  )
    ;
};
