import { useDispatch } from "react-redux";
import { fetchAddFriend } from "../redux/Api/requests";
import { setUser } from "../redux/slices/authSlice";

export const useAddFriend = () => {
  const dispatch = useDispatch();

  const addFriend = async (friendId) => {
    try {
      const response = await dispatch(fetchAddFriend(friendId));
      await dispatch(setUser(response?.payload?.user));
      console.log("Friend added successfully:", response?.payload?.user);
    } catch (error) {
      console.error("Failed to add friend:", error.message);
    }
  };

  return { addFriend };
};
