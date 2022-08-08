import TableBuilder from "../../../Components/TableBuilder";

const headers = ["Term", "1st Lien", "2nd Lien"];
const rows = [
  ["5 Year Term", "3.75%", ".5%"],
  ["10 Year Term", "4.0%", "5.0%"],
  ["15 Year Term", "5.0%", "6.0%"],
  ["20 Year Term", "5.5%", "6.625%"],
];

export default function FixedRateLoanTable() {
  return <TableBuilder tableHeaders={headers} tableRows={rows} />;
}
