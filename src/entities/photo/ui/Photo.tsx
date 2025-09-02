import { Modal } from '@/shared/ui/Modal';
import { useNavigate, useParams } from 'react-router-dom';
import { capitalizeFirstLetter } from '@/shared/lib/capitalizeFirstLetter';
import { useGetPhotoQuery } from '@/entities/photo';

export const Photo = () => {
  const {photoId} = useParams();
  const {data, isLoading} = useGetPhotoQuery(Number(photoId));
  const navigate = useNavigate();
  const photo = data
  const toggleOpenedPhoto = () => {
    navigate(-1);
  }

  if (isLoading) {
    return
  }

  if (!photo) {
    return (
      <Modal onClose={toggleOpenedPhoto}>
        <Modal.Header>Фотография</Modal.Header>
        <Modal.Body>
          <div>Фото не найдено</div>
        </Modal.Body>
        <Modal.Footer>2025 год</Modal.Footer>
      </Modal>
    )
  }

  const onChangeURL = (photo: string) => photo.replace(
    /(https:\/\/via\.placeholder\.com)(\/(\d+)\/([^/]+))/,
    'https://placehold.co$2/FFF'
  )


  return (
    <Modal onClose={toggleOpenedPhoto}>
      <Modal.Header>{capitalizeFirstLetter(photo.title)}</Modal.Header>
      <Modal.Body>
        <img src={onChangeURL(photo.url)}
             alt={capitalizeFirstLetter(photo.title)}
             width={600}
             height={600}
             style={{display: 'block'}}
        />
      </Modal.Body>
      <Modal.Footer>2025 год</Modal.Footer>
    </Modal>
  );
};
