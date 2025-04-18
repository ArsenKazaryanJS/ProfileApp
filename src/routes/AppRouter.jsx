import { Route, Routes } from "react-router-dom";
import { CentralPage } from "../pages/CentralPage/CentralPage";
import { Layout } from "../pages/Layout/Layout";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { SignUpPage } from "../pages/SignUpPage/SignUpPage";
import { ProfilePage } from "../pages/ProfilePage/ProfilePage";
import { useSelector } from "react-redux";

export const AppRouter = () => {
  const { userInfo } = useSelector((state) => state.auth);

  

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<CentralPage />} />
        {userInfo ? (
          <Route path="/profile" element={<ProfilePage />} />
        ) : (<>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
          </>)}
      </Route>
    </Routes>
  );
};
