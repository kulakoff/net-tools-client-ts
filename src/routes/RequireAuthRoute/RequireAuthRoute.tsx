import { Outbound } from "@mui/icons-material";
import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const RequireAuthRoute = () => {
  const { user } = useTypedSelector((state) => state.user);
  const location = useLocation();
  const url = new URLSearchParams();
  url.set("redirect", location.pathname + location.search);

  console.log("user: ", user);
  console.log("location: ", location);
  return user !== null ? (
    <Outlet />
  ) : (
    <Navigate 
    to={{
      pathname: "/signin",
      search: url.toString(),
    }}
     />
  );
};

export default RequireAuthRoute;
