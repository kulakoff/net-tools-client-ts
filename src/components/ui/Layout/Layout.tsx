import { Container } from "@mui/material";
import { FC, ReactNode } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../NavBar";
// import Navbar from "../../components/Navbar";

const Layout: FC<ReactNode> = (props) => {
  return (
    <>
      <NavBar />
      <Container sx={{ maxWidth: { mx: "xs", md: "lg" } }}>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
