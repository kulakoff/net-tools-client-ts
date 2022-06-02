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
import { FC, ReactNode, useState } from "react";

//
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
  const { getDevice, setDevice, clearDeviceData } = useActions();

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
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Controller
                name="idType"
                control={control}
                defaultValue="macAddress"
                render={({ field }) => (
                  <Select {...field} required fullWidth>
                    <MenuItem value={"macAddress"}>mac address</MenuItem>
                    <MenuItem value={"serialNumber"} disabled>
                      serial number
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
                    // error={Boo lean(errors.value?.message)}
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
                // disabled={user.isLoading}
              >
                Поиск
              </Button>
            </Grid>
          </Grid>
        </Box>
      ) : (
        <Box sx={{ mt: "1.6rem" }}>
          <Devicecard {...device.cpe} handlerBackToHome={()=>handlerBackToHome()} />
        </Box>
      )}
    </Container>
  );
};

export default DevicesPage;
