import { type TypedUseSelectorHook, useSelector } from 'react-redux';
import type { AppState } from '@/app/providers/StoreProvider/types/store.ts';

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
