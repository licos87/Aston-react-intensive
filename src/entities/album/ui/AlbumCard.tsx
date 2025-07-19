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

  const handleShowComments = () => setPageNumber(pageNumber + 1)

  const toggleOpenedAlbum = () => {
    setIsOpen(!isOpen);
  }
  const status = !isOpen ? 'none' : 'unset'

  return (
    <div>
      <p onClick={toggleOpenedAlbum}>
        {capitalizeFirstLetter(title)}
      </p>
      <span style={{display: status}}>Список превью фотографий</span>
      <ul style={{display: status, padding: 0}}>
        {
          photos?.map(photo =>
            <li style={{border: '1px solid grey', marginBlock: 10}} key={photo.id}>
              <img src={photo.thumbnailUrl}
                   alt={capitalizeFirstLetter(photo.title)}
                   width={150}
                   height={150}
                   style={{display: 'block'}}
              />
            </li>
          )
        }
        <li style={{listStyleType: 'none', marginBlock: '5px'}}><Button variant="outlined"
                                                                        size="s"
                                                                        onClick={handleShowComments}
        >Показать ещё</Button></li>
      </ul>
    </div>
  );
};
