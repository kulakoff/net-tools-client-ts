import { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { MobileDatePicker } from "@mui/x-date-pickers/";
import { Controller, useForm } from "react-hook-form";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import {
  Tooltip,
  Button,
  Box,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Divider,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Modal,
  Collapse,
} from "@mui/material";

import { useTypedSelector } from "../../hooks/useTypedSelector";

import { useActions } from "../../hooks/useActions";
import CountersPopup from "../CountersPopup";
import SendCountersForm from "../SendCountersForm";
import SendMeters from "../SendMeters";
import { CounterFormData, ResponseCounterItem } from "../../types/counters";
import ShowMetersItemHistory from "../ShowMetersItemHistory";

type Props = {};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 360,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ShowMetersAll2 = (props: Props) => {
  const { counters } = useTypedSelector((state) => state);
  const {
    getCounters,
    sendCountersData,
    getCounterHistory,
    clearCountersSelectedItem,
  } = useActions();
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
    getCounterHistory(item.id);
  };

  const closeCounterHistoryPopup = () => {
    handleClosePopupHitory();
    clearCountersSelectedItem();
  };

  const showMetersPopup = (item: any) => {
    setCounterItem(item);
    handleOpenPopup();
  };
  const handleSendCounterData = (data: CounterFormData) => {
    sendCountersData(data);
    handleClosePopup();
  };

  useEffect(() => {
    getCounters();
  }, []);

  return (
    // <Box>
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography component="div" variant="overline">
            Приборы учета
          </Typography>
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="a dense table"
            >
              <caption>Приборы учета электроэнергии на узлах связи LanTa оснащены удаленным сбором показаний</caption>
              <TableHead>
                <TableRow>
                  <TableCell>_id</TableCell>
                  {/* <TableCell align="left">ID</TableCell> */}
                  <TableCell align="left">Модель</TableCell>
                  <TableCell align="left">Серийный номер</TableCell>
                  <TableCell align="left">Адрес</TableCell>
                  <TableCell align="left">Телеметрия</TableCell>
                  <TableCell align="center">Показания прибора учета</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {counters.data &&
                  counters.data.map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.id}
                      </TableCell>
                      {/* <TableCell align="left">{row.id}</TableCell> */}
                      <TableCell align="left">{row.model}</TableCell>
                      <TableCell align="left">{row.serial_number}</TableCell>
                      <TableCell align="left">{row.address}</TableCell>
                      <TableCell align="center">
                        {row.telemetry ? "✅" : "⛔️"}
                      </TableCell>
                      <TableCell align="left">
                        {
                          <>
                            <Tooltip title="История показаний">
                              <Button
                                variant="text"
                                onClick={() => showCounterHistoryPopup(row)}
                              >
                                📅
                              </Button>
                            </Tooltip>
                            
                            {!row.telemetry && (
                              <Tooltip title="Передать показания вручную">
                                <Button
                                  variant="text"
                                  onClick={() => showMetersPopup(row)}
                                >
                                  🚀
                                </Button>
                              </Tooltip>
                            )}
                          </>
                        }
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
      {/* <BasicModal
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        payload={counterItem}
      /> */}
      <CountersPopup
        openPopup={openPopup}
        handleClose={handleClosePopup}
        title={"Передать показания прибора учета"}
      >
        <SendCountersForm
          isLoading={counters.isLoading}
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
        <ShowMetersItemHistory />
      </CountersPopup>
    </>
    // </Box>
  );
};


export default ShowMetersAll2;
