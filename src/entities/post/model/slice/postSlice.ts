import {
  createEntityAdapter,
  createSlice,
  type EntityState,
  type PayloadAction,
} from '@reduxjs/toolkit';
import type { PostType } from '@/entities/post/model/types/postType.ts';

export interface PostsState extends EntityState<PostType, number> {
  sortedPostList: PostType[];
}

export const postsAdapter = createEntityAdapter<PostType>({
  sortComparer: (a, b) => a.title.length - b.title.length,
});

const initialState: PostsState = postsAdapter.getInitialState({
  sortedPostList: [],
});

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setPostList(state, action: PayloadAction<PostType[]>) {
      postsAdapter.setAll(state, action.payload);
      state.sortedPostList = [];
    },
    setSortedPostList(state, action: PayloadAction<PostType[]>) {
      state.sortedPostList = action.payload;
    },
    clearSortedPost(state) {
      state.sortedPostList = [];
    },
  },
});

export const { setPostList, setSortedPostList, clearSortedPost } =
  postSlice.actions;
export const postsReducer = postSlice.reducer;
