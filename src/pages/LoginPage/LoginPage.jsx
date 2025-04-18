import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin.jsx"; 
import { Link } from "react-router-dom";
import "./login_page.css";
import { setUser } from "../../redux/slices/authSlice";
import { useDispatch } from "react-redux";
import { fetchUsersThunk } from "../../redux/slices/usersSlices.js";

export const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { handleSubmit, message } = useLogin(navigate,setUser);

  useEffect(() => {
    dispatch(fetchUsersThunk());
  }, [dispatch]);

  return (
    <div className="page_container">
      <div className="login_box">
        <div className="login_box_title">
          <h2>Log In</h2>
          <p>Enter your email and password to access your account</p>
        </div>
        {message && <div className="popup_message">{message}</div>}
        <form onSubmit={handleSubmit}>
          <div className="inp_box">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" placeholder="you@example.com" />
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
