import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const DisabledRouteWithAuth = () => {
  const { user } = useTypedSelector((state) => state);
  let location = useLocation();
  if (user.user) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default DisabledRouteWithAuth;
