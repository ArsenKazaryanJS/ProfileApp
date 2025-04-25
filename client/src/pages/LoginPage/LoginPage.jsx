import React, { useEffect } from "react";
import { useLogin } from "../../hooks/useLogin.jsx"; 
import { Link, useNavigate } from "react-router-dom";
import "./login_page.css";
import { useDispatch} from "react-redux";
import { fetchUsersThunk } from "../../redux/slices/usersSlices.js";
import { useFetchUserData } from "../../hooks/useFetchUserData.jsx";
import { CircleAlert } from 'lucide-react'

export const LoginPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const { handleSubmit, message } = useLogin(navigate);
  const fetchUserData = useFetchUserData()

  useEffect(() => {
    dispatch(fetchUsersThunk());
    fetchUserData()
  }, [dispatch]);

  return (
    <div className="page_container">
      <div className="login_box">
        <div className="login_box_title">
          <h2>Log In</h2>
          <p>Enter your email and password to access your account</p>
        </div>
        {message && <div className="popup_message"><CircleAlert />{message}</div>}
        <form onSubmit={handleSubmit}>
          <div className="inp_box">
            <label htmlFor="email">Login</label>
            <input type="text" name="email" placeholder="write your username or email" />
          </div>

          <div className="inp_box">
            <label htmlFor="password">
              Password <a href="#">Forgot password?</a>
            </label>
            <input type="password" name="password" placeholder="••••••••" />
          </div>
          <button type="submit">Log In</button>

          <div className="have_account">
            <p>
              Don't have an account? <Link to={"/signup"}>Sign up</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
