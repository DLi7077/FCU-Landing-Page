import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";

/**
 * @description builds a table with information
 * @param {string[]} tableHeaders[]
 * @param {any[][]} tableRows
 * @param {any} headerStyle
 * @param {any} cellStyle
 * @returns
 */
export default function TableBuilder(props) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          {props.tableHeaders.map((header, idx) => {
            return (
              <TableCell key={idx} style={props.headerStyle}>
                {header}
              </TableCell>
            );
          })}
        </TableRow>
      </TableHead>
      <TableBody>
        {props.tableRows.map((row, row_idx) => {
          return (
            <TableRow key={row_idx}>
              {row.map((cell, idx) => {
                return (
                  <TableCell key={idx} style={props.cellStyle}>
                    {cell}
                  </TableCell>
                );
              })}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
