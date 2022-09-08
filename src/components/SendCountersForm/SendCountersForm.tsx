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
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';

import {
  DatePicker,
  LocalizationProvider,
  MobileDateTimePicker,
} from "@mui/x-date-pickers";

import { Controller, useForm } from "react-hook-form";

import validationSchema from "./validation";
import { useState } from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// import { useTypedSelector } from "../../hooks/useTypedSelector";
// import { useActions } from "../../hooks/useActions";
import { CounterFormData, ResponseCounterItem } from "../../types/counters";
import { useAppSelector } from "../../hooks/redux";

interface SendMetersProps {
  isLoading: boolean;
  counterItem: ResponseCounterItem | null;
  sendFormData: (data: CounterFormData) => void;
}

const SendCountersForm = ({
  isLoading,
  counterItem,
  sendFormData,
}: SendMetersProps) => {
  // debugger
  // const { counters } = useAppSelector((state) => state);
  // const { sendCountersData } = useActions();
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm<CounterFormData>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data: CounterFormData) => {
    console.log("data on form : ", data);
    sendFormData(data);
    reset();
  };

  return (
    <Container maxWidth="xs" component="main" sx={{display: "flex", justifyContent:"space-between"}}>
      <Box>
        <Box sx={{ mb: "1.5rem" }}>
          <Typography variant="caption" component="div">
            Адрес:
          </Typography>
          <Typography variant="subtitle1" component="div">
            {counterItem?.address}
          </Typography>
        </Box>

        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Controller
                key="111"
                name="serial_number"
                control={control}
                defaultValue={counterItem?.serial_number}
                render={({ field }) => (
                  <TextField
                    {...field}
                    required
                    error={Boolean(errors.serial_number?.message)}
                    fullWidth={true}
                    type="string"
                    // type="hidden"
                    label="Cерийный номер прибора учета"
                    variant="outlined"
                    helperText={errors.serial_number?.message}
                    // value={counterItem?.serial_number}
                    // sx={{display:"none"}}
                    autoFocus
                  />
                )}
              />
            </Grid>

            <Grid item xs={12}>
              <Controller
                key="222"
                name="value"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    required
                    error={Boolean(errors.value?.message)}
                    type="number"
                    fullWidth={true}
                    label="Показание прибора учета"
                    variant="outlined"
                    helperText={errors.value?.message}
                    autoFocus
                  />
                )}
              />
            </Grid>

            <Grid item xs={12}>
              <Controller
                name="timestamp"
                defaultValue={new Date()}
                control={control}
                render={({ field }) => (
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <MobileDateTimePicker
                      {...field}
                      inputFormat="dd/MM/yyyy"
                      label="Дата передачи показаний"
                      value={field.value}
                      onChange={(e) => field.onChange(e)}
                      renderInput={(props) => (
                        <TextField
                          error={Boolean(errors.timestamp?.message)}
                          helperText={errors.timestamp?.message}
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
              <LoadingButton
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
                size="large"
                loading={isLoading}
                endIcon={<SendIcon/>}
              >
                Отправить
              </LoadingButton>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default SendCountersForm;