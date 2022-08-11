import TableBuilder from "../../../../Components/TableBuilder";

const headers = [
  "CREDIT SCORE",
  "CREDIT TIER",
  "UP TO 36 MONTHS",
  "37-48 MONTHS",
  "49-60 MONTHS",
];
const rows = [
  ["760 and above", "A+", "6.00%", "7.00%", "9.50%"],
  ["700-759", "A", "9.00%", "10.00%", "11.50%"],
  ["650-699", "B", "10.00%", "11.00%", "12.50%"],
  ["600-649", "C", "11.00%", "12.00%", "13.50%"],
  ["520-599", "D", "13.00%", "14.00%", "15.50%"],
];

export default function Personal() {
  return <TableBuilder tableHeaders={headers} tableRows={rows} />;
}
