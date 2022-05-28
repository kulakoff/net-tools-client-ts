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
// import Box from "@mui/material/Box";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

// const pages = [
//   { name: "Products", url: "#" },
//   { name: "Pricing", url: "#" },
//   { name: "Blog", url: "#" },
// ];
// const pages = ["Device", "Pricing", "Blog","login","info"];
const pages = [
  { name: "Demo", url: "/demo" },
  { name: "Devices", url: "/devices" },
  { name: "Test", url: "/test" },
  { name: "Войти", url: "/signin" },
  { name: "Регистрация", url: "/signup" },
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
    signOut()
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
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
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
                {pages.map((page: any) => (
                  <MenuItem key={page.nameAuthorization}>
                    <NavLink to={page.url} onClick={handleCloseNavMenu}>
                      {page.name}
                    </NavLink>
                  </MenuItem>
                ))}
                <MenuItem>
                  <Button onClick={onLogOut}>Выйти</Button>
                </MenuItem>
              </Menu>
            </Box>

            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
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
            <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
              {/* <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu> */}

              {user.user ? (
                <>
                  <Typography variant="h6" component="h6">
                    {user.user.email}
                  </Typography>
                  <BugReportOutlinedIcon />
                  <Button color="inherit" onClick={onLogOut}>
                    Выйти
                  </Button>
                </>
              ) : (
                <>
                  <Button color="inherit" component={Link} to="/signin">
                    Войти
                  </Button>
                  <Button color="inherit" component={Link} to="/signup">
                    Регистрация
                  </Button>
                </>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Container maxWidth="xs" className="container">
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item>{/* <Outlet /> */}</Grid>
        </Grid>
      </Container>

      {/* <Footer /> */}
    </>
  );
};

export default Navbar;
