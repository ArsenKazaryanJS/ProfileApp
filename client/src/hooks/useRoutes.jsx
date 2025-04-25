import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const useRoutesGuard = (userInfo) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const publicPaths = ["/login", "/signup"];
    const protectedPaths = ["/profile", "/friends", "/users"];

    const currentPath = location.pathname;

    if (!userInfo && protectedPaths.includes(currentPath)) {
      navigate("/login");
    }

    if (userInfo && publicPaths.includes(currentPath)) {
      navigate("/profile");
    }
  }, [userInfo, location.pathname, navigate]);
};
