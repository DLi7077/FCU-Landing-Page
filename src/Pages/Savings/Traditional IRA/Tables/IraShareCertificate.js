import TableBuilder from "./TableBuilder";

const tableheaders = [
  "Minimum balance to earn stated APY**",
  "Rate",
  "APY**",
  "Term",
];

const tableRows = [
  ["$1000", "0.75%", "0.752%", "1 Year CD"],
  ["$1000", "0.90%", "0.903%", "3 Year CD"],
  ["$1000", "1.10%", "1.104%", "5 Year CD"],
];

export default function IraShareCertificate(props) {
  return (
    <TableBuilder
      tableHeaders={tableheaders}
      tableRows={tableRows}
      headerStyle={props.headerStyle}
      cellStyle={props.cellStyle}
    />
  );
}
