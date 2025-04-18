import { useDispatch } from "react-redux";
import { setMessage } from "../redux/slices/authSlice.js";
import { registerUser } from "../redux/Api/Actions.js";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleAuth = async (e) => {
    e.preventDefault();
    const { name, email, gender, password, confirmPassword } = e.target;

    if (confirmPassword.value !== password.value) {
      dispatch(setMessage("Passwords do not match. Please try again."));
      return;
    } else if (!name.value.trim() || !email.value.trim() || !password.value.trim()) {
      const missingFields = [];
      if (!name.value.trim()) missingFields.push("name");
      if (!email.value.trim()) missingFields.push("email");
      if (!password.value.trim()) missingFields.push("password");
      dispatch(setMessage(`success:false ${missingFields.join(", ")} required`));
      return;
    }

    const userData = {
      name: name.value,
      email: email.value,
      password: password.value,
      gender: gender.value,
      avatar: `https://ui-avatars.com/api/?name=${name.value}`,
    };

    try {
      await dispatch(registerUser(userData));
      navigate('/login')
      dispatch(setMessage(''));
    } catch (error) {
      dispatch(setMessage(`Error: ${error.message}`));
    }
  };

  return { handleAuth };
};
