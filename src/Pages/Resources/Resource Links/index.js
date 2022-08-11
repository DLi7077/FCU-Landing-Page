import NYUButton from "../../../Components/Buttons/NYUButton";
import PageLayout from "../../../Components/PageLayout";
import ArmMortagesPDF from "../../../Assets/pdfs/Resources/Arm Mortgages.pdf";
import "./styles.css";

const groupStyle = {
  minWidth: "48%",
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
};
export default function index() {
  const content = (
    <div className="content-container">
      <div className="title">Resource Links</div>
      <div className="link-group">
        <div style={groupStyle}>
          <div className="content-block">
            <div className="subtitle">Balance</div>
            <NYUButton
              label="Balance Pro"
              redirect="https://nyufcu.balancepro.org/"
            />
            <div className="paragraph">
              Free and confidential financial counseling and education.
            </div>
          </div>
          <div className="content-block">
            <div className="subtitle">Discounted Citi Bike Membership</div>
            <NYUButton
              label="Citi Bike Pricing"
              redirect="https://ride.citibikenyc.com/pricing/cdcu"
            />
            <div className="paragraph">
              Students (Undergrad and Graduate) can receive a Citibike Code
              immediately at account opening as part of a "Student Package".
              This package requires that they open both a savings and checking
              account with us. If the student would only like to open savings,
              they will follow the rules as a "non-student new member"
              <div>
                All non-students opening a membership with NYU FCU must be an{" "}
                <strong>active member for at least 12 months</strong>, and then
                will be eligible for the Citi Bike Discount.
              </div>
              <div />
              Members renewing their Citibike Membership can request a code as
              usual. Their account will be reviewed for activity before being
              provided a renewal code.
              <div />
              Discounted codes are limited and they will be provided until
              supply lasts. This program is intended for low-income New Yorkers,
              we reserve the right to ask for additional proof of income. Please
              fill out a CITI Bike Code Affidavit when requesting a code.
            </div>
          </div>
          <div className="content-block">
            <div className="subtitle">Student Lending</div>
            <NYUButton
              label="Student Loans"
              redirect="https://ag.ny.gov/consumer-frauds/student-loan/resource-center"
            />
            <div className="paragraph">
              Facts from the Office of General Attorney
            </div>
          </div>
          <div className="content-block">
            <div className="subtitle">Check 21 and Substitute Checks</div>
            <div className="paragraph">
              Learn more about Check 21 and substitute checks.
            </div>
            <NYUButton
              label="Check 21 FAQ"
              redirect="https://www.federalreserve.gov/paymentsystems/regcc-faq-check21.htm"
            />
          </div>
        </div>
        <div style={groupStyle}>
          <div className="content-block">
            <div className="subtitle">Annual Credit Report</div>
            <NYUButton
              label="Annual Credit Report"
              redirect="https://www.annualcreditreport.com/index.action"
            />
            <div className="paragraph">
              Run your credit report free of charge from all three credit
              agencies
            </div>
          </div>
          <div className="content-block">
            <div className="subtitle">Housing and Urban Development Guide</div>
            <NYUButton
              label="Home Loans Guides"
              redirect="https://www.hud.gov/topics/buying_a_home"
            />
            <div className="paragraph">
              Guides to help you shop for your home loans
            </div>
          </div>
          <div className="content-block">
            <div className="subtitle">Federal Trade Commission</div>
            <div className="paragraph">
              Safety comes first with the Federal Trade Commission
            </div>
            <NYUButton label="Learn More" redirect="http://www.ftc.gov/" />
          </div>
          <div className="content-block">
            <div className="subtitle">ID Theft</div>
            <div className="paragraph">
              Protect yourself and find out what to do if you're a victim.
            </div>
            <NYUButton
              label="Identity Theft"
              redirect="https://consumer.ftc.gov/features/identity-theft"
            />
          </div>
          <div className="content-block">
            <div className="subtitle">Love my Credit Union</div>
            <NYUButton
              label="Credit Union Benefits/Savings"
              redirect="https://rewards.lovemycreditunion.org/"
            />
            <div className="paragraph">
              Exclusive credit union member prices and rewards with popular
              programs like Sprint Cash Rewards, TurboTax, and more.
            </div>
          </div>
        </div>
      </div>
      <div className="content-block">
        <div className="subtitle">Other</div>
        <NYUButton
          label="Consumer Financial Protection Bureau"
          redirect="https://www.consumerfinance.gov/"
        />
        <NYUButton
          label="Consumer Handbook on Arm Mortgages"
          redirect={ArmMortagesPDF}
        />
        <NYUButton
          label="Settlement Costs Booklet"
          redirect="https://files.consumerfinance.gov/f/201401_cfpb_booklet_settlement.pdf"
        />
        <NYUButton
          label="How do I get a good Credit Score?"
          redirect="https://www.consumerfinance.gov/ask-cfpb/how-do-i-get-and-keep-a-good-credit-score-en-318/"
        />
        <NYUButton
          label="MYMONEY.GOV"
          redirect="https://www.mymoney.gov/Pages/default.aspx"
        />
        <NYUButton
          label="National Credit Union Administration"
          redirect="http://www.ftc.gov/"
        />
        <NYUButton
          label="Social Security Administration"
          redirect="https://www.ssa.gov/"
        />
      </div>
    </div>
  );

  return <PageLayout content={content} />;
}
