import PageLayout from "../../../Components/PageLayout";
import JoinButton from "../../../Components/Buttons/JoinButton";
import NYUButton from "../../../Components/Buttons/NYUButton";
import LoanTable from "./LoanTable";
import brick from "../brick.jpg";

export default function LoansAndCreditRequirements() {
  const content = (
    <div className="content-container">
      <div className="content-block">
        <div className="paragraph">
          <div className="bold">
            Applying for a loan is easy with New York University Federal Credit
            Union!
          </div>
          Please note all loans do require that you first establish membership.
          <br />
          Once you complete the online loan application, please see below a list
          of the documents required for each loan type.
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              gap: "4rem",
            }}
          >
            <NYUButton label="Check Eligibility" redirect="/join" />
            <JoinButton />
          </div>
        </div>
      </div>
      <div className="content-block">
        <div className="subtitle"></div>
        <div
          style={{
            maxWidth: "1200px",
            overflow: "auto",
            borderBottom: "1px solid purple",
          }}
        >
          <LoanTable />
        </div>
        <div className="paragraph">
          You may submit documents by email, fax, mail or dropping them off at
          our branch or submit them through the Loan Submission Page. All
          contact information can be found by accessing the Contact Us link on
          top of the navigation. Once all documents have been submitted, you
          should receive an answer regarding the application in 3 to 5 business
          days.
          <br />
          Must provide proof of consistent employment and be employed with
          current employer for last six months. Credit history, as well as debt
          obligations are reviewed to determine eligibility for loan
          applications. All applicants must be members of NYU FCU.
        </div>
      </div>
    </div>
  );
  const img = <img src={brick} className="visit" />;
  const imgContent = (
    <div className="image-content">
      <div className="visit-text">Loans and Credit Application Process</div>
    </div>
  );
  return <PageLayout content={content} img_content={imgContent} img={img} />;
}
