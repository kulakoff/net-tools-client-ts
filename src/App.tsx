import { FC } from "react";
import { Link, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./ui/Layout";
import DemoPage from "./screens/DemoPage";
import MainPage from "./screens/MainPage";
import NotFoundPage from "./screens/NotFoundPage";

const App: FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="demo" element={<DemoPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
