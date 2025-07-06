import { useEffect, useState } from 'react';
import { type IPost, PostCard } from '@/entities/post';
import { Button } from '@/shared/ui/Button';

import { fetchPosts } from '../api/fetchPosts.ts';
import cls from './PostList.module.css'
import { Modal } from '@/shared/ui/Modal';

export const PostList = () => {
  const [postList, setPostList] = useState<IPost[]>([])
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      const postsData = fetchPosts()
      setPostList(postsData)
    } catch (err) {
      console.log(err)
    }
  }, [])

  const handleModalToggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Button className={cls.infoBtn} variant="contained" size="m" onClick={handleModalToggle}>О проекте</Button>
      {isOpen && <Modal onClose={handleModalToggle}><p>Дополнительный контент</p></Modal>}
      <ul className={cls.list}>
        {
          postList.map(post => (
            <li className={cls.item} key={post.id}>
              <PostCard title={post.title} imgUrl={post.imgUrl} imgAlt={post.imgAlt} text={post.text}/>
            </li>
          ))
        }
      </ul>
    </>
  )
}
