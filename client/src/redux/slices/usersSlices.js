import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllUsers } from "../Api/requests";
export const fetchUsersThunk = createAsyncThunk('users/fetchUsersApi', getAllUsers)



const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsersThunk.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload; 
      })
      .addCase(fetchUsersThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default usersSlice.reducer;
