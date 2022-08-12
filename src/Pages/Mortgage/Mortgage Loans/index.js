import PageLayout from "../../../Components/PageLayout";
import NYUButton from "../../../Components/Buttons/NYUButton";
import HomeEquityLoanTable from "./HomeEquityLoanTable";
import { Table, TableBody } from "@mui/material";
import CollapsibleRow from "../../../Components/CollapsibleRow";

export default function MortgageLoans() {
  const subtitleOverride = { border: 0, paddingTop: 0 };

  const content = (
    <div className="content-container">
      <div className="title">Mortgage Loans</div>
      <div className="paragraph">
        To apply for a NYU FCU loan, you must be a member and have a share
        account. <NYUButton label="Check Eligibility" redirect="/join" />
      </div>
      <Table>
        <TableBody>
          <CollapsibleRow
            title={
              <div className="subtitle" style={subtitleOverride}>
                Mortgage Loan
              </div>
            }
            open
            content={
              <div className="content-block">
                <NYUButton
                  label="Mortgage Loan Application"
                  redirect="https://nyufcu.mortgagewebcenter.com/Account/Login?ReturnUrl=%2fApplyNow"
                />
                <div className="paragraph">
                  <div>
                    We offer mortgages on 1-4 family homes, COOPs and condos.
                    Whether you've buying or refinancing your home New York
                    University Federal Credit Union has a full range of loans to
                    fit your needs. The same rates apply on the purchase of a
                    new home and on the refinance of an existing mortgage.
                    Minimum mortgage amount $50,000 and Maximum mortgage amount
                    is $3,000,000.
                  </div>
                  <div>
                    <strong>
                      We offer FREE Pre-Approvals*. Get Pre-approved Before You
                      Shop.
                    </strong>
                    Shop with confidence by knowing what you can afford right
                    from the start. Our pre-approval process lets you know your
                    maximum loan limit.
                  </div>
                  <div>
                    <strong>
                      Mortgages Offered in All 50 States — 5% Down Payment is
                      Allowed
                    </strong>{" "}
                    (Up to 95% financing with PMI)
                  </div>
                  <div>
                    <strong>
                      If you are interested in our mortgage products and have
                      any questions, please call 212-995-3166 or email{" "}
                      <a href="mailto:nyu.fcu@nyu.edu">nyu.fcu@nyu.edu</a>.
                    </strong>
                  </div>
                  <blockquote>
                    <strong>Disclaimer:</strong> Housing counseling agencies
                    approved by the U.S. Department of Housing and Urban
                    Development (HUD) can offer independent advice about whether
                    a particular set of mortgage loan terms is a good fit based
                    on your objectives and circumstances, often at little or no
                    cost. If you are interested in contacting a HUD-approved
                    housing counseling agency in your area, you can visit the
                    Consumer Financial Protection Bureau's (CFPB) website,
                    www.consumerfinance.gov/find-a-housing-counselor, and enter
                    your zip code. You can also access HUD's housing counseling
                    agency website via www.consumerfinance.gov/mortgagehelp. For
                    additional assistance with locating a housing counseling
                    agency, call the CFPB at 1-855-411-CFPB (2372).
                  </blockquote>
                </div>
              </div>
            }
          />
          <CollapsibleRow
            title={
              <div className="subtitle" style={subtitleOverride}>
                Mortgage Preparedness Loan
              </div>
            }
            open
            content={
              <div className="content-block">
                <NYUButton
                  label="Mortgage Prep Loan Application"
                  redirect="https://www.mobicint.net/nyu/login/loanapp"
                />
                <div className="paragraph">
                  <div>
                    Consolidate your debt to prepare for your home purchase by
                    creating cash flow and improving savings. The mortgage
                    preparedness loan can help you consolidate your debts and
                    allow you to make one affordable monthly payment.
                  </div>
                  <div>
                    You may apply up to $50,000 given qualifying credit history,
                    credit score and income. This will be an installment loan
                    for 12-60 months, with a rate depending on the term, with a
                    fixed monthly payment.
                  </div>
                  <div>
                    10% of loan balance is frozen in share account on all
                    unsecured consumer loans
                  </div>
                  <strong>Loan Application Fee- $25</strong>
                </div>
              </div>
            }
          />
          <CollapsibleRow
            title={
              <div className="subtitle" style={subtitleOverride} id='down-payment-assistance'>
                Down Payment Assistance Loan
              </div>
            }
            open
            content={
              <div className="content-block">
                <NYUButton label="Contact Us" redirect="/contact-us" />
                <div className="part-title">
                  Fixed Rate Loan and Variable Rate line of credit options
                  available - Up to 10% - 80/10/10
                </div>
                <div className="paragraph">
                  <div>
                    <strong>
                      Bridging the gap between your savings for home purchases
                      and making that purchase a reality has never been easier.
                      Apply for a Down Payment Assistance Loan today.
                    </strong>{" "}
                    You must have saved at least 10% of the purchase price to
                    take advantage of this program.
                  </div>
                  <div>
                    10% of the purchase price to take advantage of this program.
                  </div>
                  <div>
                    Primary Residence Only, Minimum- $15,000, Maximum - $100,000
                  </div>
                  <div>
                    For Fixed Rate the available repayment period is 5, 10, 15
                    or 20 years. Fixed Rate is determine by term. 5 Year-
                    5.875%, 10 Year - 5.875%, 15 Year- 6.00%, 20 Year- 6.625%
                  </div>
                  <div>
                    For Variable Rate Line of Credit- Term 30 Years. Rate is
                    (Prime Rate Plus 0.50%.)
                  </div>
                  <div>
                    With loans Greater than $50,000 — Closing costs are
                    applicable, member pay for recording fees, transfer taxes
                    and attorney closing fee.
                  </div>
                  <strong>
                    To learn more regarding this program, please contact
                    nyu.fcu@nyu.edu or 212-995-3166
                  </strong>
                </div>
              </div>
            }
          />
          <CollapsibleRow
            title={
              <div className="subtitle" style={subtitleOverride}>
                Home Equity Loan
              </div>
            }
            open
            content={
              <div className="content-block">
                <div className="paragraph">
                  <div>
                    If you own your home, take advantage of the equity in it
                    with a New York University Federal Credit Union variable
                    rate home equity fixed loan or line-of-credit. It's simple,
                    fast, and convenient. *NYU FCU share account is required for
                    all loans. Please note you will need to create a login for
                    the application. This login is not the same as your regular
                    online banking login. Progress in the application is saved
                    and you will be able to return to it before submitting it if
                    you need to complete over multiple sessions.
                  </div>
                  <ul>
                    <li>Closing Cost - Members responsibility.</li>
                    <li>
                      Setup Fees - Charged if loan is terminated for any reason
                      within first two years
                    </li>
                    <li>
                      Primary Homes: House, COOP and Condo (no rental
                      properties, mobile homes and mixed use properties).
                    </li>
                  </ul>
                  <strong>Home Equity Fixed Rate Loan</strong>
                  <ul>
                    <li>Loan amounts from $50,000 to $500,000</li>
                    <li>
                      Line available up to 80% of appraised value minus balance
                      of first mortgage
                    </li>
                  </ul>
                </div>
                <div className="paragraph" style={{ maxWidth: "800px" }}>
                  <HomeEquityLoanTable />
                </div>

                <div className="part-title">
                  Variable Home Equity Line of Credit (HELOC) Application
                  Restrictions/ Guidelines
                </div>
                <div className="paragraph">
                  <ul>
                    <li>Loan amounts from $50,000 to $500,000</li>
                    <li>
                      Line available up to 80% of appraised value minus balance
                      of first mortgage.
                    </li>
                    <li>Maximum Loan Amount - $500,000.</li>
                    <li>Maximum Loan to Value (LTV) - 80%</li>
                    <li>
                      Rate Adjustment Variable - Adjustments made on the 1st of
                      each quarter.
                    </li>
                    <li>Life Cap - 16% APR*, Floor - 4.00%</li>
                    <li>Draw Period - 5 years, 15 year repayment</li>
                  </ul>
                  Index Source - Highest Prime Rate quoted in the Wall Street
                  Journal on the 25th or next business day of the previous
                  month.
                </div>
              </div>
            }
          />
          <CollapsibleRow
            title={
              <div
                className="subtitle"
                style={subtitleOverride}
                id="realty-rewards"
              >
                Realty Rewards
              </div>
            }
            open
            content={
              <div className="content-block">
                <div className="paragraph">
                  <div className="part-title">
                    Real Estate and Relocation Assistance and Benefit
                  </div>
                  <div>
                    The{" "}
                    <a
                      href="https://www.myaffinityservices.com/UNFCU"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Realty Rewards Program
                    </a>{" "}
                    is a FREE, multi-faceted service that offers assistance with
                    buying, selling and financing real estate as well as
                    relocation and rental services and resources. This unique
                    program will save you time and money By signing up and using
                    one of our recommended agents, you can earn up to $2,400
                    cash back* on the sale or purchase of your home (US only).
                  </div>
                  <div>
                    Learn More:
                    <NYUButton
                      label="Realty Rewards Website"
                      redirect="https://www.myaffinityservices.com/UNFCU"
                    />
                    <NYUButton label="Contact Us" redirect="/contact-us" />
                  </div>
                  <blockquote>
                    You may be eligible to receive up to $4,800 if you buy and
                    sell a home when registered with the UNFCU Realty Rewards
                    program. Cash-back is offered on each transaction, based on
                    the sale and/or purchase price of the home. The maximum
                    rebate amount per transaction is $2,400 for property prices
                    in excess of $950,001. Rebate amounts per transaction range
                    from $175 to $2,400 depending on property price. Cash-back
                    not available by law in some states. You must be represented
                    by the assigned real estate agent at the closing of each
                    transaction to qualify for a cash-back rebate. All real
                    estate commissions are negotiable. Contact Realty Rewards
                    Program for terms and conditions and to confirm eligibility
                    for program. Consult your tax advisor with respect to the
                    correct tax treatment of any cash back you receive. The
                    cash-back bonus is offered in most states. In some states, a
                    gift card or commission credit at closing may be provided in
                    lieu of the cash-back bonus. The program is not available in
                    Iowa or outside U.S. Cash-back bonus is not available in
                    Alaska, Louisiana, Mississippi, and Oklahoma. In Kansas and
                    Tennessee, a gift card will be issued that is accepted at
                    specific retailers. State regulations in Kansas limit the
                    dollar amounts and the type of incentive. In New Jersey and
                    Oregon, a commission reduction may be available at closing.
                    Please check with the program coordinator for details. This
                    is not a solicitation if you are already represented by a
                    real estate broker. Other terms and conditions may apply.
                  </blockquote>
                </div>
              </div>
            }
          />
        </TableBody>
      </Table>
    </div>
  );
  return <PageLayout content={content} />;
}
