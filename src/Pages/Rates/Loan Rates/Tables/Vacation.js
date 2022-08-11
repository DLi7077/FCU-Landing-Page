import TableBuilder from "../../../../Components/TableBuilder";

const headers = ["CREDIT SCORE", "CREDIT TIER", "UP TO 12 MONTHS"];
const rows = [
  ["700 and above", "A+ and A", "8.00%"],
  ["650-699", "B", "8.75%"],
  ["600-649", "C", "9.99%"],
  ["520-599", "D", "11.99%"],
];

export default function Vacation() {
  return <TableBuilder tableHeaders={headers} tableRows={rows} />;
}
