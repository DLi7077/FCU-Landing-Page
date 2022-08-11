import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";
import { assign } from "lodash";

/**
 * @description builds a table with information
 * @param {string[]} tableHeaders[]
 * @param {any[][]} tableRows
 * @param {any} headerStyle
 * @param {any} cellStyle
 * @returns
 */
export default function TableBuilder(props) {
  const defaultHeaderStyle = {
    backgroundColor: "primary.main",
    color: "neutral.contrastText",
    padding: "0.75rem",
    fontSize: "1.5rem",
  };
  const defaultCellStyle = {
    color: "black",
    padding: "0.75rem",
    fontSize: "1.25rem",
    maxWidth: "500px",
  };
  return (
    <div style={{ overflow: "auto" }}>
      <Table style={{border:'1px solid black'}}>
        <TableHead>
          <TableRow>
            {props.tableHeaders.map((header, idx) => {
              return (
                <TableCell
                  key={idx}
                  sx={assign(defaultHeaderStyle, props.headerStyle)}
                >
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
                    <TableCell
                      key={idx}
                      sx={assign(defaultCellStyle, props.cellStyle)}
                    >
                      {cell}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
