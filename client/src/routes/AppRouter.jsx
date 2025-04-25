import { Route, Routes } from "react-router-dom";
import { CentralPage } from "../pages/CentralPage/CentralPage";
import { Layout } from "../pages/Layout/Layout";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { SignUpPage } from "../pages/SignUpPage/SignUpPage";
import { ProfilePage } from "../pages/ProfilePage/ProfilePage";
import { FriendsPage } from "../pages/FriendsPage/FriendsPage";
import { UsersPage } from "../pages/UsersPage/UsersPage";
import { useDispatch, useSelector } from "react-redux";
import { useRoutesGuard } from "../hooks/useRoutes";
import { useEffect } from "react";
import { useFetchUserData } from "../hooks/useFetchUserData";

export const AppRouter = () => {
  const { userInfo } = useSelector((state) => state.auth);
  useRoutesGuard(userInfo);
  const fetchUserData = useFetchUserData();
  const dispatch = useDispatch();

  useEffect(() => {
    fetchUserData();
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<CentralPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/friends" element={<FriendsPage />} />
        <Route path="/users" element={<UsersPage />} />
      </Route>
    </Routes>
  );
};
