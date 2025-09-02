import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { CommentType } from '@/entities/comment';

interface CommentState {
  commentList: CommentType[];
}

const initialState: CommentState = {
  commentList: [],
}

const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    setCommentList(state, action: PayloadAction<CommentType[]>) {
      state.commentList = action.payload;
    },
  }
});

export const {setCommentList} = commentSlice.actions;
export const commentReducer = commentSlice.reducer;
