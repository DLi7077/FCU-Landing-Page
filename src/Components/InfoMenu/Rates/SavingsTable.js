import TableBuilder from "../../TableBuilder";

const headers = ["Type", "APY"];
const rows = [
  ["Share (Savings) Account", "0.10%"],
  ["Holiday/Vacation Club Accounts", "0.25%"],
  ["Money Market Account", "0.10%"],
];

export default function SavingsTable() {
  return <TableBuilder tableHeaders={headers} tableRows={rows} />;
}
