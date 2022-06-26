import { FC, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
export interface IDialogComponentProps {
  open: boolean;
  title?: string;
  content?: string;
  handlerClose: () => void;
  handlerActionAccept: () => void;
}

const DialogComponent: FC<IDialogComponentProps> = ({
  open,
  title = "Вы уверены?",
  content ,
  handlerClose,
  handlerActionAccept,
}) => {
  //   const [open, setOpen] = useState(false);

  //   const handleClickOpen = () => {
  //     setOpen(true);
  //   };

  //   const handleClose = () => {
  //     setOpen(false);
  //   };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handlerClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handlerClose}>Отмена</Button>
          <Button onClick={handlerActionAccept} autoFocus>
            Да
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DialogComponent;
