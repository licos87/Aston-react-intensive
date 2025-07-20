import { baseApi } from '@/shared/api';
import type { PhotoType } from '../index.ts';

export const photoApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPhotoList: builder.query<PhotoType[], number>({
      query: (albumId) =>
        `photos?albumId=${albumId}`,
    }),
  }),
  overrideExisting: false
})

export const {useGetPhotoListQuery} = photoApi;
