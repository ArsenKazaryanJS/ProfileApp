import { Link} from "react-router-dom";
import "./navbar.css";
import { AuthNav } from "../AuthNav/AuthNav";

export const NavBar = () => {

  return (
    <div className="nav-container">
      <nav>
        <div className="nav_left">
          <Link to={"/"}>Account Central</Link>
        </div>
       <AuthNav/>
      </nav>
    </div>
  );
};
