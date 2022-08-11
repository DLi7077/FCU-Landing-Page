import TableBuilder from "../../../../Components/TableBuilder";

const headers = ["Minimum Balance To Earn Stated APY", "RATE", "APY**"];
const rows = [["$50", "0.25%", "0.25%"]];

export default function DreamHoliday() {
  return <TableBuilder tableHeaders={headers} tableRows={rows} />;
}
