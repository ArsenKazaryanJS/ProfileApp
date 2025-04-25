import { createAsyncThunk } from "@reduxjs/toolkit";

export const registerUser = createAsyncThunk(
  "user/createUser",
  async (userData) => {
    try {
      const res = await fetch("http://localhost:3001/auth/register", {
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



export const Fetchlogin = createAsyncThunk(
    "user/login",
    async (userData) => {
        const res = await fetch('http://localhost:3001/auth/login', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        if (!res.ok) {
            throw new Error("Login failed");
        }
        const data = await res.json();
        return data; 
    }
);





export const getAllUsers  = async ()=>{
  try {
      const res = await fetch('http://localhost:3001/api/users')
      return await res.json()
  } catch (error) {
    throw new Error("Failed to fetch users",error.message);
  }
}




export const FetchLoginUser = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:3001/auth/me", {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
  
      if (!res.ok) {
        throw new Error("Failed to fetch user data");
      }
  
      const data = await res.json();
      return data;
    } catch (error) {
      throw new Error(`Failed to fetch profileUser: ${error.message}`);
    }
  };
  




export const FetchLogOut = createAsyncThunk(
    "user/logOut",
    async () => {
        const token = localStorage.getItem('token'); 
        const res = await fetch('http://localhost:3001/auth/logout', {
            method: "PUT",
            headers: {
                'Authorization': `Bearer ${token}`, 
                'Content-Type': 'application/json'
            }
        });
        if (!res.ok) {
            throw new Error("Failed to logout user");
        }
        localStorage.removeItem('token'); 
        return; 
    }
);





export const fetchAddFriend = createAsyncThunk(
  "user/addFriend",
  async (friendId) => {
      const token = localStorage.getItem('token'); 
      const res = await fetch(`http://localhost:3001/api/add-friend`, {
          method: 'POST',
          headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ friendId })
      });

      if (!res.ok) {
          throw new Error("Failed to add friend");
      }

      const data = await res.json();
      return data; 
  }
);




export const fetchUpdateUser = createAsyncThunk(
  "user/updateUser",
  async (userData) => {
      const token = localStorage.getItem('token'); 
      const res = await fetch(`http://localhost:3001/auth/user`, {
          method: 'PUT',
          headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
          },
          body: JSON.stringify( userData )
      });
      if (!res.ok) {
          throw new Error("Failed to add friend");
      }

      const data = await res.json();
      return data; 
  }
);



export const fetchRemoveFriend = createAsyncThunk(
  "user/removeFriend",
  async (friendId) => {
    const token = localStorage.getItem('token');
    const res = await fetch(`http://localhost:3001/auth/remove-friend`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ friendId })
    });

    if (!res.ok) {
      throw new Error("Failed to remove friend");
    }

    const data = await res.json();
    return data;
  }
);



