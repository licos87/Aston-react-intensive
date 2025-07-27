import type { AppState } from '@/app/providers/storeProvider';

export const getUserAlbumListSelector = (store: AppState) => store.album.albumList;
export const getActiveUserAlbumSelector = (store: AppState) => store.album.activeAlbum;

