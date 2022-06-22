import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Tooltip,
  Typography,
  IconButton,
} from "@mui/material";
import { red } from "@mui/material/colors";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import SyncLockIcon from "@mui/icons-material/SyncLock";
import QrCodeIcon from "@mui/icons-material/QrCode";
import { ToastContainer, toast } from "react-toastify";
import { FC, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IDeviceResponse } from "../../types/response/IDeviceResponse";
import DeviceCardModal from "../DeviceCardModal";
import { useActions } from "../../hooks/useActions";
import DialogComponent from "../DialogComponent";
import AlertComponent from "../AlertComponent";

import "react-toastify/dist/ReactToastify.css";

interface DevicecardProps extends IDeviceResponse {
  handlerBackToHome: () => void;
}

const Devicecard: FC<DevicecardProps> = (props) => {
  const wifiPass = props.configMode._value;
  const { setDevice } = useActions();
  const [openModal, setOpenModal] = useState<boolean>(false);

  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  useEffect(() => {
    if (wifiPass === "serial") {
      notify("🚀 Необходимо изменить базовый шаблон WiFi");
      console.log("is pass");
    }
  }, [wifiPass]);

  const notify = (message: string) =>
    toast.warn(message, { position: "top-center", autoClose: 5000 });
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  const handleChengeTemplate = () => {
    console.log("set shange config");
    if (props.configMode._value !== "passwd")
      setDevice({
        serialNumber: props._deviceInfo.serialNumber,
        macAddress: props._deviceInfo.macAddress,
        configMode: "passwd",
      });
    handlerDialogClose();
  };
  const handlerDialogClose = () => setIsDialogOpen(false);
  const handlerDialogOpen = () => setIsDialogOpen(true);

  return (
    <>
      {/* <AlertComponent /> */}
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Divider>CPE info</Divider>
          <Typography>
            Manufacturer: {props._deviceInfo.manufacturer}
          </Typography>
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
            {props.configMode._value === "passwd" ? (
              props.wifi.keyPassphrase._value
            ) : (
              <Typography color={red[500]}>
                {props._deviceInfo.serialNumber}
              </Typography>
            )}
          </Typography>
        </CardContent>
        <CardActions>
          <Tooltip title="Назад">
            <IconButton
              aria-label="back"
              size="large"
              onClick={() => {
                props.handlerBackToHome();
              }}
            >
              <ArrowBackIosIcon color="primary" />
            </IconButton>
          </Tooltip>

          <IconButton
            size="large"
            onClick={handlerDialogOpen}
            disabled={props.configMode._value == "passwd" ? true : false}
          >
            <Tooltip title="🚀 Изменить базовый шаблон WiFi">
              <SyncLockIcon color="primary" />
            </Tooltip>
          </IconButton>
          <IconButton size="large" onClick={() => setOpenModal(true)}>
            <Tooltip title="WiFi QR code">
              <QrCodeIcon color="primary" />
            </Tooltip>
          </IconButton>
          <Button
            onClick={() => notify("🚀 Необходимо изменить базовый шаблон WiFi")}
          >
            informer test
          </Button>
        </CardActions>
      </Card>
      <DeviceCardModal
        openModal={openModal}
        handleOpenModal={() => handleOpenModal()}
        handleCloseModal={() => handleCloseModal()}
        payload={props}
      />
      <DialogComponent
        handlerClose={() => handlerDialogClose()}
        open={isDialogOpen}
        handlerActionAccept={() => handleChengeTemplate()}
        content={
          "Изменить параметры типового шаблона WiFi? Длее выполните выполните сброс настроек CPE."
        }
      />
      <ToastContainer />
    </>
  );
};
export default Devicecard;
