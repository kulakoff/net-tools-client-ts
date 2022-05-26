import { useState } from "react";
import {
  Typography,
  Container,
  Avatar,
  Button,
  TextField,
  Link,
  Grid,
  Checkbox,
  Box,
  CssBaseline,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import FormControlLabel from "@mui/material/FormControlLabel";
import { NavLink, useNavigate } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { observer } from "mobx-react-lite";
// import { Context } from "../../index";
// import { useContext, useState } from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from "./validation";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

// const theme = createTheme();

// const handlerSingIn = () => {
//   console.log("Вы нажали кнопку ВОЙТИ");
// };

const SignIn = () => {
  const { user } = useTypedSelector((state) => state);
  const { singInUser, logoutUser } = useActions();
  const navigate = useNavigate();
  // console.log("state >> ", user);
  // console.log("singInUser >> ", singInUser);
  //   const { store } = useContext(Context);

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get("email"),
  //     password: data.get("password"),
  //   });
  // };

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
    singInUser(data);
    //TODO: сделать проверку на ошибку
    navigate("/", { replace: true });
  };

  return (
    <Container maxWidth="xs" component="main">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Box
              sx={{
                mb: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Требуется авторизация
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    required
                    error={Boolean(errors.email?.message)}
                    fullWidth={true}
                    type="email"
                    label="Адрес электроной почты"
                    variant="outlined"
                    helperText={errors.email?.message}
                  />
                )}
              />
            </Grid>

            <Grid item xs={12}>
              <Controller
                name="password"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    required
                    error={Boolean(errors.password?.message)}
                    type="password"
                    fullWidth={true}
                    label="Пароль"
                    variant="outlined"
                    helperText={errors.password?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                // fullWidth={true}
                size="large"
                disabled={user.isLoading}
              >
                Войти
              </Button>
              <Button
                color="inherit"
                variant="text"
                type="submit"
                size="large"
                component={NavLink}
                to="/signup"
                sx={{ ml: 2 }}
              >
                Создать учетную запись
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default observer(SignIn);
