import TableBuilder from "../../../../Components/TableBuilder";

const headers = [
  "CREDIT SCORE",
  "CREDIT TIER",
  "UP TO 36 MONTHS",
  "37-48 MONTHS",
  "49-60 MONTHS",
];
const rows = [
  ["760 and above", "A+", "10.00%", "11.00%", "12.50%"],
  ["700-759", "A", "11.00%", "12.0%", "13.50%"],
  ["650-699", "B", "12.00%", "13.00%", "14.50%"],
  ["600-649", "C", "14.00%", "15.00%", "16.50%"],
  ["520-599", "D", "15.00%", "16.00%", "17.50%"],
];

export default function BillConsolidation() {
  return <TableBuilder tableHeaders={headers} tableRows={rows} />;
}
