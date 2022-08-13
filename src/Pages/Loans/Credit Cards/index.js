import PageLayout from "../../../Components/PageLayout";
import Credit_Card_Disclosure from "../../../Assets/pdfs/Credit Card Loans/Credit_Card_Disclosure.pdf";
import Credit_Card_Classic from "../../../Assets/pdfs/Credit Card Loans/Credit_Card_Classic.pdf";
import Credit_Card_Gold from "../../../Assets/pdfs/Credit Card Loans/Credit_Card_Gold.pdf";
import Credit_Card_Platinum from "../../../Assets/pdfs/Credit Card Loans/Credit_Card_Platinum.pdf";
import brick from "../brick.jpg";

export default function CreditCards() {
  const content = (
    <div className="content-container">
      <div className="content-block">
        <div className="subtitle">MASTERCARD CLASSIC/ GOLD/ PLATINUM</div>
        <div className="paragraph">
          <div>
            Check your mailbox every day and you're sure to see… there are
            thousands of credit cards available from just about every imaginable
            source. Some offer gimmicks, some offer rebates, some you can hardly
            understand just what they are offering.
          </div>
          <div>
            Beware - these tricks always come at a cost, and it will probably be
            right out of your pocket! Rest assured…you don't have to learn the
            hard way - no matter what your needs, a credit union MasterCard
            Credit Card will save you money! In fact, the right credit card can
            save you hundreds of dollars every year. And, saving money is
            something everyone can agree on. That's why our credit card is
            perfect for you. We offer low rates, no hidden fees or charges, and
            the convenience services that put us ahead of the crowd.
          </div>
          <strong>Our Credit Cards Will Save You Money!</strong>
          <div>
            Any Credit Card Applicants are required to have a membership at NYU
            Credit Union. To apply, please click{" "}
            <a
              href="https://www.mobicint.net/nyu/login/loanapp"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>
          </div>
        </div>
        <div className="paragraph">
          <div className="part-title" id="classic">
            CLASSIC CREDIT CARD
          </div>
          <div>
            NYUFCU Classic Credit Card features a 11.9% Annual Percentage Rate
            and no annual fee. Plus, you will enjoy a 25-day grace period on
            purchases and the convenience of worldwide acceptance. Max limit is
            $10,000.00
          </div>
          <div className="bold">
            Exclusively for Gold Card holders:{" "}
            <a
              href="http://www.scorecardrewards.com/"
              target="_blank"
              rel="noreferrer"
            >
              Score Card Reward
            </a>
          </div>
        </div>
        <div className="paragraph">
          <div className="part-title" id="gold">
            GOLD CREDIT CARD
          </div>
          <div>
            The rate on our Gold Credit Card is 6.90% for the first 6 months and
            8.9% fixed rate after 6 months introductory rate and no annual fee.
            Max limit for new credit is $20,000.Promotional limit of up to
            $50,000.00 with balance transfer. Credit restrictions and income
            restrictions apply. Renewing limits up to $30,000.
          </div>
        </div>
        <div className="paragraph">
          <div className="part-title" id="platinum">
            PLATINUM CREDIT CARD
          </div>
          <div>
            The rate on our Platinum Credit Card is 5.90% for the first 6 months
            and 7.9% fixed rate after 6 months introductory rate and no annual
            fee. Max limit for new credit is $20,000. Promotional limit of up to
            $50,000.00 with balance transfer. Credit restrictions and income
            restrictions apply. Renewing limits up to $30,000.
          </div>
        </div>
        <div className="paragraph">
          <div className="part-title">FOR YOUR RECORDS</div>
          <ul>
            <li>
              <a href={Credit_Card_Disclosure} target="_blank" rel="noreferrer">
                CONSUMER CREDIT CARD AGREEMENT AND DISCLOSURE
              </a>
            </li>
            <li>
              <a href={Credit_Card_Classic} target="_blank" rel="noreferrer">
                CREDIT CARD ACCOUNT OPENING DISCLOSURE - CLASSIC
              </a>
            </li>
            <li>
              <a href={Credit_Card_Gold} target="_blank" rel="noreferrer">
                CREDIT CARD ACCOUNT OPENING DISCLOSURE - GOLD
              </a>
            </li>
            <li>
              <a href={Credit_Card_Platinum} target="_blank" rel="noreferrer">
                CREDIT CARD ACCOUNT OPENING DISCLOSURE - PLATINUM
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="content-block" id="secured">
        <div className="subtitle">SECURED CREDIT CARD</div>
        <div className="paragraph">
          <div>
            If you have no credit history or have been denied for a credit card
            before, the Secured Credit Card is for you.
          </div>
          <div>
            The Secured Credit Card is just like the Classic Credit card, except
            we require a 125% pledge in the savings account for the duration
            that the credit card is open. You would pay the credit card monthly
            and if you were to default the funds would be taken from the pledge
            of 125% of the credit limit to pay off the credit card. The activity
            on the Secured Credit Card reports to all three credit agencies and
            is ideal for helping a new graduate or immigrant or simply anyone
            who doesn't have great credit already build up their credit history.
          </div>
          <div>
            The application process can be completed online{" "}
            <a
              href="https://www.mobicint.net/nyu/login/loanapp"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>
            . A NYU FCU share account is required.
          </div>
          <div>
            Along with all of the necessary documents for a credit card as found
            here, you need to sign Pledge of shares agreement. The deposit of
            the collateral pledge of 125% of the line of credit must be made.
          </div>
          <div>
            The minimum credit limit is $500 on the Secured Credit Card.
          </div>
        </div>
      </div>
      <div className="content-block">
        <div className="subtitle">LIMIT INCREASE/EXISTING ACCOUNT REVIEW</div>
        <div className="paragraph">
          <div>
            If your account has been opened for two years and you are in good
            standing, you can apply for a limit increase or upgrade your Classic
            account to a Gold Account.
          </div>
          <div>
            Please complete the form{" "}
            <a
              href="https://secure.na1.echosign.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhDvRvQJqSgEg_PxFlDM9dKUq-6BPgyaGpp3VIKEAlEpU05x60aXgAQOgyDlDHjhO_E*"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>{" "}
            or below.
          </div>
        </div>
      </div>
      <div className="content-block">
        <div className="subtitle">STUDENT CREDIT CARD OPTIONS</div>
        <div className="paragraph">
          <strong>Individual</strong>
          <div>
            Students over the age of 21 with credit history and income may apply
            for an NYU FCU credit card.
          </div>
          <strong>Joint</strong>
          <div>
            Students under the age of 21 with no income and/or credit history
            may apply for an NYU FCU credit card with a creditworthy co-signer
            with positive income.
          </div>
          <strong>Secured</strong>
          <div>
            Students over 21, with no credit history but with positive income
            may apply for a secured credit card. 125% of the desired credit
            limit must be pledged into the Share account while credit history is
            established. After one year, students may apply for an unsecured
            card and their pledge will be released upon application approval.
          </div>
        </div>
      </div>
      <div className="content-block">
        <div className="subtitle">CREDIT CARD BALANCE TRANSFERS</div>
        <div className="paragraph">
          <div>
            Transfer all of your high interest credit card balances onto the NYU
            FCU Credit Card.
          </div>
          <div>
            We are currently having a promotion giving qualifying credit
            history, credit score and income on our Gold Credit Cards, in which
            we are allowing balance transfers up to $50,000. The rate we offer
            for balance transfers is the same as that on purchases. It is 6.9%
            for the first six month from account opening and 8.9% going forward.
            On existing accounts the rate is 8.9%. Your permanent credit limit
            will be up to $15,000.
          </div>
          <div>
            As part of this promotion we are waiving the application fee for our
            Gold Credit Cards with the completion of the balance transfer form.
          </div>
          <div>
            Please complete the form here and submit it with your credit card
            application. If you are an existing Credit Card holder, you can
            always complete the form and submit it to the NYU FCU as long as
            your account is in good standing.
          </div>
          <div>
            For any loan over $10,000 a credit score over 740 is required. Our
            general requirement is a credit score of at least 620, good standing
            credit history and debt to income below 45%.
          </div>
          <div>
            <a
              href="https://secure.na1.echosign.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhC1jKy8hTFPYThxD-JjWHRUlHjAcrwx2wvb9fcyoq-_c6r31JrI-59Iu0qehWYLSGg%2A"
              target="_blank"
              rel="noreferrer"
            >
              Credit Card Balance Transfer Form
            </a>
          </div>
        </div>
      </div>
      <div className="content-block">
        <div className="subtitle"></div>
        <div className="paragraph"></div>
      </div>
    </div>
  );
  const img = <img src={brick} alt= "page-background" className="visit" />;
  const imgContent = (
    <div className="image-content">
      <div className="visit-text">Credit Cards</div>
    </div>
  );
  return <PageLayout content={content} img_content={imgContent} img={img} />;
}
