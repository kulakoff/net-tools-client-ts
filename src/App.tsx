import { FC, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Layout from "./ui/Layout";
import DemoPage from "./screens/DemoPage";
import MainPage from "./screens/MainPage";
import NotFoundPage from "./screens/NotFoundPage";
import SignInPage from "./screens/SignInPage";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { useActions } from "./hooks/useActions";
import RequireAuthRoute from "./routes/RequireAuthRoute";
import RequireAuthRoute2 from "./routes/RequireAuthRoute2";
import DisabledRouteWithAuth from "./routes/DisabledRouteWithAuth";
import DevicesPage from "./screens/DevicesPage/";

const App: FC = () => {
  const { user } = useTypedSelector((state) => state);
  const { checkAuth } = useActions();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      console.log("token exist in localStorage, refresh");
      checkAuth();
    } else {
      console.log("token not found in localStorage, login please");
    }
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<MainPage />} /> */}
          {/* Private routes */}
          <Route element={<RequireAuthRoute2 />}>
            <Route index element={<MainPage />} />
            <Route path="demo" element={<DemoPage />} />
            <Route path="meters" element={<DemoPage />} />
            <Route path="devices" element={<DevicesPage />} />
          </Route>
          {/* Public routes */}
          <Route element={<DisabledRouteWithAuth />}>
            <Route path="signin" element={<SignInPage />} />
            <Route path="signup" element={<SignInPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
