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
import { pages, settings } from "./pages";
import { useAppSelector } from "../../hooks/redux";

const Navbar = () => {
  const { user } = useAppSelector((state) => state.userState);
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
            {user ? (
              <>
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
              </>
            ) : (
              <>
                <Typography
                  variant="h6"
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
    </>
  );
};

export default Navbar;
