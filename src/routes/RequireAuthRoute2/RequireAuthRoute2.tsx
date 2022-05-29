import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const RequireAuthRoute2 = () => {
  const { user } = useTypedSelector((state) => state);
  let location = useLocation();
  if (user.user === null) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default RequireAuthRoute2;
