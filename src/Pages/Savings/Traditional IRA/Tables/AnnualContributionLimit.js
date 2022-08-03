import TableBuilder from "./TableBuilder";

const tableheaders = [
  "Tax Year",
  "Under age 50",
  "Age 50 and Over*",
  "Last Date for Deposit",
];

const tableRows = [["2022", "$6,000", "$7,000", ""]];

export default function AnnualContributionLimit(props) {
  return (
    <TableBuilder
      tableHeaders={tableheaders}
      tableRows={tableRows}
      headerStyle={props.headerStyle}
      cellStyle={props.cellStyle}
    />
  );
}
