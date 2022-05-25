import { FC, ReactNode } from "react";
import { Outlet } from "react-router-dom";

const Layout: FC<ReactNode> = (props) => {
  return (
    <>
      "Toolbar"
      <Outlet />
    </>
  );
};

export default Layout;
