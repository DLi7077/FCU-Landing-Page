import TableBuilder from "../../TableBuilder";

const headers = ["Rates as Low as", ""];
const rows = [
  ["Personal", "9.00%"],
  ["Vacation/Holiday", "8.00%"],
  ["Car", "2.00%"],
];

export default function LoansTable() {
  return <TableBuilder tableHeaders={headers} tableRows={rows} />;
}
