import TableBuilder from "../../../Components/TableBuilder";

const headers = ["SHARE DRAFTS (CHECKING ACCOUNTS)", ""];
const rows = [
  ["Restart Checking Account (per month)", "$5/month "],
  ["Stop Payment Orders and ACH stop payment", "$25/stop "],
  [
    "Insufficient Funds (per item) - (attempted ACH transactions, checks, and/or everyday debit transactions that would reduce balance below the $50.00 minimum required for membership if allowed to go through)",
    "$25/item ",
  ],
  ["Checking with no transactions after 12 months (per month)", "$10/month"],
  [
    "Overdraft protection transfer from savings or money market to checking account (each)",
    "$5/each",
  ],
  ["Copy of Draft", "$2/copy"],
  ["Temp Checks / Counter Check (3 checks per page)", "$3/page"],
  ["Checkbook Order", "Variable"],
  ["Courtesy Pay", "$25/each"],
];

export default function CheckingAccounts() {
  return <TableBuilder tableHeaders={headers} tableRows={rows} />;
}
