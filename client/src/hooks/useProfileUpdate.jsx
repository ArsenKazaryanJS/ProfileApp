import { useDispatch } from "react-redux";
import { fetchUpdateUser } from "../redux/Api/requests";
import { setUser } from "../redux/slices/authSlice";
import { useState } from "react";

export const useProfileUpdate = () => {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false);

  const handleUpdateProfile = async (e) => {
    setLoading(true);
    e.preventDefault();
  
    try {
        const [username, fullname, email, gender, age, address] = e.target;

        const obj = {
          username: username.value,
          fullname: fullname.value,
          email: email.value,
          gender: gender.value,
          age: age.value,
          address: address.value,
        };
    
      const updatedUser = await dispatch(fetchUpdateUser(obj));
      await dispatch(setUser(updatedUser.payload));
      console.log("User updated successfully:", updatedUser);
    } catch (error) {
      console.error("Failed to update user:", error.message);
    } finally {
        setTimeout(() => {
            setLoading(false);
          }, 2000);
    }
  };

  return { handleUpdateProfile, isLoading };
};
