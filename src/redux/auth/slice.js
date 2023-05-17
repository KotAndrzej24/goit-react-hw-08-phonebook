import { logIn, logOut, register } from './operations';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  user: { name: null, email: null },
  isLoggedIn: false,
  token: null,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addCase(register.pending, (state, action) => {
      console.log(state.user);
      console.log(action);
      state.isRefreshing = true;
      state.error = null;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      console.log(state);
      console.log(action);
      state.isRefreshing = false;
      state.error = null;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.error = action.payload;
      state.isRefreshing = false;
    });

    builder.addCase(logIn.pending, (state, action) => {
      console.log(state.user);
      console.log(action);
      state.isRefreshing = true;
      state.error = null;
    });
    builder.addCase(logIn.fulfilled, (state, action) => {
      console.log(state.user);
      console.log(action);
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isRefreshing = false;
      state.error = null;
    });
    builder.addCase(logIn.rejected, (state, action) => {
      state.error = action.payload;
      state.isRefreshing = false;
    });

    builder.addCase(logOut.pending, (state, action) => {
      console.log(state.user);
      console.log(action);
      state.isRefreshing = true;
      state.error = null;
    });
    builder.addCase(logOut.fulfilled, (state, action) => {
      console.log(state.user);
      console.log(action);
      state.isRefreshing = false;
      state.error = null;
    });
    builder.addCase(logOut.rejected, (state, action) => {
      state.error = action.payload;
      state.isRefreshing = false;
    });
  },
});

export const authReducer = authSlice.reducer;
