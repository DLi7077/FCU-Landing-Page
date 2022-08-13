import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "../../../Components/PageLayout";
import NYUButton from "../../../Components/Buttons/NYUButton";
import "../../../Pages/layout.css";
import cherry_blossoms from "../cherry_blossoms.jpg";

export default function DreamHolidayClub() {
  const FORM_LINK =
    "https://secure.na1.echosign.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhD-81tVP7qW5NVmOv4qJd5HYQinFzHlDeJfydlMgNz4VYu3LcPHH6GWIXrqJa9iZLw%2A";
  const formRedirectButton = (
    <>
      <div style={{ textAlign: "center", fontSize: "1.875rem" }}>
        Sign up today!
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <NYUButton label="Club Account Application" redirect={FORM_LINK} />
      </div>
    </>
  );
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
        <div className="subtitle">Holiday Club Accounts</div>
        <div className="paragraph">
          <div>
            If the Holiday season always seems to find you a little short of
            cash, your credit union has just the solution with our Holiday Club.
            This service is specifically designed to help you save for the
            holidays. The account is easy to open and provides an efficient and
            painless way to have cash on hand when you need it.
            {formRedirectButton}
          </div>
          <blockquote>
            Dividends on club accounts are compounded and credited on a
            quarterly basis. The average daily balance method is used to
            calculate dividends. The average daily balance is determined by
            adding the balance in the account for each day of the period and
            dividing that amount by the number of days in the period. This
            credit union will use the full balance in the account for
            calculation whether deposits are made by cash or check. If you close
            your account before your accrued dividends are credited, you will
            not be paid any dividends for that period.
          </blockquote>
        </div>
      </div>
      <div className="content-block">
        <div className="subtitle">Dream Club Accounts</div>
        <div className="paragraph">
          <div>
            Save for whatever matters to you! You can save for a down payment,
            wedding, family event or absolutely anything. This account will be
            structured under the term of your choice to encourage you to stick
            to your goal of saving for your Dream! You have a choice of 6
            months, 12 months, 18 months or 24 months.
            {formRedirectButton}
          </div>
          <blockquote>
            Dividends on club accounts are compounded and credited on a
            quarterly basis. The average daily balance method is used to
            calculate dividends. The average daily balance is determined by
            adding the balance in the account for each day of the period and
            dividing that amount by the number of days in the period. This
            credit union will use the full balance in the account for
            calculation whether deposits are made by cash or check. If you close
            your account before your accrued dividends are credited, you will
            not be paid any dividends for that period.
          </blockquote>
        </div>
      </div>
    </div>
  );
  const img = <img src={cherry_blossoms} className="visit" />;
  const imgContent = (
    <div className="image-content">
      <div className="visit-text">Dream & Holiday Club</div>
    </div>
  );
  return <PageLayout content={content} img_content={imgContent} img={img} />;
}
