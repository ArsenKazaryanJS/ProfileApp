import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userInfo: null,
  },
  reducers: {
    setMessage(state, action) {
      state.message = action.payload;
    },
    setUser(state, action) {
      console.log(action.payload);
      
      state.userInfo = action.payload;
    },
    updateUser(state, action) {
      state.userInfo = { ...state.userInfo, ...action.payload };
    },
    logoutUser(state) {
      state.userInfo = null;
    },
  }
});

export const { setMessage, setUser, updateUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;

