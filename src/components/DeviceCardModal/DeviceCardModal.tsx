import { FC, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { IDeviceResponse } from "../../types/response/IDeviceResponse";
import { Grid } from "@mui/material";
import QR from "../QR";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export interface DeviceCardModalProps {
  openModal: boolean;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  payload: IDeviceResponse;
}

const DeviceCardModal: FC<DeviceCardModalProps> = ({
  openModal,
  handleOpenModal,
  handleCloseModal,
  payload,
}) => {
  //   const [open, setOpen] = useState(false);
  //   const handleOpen = () => setOpen(true);
  //   const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModal}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <Box sx={style}>
            <Grid container >
              <Grid item xs={6} >
                <Typography>SSID: {payload.wifi.ssid2._value}</Typography>
                <QR
                  ssid={payload.wifi.ssid2._value}
                  password={payload.wifi.keyPassphrase._value}
                />
              </Grid>
              <Grid item  xs={6} >
                <Typography>SSID: {payload.wifi.ssid5._value}</Typography>
                <QR
                  ssid={payload.wifi.ssid5._value}
                  password={payload.wifi.keyPassphrase._value}
                />
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default DeviceCardModal;
