import React, { FC, ReactNode } from "react";
import { useAppSelector } from "../../hooks/redux";

type Props = {};

const MainPage: FC<ReactNode> = (props: Props) => {
  const { user } = useAppSelector((state) => state.userState);
  return (
    <div>
      <h1>MainPage</h1>
    </div>
  );
};

export default MainPage;
