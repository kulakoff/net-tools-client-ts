import React from "react";
import { useCookies } from "react-cookie";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";

const DisabledRouteWithAuth = () => {
  const [cookies] = useCookies(["loggedIn"]);
  const { user } = useAppSelector((state) => state.userState);
  const location = useLocation();
  const url = new URLSearchParams(location.search.slice(1));
  return cookies.loggedIn ? <Navigate to={url.get("redirect") || "/"} /> : <Outlet />;
};

export default DisabledRouteWithAuth;
