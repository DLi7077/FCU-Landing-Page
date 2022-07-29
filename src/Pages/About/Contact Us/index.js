import "../../../Pages/layout.css";
import PageLayout from "../../../Components/PageLayout";
import EmailSubmisson from "../../../Components/EmailSubmission";
/**
 * @description Contact Us page, found in /contact-us
 * @returns the Contact Us page contents
 */
export default function ContactUs() {
  const content = (
    <div className="content-container">
      <div className="title">Contact Us</div>
      <div className="content-block">
        <div className="subtitle">Locations</div>
        <div className="paragraph">
          <div>
            <strong>New York Branch</strong>
            <div>726 Broadway Suite 110 New York, NY 10003</div>
          </div>
          <div>
            <strong>Mineola Branch</strong>
            <div>194 1st Street Mineola, NY 11501</div>
          </div>
          <div>
            <strong>Virtual Branch:</strong>
            <div>
              NYU Langone Medical Center Science Building 435 E 30th Street New
              York, NY 10016
            </div>
          </div>
          <div>
            <a
              href="https://www.mobicint.net/nyu/login"
              target="_blank"
              rel="noreferrer"
            >
              Digital Branch
            </a>{" "}
            and Mobile App Branch is available 24/7
          </div>
        </div>
      </div>
      <div className="content-block">
        <div className="subtitle">Member Services</div>
        <div className="paragraph">
          <div>
            Phone (Monday-Friday 9:00 a.m. - 5:00 p.m.):{" "}
            <strong>212-995-3171</strong>
          </div>
          <div>
            Email:{" "}
            <a href="mailto: nyufcu.memberassist@nyu.edu">
              nyufcu.memberassist@nyu.edu
            </a>
            <div style={{ fontSize: "1rem", fontWeight: 600 }}>
              *Please do not include sensitive personal information in the
              message. Email is NOT guaranteed to be secure.
            </div>
          </div>
          <div>
            <strong>
              Secured Messages are available through{" "}
              <a
                href="https://www.mobicint.net/nyu/login"
                target="_blank"
                rel="noreferrer"
              >
                DigitalBranch
              </a>
            </strong>
          </div>
          <div>
            Fax: <strong>347-602-4751</strong>
          </div>
          <div>
            Bill Pay Support: <strong>855-226-1712</strong>
          </div>
        </div>
      </div>
      <div className="content-block">
        <div className="subtitle">Debit & Credit Card</div>
        <div className="paragraph">
          <div>
            24/7 Card Center: <strong>501-246-8497</strong>
          </div>
          <div>
            Card Activation and Pin Change: <strong>866-207-9167</strong>
          </div>
          <div>
            Lost/Stolen: <strong>833-933-1681</strong>
          </div>
          <div>
            Dispute Initiation: <strong>866-279-1399</strong>
          </div>
        </div>
      </div>
      <div className="content-block">
        <div className="subtitle">Email Submission Form</div>
        <div className="paragraph">
          <EmailSubmisson />
        </div>
      </div>
    </div>
  );

  return <PageLayout content={content} />;
}
