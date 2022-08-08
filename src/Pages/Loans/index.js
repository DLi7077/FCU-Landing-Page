import CreditCards from "./Credit Cards";
import LoanSubmission from "./Loan Submission";
import LoansAndCreditRequirements from "./Loans and Credit Requirements";
import PersonalLoans from "./Personal Loans";
import StudentLoans from "./Student and Consolidation";
import VehicleLoans from "./Vehicle Loans";

const LoansPages = [
  { path: "/credit-cards", label: "Credit Cards", element: <CreditCards /> },
  {
    path: "/loans-credit-requirements",
    label: "Loans and Credit Requirements",
    element: <LoansAndCreditRequirements />,
  },
  {
    path: "/loan-submission",
    label: "Loan Submissions",
    element: <LoanSubmission />,
  },
  {
    path: "/personal-loans",
    label: "Personal Loans",
    element: <PersonalLoans />,
  },
  {
    path: "/student-loan-consolidation",
    label: "Student Loan Consolidation",
    element: <StudentLoans />,
  },
  {
    path: "/vehicle-loans",
    label: "Vehicle Loans",
    element: <VehicleLoans />,
  },
];

export const LoansPageLinks = LoansPages.map((page) => {
  return {
    path: page.path,
    label: page.label,
  };
});

export default LoansPages;
