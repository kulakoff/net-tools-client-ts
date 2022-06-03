import { Box, Paper } from "@mui/material";
import React from "react";

type Props = {};

const SendMeters = (props: Props) => {
  return (
    <div>
      <h2>SendMeters</h2>
      Передать показания приборов учета
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 128,
            height: 128,
          },
        }}
      >
        <Paper />
        <Paper elevation={3}>qqq</Paper>
      </Box>
    </div>
  );
};

export default SendMeters;
