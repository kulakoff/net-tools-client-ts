import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { FC } from "react";
import { toast } from "react-toastify";
import { reportAPI } from "../../store/api/reportAPI";
//   import { useActions } from "../../hooks/useActions";
//   import { useTypedSelector } from "../../hooks/useTypedSelector";
import {
  IRequestSendTelemetryReport,
  IResponseReportItem,
  ReportActions,
} from "../../types/counters";

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
        {row.model} / {row.serial_number}
      </TableCell>
      <TableCell>
        {row.counters_data[1]?.value} /{" "}
        {new Date(row.counters_data[1]?.timestamp).toLocaleString("RU")}
      </TableCell>
      <TableCell>
        {row.counters_data[0]?.value} /{" "}
        {new Date(row.counters_data[0]?.timestamp).toLocaleString("RU")}
      </TableCell>
    </TableRow>
  );
};

const TelemetryReport: FC<Props> = (props) => {
  // const { counters } = useTypedSelector((state) => state);
  // const { getReport,sendTelemetryReport } = useActions();
  //Получить данные для отчета
  const [getReport, { data: getReportData }] = reportAPI.useGetReportMutation();
  //Отправка отчета
  const [
    sendReport,
    {
      data: sendReportData,
      isError: isSendReportError,
      isSuccess: isSendReportSuccess,
      error: sendReportError,
    },
  ] = reportAPI.useSendReportMutation();
  /*TODO: переделать запрос на получение отчета.
  Получение параметров из БД
  */
  const getReportHandler = () => {
    const payload: IRequestSendTelemetryReport = {
      customer_id: 12,
      provider_id: 1,
      action: "REPORT_CHECK_DATA",
    };
    getReport(payload);
  };
  /*TODO: переделать запрос на получение отчета.
  Получение параметров из БД
  */
  const sendReportHandler = () => {
    const payload: IRequestSendTelemetryReport = {
      customer_id: 12,
      provider_id: 1,
      action: "REPORT_SEND_TO_EMAIL",
    };
    sendReport(payload);
    isSendReportSuccess && toast.success("Отчет отправлен");
    isSendReportError && toast.error((sendReportError as any).data.message)
    
    // alert("TODO: отправка файла с отчетом ...");
  };

  return (
    <>
      <Typography component="div" variant="overline">
        Отправка отчета в сбытовую компанию
      </Typography>
      <Button onClick={getReportHandler}>
        {!getReportData ? "Сформировать отчет" : "Обновить"}
      </Button>
      <Button
        disabled={getReportData ? false : true}
        onClick={sendReportHandler}
      >
        Отправить отчет
      </Button>
      <TableContainer>
        <Table size="small">
          <Typography variant="caption" component="caption">
            Запросите показания приборов учета и проверку, затем выполните
            отправку отчета в выбранную сбытовую компанию
          </Typography>
          <TableHead>
            <TableCell align="left">№ П/П, карт.</TableCell>
            <TableCell align="left">Наименование, адрес объекта</TableCell>
            <TableCell align="left">Тип, заводской номер ПУ</TableCell>
            <TableCell align="left">Пред. показание</TableCell>
            <TableCell align="left">Последнеe показание</TableCell>
          </TableHead>
          <TableBody>
            {getReportData &&
              getReportData.map((row) => <ReportRow key={row.id} row={row} />)}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TelemetryReport;
