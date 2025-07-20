import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { AlbumType } from '@/entities/album';

interface AlbumState {
  albumList: AlbumType[];
  activeAlbum?: AlbumType;
}

const initialState: AlbumState = {
  albumList: [],
  activeAlbum: undefined
}

const albumSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setAlbumList(state, action: PayloadAction<AlbumType[]>) {
      state.albumList = action.payload;
    },
    setActiveAlbum(state, action: PayloadAction<AlbumType>) {
      state.activeAlbum = action.payload;
    },
    clearActiveAlbum(state) {
      state.activeAlbum = undefined;
    },
  }
});

export const {setAlbumList, setActiveAlbum, clearActiveAlbum} = albumSlice.actions;
export const albumReducer = albumSlice.reducer;
