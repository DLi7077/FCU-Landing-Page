import NYUButton from "../../../Components/Buttons/NYUButton";
import PageLayout from "../../../Components/PageLayout";
import Overdraft_Protection_Notice from "../../../Assets/pdfs/Overdraft_Protection.pdf";
import "../../../Pages/layout.css";
import cherry_blossoms from "../cherry_blossoms.jpg";

export default function Checking() {
  const content = (
    <div className="content-container">
      <div className="content-block">
        <div className="subtitle">Dividend Checking Account</div>
        <div className="paragraph">
          <div>
            NYU FCU checking accounts just got better! All of the benefits of
            the checking account plus earn 3% on up to $1000 balance on a
            Dividend Bearing Checking Account. Your account must meet all of the
            following criteria every month in order to earn dividends:
          </div>
          <ul className="unordered-list">
            <li>Minimum $500 direct deposit</li>
            <li>10 Debit Card Point of Purchase Transactions</li>
            <li>3 bill pay transactions OR ACH withdrawals</li>
          </ul>
          <div>
            Only individual or joint accounts (no business accounts) are
            eligible to be enrolled in this account type. If you are enrolled
            and do not meet the criteria for the given month, you will not
            receive dividends.
          </div>
          <div>
            Existing members who do not have an existing checking account may
            complete application here. If you have a checking account already,
            please send a message through online banking requesting to be
            converted to a Dividend Checking Account.
          </div>
        </div>
      </div>
      <div className="content-block">
        <div className="subtitle">Checking Account</div>
        <div className="paragraph">
          <div>
            Our Checking account really puts you ahead of the crowd with a FREE
            checking account, and a world of access to your funds at thousands
            of ATMs and merchants with your New York University Federal Credit
            Union MasterCard Debit Card.
          </div>
          <ul className="unordered-list">
            <li>NO monthly fees or per check charges</li>
            <li>Free Debit Card </li>
            <li>Free Online Banking</li>
            <li>Free Bill Pay Service</li>
            <li>Free Mobile Banking and Mobile App</li>
            <li>Free Mobile Deposit</li>
            <li>Free access to more than 35,000 ATMs</li>
            <li>Courtesy Pay available up to $300 including fees</li>
          </ul>
          <div>$50 minimum deposit to open account</div>
          <blockquote>
            Our savings accounts are federally insured up to $250,000 by the
            National Credit Union Administration. We allow up to $250,000 in
            combined share/certificate deposits per member.
          </blockquote>
        </div>
      </div>
      <div className="content-block">
        <div className="subtitle">Application</div>
        <div className="paragraph">
          <div>
            Existing members may complete the application{" "}
            <a
              href="https://secure.na1.echosign.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhC_xqMEOavyDPbYbDghXECgE8l-N8cRY_wyowKJr-8VDfn7RZMkW1A-v9qUQTAlhL8%2A"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>
          </div>
          <div>
            <NYUButton
              redirect="/disclosures"
              label="Applicable Disclosures & Policies"
            />
            <NYUButton
              redirect={Overdraft_Protection_Notice}
              label="Overdraft Protection Notice"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const img = <img src={cherry_blossoms} alt= "page-background" className="visit" />;
  const imgContent = (
    <div className="image-content">
      <div className="visit-text">Checking</div>
    </div>
  );
  return <PageLayout content={content} img_content={imgContent} img={img} />;
}
