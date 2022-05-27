import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
type Props = {};

const NotFoundPage = (props: Props) => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>NotFound Page</h1>
      <div>
        <Button onClick={() => navigate("/")}>Go to Home</Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
