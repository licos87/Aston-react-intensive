import { configureStore } from '@reduxjs/toolkit';
import { loadingReducer } from '@/entities/loadingStatus';
import { postsReducer } from '@/entities/post';
import { userReducer } from '@/entities/user';
import { albumReducer } from '@/entities/album';
import { commentReducer } from '@/entities/comment';
import { todoReducer } from '@/entities/todo';
import { photoReducer } from '@/entities/photo';
import { baseApi } from '@/shared/api';
import { loadingMiddleware } from '../middlewares/loadingMiddleware.ts';

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    post: postsReducer,
    user: userReducer,
    album: albumReducer,
    comment: commentReducer,
    todo: todoReducer,
    photo: photoReducer,
    loading: loadingReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware, loadingMiddleware),
});

