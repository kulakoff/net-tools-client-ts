import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import {
  DatePicker,
  LocalizationProvider,
  MobileDateTimePicker,

} from "@mui/x-date-pickers";

import { Controller, useForm } from "react-hook-form";

import validationSchema from "./validation";
import { useState } from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

type Props = {};

const SendMeters = (props: Props) => {
  const { counters } = useTypedSelector((state) => state);
  const { sendCountersData } = useActions();
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
    // console.log("data on form : ", data);
    sendCountersData(data)
    // reset();
  };

  return (
    <Container maxWidth="xs" component="main">
      <Box>
        <Box sx={{ mb: "1.5rem" }}>
          <Typography component="h2" variant="h6">
            Выберите прибор учета
          </Typography>
          <Typography>гараж ул. Рылеева</Typography>
        </Box>

        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Controller
                // key="111"
                name="serialNember"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    required
                    error={Boolean(errors.serialNember?.message)}
                    fullWidth={true}
                    type="number"
                    label="Cерийный номер прибора учета"
                    variant="outlined"
                    helperText={errors.serialNember?.message}
                    // autoFocus
                  />
                )}
              />
            </Grid>

            <Grid item xs={12}>
              <Controller
                // key="222"
                name="metersCount"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    required
                    error={Boolean(errors.metersCount?.message)}
                    type="number"
                    fullWidth={true}
                    label="Показание прибора учета"
                    variant="outlined"
                    helperText={errors.metersCount?.message}
                  />
                )}
              />
            </Grid>

            <Grid item xs={12}>
              <Controller
                name="reportDate"
                defaultValue={new Date()}
                control={control}
                render={({ field }) => (
                  <LocalizationProvider dateAdapter={AdapterDateFns} >
                    <MobileDateTimePicker
                      {...field}
                      inputFormat="dd/MM/yyyy"
                      label="Дата передачи показаний"
                      value={field.value}
                      onChange={(e) => field.onChange(e)}
                      renderInput={(props) => (
                        <TextField
                          error={Boolean(errors.reportDate?.message)}
                          helperText={errors.reportDate?.message}
                          fullWidth
                          {...props}
                        />
                      )}
                    />
                  </LocalizationProvider>
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
              >
                Отправить
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};


export default SendMeters;
