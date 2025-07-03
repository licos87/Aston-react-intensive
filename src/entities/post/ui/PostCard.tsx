import type { IPost } from "../model/types/post.ts";
import cls from './PostCard.module.css'

interface PostCardProps {
  post: IPost;
}

export const PostCard = ({post}: PostCardProps) => {

  return (
    <div className={cls.card}>
      <div className={cls.cardTop}>
        <h3 className={cls.title}>{post.title}</h3>
      </div>
      <div className={cls.body}>
        <img className={cls.img} src={post.imgUrl} alt={post.imgAlt}/>
        <p className={cls.text}>{post.text}</p>
      </div>
    </div>
  )
}
