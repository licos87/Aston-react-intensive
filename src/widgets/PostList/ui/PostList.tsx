import { useEffect, useState } from "react";
import { PostCard, type IPost } from "@/entities/post";
import { fetchPosts } from "../api/fetchPosts.ts";

import cls from './PostList.module.css'

export const PostList = () => {
  const [postList, setPostList] = useState<IPost[]>([])

  useEffect(() => {
    try {
      const postsData = fetchPosts()
      setPostList(postsData)
    } catch (err) {
      console.log(err)
    }
  }, [])

  return (
    <ul className={cls.list}>
      {
        postList.map(post => (
          <li className={cls.item} key={post.id}><PostCard post={post}/></li>
        ))
      }
    </ul>
  )
}
