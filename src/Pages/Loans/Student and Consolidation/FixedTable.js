import TableBuilder from "../../../Components/TableBuilder";

const headers = ["Term", "Above 800", "Between 760-799", "Between 700-750"];
const rows = [
  ["5 Years", "Prime - 1.5%", "Prime - 0.50%", "Prime + 0.50%"],
  ["7 Years", "Prime - 1.25%", "Prime - 0.25%", "Prime + 0.75%"],
  ["10 Years", "Prime - 0.75%", "Prime + 0.25%", "Prime + 1.25%"],
  ["12 Years", "Prime - 0.50%", "Prime + 0.50%", "Prime + 1.50%"],
  ["15 Years", "Prime - 0.25%", "Prime + 0.75%", "Prime + 1.75%"],
];

export default function FixedTable() {
  return <TableBuilder tableHeaders={headers} tableRows={rows} />;
}
