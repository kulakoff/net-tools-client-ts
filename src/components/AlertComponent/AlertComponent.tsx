import * as React from "react";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Stack from "@mui/material/Stack";

const AlertComponent = () => {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert
      role="alert"
        icon={<CheckIcon fontSize="inherit" />}
        severity="warning"
        onClick={() => console.log("alert click")}
        
      >
        This is a success alert — check it out!
      </Alert>
    </Stack>
  );
};

export default AlertComponent;
