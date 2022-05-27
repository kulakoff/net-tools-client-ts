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

const App: FC = () => {
  const { user } = useTypedSelector((state) => state);
  const {checkAuth} = useActions();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      console.log("useEffect, token exist in localStorage");
      checkAuth()
    } else {
      console.log("useEffect token not found in localStorage");
      
    }
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="demo" element={<DemoPage />} />
          <Route path="signin" element={<SignInPage />} />
          <Route path="signup" element={<SignInPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
