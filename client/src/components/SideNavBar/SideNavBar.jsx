import { Link, NavLink } from "react-router-dom";
import "./side_nav_bar.css";
import { LogOut, User, Users } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useLogOut } from "../../hooks/useLogout";

export const SideNavBar = () => {
const dispatch = useDispatch()
const {userInfo} = useSelector((state)=> state.auth)
const {handleLogOut} = useLogOut(dispatch,userInfo)

  return (
    <div className="nav_container">
      <nav>
        <div className="nav_head">
          <Link to={'/'}>Central Account</Link>
        </div>

        <div className="side_barContent">
          <NavLink to={"/users"}>
            <Users /> Users
          </NavLink>
          <NavLink to={"/friends"}>
            <Users /> My Friends
          </NavLink>
          <NavLink to={"/profile"}>
            <User /> Profile
          </NavLink>
        </div>

        <div className="sidebar_footer">
          <div className="footer_img_box">
            <img src={userInfo?.avatar} />
            <div className="footer_text">
              <h2>{userInfo?.username}</h2>
              <p>{userInfo?.email}</p>
            </div>
          </div>
          <button onClick={handleLogOut}>
            <LogOut /> Log Out
          </button>
        </div>
      </nav>
    </div>
  );
};
