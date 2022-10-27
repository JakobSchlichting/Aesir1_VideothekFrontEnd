import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userActive: false,
  
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state) => {
      state.userActive = true;
    },
    logout: (state) => {
      state.userActive = false;
    },
    userInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    userZero: (state) => {
      state.userInfo = null;
    }
  },
});

export const { login, logout, userInfo, userZero } = userSlice.actions;

export default userSlice.reducer;
