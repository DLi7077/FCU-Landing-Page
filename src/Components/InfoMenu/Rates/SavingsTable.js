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
  borderBottom: "1px solid #84008f",
});
const HCell = styled(TableCell)({
  fontWeight: 600,
  fontSize: "1.5rem",
  width: "5rem",
  borderBottom: "1px solid #84008f",
});

export default function SavingsTable() {
  return (
    <Table sx={{ fontSize: "2rem", maxWidth: "1000px" }}>
      <TableHead>
        <TableRow>
          <HCell>Type</HCell>
          <HCell>APY</HCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow sx={{ fontSize: "2rem" }}>
          <TCell>Share (Savings) Account</TCell>
          <TCell>0.10%</TCell>
        </TableRow>
        <TableRow sx={{ fontSize: "2rem" }}>
          <TCell>Holiday/Vacation Club Accounts</TCell>
          <TCell>0.25%</TCell>
        </TableRow>
        <TableRow sx={{ fontSize: "2rem" }}>
          <TCell>Money Market Account</TCell>
          <TCell>0.10%</TCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
