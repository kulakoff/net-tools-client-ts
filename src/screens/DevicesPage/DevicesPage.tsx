import { Box, Button, Container, Grid, TextField } from "@mui/material";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import { useState } from "react";

//
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from "./validation";
import { useForm, Controller } from "react-hook-form";
import { NavLink } from "react-router-dom";

type Props = {};

const DevicesPagesimple = (props: Props) => {
  // const [text, setText] = useState<string>("");

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
  };

  return (
    <Container maxWidth="xs" component="main">
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ mt: "1.6rem" }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Controller
              name="macAddress"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  required
                  error={Boolean(errors.macAddress?.message)}
                  fullWidth={true}
                  type="macAddress"
                  label="Mac address"
                  variant="outlined"
                  helperText={errors.macAddress?.message}
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
    </Container>
  );
};

const DevicesPage = ()=> {

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
  };

  return (
    <Container maxWidth="xs" component="main">
<DevicesPagesimple/>
    </Container>
  )
}


export default DevicesPage;
