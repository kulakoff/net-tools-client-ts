import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import { FC, ReactNode, useEffect, useState } from "react";

//
import { ToastContainer, toast } from "react-toastify";

import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from "./validation";
import { useForm, Controller } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import Devicecard from "../../components/DeviceCard";

type Props = {};

const DevicesPage = (props: Props) => {
  // const [text, setText] = useState<string>("");
  const navigate = useNavigate();
  const { device } = useTypedSelector((state) => state);
  const { error } = device;

  const { getDevice, setDevice, clearDeviceData } = useActions();

  const notify = (message: string) =>
    toast.info(message, {
      position: "top-center",
      autoClose: 5000,
      closeButton: false,
      onClick: () => clearDeviceData(),
    });

  useEffect(() => {
    if (error) {
      console.log("error");
      notify(`🚀  ${error?.message}`);
    }
  }, [error]);

  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const handlerErrorForm = (errorData: any) => {
    console.log("demo", errorData);
    // setError("email",{type:"manual",message:errorData})
    Object.keys(errorData).forEach((key) => {
      setError(key, { type: "manual", message: errorData[key] });
    });
  };

  const onSubmit = async (data: any) => {
    console.log("data on form : ", data);
    getDevice(data);
  };

  /**
   * Обработчик кнопки "назад" очистка state  и переход на главную
   */
  const handlerBackToHome = () => {
    clearDeviceData();
    navigate("/devices");
  };

  return (
    <Container maxWidth="xs" component="main">
      {!device.cpe ? (
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{ mt: "1.6rem" }}
        >
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography variant="h5" component="h1">
                Поиск абонентского роутера
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="idType"
                control={control}
                defaultValue="macAddress"
                render={({ field }) => (
                  <Select {...field} required fullWidth size="small">
                    <MenuItem value={"macAddress"}>MAC Address</MenuItem>
                    <MenuItem value={"serialNumber"} disabled>
                      Serial Number
                    </MenuItem>
                  </Select>
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="value"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    required
                    size="small"
                    error={Boolean(errors.value?.message)}
                    fullWidth={true}
                    type="value"
                    label="value"
                    variant="outlined"
                    helperText={errors.value?.message}
                  />
                )}
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth={true}
                size="large"
                disabled={device.isLoading}
              >
                Поиск
              </Button>
            </Grid>
          </Grid>
        </Box>
      ) : (
        <Box sx={{ mt: "1.6rem" }}>
          <Devicecard
            {...device.cpe}
            handlerBackToHome={() => handlerBackToHome()}
          />
        </Box>
      )}
      <ToastContainer />
    </Container>
  );
};

export default DevicesPage;
