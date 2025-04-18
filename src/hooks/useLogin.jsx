import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/Api/Actions.js";
import { setMessage} from "../redux/slices/authSlice";

export const useLogin = (navigate,setUser) => {
  const { message } = useSelector((state) => state.auth);
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();

      
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const [email, password] = e.target;
    const user = users.find(user => user.email === email.value && user.password === password.value);
    
    if (user) {
      try {
        const userData = { ...user };
        const logUser = await dispatch(loginUser(userData));
        if(logUser.ok){
          await dispatch(setUser(logUser.payload)); 
        }
      
        
        navigate("/profile");
      } catch (error) {
        dispatch(setMessage("Invalid email or password."));
        console.error("Login failed:", error.message);
      }
    } else {
      dispatch(setMessage("Invalid email or password."));
      console.error("Invalid email or password.");
    }
  };

  return { handleSubmit, message };
};
