import { LogOut, User, Users } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLogOut } from "../../hooks/useLogout";
import { NavLink } from "react-router-dom";


export const AuthNav = () => {
  const [showButtons, setShowButtons] = useState(false);
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { handleLogOut } = useLogOut(dispatch, userInfo);


    return (
        <>
             {!userInfo ? (
          <div className="nav_right">
            <NavLink to={"/login"}>Log In</NavLink>
            <NavLink to={"/signup"}>Sign Up</NavLink>
          </div>
        ) : (
          <div className="user_options">
            <Users />
            <img  src={userInfo.avatar}  onClick={() => setShowButtons(!showButtons)}  alt="User Avatar"
            />
            <div className={showButtons ? "btn_active" : "non_active_btn"}>
              <NavLink to={"/profile"}>
                <User />
                Profile
              </NavLink>
              <button onClick={() => handleLogOut()}>
                <LogOut />
                Logout
              </button>
            </div>
          </div>
        )}
        </>
    )
}
