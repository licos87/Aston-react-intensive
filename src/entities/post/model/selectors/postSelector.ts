import type { AppState } from '@/app/providers/storeProvider';
import { postsAdapter } from '../../model/slice/postSlice.ts';

const selectPostsState = (state: AppState) => state.post;

export const getSortedPostListSelector = (state: AppState) => state.post.sortedPostList;

export const {
  selectAll: getPostListSelector,
  selectById: selectPostById,
  selectIds: selectPostIds
} = postsAdapter.getSelectors(selectPostsState);
