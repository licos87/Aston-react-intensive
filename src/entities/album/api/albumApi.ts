import { baseApi } from '@/shared/api';
import type { AlbumType } from '../index.ts';

const albumApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserAlbumList: builder.query<AlbumType[], number>({
      query: (userId) => `albums?userId=${userId}`,
    }),
  }),
  overrideExisting: false,
});

export const {useGetUserAlbumListQuery} = albumApi;
