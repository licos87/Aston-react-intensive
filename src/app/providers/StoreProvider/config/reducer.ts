import { createReducer } from '@reduxjs/toolkit';
import type { StoreSchema } from '@/app/providers/StoreProvider/types/store.ts';
import { setIsLoading, savePosts, saveSortedPosts } from '@/app/providers/StoreProvider/config/actions.ts';

const initialState: StoreSchema = {
  posts: [],
  sortedPosts: [],
  isLoading: false,
}

export const reducer = createReducer(
  initialState,
  (builder) => {
    builder
      .addCase(savePosts, (state, {payload}) => {
        state.posts = payload
      })
      .addCase(saveSortedPosts, (state, {payload}) => {
        state.sortedPosts = payload
      })
      .addCase(setIsLoading, (state, {payload}) => {
        state.isLoading = payload
      });
  });

