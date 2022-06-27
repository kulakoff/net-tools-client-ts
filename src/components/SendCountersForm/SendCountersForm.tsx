import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 360,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

type Props = {};

const SendCountersForm = (props: Props) => {
  return (
    <Box >
       <Typography id="modal-modal-description" sx={{ m: 2 }}>
        Адрес: тест_ тест
      </Typography>
      <TextField
        id="outlined-basic"
        label="Serial"
        variant="outlined"
        // value={payload?.serial_number}
      />
      <TextField
        id="outlined-basic"
        label="value"
        variant="outlined"
        type={"number"}
      />
      <Button>send</Button>
    </Box>
  );
};

export default SendCountersForm;
