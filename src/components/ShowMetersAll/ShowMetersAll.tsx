import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { MobileDatePicker } from "@mui/x-date-pickers/";
import { Controller, useForm } from "react-hook-form";
import {
  Paper,
  Button,
  Box,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Divider,
  Stack,
  Switch,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import { styled } from "@mui/material/styles";

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

  return (
    <Box sx={{ width: "100%" }}>
      <FormGroup>
        <FormControlLabel
          control={<Switch />}
          label="Только счетчики без телеметрии 🚧"
        />
      </FormGroup>

      <Stack spacing={2}>
        {counters.data && counters.data.map((item)=>(
          <Paper sx={{ textAlign: "left", p: "1rem" }}>
          🚧
          <Typography>{item.address}</Typography>
          <Typography>Серийный номер: {item.serial_number} </Typography>
          <Button disabled={item.telemetry}>🚀 Передать показания </Button>
          <Button>📅 Просмотр истории показаний</Button>
        </Paper>
        ))}

        
      </Stack>
    </Box>
  );
};

export default ShowMetersAll;
