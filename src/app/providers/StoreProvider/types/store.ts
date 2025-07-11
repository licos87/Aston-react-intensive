import { store } from '../config/store.ts';
import type { IPost } from '@/entities/Post';

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export interface StoreSchema {
  posts: IPost[];
  sortedPosts: IPost[];
  isLoading: boolean;
}
