import { FC, ReactNode } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import NavBar from "../../NavBar";

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
