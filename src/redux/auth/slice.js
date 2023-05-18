import { logIn, logOut, refreshUser, register } from './operations';

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
    //Register
    builder.addCase(register.pending, state => {
      state.isRefreshing = true;
      state.error = null;
    });
    builder.addCase(register.fulfilled, state => {
      state.isRefreshing = false;
      state.error = null;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.error = action.payload;
      state.isRefreshing = false;
    });
    //LogIn
    builder.addCase(logIn.pending, state => {
      state.isRefreshing = true;
      state.error = null;
    });
    builder.addCase(logIn.fulfilled, (state, action) => {
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
    //LogOut
    builder.addCase(logOut.pending, state => {
      state.isRefreshing = false;
      state.error = null;
    });
    builder.addCase(logOut.fulfilled, state => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isRefreshing = false;
      state.error = null;
    });
    builder.addCase(logOut.rejected, (state, action) => {
      state.error = action.payload;
      state.isRefreshing = false;
    });
    //refreshUser
    builder.addCase(refreshUser.pending, state => {
      state.isRefreshing = true;
    });
    builder.addCase(refreshUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    });
    builder.addCase(refreshUser.rejected, state => {
      state.isRefreshing = false;
    });
  },
});

export const authReducer = authSlice.reducer;
