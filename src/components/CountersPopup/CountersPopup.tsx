import { Dialog, DialogContent, DialogTitle, Typography } from "@mui/material";
import React, { FC, ReactNode } from "react";

type ICountersPopupProps = {
  openPopup: boolean;
  handleClose: () => void;
  title: string;
  children: any;
};

const CountersPopup: FC<ICountersPopupProps> = ({
  openPopup,
  title,
  children,
  handleClose,
}) => {
  return (
    <Dialog
      open={openPopup}
      onClose={handleClose}
      sx={{ minWidth: 500, minHeight: 500 }}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  );
};

export default CountersPopup;
