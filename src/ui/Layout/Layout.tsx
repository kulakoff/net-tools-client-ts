import { Container } from "@mui/material";
import { FC, ReactNode } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";

const Layout: FC<ReactNode> = (props) => {
  return (
    <>
      <Navbar />
      <Container maxWidth="sm">
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
