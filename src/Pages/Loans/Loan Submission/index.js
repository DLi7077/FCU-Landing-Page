import PageLayout from "../../../Components/PageLayout";
import LoanTable from "./LoanTable";

export default function LoanSubmission() {
  const content = (
    <div className="content-container">
      <div className="title">Loan Document Submission</div>
      <div className="content-block">
        <div className="paragraph">
          Thank you for completing your NYU FCU loan application. Please locate
          the type of loan you are applying for, and submit the according
          documents.
        </div>
        <div className="content-block">
          <LoanTable />
        </div>
        <div className="paragraph">
          <div>
            If you prefer to drop off or fax in your documents, please visit the{" "}
            <a href="/loans-credit-requirements" target="_blank">
              Loan and Credit Page
            </a>{" "}
            for a list of relevant documents.
          </div>
        </div>
      </div>
    </div>
  );

  return <PageLayout content={content} />;
}
