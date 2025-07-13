import { PostLengthSelect } from '@/features/PostLengthSorted';

import { sortedPostsSelector } from '@/app/providers/StoreProvider/config/selectors';
import { PostLengthFilter } from '@/features/PostLengthFilter/ui/PostLengthFilter';
import { PostCard } from '@/entities/Post';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector.ts';
import cls from './PostList.module.css'

export const PostList = () => {

  const sortedList = useAppSelector(sortedPostsSelector);

  return (
    <>
      <div className={cls.controls}>
        <PostLengthFilter
          className={cls.selectControl}
        />
        <PostLengthSelect
          className={cls.selectControl}
        />
      </div>
      <ul className={cls.list}>
        {
          sortedList.map(post =>
            <li className={cls.item} key={post.id}
            >
              <PostCard
                postId={post.id}
                title={post.title}
                text={post.text}
                authorAvatar={post.author.avatar}
                author={post.author.name}
              />
            </li>
          )
        }
      </ul>
    </>

  )
}
