import PageLayout from "../../../Components/PageLayout";
import NYUButton from "../../../Components/Buttons/NYUButton";
import walk from "../walk.jpg";

export default function index() {
  const content = (
    <div className="content-container">
      <div className="content-block">
        <div className="subtitle">Small Business Loans</div>
        <div className="paragraph">
          <div className="part-title">
            What kind of Small Business loan meets your needs?
          </div>
          The New York University Federal Credit Union offers a wide range of
          loan products for entrepreneurs operating retail businesses,
          restaurants, service and wholesale businesses, and light
          manufacturers. We also offer loans to small property owners that house
          1 to 4 families and commercial spaces.
          <strong>These loans can be used to:</strong>
          <ul>
            <li>Purchase inventory, supplies or materials</li>
            <li>
              Acquire and/or improvement of machinery, equipment or real estate
            </li>
            <li>Provide working Capital for growing businesses</li>
          </ul>
          <div />
          New York University FCU offers small business loans up to $250,000. We
          require collateral as a real estate property, equipment and etc. To be
          eligible for small business loans, businesses must first become a
          member of the credit union. You can join by making a share (savings)
          deposit of $50 or more and paying a membership fee of $10.
          <div />
          <strong>
            To apply for a Small Business Loan, applicants must provide the
            following:
          </strong>
          <ul>
            <li>Small Business Application Form Business Loan Application</li>
            <li>Prepared Business Plan</li>
            <li>
              Business Tax Returns and Personal Tax Returns of all business
              owners (last 3 years)
            </li>
            <li>
              Business Financial Statements and Personal Financial Statement of
              all business owners (last 3 years) Financial Projections (3 years)
            </li>
            <li>
              Individual Personal Financial Statement (PFS) for business loans
            </li>
          </ul>
          <div>
            On this loans we offer interest rates of prime plus 1.25% to prime
            plus 12%*, depending on overall qualifications of borrower.
          </div>
          <blockquote>
            * Business owners are eligible for small business loans with
            interest rates ranging from prime plus 1.25% to prime plus 3.25%
            when leaving on deposit a dollar amount of 50% to 100% of the loan
            proceeds as collateral in their NYUFCU business account.
            <div style={{ height: "0.5rem" }} />* Business owners must be a NYU
            FCU Business Member for at least 1 year to apply for a business
            loan.
          </blockquote>
        </div>
      </div>
      <div className="content-block">
        <div className="subtitle">Microenterprise Loans</div>
        <div className="paragraph">
          NYUFCU offers microenterprise loans of up to $15,000. These loans are
          designed to increase access to credit and opportunities, especially
          for women and minorities. Microenterprise loans require 20% collateral
          (as a deposit in a new business account). The interest rates range
          from prime plus 7.74% to prime plus 12.74%**, depending on credit
          score.
          <blockquote>
            **Business owners are eligible for microenterprise loans with
            interest rates ranging from prime plus 1.74% to prime plus 4.74%
            when leaving on deposit a dollar amount of 50% to 100% of the loan
            proceeds as collateral in their NYUFCU business account.
          </blockquote>
        </div>
      </div>
      <div className="content-block">
        <div className="subtitle">SBA 7(A) Loans</div>
        <div className="paragraph">
          New York University Federal Credit Union partners with the Small
          Business Administration (SBA) to offer loans through its SBA 7(A) loan
          program. The proceeds of this loan can be used for:
          <ul>
            <li>
              To provide long-term working capital to use to pay operational
              expenses, accounts payable and/or to purchase inventory
            </li>
            <li>
              Short-term working capital needs, including seasonal financing,
              contract performance, construction financing and exporting
            </li>
            <li>
              Revolving funds based on the value of existing inventory and
              receivables, under special conditions and more.
            </li>
          </ul>
          <div>
            To learn more abnout the 7(A) SBA Loan Program, visit their webpage.
            <NYUButton
              label="SBA 7(A) Loans"
              redirect="https://www.sba.gov/funding-programs/loans/7a-loans"
            />
          </div>
        </div>
      </div>
      <div className="content-block">
        <div className="subtitle"></div>
        <div
          className="paragraph"
          style={{ fontSize: "1.75rem", lineHeight: 1.2 }}
        >
          <div>
            To learn more about these services and securing a loan or line of
            credit for your small business, please contact Mira Ness at
            212-995-3166, or{" "}
            <a href="mailto: mira.ness@nyu.edu">mira.ness@nyu.edu</a>.
          </div>
        </div>
      </div>
    </div>
  );

  const img = <img src={walk} className="visit" />;
  const imgContent = (
    <div className="image-content">
      <div className="visit-text">Business Loans</div>
    </div>
  );
  return <PageLayout content={content} img_content={imgContent} img={img} />;
}
