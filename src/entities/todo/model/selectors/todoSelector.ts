import type { AppState } from '@/app/providers/storeProvider';

export const getTodoListSelector = (store: AppState) => store.todo.todoList;

