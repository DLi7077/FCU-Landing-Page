import TableBuilder from "../../../Components/TableBuilder";

const headers = ["Credit Score", "Credit Tier", "Rate*", "Max Amount"];
const rows = [
  ["780 and above", "A+", "Prime Rate", "$500,000"],
  ["700-779", "A", "Prime Rate +0.5%", "$500,000"],
  ["660-699", "B", "Prime Rate +1.00%", "$500,000"],
  ["620-659", "C", "Prime Rate +2.00%", "$500,000"],
];

export default function HELOCTable() {
  return <TableBuilder tableHeaders={headers} tableRows={rows} />;
}
