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

const App: FC = () => {
  return (
    <>
      <CssBaseline />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          {/* <Route element={<DisabledRouteWithAuth />}> */}
          <Route path="signin" element={<SignInPage />} />
          <Route path="signup" element={<SignUpPage />} />
          {/* </Route> */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
