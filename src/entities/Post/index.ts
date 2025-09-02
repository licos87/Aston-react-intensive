export { PostCard } from './ui/PostCard.tsx';
export { useGetPostListQuery, useGetUserPostListQuery } from '@/entities/post/api/postApi'
export { getPostListSelector, getSortedPostListSelector, selectPostById, selectPostIds } from './model/selectors/postSelector'
export { setPostList, setSortedPostList, clearSortedPost, postsReducer } from './model/slice/postSlice'
export type { PostType } from './model/types/postType.ts'
