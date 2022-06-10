import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import validationSchema from "./validation";

type Props = {};

const SendMeters = (props: Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data: any) => {
    console.log("data on form : ", data);
    // singInUser(data);
    // reset();
  };

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box>
            <Typography variant="h6" component="h2">
              Выберите прибор учета:
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box component="form" onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Controller
                
                  name="metersCount1"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      required
                      error={Boolean(errors.metersCount1?.message)}
                      fullWidth={true}
                    
                      // name="metersCount"
                      type="number"
                      label="Счетчик 1"
                      variant="outlined"
                      helperText={
                        errors.metersCount1?.message || "Сериный номер: 1111"
                      }
                    />
                  )}
                />
              </Grid>

              {/* <Grid item xs={12}>
                <Controller
                  name="metersCount"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      required
                      error={Boolean(errors.metersCount?.message)}
                      fullWidth={true}
                      name="metersCount2"
                      type="number"
                      label="Счетчик 1"
                      variant="outlined"
                      helperText={
                        errors.metersCount?.message || "Сериный номер: 222"
                      }
                    />
                  )}
                />
              </Grid> */}

              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                  size="large"
                >
                  Отправить показания
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SendMeters;
