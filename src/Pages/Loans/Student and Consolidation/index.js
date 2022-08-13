import PageLayout from "../../../Components/PageLayout";
import FixedTable from "./FixedTable";
import VariableTable from "./VariableTable";
import brick from "../brick.jpg";

export default function StudentLoans() {
  const content = (
    <div className="content-container">
      <div className="content-block">
        <div>
          <div className="part-title">Private Student Loan Consolidation</div>
          <div className="paragraph">
            <div>
              <strong>Loan Limits</strong> NYU Student Loan Consolidation loans
              are limited to a cumulative total of $100,000. Minimum loan amount
              is $10,000. Aggregate loan limit (including all other education
              debt) of $125,000
            </div>
            <div>
              <strong>Loan Length and Deferral Periods</strong> NYUFCU will
              offer up to a maximum 180 month fully amortized loan. Interest
              will accrue on a daily basis.
            </div>
          </div>
        </div>

        <div>
          <div className="part-title">Variable Rate</div>
          <div className="paragraph">
            The variable rate consolidation loans, indexed to the Prime Interest
            Rate, and adjusts quarterly. There is an interest rate ceiling of
            8.5%. Current Prime Rate effective 7/28/2022 is 5.50%
          </div>
        </div>
      </div>
      <div className="content-block">
        <FixedTable />
      </div>
      <div className="content-block">
        <VariableTable />
      </div>
      <div className="content-block">
        <div className="paragraph">
          <div>
            <strong>Eligibility</strong> NYU Alumni with the credit score above
            700 and D/I ratio up to 40%. Must be currently employed full time.
          </div>
          <div>
            <strong>Other Requirements</strong>
            <ol>
              <li>
                The applicant and the co-signers both must be a member of NYU
                FCU
              </li>
              <li>Rates are based on credit score</li>
              <li>Must be a US citizen or permanent resident.</li>
            </ol>
          </div>
        </div>
        <div className="paragraph">
          <div className="part-title">Application Instructions:</div>
          <div>
            <strong>Non-Members:</strong>
            <br />
            Complete the{" "}
            <a
              href="https://www.mobicint.net/nyu/login/loanapp"
              blank="_target"
              rel="noreferrer"
            >
              Private Student Loan Application.
            </a>{" "}
            You will receive an email with further instructions within two days
            of submitting your application.
          </div>
          <div>
            <strong>Members:</strong>
            <ol>
              <li>Log into Online Banking</li>
              <li>Click on “Self Service”, Click on “Apply for a loan”</li>
              <li>
                Complete the Private Student Loan Application. You will receive
                an email with further instructions within two days of submitting
                your application.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );

  const img = <img src={brick} alt= "page-background" className="visit" />;
  const imgContent = (
    <div className="image-content">
      <div className="visit-text">Student Loan Consolidation</div>
    </div>
  );
  return <PageLayout content={content} img_content={imgContent} img={img} />;
}
