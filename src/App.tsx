import { FC } from "react";
import { Link, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import DemoPage from "./screens/DemoPage";
import MainPage from "./screens/MainPage";

const App: FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="demo" element={<DemoPage/>}/>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
