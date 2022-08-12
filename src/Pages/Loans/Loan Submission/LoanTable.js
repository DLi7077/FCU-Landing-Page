import HashRedirect from "../../../Components/HashRedirect";
import TableBuilder from "../../../Components/TableBuilder";

const headerStyle = {
  backgroundColor: "primary.main",
  color: "neutral.contrastText",
  padding: "0.75rem",
  fontSize: "1.25rem",
};
const cellStyle = {
  color: "black",
  padding: "0.75rem",
  fontSize: "1.25rem",
  maxWidth: "500px",
};
const headers = [
  "Type of Loan",
  "Fee",
  "Requried Documents",
  "Pledge at funding",
];

const loanForm =
  "https://secure.na1.echosign.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhAHE9CatQ9XQXMNp2CVWSKJNgqgdAvus4ntiLdR158jVdkVAtJNxkLfx8aCj-rAxFQ*";

const rows = [
  [
    <HashRedirect
      to={{ pathname: "/personal-loans", hash: "personal" }}
      content="Personal"
    />,
    "",
    <a href={loanForm} target="_blank" rel="noreferrer">
      Personal Loan Document Submission
    </a>,
    "",
  ],
  [
    <HashRedirect
      to={{ pathname: "/personal-loans", hash: "vacation" }}
      content="Vacation/Holiday"
    />,
    "",
    <a href={loanForm} target="_blank" rel="noreferrer">
      Vacation/Holiday Loan Document Submission
    </a>,
    "",
  ],
  [
    <HashRedirect
      to={{ pathname: "/personal-loans", hash: "bill-consolidation" }}
      content="Bill Consolidation"
    />,
    "",
    <a
      href="https://secure.na1.echosign.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhD3eT5uAmjOtBxI29hkRx4BsMEwCCzi4m-IlWJMcHI4cbZJ6fV0HypbzwmBPppCRiM*"
      target="_blank"
      rel="noreferrer"
    >
      Bill Consolidation Loan Document Submission
    </a>,
    "",
  ],
  [
    <HashRedirect
      to={{ pathname: "/personal-loans", hash: "share-secured" }}
      content="Share Secured"
    />,
    "",
    <a href={loanForm} target="_blank" rel="noreferrer">
      Share Secured Loan Document Submission
    </a>,
    "",
  ],
  [
    <HashRedirect
      to={{ pathname: "/personal-loans", hash: "credit-builder" }}
      content="Credit Builder"
    />,
    "",
    <a href={loanForm} target="_blank" rel="noreferrer">
      Credit Builder Loan Document Submission
    </a>,
    "",
  ],
  [
    <HashRedirect
      to={{ pathname: "/personal-loans", hash: "life-happens" }}
      content="Life Happens"
    />,
    "",
    <div style={{ width: "fit-content" }}>
      <a href={loanForm} target="_blank" rel="noreferrer">
        Life Happens Loan Document Submission
      </a>
      <br />
      (Must list supervisor's contact information on Reference form)
    </div>,
    "",
  ],
  [
    <HashRedirect
      to={{ pathname: "/personal-loans", hash: "quick-cash" }}
      content="Quick Cash"
    />,
    "$25",
    <a href={loanForm} target="_blank" rel="noreferrer">
      Quick Cash Loan Document Submission
    </a>,
    "",
  ],
  [
    <HashRedirect
      to={{ pathname: "/student-loan-consolidation" }}
      content="Private Student Loan Consolidation Loan"
    />,
    "",
    <a
      href="https://secure.na1.echosign.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhDKxDeqhlRZJfvYGrjipiUEfcC8O2infLwYcyQJAh4dGvuuMQ6lgHSy9lcAx4Fk7Mw*"
      target="_blank"
      rel="noreferrer"
    >
      Student Loan Consolidation Loan Document Submission
    </a>,
    "",
  ],
  [
    <HashRedirect
      to={{ pathname: "/credit-cards", hash: "classic" }}
      content="Classic/Gold Credit Card"
    />,
    "",
    <a href={loanForm} target="_blank" rel="noreferrer">
      Credit Card Document Submission
    </a>,
    "",
  ],
  [
    <HashRedirect
      to={{ pathname: "/credit-cards", hash: "secured" }}
      content="Secured Credit Card"
    />,
    "",
    <div>
      <a href={loanForm} target="_blank" rel="noreferrer">
        Credit Card Document Submission
      </a>{" "}
      and{" "}
      <a href={loanForm} target="_blank" rel="noreferrer">
        Pledge of Shares Agreement
      </a>{" "}
    </div>,
    "125%",
  ],
  [
    <HashRedirect
      to={{ pathname: "/vehicle-loans" }}
      content="Vehicle Loans"
    />,
    "",
    <>
      <a
        href="https://secure.na1.echosign.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhAIb2CU022PgR08no1xfwyjsi8hki9mbKJhmVeJj6q4UYoWH8HhngDV21kDj2fqya4*"
        target="_blank"
        rel="noreferrer"
      >
        Auto Loan Document Submission:
      </a>{" "}
      Bill of Sale or Purchase agreement prior to funding, (not required for
      pre- approval), Statement from current lender, if refinance, and Title.
    </>,
    "",
  ],
];

export default function LoanTable() {
  return (
    <TableBuilder
      tableHeaders={headers}
      tableRows={rows}
      headerStyle={headerStyle}
      cellStyle={cellStyle}
    />
  );
}
