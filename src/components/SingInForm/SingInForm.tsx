// import { useEffect, useState } from "react";
import {
  Typography,
  Container,
  Avatar,
  Button,
  TextField,
  Grid,
  Box,
  CssBaseline,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { NavLink } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from "./validation";
import { FC, useEffect } from "react";
import { ISignInForm } from "../../types/user";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";

interface ISignInFormProps {
  onSubmitHandler: (formData: ISignInForm) => void;
  fetchError: FetchBaseQueryError;
}

const SingInForm: FC<ISignInFormProps> = ({ onSubmitHandler, fetchError }) => {
  // const navigate = useNavigate();
  const handlerErrorForm = (errorData: any) => {
    Object.keys(errorData).forEach((key) => {
      setError(key, { type: "manual", message: errorData[key] });
    });
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmitForm = async (data: any) => {
    onSubmitHandler(data);
  };

  useEffect(() => {
    if (fetchError?.data) {
      handlerErrorForm((fetchError.data as any).errors);
    }
  }, [fetchError]);

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

        <Box component="form" onSubmit={handleSubmit(onSubmitForm)}>
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
                    autoFocus={false}
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
                fullWidth
                size="large"
                // disabled={user.isLoading}
              >
                Войти
              </Button>

              <Button
                color="inherit"
                variant="text"
                type="submit"
                fullWidth
                size="large"
                component={NavLink}
                to="/signup"
                // sx={{ ml: 2 }}
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

export default SingInForm;
