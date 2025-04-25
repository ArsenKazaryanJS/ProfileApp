import { createSlice } from "@reduxjs/toolkit";
import { removeFriendById } from "../../helpers/removeFriendById";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userInfo: null,
    loginMessage: null,
    registerMessage: null,
  },
  reducers: {
    setUser(state, action) {
      state.userInfo = action.payload;
    },
    updateUser(state, action) {
      state.userInfo = { ...state.userInfo, ...action.payload };
    },
    logoutUser(state) {
      state.userInfo = null;
    },
    removeFriend(state, action) {
      if (state.userInfo && state.userInfo.friends) {
        state.userInfo.friends = removeFriendById(state.userInfo.friends, action.payload);
      }
    },
    setLoginMessage(state, action) {
      state.loginMessage = action.payload;
    },
    setRegisterMessage(state, action) {
      state.registerMessage = action.payload;
    },
  },
});

export const {
  setUser,
  updateUser,
  logoutUser,
  removeFriend,
  addFriend,
  setLoginMessage,
  setRegisterMessage,
} = authSlice.actions;

export default authSlice.reducer;
