import React from "react";
import { useNavigate } from "react-router-dom";
type Props = {};

const NotFoundPage = (props: Props) => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>NotFound Page</h1>
      <div>
        <button onClick={() => navigate("/")}>go to home</button>
      </div>
    </div>
  );
};

export default NotFoundPage;
