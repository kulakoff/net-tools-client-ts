import { Box, Button } from "@mui/material";
import React, { FC } from "react";
import { toast, ToastContainer } from "react-toastify";

type Props = {};

const SignUpPage: FC<Props> = () => {
  const showMessage = () => {
    toast.info("message");
    console.log("showMessage")
  };
  return (
    <Box>
      <ToastContainer position="top-right" autoClose={5000} />
      <Button onClick={showMessage}>show message</Button>
    </Box>
  );
};

export default SignUpPage;
