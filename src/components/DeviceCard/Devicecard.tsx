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
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IDeviceResponse } from "../../types/response/IDeviceResponse";
import DeviceCardModal from "../DeviceCardModal";
import { useActions } from "../../hooks/useActions";
import DialogComponent from "../DialogComponent";

interface DevicecardProps extends IDeviceResponse {
  handlerBackToHome: () => void;
}

const Devicecard: FC<DevicecardProps> = (props) => {
  const { setDevice } = useActions();
  const [openModal, setOpenModal] = useState<boolean>(false);

  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

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
      <Card sx={{ maxWidth: 345 }}>
        {/* <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        iThunk Callback after dispatching an actionmage="https://picsum.photos/350/200"
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
          <IconButton
            aria-label="back"
            size="large"
            onClick={() => {
              props.handlerBackToHome();
            }}
          >
            <ArrowBackIosIcon color="primary" />
          </IconButton>
          <IconButton
            size="large"
            onClick={handlerDialogOpen}
            disabled={props.configMode._value == "passwd" ? true : false}
          >
            <Tooltip title="Изменить базовый шаблон WiFi">
              <SyncLockIcon color="primary" />
            </Tooltip>
          </IconButton>
          <IconButton size="large" onClick={() => setOpenModal(true)}>
            <Tooltip title="WiFi QR code">
              <QrCodeIcon color="primary" />
            </Tooltip>
          </IconButton>
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
        content={"Изменить параметры типового шаблона WiFi?"}
      />
    </>
  );
};
export default Devicecard;
