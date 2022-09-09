import React from "react";
import { useCookies } from "react-cookie";
import { userAPI } from "../store/api/userApi";
import FullScreenLoader from "../components/FullScreenLoader";

type IAuthMiddleware = {
  children: React.ReactElement;
};

const AuthMiddleware: React.FC<IAuthMiddleware> = ({ children }) => {
  const [cookies] = useCookies(["loggedIn"]);

  const { isLoading, data } = userAPI.endpoints.getMe.useQuery(null, {
    skip: !cookies.loggedIn,
  });
  console.log("AuthMiddleware isLoading: ", isLoading);
  console.log("AuthMiddleware data: ", data);
  console.log("AuthMiddleware cookies: ", cookies);

  if (isLoading) {
    return <FullScreenLoader />;
  }

  return children;
};

export default AuthMiddleware;
