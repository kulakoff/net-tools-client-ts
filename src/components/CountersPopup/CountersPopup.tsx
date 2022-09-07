import { Container, Dialog, DialogContent, DialogTitle, Typography } from "@mui/material";
import React, { FC, ReactNode } from "react";

type ICountersPopupProps = {
  openPopup: boolean;
  handleClose: () => void;
  title: string;
  children: ReactNode;
  payload?:any
};

const CountersPopup: FC<ICountersPopupProps> = ({
  openPopup,
  title,
  children,
  handleClose,
  payload,
}) => {
  return (
    <Dialog
      open={openPopup}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle>
        <Typography variant="overline" component="div">
          {title}
        </Typography>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>

  );
};

export default CountersPopup;