import { baseApi } from '@/shared/api';
import type { TodoType } from '../index.ts';

const todoApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTodoList: builder.query<TodoType[], number>({
      query: (userId) => `todos?userId=${userId}`,
    }),
  }),
  overrideExisting: false,
});

export const {useGetTodoListQuery} = todoApi;
