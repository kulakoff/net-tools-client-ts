import { ReactNode, useContext, useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Button,
  Typography,
  makeStyles,
  Grid,
  // Link,
} from "@mui/material";
import Container from "@mui/material/Container";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";

import MenuIcon from "@mui/icons-material/Menu";
import BugReportOutlinedIcon from "@mui/icons-material/BugReportOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
// import Box from "@mui/material/Box";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
// import { useTypedSelector } from "../../hooks/useTypedSelector";
// import { useActions } from "../../hooks/useActions";


const pages: any[] = [
  { name: "Приборы учета ⏱️", url: "/meters" },
  { name: "Абонентские устройства", url: "/devices" },
  // { name: "🚀 Demo ", url: "/demo" },
  { name: "🚀 Success registration ", url: "/signup-succes" },
  {name:"Пользователи",url: "/user-panel"}
  // { name: "😀 Test ", url: "/test" },
  // { name: "Войти", url: "/signin" },
  // { name: "Регистрация", url: "/signup" },
  // { name: "Выйти", url: "/" },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = () => {
  // const { user } = useTypedSelector((state) => state);
  // const { singInUser, signOut } = useActions();
  const navigate = useNavigate();

  const onLogOut = () => {
    console.log("push logout button");
    handleCloseNavMenu();
    // store.logout();
    // signOut();
    navigate("/");
  };

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar position="relative">
      <Container maxWidth="xl">
      <Toolbar disableGutters>
        
      </Toolbar>
      </Container>
      </AppBar>

      {/* <Footer /> */}
    </>
  );
};

export default Navbar;
