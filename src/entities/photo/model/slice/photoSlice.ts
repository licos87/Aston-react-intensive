import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { PhotoType } from '../../index';

interface PhotoState {
  photoList: PhotoType[];
}

const initialState: PhotoState = {
  photoList: []
}

const photoSlice = createSlice ({
  name: 'photo',
  initialState,
  reducers: {
    setPhotoList(state, action: PayloadAction<PhotoType[]>) {
      state.photoList = action.payload;
    },
  }
})

export const {setPhotoList} = photoSlice.actions;
export const photoReducer = photoSlice.reducer;
