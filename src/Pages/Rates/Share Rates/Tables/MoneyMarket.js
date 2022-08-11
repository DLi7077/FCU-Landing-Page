import TableBuilder from "../../../../Components/TableBuilder";

const headers = ["Minimum Balance To Earn Stated APY**", "RATE", "APY**"];
const rows = [["$1,000- $250,000", "0.10%", "0.10%"]];

export default function MoneyMarket() {
  return <TableBuilder tableHeaders={headers} tableRows={rows} />;
}
