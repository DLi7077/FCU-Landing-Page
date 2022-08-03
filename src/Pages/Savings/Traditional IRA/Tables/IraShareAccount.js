import TableBuilder from "./TableBuilder";

const tableheaders = ["Minimum balance to earn stated APY**", "Rate", "APY**"];

const tableRows = [["$50", "0.20%", "0.20%"]];

export default function IraShareAccount(props) {
  return (
    <TableBuilder
      tableHeaders={tableheaders}
      tableRows={tableRows}
      headerStyle={props.headerStyle}
      cellStyle={props.cellStyle}
    />
  );
}
