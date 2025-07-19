import { baseApi } from '@/shared/api';
import type { CommentType } from '../index.ts';

const commentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCommentList: builder.query<CommentType[], number>({
      query: (userId) => `comments?userId=${userId}`
    })
  }),
  overrideExisting: false,
});

export const {useGetCommentListQuery} = commentApi;
