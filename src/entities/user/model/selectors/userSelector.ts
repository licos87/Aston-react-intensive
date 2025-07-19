import type { AppState } from '@/app/providers/storeProvider';
import { userAdapter } from '../../model/slice/userSlice.ts';

const selectUserState = (state: AppState) => state.user;

export const getActiveUserSelector = (store: AppState) => store.user.activeUser;

export const {
  selectAll: getUserListSelector,
  selectById: selectPostById,
  selectIds: selectPostIds
} = userAdapter.getSelectors(selectUserState);
