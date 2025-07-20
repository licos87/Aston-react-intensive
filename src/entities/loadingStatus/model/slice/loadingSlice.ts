import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

const loadingSlice = createSlice({
  name: 'loading',
  initialState: { status: false },
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.status = action.payload;
    },
  },
});

export const { setIsLoading } = loadingSlice.actions;
export const loadingReducer = loadingSlice.reducer;
