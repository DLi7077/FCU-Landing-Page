import TableBuilder from "../../../../Components/TableBuilder";

const headers = ["Minimum Balance To Earn Stated APY**", "RATE", "APY**"];
const rows = [["$250", "0.10%", "0.10%"]];

export default function ShareSavings() {
  return <TableBuilder tableHeaders={headers} tableRows={rows} />;
}
