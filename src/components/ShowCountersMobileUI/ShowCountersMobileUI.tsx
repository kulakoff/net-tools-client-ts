import {
  Box,
  Container,
  FormControlLabel,
  FormGroup,
  Switch,
  Button,
  Stack,
  Typography,
  Paper,
  Divider,
  Tooltip,
  Checkbox,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { countersAPI } from "../../store/api/countersAPI";
import { CounterFormData, ResponseCounterItem } from "../../types/counters";
import CountersPopup from "../CountersPopup";

type Props = {};

const ShowCountersMobileUI = (props: Props) => {
  //TODO: получить приботы учета
  // const { counters } = useTypedSelector((state) => state);
  const [
    getCounters,
    {
      data: countersData,
      isLoading: isCountersLoading,
      isError: isCountersError,
      error: countersError,
    },
  ] = countersAPI.useLazyGetCountersQuery();
  const [openPopup, setOpenPopup] = useState(false);
  const [openPopupHitory, setOpenPopupHitory] = useState(false);
  const [counterItem, setCounterItem] = useState<ResponseCounterItem | null>(
    null
  );

  const handleOpenPopup = () => setOpenPopup(true);
  const handleClosePopup = () => setOpenPopup(false);

  const handleOpenPopupHitory = () => setOpenPopupHitory(true);
  const handleClosePopupHitory = () => setOpenPopupHitory(false);

  const showCounterHistoryPopup = (item: any) => {
    console.log(item);
    handleOpenPopupHitory();
    // getCounterHistory(item.id);
  };

  const closeCounterHistoryPopup = () => {
    handleClosePopupHitory();
    // clearCountersSelectedItem();
  };
  const showMetersPopup = (item: any) => {
    setCounterItem(item);
    handleOpenPopup();
  };
  const handleSendCounterData = (data: CounterFormData) => {
    // sendCountersData(data);
    handleClosePopup();
  };

  useEffect(() => {
    getCounters(null);
  }, []);

  return (
    <Container maxWidth="xs">
      <Box>
        <FormGroup sx={{ pb: "1rem" }}>
          <FormControlLabel
            control={<Switch />}
            label="Только счетчики без телеметрии"
          />
          <Button>Добавить</Button>
        </FormGroup>

        <Stack spacing={2}>
          {countersData &&
            countersData.map((item) => (
              <Paper
                sx={{ textAlign: "left", p: "1rem" }}
                elevation={5}
                variant="elevation"
              >
                <Typography> Адрес: {item.address}</Typography>
                <Typography>Серийный номер: {item.serial_number} </Typography>
                <Typography>Модель: {item.model} </Typography>
                <Typography>
                  🚧 Телеметрия: <Checkbox checked={item.telemetry} />
                </Typography>
                <Divider />
                <Box>
                  <Tooltip title="Передать показания для приборов не оснащеннх телеметрией">
                    <Button
                      fullWidth
                      disabled={item.telemetry}
                      onClick={() => showMetersPopup(item)}
                    >
                      🚀 Передать показания
                    </Button>
                  </Tooltip>

                  <Button
                    fullWidth
                    onClick={() => showCounterHistoryPopup(item)}
                  >
                    📅 История переданных показаний
                  </Button>
                </Box>
              </Paper>
            ))}
        </Stack>
      </Box>

      <CountersPopup
        openPopup={openPopup}
        handleClose={handleClosePopup}
        title={"Передать показания прибора учета"}
      >
        {/* <SendCountersForm
          isLoading={counters.isLoading}
          counterItem={counterItem}
          sendFormData={(data) => handleSendCounterData(data)}
          // sendCountersData_={((data:CounterFormData)=>console.log(data))}
        /> */}
      </CountersPopup>
      <CountersPopup
        openPopup={openPopupHitory}
        handleClose={closeCounterHistoryPopup}
        title={"История переданных показаний"}
      >
        {/* <ShowMetersItemHistory /> */}
      </CountersPopup>
    </Container>
  );
};

export default ShowCountersMobileUI;
