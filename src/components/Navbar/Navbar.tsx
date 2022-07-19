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
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";


const pages: any[] = [
  { name: "Приборы учета ⏱️", url: "/meters" },
  { name: "Абонентские устройства", url: "/devices" },
  // { name: "🚀 Demo ", url: "/demo" },
  { name: "🚀 Success registration ", url: "/signup-succes" },
  // { name: "😀 Test ", url: "/test" },
  // { name: "Войти", url: "/signin" },
  // { name: "Регистрация", url: "/signup" },
  // { name: "Выйти", url: "/" },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = () => {
  const { user } = useTypedSelector((state) => state);
  const { singInUser, signOut } = useActions();
  const navigate = useNavigate();

  const onLogOut = () => {
    console.log("push logout button");
    handleCloseNavMenu();
    // store.logout();
    signOut();
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

  // const Layout = () => {
  return (
    <>
      <AppBar position="relative">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {user.user ? (
              <>
                {" "}
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
                >
                  Net-tools-app desctop
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                      display: { xs: "block", md: "none" },
                    }}
                    // MenuListProps={{
                    //   "aria-labelledby": "basic-button",
                    // }}
                  >
                    {pages.map((page: any, key) => (
                      <MenuItem
                        key={key}
                        component={NavLink}
                        to={page.url}
                        onClick={handleCloseNavMenu}
                      >
                        {page.name}
                      </MenuItem>
                    ))}

                    <MenuItem onClick={onLogOut}>Выйти</MenuItem>
                  </Menu>
                </Box>
                {/* mobile mmenu */}
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
                >
                  <SettingsIcon sx={{ mr: 1 }} />
                  Net-tools-app mobile
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                  {pages.map((page) => (
                    <Button
                      key={page.name}
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: "white", display: "block" }}
                      component={Link}
                      to={page.url}
                    >
                      {page.name}
                    </Button>
                  ))}
                </Box>
                {/*
Правое меню
*/}
                {user.user ? (
                  <Box
                    sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}
                  >
                    <Tooltip title="Open settings">
                      <IconButton onClick={handleOpenUserMenu} sx={{ p: 1 }}>
                        <Avatar
                          alt={user?.user?.email}
                          src="https://i.pravatar.cc/100"
                        />
                      </IconButton>
                    </Tooltip>

                    <Menu
                      sx={{ mt: "45px" }}
                      id="menu-appbar"
                      anchorEl={anchorElUser}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      open={Boolean(anchorElUser)}
                      onClose={handleCloseUserMenu}
                    >
                      {settings.map((setting, key) => (
                        <MenuItem key={key} onClick={handleCloseUserMenu}>
                          <Typography textAlign="center">{setting}</Typography>
                        </MenuItem>
                      ))}
                    </Menu>
                    <Button color="inherit" onClick={onLogOut}>
                      Выйти
                    </Button>
                  </Box>
                ) : (
                  "11"
                )}
              </>
            ) : (
              <>
                <Typography
                  variant="h6"
                  //  noWrap
                  component="span"
                  sx={{ mr: 2, display: "flex", textAlign: "end" }}
                >
                  Net-tools-app
                </Typography>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* <Footer /> */}
    </>
  );
};

export default Navbar;
