import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth.jsx";
import { CircleAlert } from 'lucide-react'

import "./signup_page.css";

export const SignUpPage = () => {
  const { handleAuth,message } = useAuth();

  return (
    <div className="page_container">
      <div className="signup_box">
        <div className="signup_box_title">
          <h2>Create an Account</h2>
          <p>Enter your details to create your account</p>
        </div>
        {message && <div className="popup_message"><CircleAlert />{message}</div>}
        <form onSubmit={handleAuth}>
          <div className="inp_box">
            <label htmlFor="username">User Name</label>
            <input type="text" name="username" placeholder="your name" />
          </div>

          <div className="inp_box">
            <label htmlFor="fullname">Full Name</label>
            <input type="text" name="fullname" placeholder="your full name" />
          </div>

          <div className="inp_box">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" placeholder="you@example.com" />
          </div>

          <div className="inp_box_const">
            <div className="inp_box">
              <label htmlFor="gender">Gender</label>
              <select name="gender">
                <option value="">Select your gender</option>
                <option value="male">male</option>
                <option value="female">female</option>
              </select>
            </div>
            <div className="inp_box">
              <label htmlFor="age">Age</label>
              <input type="number" name="age" placeholder="your age" />
            </div>
          </div>

          <div className="inp_box">
            <label htmlFor="password">
              Password <a href="#">Forgot password?</a>
            </label>
            <input type="password" name="password" placeholder="••••••••" />
          </div>

          <div className="inp_box">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="••••••••"
            />
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
