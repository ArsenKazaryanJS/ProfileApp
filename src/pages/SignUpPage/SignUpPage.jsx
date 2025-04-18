import { Link } from "react-router-dom";
import {useSelector } from "react-redux";
import { useAuth } from "../../hooks/useAuth.jsx"; 
import "./signup_page.css";

export const SignUpPage = () => {
  const { handleAuth } = useAuth();
  const { message } = useSelector((state) => state.auth);


  
  return (
    <div className="page_container">
      <div className="signup_box">
        <div className="signup_box_title">
          <h2>Create an Account</h2>
          <p>Enter your details to create your account</p>
        </div>
        {message && <div className="popup_message">{message}</div>}
        <form onSubmit={handleAuth}>
          <div className="inp_box">
            <label htmlFor="Name">Name</label>
            <input type="text" name="name" placeholder="your name" />
          </div>

          <div className="inp_box">
            <label htmlFor="Email">Email</label>
            <input type="text" name="email" placeholder="you@example.com" />
          </div>

          <div className="inp_box">
            <label htmlFor="Gender">Gender</label>
            <select name="gender">
              <option value="">Select your gender</option>
              <option value="male">male</option>
              <option value="female">female</option>
            </select>
          </div>

          <div className="inp_box">
            <label htmlFor="Password">
              Password <a href="#">Forgot password?</a>
            </label>
            <input type="password" name="password" placeholder="••••••••" />
          </div>

          <div className="inp_box">
            <label htmlFor="ConfirmPassword">Confirm Password</label>
            <input type="password" name="confirmPassword" placeholder="••••••••" />
          </div>

          <button type="submit">Sign Up</button>

          <div className="have_account">
            <p>
              Already have an account? <Link to="/login">Log In</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
