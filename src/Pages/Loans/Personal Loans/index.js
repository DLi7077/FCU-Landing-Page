import PageLayout from "../../../Components/PageLayout";
import NYUButton from "../../../Components/Buttons/NYUButton";
import JoinButton from "../../../Components/Buttons/JoinButton";
import brick from "../brick.jpg";

export default function PersonalLoans() {
  const content = (
    <div className="content-container">
      <div className="content-block">
        <div className="paragraph">
          To apply for a NYU FCU loan, you must be a member and have a share
          account.
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            <NYUButton label="Check Eligibility" redirect="/join" />
            <JoinButton />
            <NYUButton label="View Loan Rates" redirect="loan-rates" />
          </div>
        </div>
      </div>
      <div className="content-block">
        <div className="subtitle" id="personal">
          Personal Loans
        </div>
        <div className="paragraph">
          <div>
            We offer a variety of personal loans that you can use for going on
            your dream vacation, holiday shopping or any other discretionary
            purchases.
          </div>
          <div>60-month maximum term. Loan amounts: $500 - $20,000. </div>
        </div>
      </div>
      <div className="content-block" id="bill-consolidation">
        <div className="subtitle">BILL CONSOLIDATION LOAN</div>
        <div className="paragraph">
          <div>
            Consolidating your debts means to transfer some or all of your debts
            that are at a higher interest rate into one loan payment that
            charges you a lower interest rate than the one you are currently
            paying.
          </div>
          <div>
            You may apply up to $45,000 given qualifying credit history, credit
            score and income. This will be an installment loan for 12-60 months,
            with a rate of 9.5%-17.5% depending on the term, with a fixed
            monthly payment.
          </div>
          <div>
            For any loan over $10,000 a credit score over 640 is required. Our
            general requirement is a credit score of at least 520, good standing
            credit history and debt to income below 45%.
          </div>
        </div>
      </div>
      <div className="content-block" id="vacation">
        <div className="subtitle">Vacation and Holiday</div>
        <div className="paragraph">
          Maximum amount is $3000. Maximum Term 12 months.
        </div>
      </div>
      <div className="content-block">
        <div className="bold">
          Eligible for a 0.25% interest rate reduction with Auto Payment - must
          complete{" "}
          <a
            href="https://secure.na1.echosign.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhDYJC3aIu6yGZc5lX_hF_rYYE08mOFG8wpDerurThJ7VTf1cfj_yu0KLMVK1YFbabs*"
            target="_blank"
            rel="noreferrer"
          >
            Modification of Interest Rate form
          </a>
        </div>
      </div>
      <div className="content-block" id="share-secured">
        <div className="subtitle">SHARE SECURED LOAN</div>
        <div className="paragraph">
          Have a problem keeping the money you saved in an account, while new
          expenses keep popping up? Why not take a loan against your share
          account balance at the credit union? We will lend you 95% of your
          collected share balance for 3% over our current dividend rate (.10%).
          You can choose a 36 month payback for one flat rate, or a payback of
          up to 144 months with a quarterly review.
        </div>
      </div>
      <div className="content-block" id="credit-builder">
        <div className="subtitle">CREDIT BUILDER LOAN</div>
        <div className="paragraph">
          This loan is to help you to rebuild your credit report and establish
          emergency savings.
          <br />
          <strong>The maximum loan amount is $1000, Min - $500.</strong> Max
          term is 12 months. For example, if you qualify for $1000 loan, the
          entire amount is deposited into your savings account. As payments are
          made, you would gradually gain access to the savings account.
        </div>
      </div>
      <div className="content-block" id="life-happens">
        <div className="subtitle">LIFE HAPPENS LOAN</div>
        <div className="paragraph">
          Sometimes life happens, and the NYU FCU is here to help. If you find
          yourself in an unexpected emergency situation or expense, apply for
          this emergency loan to help you get back on track.
          <ul>
            <li>Rate - 16%</li>
            <li>Term - 12 months</li>
          </ul>
          Must be NYU employee for more than 2 years, a member for at least 6
          months, must have a checking account with a payroll deduction or
          direct deposit at the NYUFCU and no other loans at the NYUFCU. Must
          list supervisor contact information on Reference Form. Credit score
          not less than 520. To apply select Personal Loan, and type Life
          Happens in purpose.
        </div>
      </div>
      <div className="content-block" id="quick-cash">
        <div className="subtitle">QUICK CASH LOAN</div>
        <div className="paragraph">
          If you face any unexpected expenses, need extra cash or are short on
          funds between paydays, a Quick Cash Loan can help. This loan is for
          emergencies.
          <br />
          To apply, click the Apply button. On the loan selection screen, select
          Personal Loan, and in the purpose indicate "Quick Cash." No pledge
          required.
          <ul>
            <li>$250-$500 loan amount</li>
            <li>0% interest rate</li>
            <li>
              No minimum credit score required, however credit report will be
              pulled to verify affordability of the loan.
            </li>
            <li> Maximum term- 4 months</li>
            <li>
              Maximum of two Quick Cash loans per 12 month period. Previous loan
              must be paid off prior to any future applications. If any Quick
              Cash loan becomes more than 29 days delinquent, the borrower will
              not eligible to apply for Quick Cash loans in the future.
            </li>
            <li>
              Must be employed with current employer for at least 2 years; you
              will be required to present copies of your two (2) most recent
              pay-stubs and W-2 for the last 2 years as proof of employment.
            </li>
            <li>
              Must provide two references - one must be a direct supervisor.
            </li>
            <li>
              Loans granted to individual borrowers only. Quick Cash loan will
              not be approved if the monthly payment exceeds 20% of the member's
              net pay for a given pay period.
            </li>
            <li>
              Monthly or weekly automatic payments available. Payroll deduction
              will be required to be set up for payment.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
  const img = <img src={brick} className="visit" />;
  const imgContent = (
    <div className="image-content">
      <div className="visit-text">Personal Loans</div>
    </div>
  );
  return <PageLayout content={content} img_content={imgContent} img={img} />;
}
