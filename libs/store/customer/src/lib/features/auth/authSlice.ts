import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import camelcaseKeys from 'camelcase-keys';

const initialState: any = {
  loading: false,
  auth: null,
  error: null,
  tokenType: 'Bearer',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginRequested(
      state,
      action: PayloadAction<{ username: string; password: string }>
    ) {
      state.loading = true;
      state.error = null;
    },
    loginSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      state.error = null;
      state.auth = camelcaseKeys({ ...action.payload });
    },

    loginFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    logout(state) {
      state.loading = false;
      state.error = null;
    },
  },
});

export const { loginRequested, loginSuccess, loginFailure, logout } =
  authSlice.actions;

export default authSlice.reducer;
