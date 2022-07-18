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

export default function CreditCardTable() {
  return (
    <Table sx={{ fontSize: "2rem", maxWidth: "1000px" }}>
      <TableHead>
        <TableRow>
          <HCell>Type</HCell>
          <HCell>Rate</HCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow sx={{ fontSize: "2rem" }}>
          <TCell>Classic Credit Card</TCell>
          <TCell>11.9%</TCell>
        </TableRow>
        <TableRow sx={{ fontSize: "2rem" }}>
          <TCell>Gold Credit Card</TCell>
          <TCell>
            8.9% With a promotion of 6.9% for the first 6 months for balance
            transfers.
          </TCell>
        </TableRow>
        <TableRow sx={{ fontSize: "2rem" }}>
          <TCell>Platinum Credit Card</TCell>
          <TCell>
            7.9% With a promotion of 5.9% for the first 6 months for balance
            transfers.
          </TCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
