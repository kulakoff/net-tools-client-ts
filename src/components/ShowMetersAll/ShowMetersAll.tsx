import * as React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { MobileDatePicker } from "@mui/x-date-pickers/";
import { Controller, useForm } from "react-hook-form";
import {
  Button,
  Box,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Divider,
} from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from "./validation";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import { useActions } from "../../hooks/useActions";

type Props = {};

const ShowMetersAll = (props: Props) => {
  const { counters } = useTypedSelector((state) => state);
  const { getCounters } = useActions();
  console.log(counters);
  React.useEffect(() => {
    getCounters();
  }, []);
  // const [value, setValue] = React.useState<Date | null>(null);

  // const {
  //   control,
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  //   setError,
  // } = useForm({
  //   resolver: yupResolver(validationSchema),
  // });

  // const onSubmit = async (data: any) => {
  //   console.log("data on form : ", data.metersDate);
  //   alert(data.metersDate);
  // };

  return (
    // <Box>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography marginBottom="1rem">Приборы учета</Typography>

        <Box sx={{ width: "100%", maxWidth: 460, bgcolor: "background.paper" }}>
          {counters.data ? (
            <List>
              {counters.data.map((item, index) => (
                <ListItem disablePadding key={index} sx={{display:"flex", flexDirection:"column"}}>
                  <ListItemButton>
                    <ListItemText primary="Адрес:"
                    secondary={item.address}/>
                    <ListItemText
                    primary={item.serial_number}/>
                    {/* <ListItemText
                      primary={item.address}
                      secondary={
                        <Typography color={"grey"}>
                          Серийный номер: {item.serial_number}
                        </Typography>
                      }
                    /> */}
                  </ListItemButton>
                </ListItem>
              ))}

              {/* <ListItem disablePadding>
                <ListItemButton component="a" href="#simple-list">
                  <ListItemText primary="Spam" />
                </ListItemButton>
              </ListItem> */}
            </List>
          ) : (
            "NULL"
          )}
        </Box>

        {/* <Box component="form" onSubmit={handleSubmit(onSubmit)}>
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
        </Box> */}
      </Grid>
    </Grid>
    // </Box>
  );
};

export default ShowMetersAll;
