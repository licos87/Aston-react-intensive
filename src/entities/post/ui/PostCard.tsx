import cls from './PostCard.module.css'

interface PostCardProps {
  title: string;
  imgUrl: string;
  imgAlt: string;
  text: string;
}

export const PostCard = ({title, imgUrl, imgAlt, text}: PostCardProps) => {

  return (
    <div className={cls.card}>
      <div className={cls.cardTop}>
        <h3 className={cls.title}>{title}</h3>
      </div>
      <div className={cls.body}>
        <img
          className={cls.img}
          src={imgUrl}
          alt={imgAlt}
        />
        <p className={cls.text}>{text}</p>
      </div>
    </div>
  )
}
