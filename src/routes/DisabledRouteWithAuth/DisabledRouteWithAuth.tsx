import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const DisabledRouteWithAuth = () => {
  const { user } = useTypedSelector((state) => state.user);
  const location = useLocation();
  const url = new URLSearchParams(location.search.slice(1));
  return user ? <Navigate to={url.get("redirect") || "/"} /> : <Outlet />;
};

export default DisabledRouteWithAuth;
