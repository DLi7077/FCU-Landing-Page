import TableBuilder from "../../../Components/TableBuilder";

const headers = ["GENERAL MAINTENANCE", ""];
const rows = [
  [
    "ATM Transaction Charge (6 free per month, after 6 transactions $1 per transaction)",
    "6 Free, $1",
  ],
  ["ATM, Debit and Credit Card Replacement", "$10"],
  ["Expedited Debit or Credit Card Replacement", "$35"],
  [
    "Paper Statement  (per statement), Interim Statement Printouts and Statement Copies",
    "$3/statement",
  ],
  ["Deposited Checks Returned", "$25/each"],
  ["Stop Payment to a Check or ACH", "$25/each"],
  ["Cashier's Check", "$5/each"],
  ["Copy of Paid Cashier's Check or Money Order", "$10/each"],
  ["International Check Deposit (per check)", "$25/check"],
  ["Money Orders (each)", "$1/each"],
  ["American Express Gift Card", "$3.95/each"],
  ["American Express Gift Checks", "$2.50/each"],
  ["Gift Envelope", "$2/each"],
  [
    "Transfers from savings, money market and checking accounts in branch (each)",
    "$10/transfer",
  ],
  ["Notary Public (free for members)", "$2"],
  ["Bad address with no activity (per return) ", "$10/return"],
  ["Account Balance Verification Fee (Official Letter)", "$20"],
  ["Outgoing Domestic Wire (maximum $500,000 per wire transfer)", "$25"],
  [
    "Outgoing International Wire Transfer (maximum $500,000 per wire transfer)",
    "$35 ",
  ],
  [
    "Outgoing International Wire Transfer to Mexico (maximum $500,000 per wire transfer)",
    "$10",
  ],
  ["Incoming International Wire Transfer", "$10"],
  ["Membership Closing Fee (within 6 months of opening)", "$25"],
  [
    "Money Market Account with balance below $1,000 min daily (per month)",
    "$10/month",
  ],
  ["IRA Account closure before 59 1/2", "$25"],
  [
    "Holiday Club Account Withdrawal outside of November, December January",
    "$5/withdrawal",
  ],
  ["Dream Club Account Withdrawal earlier than term", "$5/withdrawal"],
  [
    "Research - Transaction Investigation on Statement Older than 60 Days (per hour ($20 minimum))- Costs for obtaining records from storage will be passed to member",
    "Variable",
  ],
  [
    "Copy of 1099/1098 - free through Online Banking with December Statement",
    "$5/item",
  ],
  ["Copy of Promissory Note on Loans", "$25"],
  ["Home Equity Type Loan Subordination Fee", "$250"],
  ["Micro Business Loan Application Fee", "$150"],
  ["Commercial Real Estate Loan", "$1,000"],
  [
    "Consumer Loan Application (After declined application within 3 months)",
    "$35",
  ],
  ["Mortgage Satisfaction", "$150"],
  [
    "One Time ACH Payment (from external bank account, waived for recurring setup)",
    "$2",
  ],
  ["Abandoned Property", "$100"],
];

export default function GeneralMaintenance() {
  return <TableBuilder tableHeaders={headers} tableRows={rows} />;
}
