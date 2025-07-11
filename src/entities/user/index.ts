export { User } from './ui/User';
export { useGetUserListQuery, useGetUserQuery } from '@/entities/user/api/userApi';
export { getActiveUserSelector, getUserListSelector, selectPostById, selectPostIds } from './model/selectors/userSelector';
export { setUserList, setActiveUser, clearActiveUser, userReducer } from './model/slice/userSlice';
export type { UserType } from './model/types/userType.ts';
