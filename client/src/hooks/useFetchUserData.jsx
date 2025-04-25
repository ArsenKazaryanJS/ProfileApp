import { useDispatch } from "react-redux";
import { setUser } from "../redux/slices/authSlice.js";
import { FetchLoginUser } from "../redux/Api/requests.js";

export const useFetchUserData = () => {
  const dispatch = useDispatch();

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem("token");
    if(token){
       const user = await FetchLoginUser();
       dispatch(setUser(user));
     }
    } catch (error) {
      console.error("Failed to fetch user data:", error);
    }
  };

  return fetchUserData;
};
