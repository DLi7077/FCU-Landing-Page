import CreditCards from "./Credit Cards";
import LoanSubmission from "./Loan Submission";
import LoansAndCreditRequirements from "./Loans and Credit Requirements";
import PersonalLoans from "./Personal Loans";
import StudentLoans from "./Student and Consolidation";
import VehicleLoans from "./Vehicle Loans";

const LoansPages = [
  { path: "/credit-cards", element: <CreditCards /> },
  {
    path: "/loans-credit-requirements",
    element: <LoansAndCreditRequirements />,
  },
  { path: "/loan-submission", element: <LoanSubmission /> },
  { path: "/personal-loans", element: <PersonalLoans /> },
  { path: "/student-loan-consolidation", element: <StudentLoans /> },
  { path: "/vehicle-loans", element: <VehicleLoans /> },
];

export default LoansPages;
