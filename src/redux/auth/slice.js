const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  user: { username: null, email: null },
  isLoggedIn: false,
  token: null,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {},
  //   builder => {
  //     builder.addCase();
  //   },
});

export const authReducer = authSlice.reducer;
