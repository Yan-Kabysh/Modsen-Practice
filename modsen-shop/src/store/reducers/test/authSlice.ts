import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isAuthenticated: boolean;
  user: { email: string | null; id: string | null };
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: { email: null, id: null },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    LOGIN(state) {
      state.isAuthenticated = true;
    },
    USER(
      state,
      action: PayloadAction<{ email: string | null; id: string | null }>
    ) {
      state.user = action.payload;
    },
    LOGOUT(state) {
      state.isAuthenticated = false;
      state.user = { email: null, id: null };
    },
  },
});

export const { LOGIN, USER, LOGOUT } = authSlice.actions;
export default authSlice.reducer;
