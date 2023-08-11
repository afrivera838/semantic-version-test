import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

//this is an example you can delete this file if you don't need it
export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    login: (state, action) => action.payload,
    logout: () => initialState,
  },
});

export const { login, logout } = adminSlice.actions;
