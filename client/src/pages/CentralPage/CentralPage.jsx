import { NavLink } from "react-router-dom";
import "./central_page.css";
import { useSelector } from "react-redux";

export const CentralPage = () => {
  const {userInfo} = useSelector((state=> state.auth))


  return (
    <section className="page_container">
      <div className="central_section_box">
        <div className="central_section_head">
          <h1>Welcome to Central Account</h1>
          <p>
            Your one-stop solution for managing your account, profile, and
            <br />
            authentication.
          </p>
        </div>
        {!userInfo ? (
          <>
            <div className="central_btn_box">
              <NavLink to={"/login"}>Log In</NavLink>
              <NavLink to={"/signup"}>Create Account</NavLink>
            </div>
            <p>Demo credentials: user@example.com / password</p>
          </>
        ) : (
          <div className="welcome_back_box">
            <h2>Welcome back, Arsen!</h2>
            <p>
              You're currently logged in. You can manage your profile settings
              or view your dashboard.
            </p>
            <NavLink to={"/profile"}>View Profile</NavLink>
          </div>
        )}
      </div>
    </section>
  );
};
