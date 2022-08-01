import {
  Table,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@mui/material";
import { styled } from "@mui/system";

const TCell = styled(TableCell)({
  fontWeight: 400,
  fontSize: "1.5rem",
  width: "5rem",
  borderBottom: "1px solid #91009e",
});
const HCell = styled(TableCell)({
  fontWeight: 600,
  fontSize: "1.5rem",
  width: "5rem",
  borderBottom: "1px solid #91009e",
});

export default function LoansTable() {
  return (
    <Table sx={{ fontSize: "2rem", maxWidth: "1000px" }}>
      <TableHead>
        <TableRow>
          <HCell colSpan={2}>Rates as Low as</HCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow sx={{ fontSize: "2rem" }}>
          <TCell>Personal</TCell>
          <TCell>9.00%</TCell>
        </TableRow>
        <TableRow sx={{ fontSize: "2rem" }}>
          <TCell>Vacation/Holiday</TCell>
          <TCell>8.00%</TCell>
        </TableRow>
        <TableRow sx={{ fontSize: "2rem" }}>
          <TCell>Car</TCell>
          <TCell>2.00%</TCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
