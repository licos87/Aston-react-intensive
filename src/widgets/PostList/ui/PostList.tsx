import { useCallback, useState } from 'react';
import { PostLengthSelect } from '@/features/PostLengthSorted';
import { type IPost, PostCard } from '@/entities/Post';

import { PostLengthFilter } from '@/features/PostLengthFilter/ui/PostLengthFilter.tsx';
import cls from './PostList.module.css'

type PostListProps = {
  data: IPost[];
};

export const PostList = ({data}: PostListProps) => {
  const [list, setList] = useState<IPost[]>(data)

  const handleChangeList = useCallback((sortedList: IPost[]) => {
    setList(sortedList);
  }, []);

  return (
    <>
      <div className={cls.controls}>
        <PostLengthFilter
          defaultList={list}
          filteredList={handleChangeList}
        />
        <PostLengthSelect
          defaultList={list}
          sortedList={handleChangeList}
        />
      </div>
      <ul className={cls.list}>
        {
          list.map(post =>
            <li className={cls.item} key={post.id}
            >
              <PostCard
                title={post.title}
                imgUrl={post.imgUrl}
                imgAlt={post.imgAlt}
                text={post.text}
              />
            </li>
          )
        }
      </ul>
    </>

  )
}
