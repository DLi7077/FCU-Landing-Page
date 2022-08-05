import TableBuilder from "../../../Components/TableBuilder";

const headers = ["Term", "Above 800", "Between 760-799", "Between 700-750"];
const rows = [
  ["5 Years", "3.5%", "4.5%", "5.5%"],
  ["7 Years", "4.0%", "5.0%", "6.0%"],
  ["10 Years", "4.5%", "5.5%", "6.5%"],
  ["12 Years", "5.0%", "6.0%", "6.74%"],
  ["15 Years", "5.5%", "6.5%", "6.74%"],
];

export default function VariableTable() {
  return <TableBuilder tableHeaders={headers} tableRows={rows} />;
}
