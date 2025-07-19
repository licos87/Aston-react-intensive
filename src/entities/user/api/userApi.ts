import { baseApi } from '@/shared/api';

import type { UserType } from '../index.ts';

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserList: builder.query<UserType[], void>({
      query: () => `users`,
    }),
    getUser: builder.query<UserType, number>({
      query: (userId) => `users/${userId}`,
    }),
  }),
  overrideExisting: false
})

export const {useGetUserListQuery, useGetUserQuery} = userApi;
