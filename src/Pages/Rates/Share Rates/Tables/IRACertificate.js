import TableBuilder from "../../../../Components/TableBuilder";

const headers = [
  "Minimum Balance To Earn Stated APY**",
  "RATE",
  "APY**",
  "Term",
];
const rows = [
  ["$500", "0.75%", "0.752%", "1 Year CD"],
  ["$500", "0.90%", "0.903%", "3 Year CD"],
  ["$500", "1.1%", "1.105%", "5 Year CD"],
];

export default function IRACertificate() {
  return <TableBuilder tableHeaders={headers} tableRows={rows} />;
}
