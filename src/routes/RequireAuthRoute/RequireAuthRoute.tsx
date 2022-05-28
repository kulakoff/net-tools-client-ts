import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const RequireAuthRoute = ({ children }: { children: JSX.Element }) => {
  const { user } = useTypedSelector((state) => state);
  let location = useLocation();
  if (user.user === null) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuthRoute;
