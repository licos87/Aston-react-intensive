import { baseApi } from '@/shared/api';
import type { PostType } from '@/entities/post/model/types/postType.ts';

const postApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPostList: builder.query<PostType[],void>({
      query: () => 'posts',
    }),
    getUserPostList: builder.query<PostType[], number>({
      query: (userId) => `posts?userId=${userId}`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetPostListQuery, useGetUserPostListQuery } = postApi;
