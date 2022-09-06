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
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { red } from "@mui/material/colors";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import SyncLockIcon from "@mui/icons-material/SyncLock";
import QrCodeIcon from "@mui/icons-material/QrCode";
import { ToastContainer, toast } from "react-toastify";
import { FC, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IDevice, IDeviceResponse } from "../../types/response/IDeviceResponse";
import DeviceCardModal from "../DeviceCardModal";
//   import { useActions } from "../../hooks/useActions";
import DialogComponent from "../DialogComponent";
import AlertComponent from "../AlertComponent";

import "react-toastify/dist/ReactToastify.css";
import { color } from "@mui/system";
import { IFormSetDevice } from "../../types/cpe";

export interface DevicecardProps {
  handlerBackToHome: () => void;
  setCpe: (data: IFormSetDevice) => void;
  cpeData: IDeviceResponse;
}

const Devicecard: FC<DevicecardProps> = ({
  cpeData,
  handlerBackToHome,
  setCpe,
}) => {
  const wifiPass = cpeData.configMode._value;
  // const { setDevice } = useActions();
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

  //TODO сделать правки в deviceApi
  const handleChengeTemplate = () => {
    console.log("set shange config");
    if (cpeData.configMode._value !== "passwd")
    setCpe({
      serialNumber: cpeData._deviceInfo.serialNumber,
      macAddress: cpeData._deviceInfo.macAddress,
      configMode: "passwd",
    });
    // setDevice({
    //   serialNumber: props._deviceInfo.serialNumber,
    //   macAddress: props._deviceInfo.macAddress,
    //   configMode: "passwd",
    // });
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
          {/* <Typography>
              Manufacturer: {props._deviceInfo.manufacturer}
            </Typography> */}

          <List>
            <ListItem sx={{ pb: "0", pt: "0" }}>
              <ListItemText
                primary="Произодитель:"
                secondary={cpeData._deviceInfo.manufacturer}
              />
            </ListItem>
            <ListItem sx={{ pb: "0", pt: "0" }}>
              <ListItemText
                primary="Серийный номер:"
                secondary={cpeData._deviceInfo.serialNumber}
              />
            </ListItem>
            <ListItem sx={{ pb: "0", pt: "0" }}>
              <ListItemText
                primary="MAC адрес:"
                secondary={cpeData._deviceInfo.macAddress}
              />
            </ListItem>
          </List>

          {/* <Typography>
              Serial number: {props._deviceInfo.serialNumber}
            </Typography>
            <Typography> Mac address: {props._deviceInfo.macAddress}</Typography> */}
          <Divider>WiFi</Divider>
          <List>
            <ListItem sx={{ pb: "0", pt: "0" }}>
              <ListItemText
                primary="Имя сети:"
                secondary={`${cpeData.wifi.ssid2._value} / ${cpeData.wifi.ssid5?._value}`}
                primaryTypographyProps={{
                  variant: "subtitle1",
                }}
                secondaryTypographyProps={{
                  variant: "subtitle1",
                  // component: "body",
                }}
              />
              <ListItemText />
            </ListItem>
            <ListItem
              disabled={cpeData.configMode._value !== "passwd"}
              sx={{ pb: "0", pt: "0" }}
            >
              <ListItemText
                primary="Пароль:"
                secondary={
                  cpeData.configMode._value === "passwd" ? (
                    cpeData.wifi.keyPassphrase._value
                  ) : (
                    <Typography color={red[500]}>
                      {cpeData._deviceInfo.serialNumber}
                    </Typography>
                  )
                }
              />

              {/* <Typography>
                  {props.configMode._value === "passwd" ? (
                    props.wifi.keyPassphrase._value
                  ) : (
                    <Typography color={red[500]}>
                      {props._deviceInfo.serialNumber}
                    </Typography>
                  )}
                </Typography> */}
            </ListItem>
          </List>
          {/* <Typography>
              SSID: {props.wifi.ssid2._value} / {props.wifi.ssid5?._value}{" "}
            </Typography> */}
          {/* <Typography>
              Password:
              {props.configMode._value === "passwd" ? (
                props.wifi.keyPassphrase._value
              ) : (
                <Typography color={red[500]}>
                  {props._deviceInfo.serialNumber}
                </Typography>
              )}
            </Typography> */}
        </CardContent>
        <CardActions>
          <Tooltip title="Назад">
            <IconButton
              aria-label="back"
              size="large"
              onClick={() => {
                handlerBackToHome();
              }}
            >
              <ArrowBackIosIcon color="primary" />
            </IconButton>
          </Tooltip>

          <IconButton
            size="large"
            onClick={handlerDialogOpen}
            disabled={cpeData.configMode._value === "passwd" ? true : false}
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

          {/* <Button
              onClick={() => notify("🚀 Необходимо изменить базовый шаблон WiFi")}
            >
              informer test
            </Button> */}
        </CardActions>
      </Card>
      <DeviceCardModal
        openModal={openModal}
        handleOpenModal={() => handleOpenModal()}
        handleCloseModal={() => handleCloseModal()}
        payload={cpeData}
      />
      <DialogComponent
        handlerClose={() => handlerDialogClose()}
        open={isDialogOpen}
        handlerActionAccept={ handleChengeTemplate}
        content={` Изменить параметры типового шаблона WiFi.
           Для вступления изменений в силу необходимо выполнить сброс настроек CPE.`}
      />
      <ToastContainer />
    </>
  );
};
export default Devicecard;
