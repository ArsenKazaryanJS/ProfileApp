import { createAsyncThunk } from "@reduxjs/toolkit";

export const registerUser = createAsyncThunk(
  "user/createUser",
  async (userData) => {
    try {
      const res = await fetch("http://localhost:3111/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
    return await res.json();
    } catch (error) {
      throw new Error("Failed to create user",error);
    }

  }
);


export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userData) => {
    const res = await fetch("http://localhost:3111/logs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });
    if (!res.ok) {
      throw new Error("Failed to log in");
    }
    return await res.json();
  }
);


export const getAllUsers  = async ()=>{
  try {
      const res = await fetch('http://localhost:3111/users')
      return await res.json()
  } catch (error) {
    throw new Error("Failed to fetch users",error.message);
  }
}


export const FetchLogOut = createAsyncThunk(
  "user/logOut",
  async (userId) => {
    try {
      const res = await fetch(`http://localhost:3111/logs/${userId}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        throw new Error("Failed to delete user");
      }
      return userId; 
    } catch (error) {
      throw new Error("Failed to delete user: ", error.message);
    }
  }
);