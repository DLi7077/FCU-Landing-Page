import PageLayout from "../../../Components/PageLayout";
import NYUButton from "../../../Components/Buttons/NYUButton";
import FixedRateLoanTable from "./FixedRateLoanTable";
import HELOCTable from "./HELOCTable";

export default function HomeEquity() {
  const content = (
    <div className="content-container">
      <div className="title">Home Equity Loans</div>
      <NYUButton
        label="Home Equity Loan/ Line of Credit Application"
        redirect="https://home-equity.nyufcu.com/register"
      />
      <div className="content-block">
        <div className="subtitle">Home Equity Loans</div>
        <div className="paragraph">
          Tap into your home's built-up equity with a fixed-rate loan or
          line-of-credit. You'll save with great rates and a variety of terms,
          plus no annual fees. New York and New Jersey only.
          <ul>
            <li>
              Available to primary residence only: House, Co-Op or Condo (no
              second/vacation homes, investment or rental properties, mobile
              homes and mixed use properties)
            </li>
            <li>Closing costs will be the member's responsibility</li>
            <li>Min credit score of 620</li>
            <li>NYU FCU membership is required for all loans</li>
          </ul>
          Please click on the button above to apply. Please note you will need
          to create a new login for this application. This login is not the same
          as your regular online banking login. Progress in the application will
          be saved so you may return to the application to complete it.
          <br />
          <a
            href="https://www.consumerfinance.gov/owning-a-home/explore/home-loan-toolkit/"
            target="_blank"
            rel="noreferrer"
          >
            Consumer Finance Bureau - Your home loan toolkit: a step by step
            guide
          </a>
        </div>
      </div>
      <div className="content-block">
        <div className="subtitle">Home Equity Fixed Rate Loan</div>
        <div className="paragraph">
          A home equity loan, also called a second mortgage, lets you borrow
          against the equity you've built up in your home through your down
          payment, mortgage payments and increased home value.
          <ul>
            <li>Loan amounts from $50,000 to $500,000</li>
            <li>
              Line available up to 80% of appraised value minus balance of first
              mortgage
            </li>
          </ul>
        </div>
        <div className="paragraph">
          <div style={{ maxWidth: "800px" }}>
            <FixedRateLoanTable />
          </div>
          <strong>This loan is the right choice if you...</strong>
          <ul>
            <li>Have a good amount of equity built up in your home</li>
            <li>Want a lower rate than your average personal loan</li>
            <li>Want steady monthly repayments</li>
            <li>
              Need a large amount of upfront cash, such as for a major home
              repair or vehicle purchase
            </li>
          </ul>
        </div>
      </div>
      <div className="content-block">
        <div className="subtitle">Home Equity Line of Credit</div>
        <div className="paragraph">
          A home equity line of credit (HELOC) is a flexible and affordable way
          to cover large, ongoing or unexpected expenses, like home improvements
          and debt consolidation.
          <ul>
            <li>Loan amounts from $50,000 to $500,000</li>
            <li>
              Line available up to 80% of appraised value minus balance of first
              mortgage
            </li>
            <li>Low adjustable rate of Prime Rate for the life of the loan</li>
            <li>
              Easy access during the five-year draw period with a repayment term
              of 15 years
            </li>
          </ul>
          <strong>HELOC Application Restrictions/Guidelines</strong>
          <ul>
            <li>Maximum Loan Amount - $500,000</li>
            <li>Maximum Loan to Value (LTV) - 80%</li>
            <li>
              Rate Adjustment Variable - Adjustments made on the 1st of each
              quarter
            </li>
            <li>Index - Prime rate</li>
            <li>Life Cap - 16% APR*</li>
            <li>Floor - 5.50%</li>
            <li>Draw Period - 5 years</li>
          </ul>
          <strong>
            A home equity line of credit may be the right choice if:
          </strong>
          <ul>
            <li>You want a lower rate alternative than other loan options</li>
            <li>You have a good amount of equity built up in your home</li>
            <li>
              You want ongoing access to cash, such as for emergencies or
              college tuition
            </li>
          </ul>
          <div style={{ maxWidth: "800px" }}>
            <HELOCTable />
          </div>
          <blockquote>
            Index Source - Wall Street Journal Prime rate
            <br />
            Rates are variable Quarterly, tied to the Prime Rate published in
            the Wall Street Journal, and adjusts on the first day of the
            quarter. Rate is not to exceed 16%. Current Prime Rate effective
            7/28/2022 is 5.50%*
          </blockquote>
        </div>
      </div>
      <div className="content-block">
        <div className="subtitle">Loan-to-Value Ratio</div>
        <div className="paragraph">
          <div>
            Your loan-to-value ratio (LTV) is a percentage that indicates how
            much equity you have in your home. LTV is used to help determine
            rates for home equity loans and lines of credit.
          </div>
          <div>
            To calculate your LTV, <strong>divide</strong> your mortgage balance
            by your property's value like this:
            <br />
            Mortgage balance ÷ Property value = LTV
          </div>
        </div>
      </div>
    </div>
  );
  return <PageLayout content={content} />;
}
