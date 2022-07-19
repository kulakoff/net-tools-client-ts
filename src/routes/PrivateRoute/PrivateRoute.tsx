import React, { FC } from "react";
import { Navigate, Route, RouteProps } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";

interface IPrivateRoureProps extends RouteProps {}

const PrivateRoute: FC<IPrivateRoureProps> = ({ ...rest }) => {
  const { user } = useTypedSelector((state) => state);
  if (user.user === null) return <Navigate to="/" />;
  return <Route {...rest} />;
};

export default PrivateRoute;
