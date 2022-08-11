import TableBuilder from "../../../../Components/TableBuilder";

const headers = ["CREDIT SCORE", "CREDIT TIER", "UP TO 12 MONTHS"];
const rows = [
  ["760 and above", "A+", "10.00%"],
  ["700-759", "A", "12.50%"],
  ["650-699", "B", "13.50%"],
  ["600-649", "C", "14.50%"],
  ["520-599", "D", "16.50%"],
];

export default function CreditBuilder() {
  return <TableBuilder tableHeaders={headers} tableRows={rows} />;
}
