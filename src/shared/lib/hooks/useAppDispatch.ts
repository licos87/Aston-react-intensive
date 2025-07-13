import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@/app/providers/StoreProvider/types/store.ts';

export const useAppDispatch =() => useDispatch<AppDispatch>();
