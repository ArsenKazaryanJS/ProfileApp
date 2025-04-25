import { useDispatch, useSelector } from "react-redux";
import { Fetchlogin } from "../redux/Api/requests.js";
import { setLoginMessage } from "../redux/slices/authSlice";

export const useLogin = (navigate) => {
  const { loginMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const [email, password] = e.target;
    const user = {
        email: email.value,
        password: password.value
    };

    if (user) {
        try {
            const userData = { ...user };
            const res = await dispatch(Fetchlogin(userData));
            if(res.payload.message) dispatch(setLoginMessage(res.payload.message))

    
            if (res && res.payload.token) {
                // Store the token in local storage
                localStorage.setItem('token', res.payload.token);
              await  navigate("/profile");
            }
        } catch (error) {
            dispatch(setLoginMessage("Invalid email or password."));
            console.error("Login failed:", error.message);
        }
    } else {
        dispatch(setLoginMessage("Invalid email or password."));
        console.error("Invalid email or password.");
    }
};


  return { handleSubmit, message:loginMessage };
};
