import { FC, ReactNode } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";


const Layout: FC<ReactNode> = (props) => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
