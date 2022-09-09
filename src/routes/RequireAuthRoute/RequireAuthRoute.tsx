import { FC } from "react";
import { useCookies } from "react-cookie";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";

const RequireAuthRoute: FC = () => {
  const { user } = useAppSelector((state) => state.userState);
  const [cookies] = useCookies(["loggedIn"]);
  const location = useLocation();
  const url = new URLSearchParams();
  url.set("redirect", location.pathname + location.search);
  // console.log(":: RequireAuthRoute user: ", user);
  // console.log(":: RequireAuthRoute cookies: ", cookies.loggedIn);
  return cookies.loggedIn || user ? (
    <Outlet />
  ) : (
    <Navigate
      to={"/signin"}
      state={{ from: location }}
    />
  );
};

export default RequireAuthRoute;
