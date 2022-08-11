import TableBuilder from "../../../../Components/TableBuilder";

const headers = ["Minimum Balance To Earn Stated APY**", "RATE", "APY**"];
const rows = [["$50", "0.499%", "0.50%"]];

export default function IRAShare() {
  return <TableBuilder tableHeaders={headers} tableRows={rows} />;
}
