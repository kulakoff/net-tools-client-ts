import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Modal,
  Typography,
  IconButton,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import QrCodeIcon from "@mui/icons-material/QrCode";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IDeviceResponse } from "../../types/response/IDeviceResponse";
import DeviceCardModal from "../DeviceCardModal";

interface DevicecardProps extends IDeviceResponse {}

const Devicecard: FC<DevicecardProps> = (props) => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        {/* <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://picsum.photos/350/200"
      /> */}
        <CardContent>
          <Divider>CPE info</Divider>
          <Typography> Reg Data: {props.createDateTime}</Typography>
          <Typography>
            Serial number: {props._deviceInfo.serialNumber}
          </Typography>
          <Typography> Mac address: {props._deviceInfo.macAddress}</Typography>
          <Divider>WiFi</Divider>
          <Typography>
            SSID: {props.wifi.ssid2._value} / {props.wifi.ssid5?._value}{" "}
          </Typography>
          <Typography>
            Password:
            {props.configMode._value === "passwd"
              ? props.wifi.keyPassphrase._value
              : props._deviceInfo.serialNumber}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton
            aria-label="back"
            size="large"
            onClick={() => {
              navigate("/");
            }}
          >
            <ArrowBackIosIcon />
          </IconButton>
          <Button size="small">Изменить настройки шаблона</Button>
          <IconButton size="small" onClick={() => setOpenModal(true)}>
            <QrCodeIcon color="primary" />
          </IconButton>
        </CardActions>
      </Card>
      <DeviceCardModal
        openModal={openModal}
        handleOpenModal={() => handleOpenModal()}
        handleCloseModal={() => handleCloseModal()}
        payload={props}
      />
    </>
  );
};
export default Devicecard;
function usestate(arg0: boolean): [any, any] {
  throw new Error("Function not implemented.");
}
