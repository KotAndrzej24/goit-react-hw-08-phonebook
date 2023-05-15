const { createSlice } = require('@reduxjs/toolkit');

const authSlice = createSlice({
  name: 'auth',
  initialState: {},
  extraReducers: {},
});

export const authReducer = authSlice.reducer;
