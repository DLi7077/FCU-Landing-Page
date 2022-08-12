import TableBuilder from "../../TableBuilder";

const headers = ["Type", "Rate"];
const rows = [
  ["Classic Credit Card", "11.9%"],
  [
    "Gold Credit Card",
    "8.9% With a promotion of 6.9% for the first 6 months for balance transfers.",
  ],
  [
    "Platinum Credit Card",
    "7.9% With a promotion of 5.9% for the first 6 months for balance transfers.",
  ],
];

export default function CreditCardTable() {
  return <TableBuilder tableHeaders={headers} tableRows={rows} />;
}
