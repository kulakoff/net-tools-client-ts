import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Button } from "@mui/material";
import { useActions } from "../../hooks/useActions";

export default function DemoPage() {
  const { value } = useTypedSelector((state) => state.increment);
  const {} = useActions()
  return <TableContainer component={Paper}>

    <div>
      <h1>{value}</h1>
      <Button >increment</Button>
      <Button >decrement</Button>

    </div>
  </TableContainer>;
}
