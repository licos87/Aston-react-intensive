import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { TodoType } from '@/entities/todo';

interface TodoState {
  todoList: TodoType[];
}

const initialState: TodoState = {
  todoList: [],
}

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setTodoList(state, action: PayloadAction<TodoType[]>) {
      state.todoList = action.payload;
    },
  }
});

export const {setTodoList} = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
