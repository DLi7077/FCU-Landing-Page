import NYUButton from "../../../Components/Buttons/NYUButton";
import PageLayout from "../../../Components/PageLayout";
import ShareSavings from "./Tables/ShareSavings";
import MoneyMarket from "./Tables/MoneyMarket";
import DreamHoliday from "./Tables/DreamHoliday";
import IRAShare from "./Tables/IRAShare";
import IRACertificate from "./Tables/IRACertificate";
import LuckySaversClub from "./Tables/LuckySaversClub";

export default function index() {
  const content = (
    <div className="content-container">
      <div style={{ paddingInline: "5vw" }}>
        <div className="title" style={{ textAlign: "center" }}>
          Share Rates
        </div>
        <div className="content-block">
          <div className="subtitle">Savings</div>
          <div className="paragraph">
            Rates & terms are subject to change without notice. Applicable
            balance requirements need to be maintained in order to earn stated
            rate.
            <div>
              Your credit union is an ideal place to save for the future. Our
              savings accounts are federally insured up to $250,000 by the{" "}
              <a href="https://www.ncua.gov/" target="_blank" rel="noreferrer">
                National Credit Union Administration.
              </a>
            </div>
            <blockquote>
              <NYUButton
                label="Applicable Disclosures & Policies"
                redirect="/disclosures"
              />
            </blockquote>
          </div>
        </div>
        <div className="content-block">
          <div className="subtitle">SHARE SAVINGS ACCOUNT</div>
          <ShareSavings />
        </div>
        <div className="content-block">
          <div className="subtitle">MONEY MARKET ACCOUNT</div>
          <MoneyMarket />
        </div>
        <div className="content-block">
          <div className="subtitle">DREAM & HOLIDAY CLUB ACCOUNTS</div>
          <DreamHoliday />
        </div>
        <div className="content-block">
          <div className="subtitle">IRA SHARE</div>
          <IRAShare />
          <blockquote>
            *Dividends on IRA share accounts are compounded and credited on a
            quarterly basis. The day of deposit/day of withdrawal (actual daily
            balance) method is used to calculate the dividends. This credit
            union will pay dividends on the full balance in the account whether
            deposits are made by cash or check. If you close your IRA account
            before your accrued dividends are credited, no dividends will be
            paid for that period. On all accounts dividends are paid from
            current income and available earnings at the end of a dividend
            period. Dividends rates and annual percentage yields may change from
            time to time on all credit union accounts. IRA accounts terms are
            controlled by the Truth in Savings and the Individual Retirement
            Custodial Account Agreement.
          </blockquote>
        </div>
        <div className="content-block">
          <div className="subtitle">IRA Certificate</div>
          <IRACertificate />
        </div>
        <div className="content-block">
          <div className="subtitle">Lucky Savers Club</div>
          <LuckySaversClub />
        </div>
      </div>
    </div>
  );

  return <PageLayout content={content} />;
}
