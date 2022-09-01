import React from "react";
import { useCookies } from "react-cookie";
import { userApi } from "../store/api/userApi";
import FullScreenLoader from "../components/FullScreenLoader";

type IAuthMiddleware = {
  children: React.ReactElement;
};

const AuthMiddleware: React.FC<IAuthMiddleware> = ({ children }) => {
  const [cookies] = useCookies(["loggedIn"]);

  const { isLoading } = userApi.endpoints.getMe.useQuery(null, {
    skip: !cookies.loggedIn,
  });

  if (isLoading) {
    return <FullScreenLoader />;
  }

  return children;
};

export default AuthMiddleware;
