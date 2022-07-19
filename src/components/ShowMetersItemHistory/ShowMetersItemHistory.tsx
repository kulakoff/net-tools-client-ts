import React from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  CircularProgress
} from "@mui/material";

type Props = {};

const ItemHistory = () => {
  const { selectedItem } = useTypedSelector((state) => state.counters);
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
          {selectedItem ? (
            selectedItem.history.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row" align="left">
                  {row.value}
                </TableCell>
                <TableCell component="th" scope="row" align="left">
                  {new Date(row.timestamp).toLocaleString("RU")}
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow key={"row.id"}>
              <TableCell component="th" scope="row">
                <caption><CircularProgress/></caption>
                
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const ShowMetersItemHistory = (props: Props) => {
  const { selectedItem } = useTypedSelector((state) => state.counters);
  return (
    <div>
      {selectedItem ? (
        <pre>{JSON.stringify(selectedItem.history, null, 2)}</pre>
      ) : (
        <>
          Загрузка ...
          <CircularProgress />
        </>
      )}
    </div>
  );
};

export default ItemHistory;
