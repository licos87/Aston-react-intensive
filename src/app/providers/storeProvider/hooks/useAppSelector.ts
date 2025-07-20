import { type TypedUseSelectorHook, useSelector } from 'react-redux';
import type { AppState } from '@/app/providers/storeProvider';

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
