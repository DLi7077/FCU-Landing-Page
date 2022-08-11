import FeeSchedule from "./Fee Schedule";
import LoanRates from "./Loan Rates";
import ShareRates from "./Share Rates";

const RatesPages = [
  { path: "fee-schedule", label: "Fee Schedule", element: <FeeSchedule /> },
  { path: "loan-rates", label: "Loan Rates", element: <LoanRates /> },
  { path: "share-rates", label: "Share Rates", element: <ShareRates /> },
];

export const RatesPageLinks = RatesPages.map((page) => {
  return {
    path: page.path,
    label: page.label,
  };
});

export default RatesPages;
