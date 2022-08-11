import TableBuilder from "../../../Components/TableBuilder";

const headers = ["REGULAR SHARE ACCOUNTS (SAVINGS ACCOUNTS)", ""];
const rows = [
  ["Savings Account with less than $50 balance (per month)", "$5/month"],
  [
    "Dormant Account Fee after 12 months of no activity (monthly fee)- In order to avoid this fee, you must complete a transaction on your account at least once every 12 months.",
    "$10/month",
  ],
  ["New member fee (per member)", "$10"],
  ["Stop Payment Orders and ACH Stop Payments", "$25/item"],
  [
    "Insufficient Funds (per item) - (attempted ACH transactions, checks, and/or everyday debit transactions that would reduce balance below the $50.00 minimum required for membership if allowed to go through)",
    "$25/item",
  ],
];

export default function Schedule() {
  return <TableBuilder tableHeaders={headers} tableRows={rows} />;
}
