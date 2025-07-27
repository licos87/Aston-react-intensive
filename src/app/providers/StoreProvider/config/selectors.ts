import type { AppState } from '@/app/providers/StoreProvider/types/store.ts';

export const postsSelector = (state: AppState) => state.posts;
export const sortedPostsSelector = (state: AppState) => state.sortedPosts;
export const isLoadingSelector = (state: AppState) => state.isLoading;
