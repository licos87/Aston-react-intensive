import { useEffect, useState } from 'react';
import { type PhotoType, useGetPhotoListQuery } from '@/entities/photo/@x/album';
import { capitalizeFirstLetter } from '@/shared/lib/capitalizeFirstLetter';
import { Button } from '@/shared/ui/Button';

type AlbumCardProps = {
  title: string;
  albumId: number
};

export const AlbumCard = ({title, albumId}: AlbumCardProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [pageNumber, setPageNumber] = useState(1)
  const [photos, setPhotos] = useState<PhotoType[]>([])
  const photoList = useGetPhotoListQuery(albumId).data;

  useEffect(() => {
    if (photoList) {
      setPhotos(photoList.slice(1, pageNumber * 7))
    }
  }, [photoList, pageNumber]);

  const handleShowPhoto = () => setPageNumber(pageNumber + 1)

  const toggleOpenedAlbum = () => {
    setIsOpen(!isOpen);
  }
  const status = !isOpen ? 'none' : 'flex'

  const onChangeURL = (photo: string) => photo.replace(
    /(https:\/\/via\.placeholder\.com)(\/(\d+)\/([^/]+))/,
    'https://placehold.co$2/FFF'
  )

  return (
    <div>
      <p onClick={toggleOpenedAlbum}>
        {capitalizeFirstLetter(title)}
      </p>
      <span style={{display: status}}>Список превью фотографий</span>
      <ul style={{display: status, padding: 0, flexWrap: 'wrap', gap: 10}}>
        {
          photos?.map(photo =>
            <li style={{border: '1px solid grey', marginBlock: '10px', display: 'contents'}} key={photo.id}>
              <img src={onChangeURL(photo.thumbnailUrl)}
                   alt={capitalizeFirstLetter(photo.title)}
                   width={150}
                   height={150}
                   style={{display: 'block'}}
              />
            </li>
          )
        }
      </ul>
      <Button
        variant="outlined"
        size="s"
        onClick={handleShowPhoto}
        style={{display: status, marginBlock: 10}}
      >Показать ещё</Button>
    </div>
  );
};
