import React from "react";
import PageLayout from "../../../Components/PageLayout";
import JoinButton from "../../../Components/Buttons/JoinButton";
import "../../../Pages/layout.css";
import bird_eye from "../bird_eye.png";

/**
 * @description Join page, found in /join
 * @returns the join page contents
 */
export default function Join() {
  const img = <img src={bird_eye} className="visit" />;
  const imgContent = (
    <div className="image-content">
      <div className="visit-text">
        Lifetime Membership: Who may join and how?
      </div>
    </div>
  );
  
  const content = (
    <div className="content-container">
      <div className="title">Lifetime Membership: Who may join and how?</div>
      <div className="content-block">
        <div className="subtitle">Membership Requirements</div>
        <div className="paragraph">
          <div>
            Membership is open to all students, faculty, staff, NYU alumni,
            retiree and their immediate family members.
          </div>
          <div>
            <strong>If you are:</strong>
            <ul className="unordered-list">
              <li>An employee, faculty, staff or student at NYU</li>
              <li>Alumni or retired employee of NYU</li>
              <li>
                Immediate family member of a NYU FCU member (including spouse,
                parents, children, stepchildren, grandchildren, step
                grandchildren, grandparents, step brothers, brothers, step
                sisters, and sisters)
              </li>
              <li>
                An individual who resides in and shares financial responsibility
                of a household with a NYU FCU member.
              </li>
            </ul>
            <strong>Then NYU FCU membership is open to you!</strong>
            <div>
              If you move, change jobs, or leave the University you may retain
              your membership with the Credit Union as long as you keep a
              minimum of $50 in your savings account.
            </div>
            <div>
              Please contact Member Services if you have any questions on
              qualifying for Membership.
            </div>
          </div>
        </div>
      </div>
      <div className="content-block">
        <div className="title">Application Process and Required Documents</div>
        <div className="subtitle">How to Join</div>
        <div className="paragraph">
          <div>
            Becoming a member of the NYU FCU is easy. Membership is the most
            significant difference between your credit union and other financial
            institutions. A minimal deposit of $50 into a savings account and
            $10 one time membership fee establishes your Membership and gives
            you a share in ownership.
          </div>
          <div>
            As a member, you share in NYU FCU's earnings. As the credit union
            makes money, it reinvests it to improve products and services for
            our members.
          </div>
          <div>
            Please complete the online application prior to stopping by the
            branch or mailing in supporting documentation and initial deposits.
          </div>
          <div>
            <JoinButton />
          </div>
          <div>
            <div style={{ fontWeight: 700 }}>Contact Us:</div>
            <ul className="unordered-list">
              <li>
                <div>
                  <div>
                    <strong style={{ paddingRight: "5.5rem" }}>Call </strong>
                    (212) 995-3171
                  </div>
                  <div>
                    <strong>Toll-free/USA </strong>(800) 997-0724
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <strong>Email </strong>
                  <a href="mailto: nyufcu.memberassist@nyu.edu">
                    nyufcu.memberassist@nyu.edu
                  </a>
                </div>
              </li>
              <li>
                <div>
                  <strong>Fax </strong>
                  (347) 602-4751
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="content-block">
        <div className="title">Documents Needed</div>
        <div className="subtitle">NEW MEMBER IDENTIFICATION</div>
        <div className="paragraph">
          <strong>
            Request for Membership from Employees, Students, or Alumni:
          </strong>
          <div>The following documentation would be required:</div>
          <ul className="unordered-list">
            <li>
              Valid (non-expired) US or state government issued photo
              identification such as drivers license, state identification card,
              US passport or Alien Registration card with photo. If the address
              on your application does not match that found on your state ID, we
              will require additional documents.
            </li>
            <li>
              Photo ID issued by NYU. New employees and students must receive
              their photo ID before joining NYU FCU
            </li>
            <li>
              All new members must provide a valid social security or other
              taxpayer identification number issued by the US Social Security
              Administration.
            </li>
          </ul>
          <strong>
            Request for Membership from Employees, Students, or Alumni:
          </strong>
          <div>
            Family members of NYU FCU members may also join NYU FCU. The
            following documentation would be required:
          </div>
          <ul className="unordered-list">
            <li>
              Valid (non-expired) US or state government issued photo
              identification such as drivers license, state identification card,
              US passport or Alien Registration card with photo. If the address
              on your application does not match that found on your state ID, we
              will require additional documents.
            </li>
            <li>
              Second form ID: can be a second government issued, student ID or
              work ID.
            </li>
            <li>
              All new members must provide a valid social security or other
              taxpayer identification number issued by the US Social Security
              Administration.
            </li>
            <li>
              Information regarding whom you qualify for membership through-
              must be direct family member or someone whom you share at least
              50% of household expenses with.
            </li>
          </ul>
          <div>
            NYU FCU reserves the right to deny membership to any applicant based
            upon information we receive while performing a third party credit
            reference or comparisons to government watch lists including, but
            not limited to the Office of Foreign Asset Control (OFAC).
            Membership may also be denied if the legitimacy of any of the above
            types of identification is in doubt.
          </div>
          <div>
            <strong>
              To help the government fight the funding of terrorism and money
              laundering activities, Federal law requires all financial
              institutions to obtain, verify, and record information that
              identifies each person who opens an account.
            </strong>
          </div>
          <div>
            <strong>What this means for you:</strong> When you open an account,
            we will ask for your name, address, date of birth, and other
            information that will allow us to identify you. We may also ask to
            see your driver's license or other identifying documents.
          </div>
          <div>
            If applying by mail, you must include a photocopy of your government
            issued picture identification, which must be signed and the
            signature must be notarized by an authorized Notary Public.
          </div>
          <div>
            Send your completed application along with a copy of your picture
            ID, filled W-9/W-8 form, account holder agreement and a $50 Savings
            Account deposit and $10 one time membership fee to:
          </div>
          <div>
            <strong>New York University Federal Credit Union</strong>
            <div>726 Broadway, Suite 110, New York, NY 10003</div>
            <div>212-995-3171</div>
          </div>
        </div>
      </div>
    </div>
  );

  return <PageLayout content={content} img={img} img_content={imgContent} />;
}
