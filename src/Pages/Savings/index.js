import Checking from "./Checking";
import SavingsAccounts from "./Savings Accounts";

const SavingsPages = [
  { path: "/checking", element: <Checking /> },
  { path: "/savings-accounts", element: <SavingsAccounts /> },
];

export default SavingsPages;
