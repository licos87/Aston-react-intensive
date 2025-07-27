import { useEffect } from 'react';

import { PostLengthSelect } from '@/features/postLengthSorted';
import { PostLengthFilter } from '@/features/postLengthFilter';
import {
  getSortedPostListSelector,
  PostCard,
  setPostList,
  useGetPostListQuery
} from '@/entities/post';
import { setUserList, useGetUserListQuery } from '@/entities/user';
import { useAppSelector, useAppDispatch } from '@/app/providers/storeProvider/hooks';

import cls from './PostList.module.css'

export const PostList = () => {
  const dispatch = useAppDispatch();
  const {data: postList} = useGetPostListQuery();

  const sortedList = useAppSelector(getSortedPostListSelector)
  const {data: users} = useGetUserListQuery();

  useEffect(() => {
    if (postList) {
      dispatch(setPostList(postList));
    }
    if (users) {
      dispatch(setUserList(users));
    }
  }, [dispatch, postList, users]);

  if(!users || !postList) {
    return;
  }

  const resultList = sortedList ?? postList;

  return (
    <>
      <div className={cls.controls}>
        <PostLengthFilter />
        <PostLengthSelect />
      </div>
      <ul className={cls.list}>
        {
          sortedList && resultList.map(post =>
            <li className={cls.item} key={post.id}
            >
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
    </>

  )
}
