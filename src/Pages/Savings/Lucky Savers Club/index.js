import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "../../../Components/PageLayout";
import NYUButton from "../../../Components/Buttons/NYUButton";
import Lucky_Savers_pdf from "../../../Assets/pdfs/Lucky Savers/Lucky_Savers.pdf";
import Truth_In_Savings from "../../../Assets/pdfs/Lucky Savers/Truth_In_Savings.pdf";
import "../../../Pages/layout.css";
import cherry_blossoms from "../cherry_blossoms.jpg";

export default function LuckySaversClub() {
  const LUCKY_SAVERS_ENROLLMENT =
    "https://secure.na1.echosign.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhBQo9y8lJbK_xCpfSBKDqE1KtS4AOUvFb6MBqiKzbKentXezMPI0Dz4RjiB2fe7Z_M%2A";
  const content = (
    <div className="content-container">
      <div className="content-block">
        <div className="subtitle">NYU Federal Credit Union</div>
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
            Send a message through online banking to establish either of the
            below accounts. $50 opening deposit required
            <blockquote>
              <Link to="/disclosures" target="_blank">
                Applicable Disclosures & Policies
              </Link>
            </blockquote>
          </div>
        </div>
      </div>
      <div className="content-block">
        <div
          className="subtitle"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
          }}
        >
          Lucky Savers Club
          <NYUButton label="Enrollment" redirect={LUCKY_SAVERS_ENROLLMENT} />
        </div>
        <div className="paragraph">
          <div className="part-title">What is Lucky Savers?</div>
          It's a special term deposit account at NYU Federal Credit Union that
          helps you build your savings while giving you a chance to win monthly
          and quarterly cash prizes! Every $25 deposit (up to $250 per month)
          into this account gets you a chance to win - up to 10 chances every
          month. Plus, all the money deposited into the Lucky Savers account is
          still yours and helps to build your savings. It's a win-win situation!
          <div className="part-title">How do I open an account?</div>
          You can open a Lucky Savers account by visiting our branch locations:
          at 726 Broadway, Suite 110, or at the NYU Langone Medical Center. You
          can even set up direct deposit or scheduled transfers to increase your
          chance to win.
          <div className="part-title">What are the prizes?</div>
          <ul className="unordered-list">
            <li>
              Each $25 deposit gives you a chance to win a quarterly prize of up
              to $5,000 Each $25 deposit gives you a chance to win a monthly
              prize of up to $100
            </li>
            <li>
              Each $25 deposit gives you a chance to win a monthly prize of up
              to $100
            </li>
          </ul>
          <div className="part-title">
            What are the requirements to open a Lucky Saver's Account?
          </div>
          <ul className="unordered-list">
            <li>Must be 18 years of age or older</li>
            <li>
              A NYU Federal Credit Union member with accounts in good standing
            </li>
            <li>
              Business and Trust accounts are not eligible for this account
            </li>
          </ul>
          <div className="part-title">What is a Term Deposit Account?</div>
          <div>
            A term deposit account is a special savings account. You earn a
            specified dividend if the term deposit account is held for the full
            term; in the case of Lucky Savers, the term is 12 months.
          </div>
          <div className="part-title">What's the Dividend Rate?</div>
          <div>0.50%</div>
          <div className="part-title">
            Why should I open a Lucky Savers Account?
          </div>
          <div>
            Because it's a win-win situation! And, you can win monthly and
            quarterly prizes! With regular deposits into your Lucky Savers
            account, you are guaranteed to have money saved at the end of the
            year.
            <NYUButton label="Official Rules" redirect={Lucky_Savers_pdf} />
            <NYUButton label="Truth-in-Savings" redirect={Truth_In_Savings} />
          </div>
        </div>
      </div>
    </div>
  );
  const img = <img src={cherry_blossoms} alt= "page-background" className="visit" />;
  const imgContent = (
    <div className="image-content">
      <div className="visit-text">Lucky Savers Club</div>
    </div>
  );
  return <PageLayout content={content} img_content={imgContent} img={img} />;
}
