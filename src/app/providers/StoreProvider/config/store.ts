import { configureStore } from '@reduxjs/toolkit';
import { reducer } from '@/app/providers/StoreProvider/config/reducer.ts';

export const store = configureStore({
  reducer: reducer,
});

