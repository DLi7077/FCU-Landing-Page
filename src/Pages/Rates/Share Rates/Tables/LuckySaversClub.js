import TableBuilder from "../../../../Components/TableBuilder";

const headers = [
  "Minimum Balance To Earn Stated APY**",
  "RATE",
  "APY**",
  "Term",
];
const rows = [["$1,000", "0.499%", "0.50%", "1 Year CD"]];

export default function LuckySaversClub() {
  return <TableBuilder tableHeaders={headers} tableRows={rows} />;
}
