import { CssBaseline } from "@mui/material";
import { FC, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Layout from "./components/ui/Layout";
// import { useAppSelector } from "./hooks/redux";
import MainPage from "./screens/MainPage";
import NotFoundPage from "./screens/NotFoundPage";
import SignUpPage from "./screens/SignUpPage";
import SignInPage from "./screens/SingInPage";
// import { authAPI } from "./store/api/authApi";

import "react-toastify/dist/ReactToastify.css";
import DisabledRouteWithAuth from "./routes/DisabledRouteWithAuth";
import UnauthorizePage from "./screens/UnauthorizePage";
import RequireAuthRoute from "./routes/RequireAuthRoute";
import CountersPage from "./screens/CountersPage";
import DevicesPage from "./screens/DevicesPage";
import UserProfilePage from "./screens/UserProfilePage";

const App: FC = () => {
  return (
    <>
      <CssBaseline />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Требуется авторизация */}
          <Route element={<RequireAuthRoute />}>
            <Route index element={<MainPage />} />
            <Route path="profile" element={<UserProfilePage />} />
            <Route path="couters" element={<CountersPage />} />
            <Route path="devices" element={<DevicesPage />} />
          </Route>
          {/* Роут не доступный авторизованным пользователм */}
          <Route element={<DisabledRouteWithAuth />}></Route>

          <Route path="signin" element={<SignInPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="unauthorized" element={<UnauthorizePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
