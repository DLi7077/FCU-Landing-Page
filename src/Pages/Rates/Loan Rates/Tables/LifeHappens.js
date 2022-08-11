import TableBuilder from "../../../../Components/TableBuilder";

const headers = ["SALARY", "LOAN MAXIMUM AMOUNT", "LOAN RATES​"];
const rows = [
  ["Up to $30,000", "$1,000", "16%"],
  ["$30,001-$40,000", "$1,500", "16%"],
  ["$40,001-$60,000", "$2,000", "16%"],
  ["Over $60,000", "$2,500", "16%"],
];

export default function LifeHappens() {
  return <TableBuilder tableHeaders={headers} tableRows={rows} />;
}
