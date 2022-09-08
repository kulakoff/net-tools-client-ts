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
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { countersAPI } from "../../store/api/countersAPI";
import { clearCounterHistory } from "../../store/reducers/countersSlice";
import {
  CounterFormData,
  IResponseSendTelemetryReport,
  ISendMetersDataForm,
  ResponseCounterItem,
} from "../../types/counters";
import CountersPopup from "../CountersPopup";
import SendCountersForm from "../SendCountersForm";
import ShowMetersItemHistory from "../ShowMetersItemHistory/ShowMetersItemHistory";

type Props = {};

const ShowCountersMobileUI = (props: Props) => {
  const dispatch = useAppDispatch();
  //Получение приборов учета
  const [
    getCounters,
    {
      data: countersData,
      isLoading: isCountersLoading,
      isError: isCountersError,
      error: countersError,
    },
  ] = countersAPI.useLazyGetCountersQuery();

  //Получение истории показаний выбранного прибора учета
  const [
    getCounterItemHistory,
    {
      data: counterHistoryData,
      isSuccess: isGetHistorySuccess,
      isLoading: isGetHistoryLoading,
      isError: isGetHistoryError,
      error: getHistoryError,
    },
  ] = countersAPI.useLazyGetCounterItemHistoryQuery();

  //Отправка показаний прибора учета
  const [
    sentTelemetry,
    {
      data: sendTelemetryData,
      isLoading: isSendTelemetryLoading,
      isError: isSendTelemetryError,
      error: sendTelemetryError,
    },
  ] = countersAPI.useSentTelemetryMutation();

  //История показаний выбранного счетчика
  const { telemetry } = useAppSelector((state) => state.countersState);

  const [openPopup, setOpenPopup] = useState(false);
  const [openPopupHitory, setOpenPopupHitory] = useState(false);
  const [counterItem, setCounterItem] = useState<ResponseCounterItem | null>(
    null
  );

  const handleOpenPopup = () => setOpenPopup(true);
  const handleClosePopup = () => setOpenPopup(false);

  const handleOpenPopupHitory = () => setOpenPopupHitory(true);
  const handleClosePopupHitory = () => setOpenPopupHitory(false);

  const showCounterHistoryPopup = (item: ResponseCounterItem) => {
    console.log(item);
    getCounterItemHistory(item.id);
    handleOpenPopupHitory();
    // getCounterHistory(item.id);
  };

  const closeCounterHistoryPopup = () => {
    handleClosePopupHitory();
    //TODO: сделать очистку state истории показаний прибора учета
    dispatch(clearCounterHistory());
    // clearCountersSelectedItem();
  };
  const showMetersPopup = (item: any) => {
    setCounterItem(item);
    handleOpenPopup();
  };
  const handleSendCounterData = (data: CounterFormData) => {
    console.log(":: Data from counter form: ", data);
    const telemetryData: ISendMetersDataForm = {
      payload: {
        serial_number: data.serial_number,
        value: data.value,
      },
    };
    console.log(":: Data modifyed: ", telemetryData);
    sentTelemetry(telemetryData)
      .then((response) => {
        console.log("sendTelemetryData: ", (response as any).data.message);
        toast.success((response as any).data.message);
      })
      .finally(() => handleClosePopup());
  };

  useEffect(() => {
    getCounters(null);
  }, []);

  return (
    <Container maxWidth="xs">
      <Typography component="div" variant="overline">
        Приборы учета | версия mobile
      </Typography>
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
        <SendCountersForm
          isLoading={isCountersLoading}
          counterItem={counterItem}
          sendFormData={(data) => handleSendCounterData(data)}
          // sendCountersData_={((data:CounterFormData)=>console.log(data))}
        />
      </CountersPopup>
      <CountersPopup
        openPopup={openPopupHitory}
        handleClose={closeCounterHistoryPopup}
        title={"История переданных показаний"}
      >
        <ShowMetersItemHistory telemetryItems={telemetry} />
      </CountersPopup>
    </Container>
  );
};

export default ShowCountersMobileUI;
