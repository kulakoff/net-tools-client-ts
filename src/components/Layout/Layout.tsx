import { FC, ReactNode } from "react";

const Layout: FC<ReactNode> = ({ children }) => {
  return (
    <>
      "Toolbar"
      <main>{children}</main>
    </>
  );
};

export default Layout;
