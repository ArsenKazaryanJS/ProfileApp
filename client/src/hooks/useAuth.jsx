import { useDispatch, useSelector } from "react-redux";
import { setMessage, setRegisterMessage } from "../redux/slices/authSlice.js";
import { registerUser } from "../redux/Api/requests.js";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const { registerMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAuth = async (e) => {
    e.preventDefault();
    const { username, fullname, email, gender,age, password, confirmPassword } = e.target;

    const missingFields = [];
    if (!username.value.trim()) missingFields.push("username");
    if (!fullname.value.trim()) missingFields.push("fullname");
    if (!email.value.trim()) missingFields.push("email");
    if (!password.value.trim()) missingFields.push("password");

    if (missingFields.length > 0) {
      dispatch(setRegisterMessage(`${missingFields.join(", ")} required`));
      return;
    }

    const userData = {
      username:username.value,
      fullname: fullname.value,
      email: email.value,
      password: password.value,
      gender: gender.value,
      age:age.value,
      avatar: `https://ui-avatars.com/api/?name=${fullname.value}`,
    };

    try {
    const regUser =  await dispatch(registerUser(userData));
    dispatch(setRegisterMessage(`${regUser?.payload?.msg}`));
    if(regUser?.payload?.msg)return
      navigate('/login');
      dispatch(setRegisterMessage(''));
    } catch (error) {
      dispatch(setRegisterMessage(`Error: ${error.message}`));
    }
  };

  return { handleAuth, message:registerMessage };
};
