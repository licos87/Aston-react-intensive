import type { UserType } from '@/entities/user/model/types/userType.ts';
import { createEntityAdapter, createSlice, type EntityState, type PayloadAction } from '@reduxjs/toolkit';

interface UserState extends EntityState<UserType, number> {
  activeUser?: number;
}

export const userAdapter = createEntityAdapter<UserType>();

const initialState: UserState = userAdapter.getInitialState({
  activeUser: undefined,
});


const userSlice = createSlice ({
  name: 'user',
  initialState,
  reducers: {
    setUserList(state, action: PayloadAction<UserType[]>) {
      userAdapter.setAll(state, action.payload);
      state.activeUser = undefined;
    },
    setActiveUser(state, action: PayloadAction<UserType>) {
      state.activeUser = action.payload.id;
    },
    clearActiveUser(state) {
      state.activeUser = undefined;
    },
  }
})

export const {setUserList, setActiveUser, clearActiveUser} = userSlice.actions;
export const userReducer = userSlice.reducer;
