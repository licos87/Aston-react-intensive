import type { AppState } from '@/app/providers/storeProvider';

export const getLoadingStatusSelector = (store: AppState) => store.loading.status;

