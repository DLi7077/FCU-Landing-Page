import NYUButton from "../../../Components/Buttons/NYUButton";
import PageLayout from "../../../Components/PageLayout";
import "../../../Pages/layout.css";

export default function SavingsAccounts() {
  const content = (
    <div className="content-container">
      <div className="title">Savings</div>
      <div className="content-block">
        <div className="paragraph">
          <div>
            Your credit union is an ideal place to save for the future. Our
            savings accounts are federally insured up to $250,000 by the{" "}
            <a href="https://www.ncua.gov/" target="_blank" rel="noreferrer">
              National Credit Union Administration.
            </a>{" "}
            We allow up to $250,000 in combined share/certificate deposits per
            member.
          </div>
          <div>
            Terms are subject to change without notice. Applicable balance
            requirements need to be maintained in order to earn stated rate.
          </div>
          <NYUButton
            redirect="/disclosures"
            label="Applicable Disclosures & Policies"
          />
        </div>
        <div className="subtitle"></div>
      </div>
      <div className="content-block">
        <div className="subtitle">Share Savings Account</div>
        <div className="paragraph">
          <div>
            Open a savings account with just $50 and you are on your way to
            enjoying the many benefits available through your Credit Union
            membership. Watch just how fast your money can grow!
          </div>
          <blockquote>
            Par value of a share is $50. Minimum share balance $50. This amount
            must be maintained in the regular share account at all times in
            order to remain a member of this credit union. Our savings accounts
            are federally insured up to $250,000 by the National Credit Union
            Administration. We allow up to $250,000 in combined
            share/certificate deposits per member.
          </blockquote>
        </div>
      </div>
      <div className="content-block">
        <div className="subtitle">Money Market Account</div>
        <div className="paragraph">
          <div>
            A Money Market account allows you to earn a higher rate of return
            than a traditional savings account without tying up your funds for
            any length of time.
          </div>
          <div>Minimum Balance $1000</div>
          <blockquote>
            Our savings accounts are federally insured up to $250,000 by the
            National Credit Union Administration. We allow up to $250,000 in
            combined share/certificate deposits per member.
          </blockquote>
        </div>
      </div>
    </div>
  );

  return <PageLayout content={content} />;
}
