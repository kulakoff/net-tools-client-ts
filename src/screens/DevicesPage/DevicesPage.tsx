import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Button,
  Container,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Devicecard from "../../components/DeviceCard/Devicecard";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { deviceAPI } from "../../store/api/deviceAPI";
import { IFormSetDevice } from "../../types/cpe";
import { setCPE,clearCPE } from "../../store/reducers/deviceSlice";

import validationSchema from "./validation";

type Props = {};

const DevicesPage = (props: Props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { cpe:cpeData } = useAppSelector((state) => state.deviceState);
  const [
    getDevice,
    {
      // data: cpeData,
      isSuccess: isGetDeviceSiccess,
      isLoading: isGetDeviceLoading,
      isError: isGetDeviceError,
      error: getDeviceError,
    },
  ] = deviceAPI.useLazyGetDeviceQuery();
  const [
    setDevice,
    {
      data: isSetDeviceData,
      isLoading: isSetDeviceLoading,
      isError: isSetDeviceError,
      error: setDeviceError,
    },
  ] = deviceAPI.useSetDeviceMutation();

  // const { device } = useTypedSelector((state) => state);
  // const { error } = device;
  // const { getDevice, setDevice, clearDeviceData } = useActions();

  const notify = (message: string) =>
    toast.info(message, {
      position: "top-center",
      autoClose: 5000,
      closeButton: false,

      // onClick: () => clearDeviceData(),
    });

  //Ошибка API запроса
  useEffect(() => {
    if (isGetDeviceError) {
      console.log("error: ", (getDeviceError as any).data?.message);
      notify(`🚀  ${(getDeviceError as any).data?.message}`);
    }
  }, [getDeviceError, isGetDeviceError]);

  // useEffect(()=>dispatch(setCPE(cpeData)),[cpeData])

  const {
    reset,
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const handlerErrorForm = (errorData: any) => {
    //TODO: добавить всплывашку с ошибкой
    console.log("demo", errorData);
    // setError("email",{type:"manual",message:errorData})
    Object.keys(errorData).forEach((key) => {
      setError(key, { type: "manual", message: errorData[key] });
    });
  };

  const onSubmit = async (data: any) => {
    //TODO добавить обработку POST запроса
    await getDevice(data);
  };

  //TODO: сделаьб срос state device
  /**
   * Обработчик кнопки "назад" очистка state  и переход на главную
   */
  const handlerBackToHome = () => {
    // clearDeviceData();
    dispatch(clearCPE())
    dispatch(deviceAPI.util.resetApiState());
    navigate("/devices");
  };

  return (
    <Container maxWidth="xs" component="main">
      {!cpeData ? (
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
                    inputProps={<Button>X</Button>}
                    required
                    size="small"
                    error={Boolean(errors.value?.message)}
                    fullWidth={true}
                    type="value"
                    label="value"
                    variant="outlined"
                    helperText={errors.value?.message || "Укажтите MAC роутера"}
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
                disabled={isGetDeviceLoading}
              >
                Поиск
              </Button>
              <Button
                onClick={() => reset()}
                variant="outlined"
                fullWidth={true}
                size="large"
                disabled={isGetDeviceLoading}
              >
                Сброс
              </Button>
              <Button
                onClick={() => navigate("/")}
                variant="text"
                fullWidth={true}
                size="large"
                disabled={isGetDeviceLoading}
              >
                Назад
              </Button>
            </Grid>
          </Grid>
        </Box>
      ) : (
        <Box sx={{ mt: "1.6rem" }}>
          <Devicecard
            cpeData={cpeData}
            handlerBackToHome={handlerBackToHome}
            setCpe={async (data: IFormSetDevice) => await setDevice(data)}
          />
        </Box>
      )}
    </Container>
  );
};

export default DevicesPage;
