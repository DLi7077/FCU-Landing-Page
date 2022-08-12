import React from "react";
import PageLayout from "../../../Components/PageLayout";
import google_play_store from "../../../Assets/logos/google-play-store.png";
import apple_app_store from "../../../Assets/logos/apple-app-store.png";
import cherry_blossoms from "../cherry_blossoms.jpg";

export default function MobileBanking() {
  const GOOGLE_PLAY_APP =
    "https://play.google.com/store/apps/details?id=com.cmcflex.ftmobile.nyu";
  const APPLE_APP = (
    <a href="https://play.google.com/store/apps/details?id=com.cmcflex.ftmobile.nyu&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
      <img
        alt="Get it on Google Play"
        src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
      />
    </a>
  );
  const content = (
    <div className="content-container">
      <div className="content-block">
        <div className="subtitle">Online Banking</div>
        <div className="paragraph">
          <div className="bold">
            Enjoy the convenience of 24-hour access to all of your accounts with
            our free Online Banking service.
          </div>
          <ul className="unordered-list">
            <li>View your account balance and history</li>
            <li>Transfer funds between accounts</li>
            <li>Make loan and Credit Card payments</li>
            <li>
              Schedule Bill Payments with option to schedule in advance and set
              up recurring payments
            </li>
            <li>Send payments to others using Pop Money</li>
            <li>Review eStatements online</li>
            <li>
              Send secure messages to our Member Services team to make changes
              to account or ask questions
            </li>
            <li>View images of cleared checks</li>
          </ul>
        </div>
      </div>
      <div className="content-block">
        <div className="subtitle">Mobile App</div>
        <div className="paragraph">
          <div>Access your NYUFCU account, on the go</div>
          <div>
            A mobile application designed to allow you to view your balances,
            make transfers or deposit checks
          </div>
          <div>
            Please login using a browser into online banking prior to using
            Mobile Banking.
          </div>
          <div>
            Download the new Mobile App by searching for NYU Federal Credit
            Union in the app store. Access and set up your account from a
            desktop/full-site environment before accessing your new Mobile App.
          </div>
          <div>
            After establishing secured access with your new username and
            password, you may access the Mobile App and register your mobile
            device following the onscreen instructions.
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              columnGap: "3rem",
              flexWrap: "wrap",
            }}
          >
            <div>
              <a href={GOOGLE_PLAY_APP} target="_blank" rel="noreferrer">
                <img
                  src={google_play_store}
                  alt="google play logo"
                  style={{ width: "200px", height: "auto" }}
                />
              </a>
            </div>
            <div>
              <a href={APPLE_APP} target="_blank" rel="noreferrer">
                <img
                  src={apple_app_store}
                  alt="apple logo"
                  style={{ width: "200px", height: "auto" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="content-block">
        <div className="subtitle">E-Statements</div>
        <div className="paragraph">
          <div>
            You can access your NYU Federal Credit Union statement online by
            signing up for eStatements. This will not only help eliminate the
            paper mail that arrives to your home, but you will be able to access
            your statement several days before you would normally receive a
            paper statement.
          </div>
          <div>
            If you are having problems logging into your account, please give us
            a call at (212) 995-3171 between the hours of 9am to 3pm Monday
            through Friday.
          </div>
          <div className="bold" style={{ fontSize: "1.25rem" }}>
            eStatements are also available for your NYU FCU Credit Card.
            Enrollment can be completed on the NYU FCU Credit Card online
            banking site. Contact us for assistance.
          </div>
        </div>
      </div>
      <div className="content-block">
        <div className="subtitle">Bill Pay</div>
        <div className="paragraph">
          <div>
            It is easy to make payments to others using the NYU FCU online
            tools.
          </div>
          <div>
            Bill Pay is available for free with your NYU FCU Checking account.
            Bill pay can be accessed through your online banking by clicking on
            the Bill Pay tab. No payment for postage necessary. Payments are
            sent via check or ACH to the payee that you indicate through online
            banking.
          </div>
        </div>
      </div>
      <div className="content-block">
        <div className="subtitle">Mobile Deposit</div>
        <div className="paragraph">
          NYU Federal Credit Union is excited to introduce a new service! With
          Mobile Deposit, depositing checks is easier than ever with your
          smartphone.
        </div>
      </div>
    </div>
  );
  const img = <img src={cherry_blossoms} className="visit" />;
  const imgContent = (
    <div className="image-content">
      <div className="visit-text">Mobile Banking</div>
    </div>
  );
  return <PageLayout content={content} img_content={imgContent} img={img} />;
}
