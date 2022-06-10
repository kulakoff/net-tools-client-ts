import * as React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { MobileDatePicker } from "@mui/x-date-pickers/";
import { Controller, useForm } from "react-hook-form";
import { Button, Box, Typography, Grid } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from "./validation";

type Props = {};

const ShowMeters = (props: Props) => {
  const [value, setValue] = React.useState<Date | null>(null);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data: any) => {
    console.log("data on form : ", data.metersDate);
    alert(data.metersDate);
  };

  return (
    // <Box>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography marginBottom="1rem">
          Просмотр показаний приборов учета
        </Typography>

        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Controller
                name="metersDate"
                defaultValue={new Date()}
                control={control}
                render={({ field }) => (
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <MobileDatePicker
                      {...field}
                      inputFormat="dd/MM/yyyy"
                      label="Дата"
                      value={field.value}
                      onChange={(e) => field.onChange(e)}
                      renderInput={(props) => (
                        <TextField
                          error={Boolean(errors.metersDate?.message)}
                          helperText={errors.metersDate?.message}
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
              <Button type="submit" fullWidth variant="contained">
                Поиск
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
    // </Box>
  );
};

export default ShowMeters;
