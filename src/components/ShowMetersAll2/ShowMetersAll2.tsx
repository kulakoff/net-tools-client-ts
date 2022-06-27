import * as React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { MobileDatePicker } from "@mui/x-date-pickers/";
import { Controller, useForm } from "react-hook-form";
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
} from "@mui/material";

import { useTypedSelector } from "../../hooks/useTypedSelector";

import { useActions } from "../../hooks/useActions";
import CountersPopup from "../CountersPopup";
import SendCountersForm from "../SendCountersForm";

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

export interface IBasicModalProps {
  open: boolean;
  payload: any;
  handleOpen: () => void;
  handleClose: () => void;
}
export function BasicModal({
  open,
  handleOpen,
  handleClose,
  payload,
}: IBasicModalProps) {
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Отправить показания прибора учета
          </Typography>
          <Typography id="modal-modal-description" sx={{ m: 2 }}>
            Адрес: {payload?.address}
          </Typography>
          <TextField id="outlined-basic" label="Serial" variant="outlined" value={payload?.serial_number} />
          <TextField id="outlined-basic" label="value" variant="outlined"  type={"number"}/>
          <Button>send</Button>
        </Box>
      </Modal>
    </div>
  );
}

const ShowMetersAll2 = (props: Props) => {
  const { counters } = useTypedSelector((state) => state);
  const { getCounters } = useActions();

  const [open, setOpen] = React.useState(false);
  const [counterItem, setCounterItem] = React.useState<any>(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const showMetersPopup = (item: any) => {
    setCounterItem(item);
    handleOpen();
  };

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
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography marginBottom="1rem">
            Приборы учета (test table)
          </Typography>
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>_id</TableCell>
                  {/* <TableCell align="left">ID</TableCell> */}
                  <TableCell align="left">Модель</TableCell>
                  <TableCell align="left">Серийный номер</TableCell>
                  <TableCell align="left">Адрес</TableCell>
                  <TableCell align="left">Телеметрия</TableCell>
                  <TableCell align="center">Передать показания</TableCell>
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
                        {!row.telemetry && (
                          <Tooltip title="Передать показания вручную">
                            <Button onClick={() => showMetersPopup(row)}>
                              🚀
                            </Button>
                          </Tooltip>
                        )}
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
      openPopup={open}
      handleClose={handleClose}
      title={"Передать показания прибора учета"}
     
      >
        <SendCountersForm/>
      </CountersPopup>
    </>
    // </Box>
  );
};

export default ShowMetersAll2;
