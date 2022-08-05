import TableBuilder from "../../../../Components/TableBuilder";

const tableheaders = [
  "Credit Score",
  "Credit Tier",
  "First 36 Months",
  "37-48 Months",
  "49-60 Months",
  "61-72 Months",
];

const tableRows = [
  ["760+", "A+", "2.00%", "2.50%", "3.50%", "4.50%"],
  ["700-759", "A", "2.50%", "3.50%", "5.50%", "4.50%"],
  ["650-699", "B", "3.00%", "4.50%", "5.50%", "5.50%"],
  ["600-649", "C", "3.50%", "5.50%", "6.50%", "7.50%"],
  ["550-599", "D", "4.00%", "7.50%", "N/A", "N/A"],
];

export default function NewCarRates(props) {
  return (
    <TableBuilder
      tableHeaders={tableheaders}
      tableRows={tableRows}
      headerStyle={props.headerStyle}
      cellStyle={props.cellStyle}
    />
  );
}
