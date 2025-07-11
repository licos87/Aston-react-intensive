import type { AppState } from '@/app/providers/storeProvider';

export const getPhotoSelector = (store: AppState) => store.photo.photoList;

