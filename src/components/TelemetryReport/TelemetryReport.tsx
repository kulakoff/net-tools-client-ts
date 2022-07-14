import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { FC } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { IResponseReportItem, ReportActions } from "../../types/counters";

type Props = {};

const ReportRow = (props: { row: IResponseReportItem }) => {
  const { row } = props;
  return (
    <TableRow
      key={row.id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell> {row.card_number}</TableCell>
      <TableCell> {row.address}</TableCell>
      <TableCell>
        {" "}
        {row.model} / {row.serial_number}
      </TableCell>
      <TableCell>
        {" "}
        {row.counters_data[1]?.value} / {row.counters_data[1]?.timestamp}
      </TableCell>
      <TableCell>
        {" "}
        {row.counters_data[0]?.value} / {row.counters_data[0]?.timestamp}
      </TableCell>
    </TableRow>
  );
};

const TelemetryReport: FC<Props> = (props) => {
  const { counters } = useTypedSelector((state) => state);
  const { getReport } = useActions();
  return (
    <>
      TelemetryReport
      <Button onClick={() => getReport(ReportActions.REPORT_CHECK_DATA)}>
        Сформировать отчет
      </Button>
      <Button disabled={counters.dataReport ? false : true}>
        Отправить отчет
      </Button>
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableCell align="left">№ П/П, карт.</TableCell>
            <TableCell align="left">Наименование, адрес объекта</TableCell>
            <TableCell align="left">Тип, заводской номер ПУ</TableCell>
            <TableCell align="left">Пред. показание</TableCell>
            <TableCell align="left">Последнеe показание</TableCell>
          </TableHead>
          <TableBody>
            {counters.dataReport &&
              counters.dataReport.map((row) => (
                <ReportRow key={row.id} row={row} />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TelemetryReport;
