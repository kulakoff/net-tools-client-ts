import React, { FC } from "react";
// import { useTypedSelector } from "../../hooks/useTypedSelector";
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  CircularProgress,
  Typography,
} from "@mui/material";
import {
  IResponseReportItem,
  IResponseTelemetryItem,
} from "../../types/counters";

export interface HistoryProps {
  telemetryItems: IResponseTelemetryItem[];
}

const ShowMetersItemHistory: FC<HistoryProps> = ({ telemetryItems }) => {
  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell align="left">Переденные показания</TableCell>
            <TableCell align="left">Дата</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {telemetryItems ? (
            telemetryItems.length>0?
            telemetryItems.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row" align="left">
                  {row.value}
                </TableCell>
                <TableCell component="th" scope="row" align="left">
                  {new Date(row.timestamp).toLocaleString("RU")}
                </TableCell>
              </TableRow>
            )):
            <Typography  variant="button" component="text" >
            Данные отсутствуют
          </Typography>
          ) : (
            <TableRow key={"row.id"}>
              <TableCell component="th" scope="row">
                <caption>
                  <CircularProgress />
                </caption>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ShowMetersItemHistory;
