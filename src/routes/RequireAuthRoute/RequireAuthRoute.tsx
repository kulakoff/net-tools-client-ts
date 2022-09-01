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

  // console.log("user: ", user);
  // console.log("location: ", location);
  return  cookies.loggedIn? (
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
