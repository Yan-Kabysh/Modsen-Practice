import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IUser, IUserState } from '@/../types/types';

const initialState: IUserState = {
  user: {} as IUser,
  isLoading: false,
  error: '',
};

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userFetching(state) {
      state.isLoading = true;
    },
    userFetchingSuccess(state, action: PayloadAction<IUser>) {
      state.isLoading = false;
      state.error = '';
      state.user = action.payload;
    },
    userFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    removeUser(state) {
      state.user = {} as IUser;
    },
  },
});

export default UserSlice.reducer;
export const {
  userFetching,
  userFetchingSuccess,
  userFetchingError,
  removeUser,
} = UserSlice.actions;
