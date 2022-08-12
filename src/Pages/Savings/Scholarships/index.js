import PageLayout from "../../../Components/PageLayout";
import JoinButton from "../../../Components/Buttons/JoinButton";
import NYUButton from "../../../Components/Buttons/NYUButton";

export default function Scholarships() {
  const content = (
    <div className="content-container">
      <div className="title">Scholarships</div>
      <div className="content-block">
        <div className="subtitle">The Award</div>
        <div className="paragraph">
          <div>
            New York University Federal Credit Union's Scholarship Program has
            been established to recognize, reward and help make possible the
            pursuit of higher education by NYU FCU members.
          </div>
          <div className="bold" style={{ fontSize: "1.25rem" }}>
            Two $1,000 scholarships will be awarded to incoming freshmen of Fall
            2022, and two $1,000 scholarships for returning students.
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            Not a current member? Must join if granted scholarship.
            <JoinButton />
          </div>
          <NYUButton
            label={"See if you're qualified for membership here"}
            redirect="/join"
            local={true}
          />
        </div>
      </div>
      <div className="content-block">
        <div className="subtitle">Eligibility</div>
        <div className="paragraph">
          <div>
            Eligibility is open to all individuals eligible for NYU FCU
            membership (excluding NYU FCU employees, Directors, Committee
            Members and their immediate families).
          </div>
          <ul>
            <li>
              The applicant must be a member of NYU FCU in good standing or join
              if granted the scholarship
            </li>
            <li>
              The applicant must be attending an accredited 2 or 4 year college,
              university, or other institution of higher learning during the
              Fall 2022 academic year on a full-time basis
            </li>
            <li>
              Scholarship funds must be used by January 31, 2023 on tuition,
              room and board, books, school supplies, etc.
            </li>
          </ul>
        </div>
      </div>
      <div className="content-block">
        <div className="subtitle">Application Process</div>
        <div className="paragraph">
          <div>To apply, eligible members will need the following:</div>
          <ul>
            <li>
              A{" "}
              <a href="https://secure.na1.echosign.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhBXFdHVyRnAOHwDhz2ynrG2-OBeqy6awPnt7FY1aJ3aWmYYj00CdQALfFyQqawoFw8%2A">
                completed and signed application and Certification & Release
                Authorization
              </a>
              <div style={{ fontSize: "1.25rem" }}>
                <i>
                  *If applicant is under 18 years of age, applicant's
                  parent/legal guardian must sign application and Certification
                  & Release Authorization
                </i>
              </div>
            </li>
            <li>Copy of school transcript documenting GPA for grades 9-12</li>
            <li>Copy of SAT/PSAT/ACT transcript</li>
            <li>Typed essay</li>
            <li>NYU FCU account in good standing</li>
            <li>Government issued identification</li>
          </ul>
          <div className="bold">
            Application deadline is September 9, 2022 11:59 pm EST
          </div>
        </div>
      </div>
      <div className="content-block">
        <div className="subtitle">Selection Process</div>
        <div className="paragraph">
          All eligible applications and essays will be evaluated by the credit
          union's scholarship committee. The top 10 applicants will be forwarded
          to the NYU FCU Board Members for final decision. Awardees will be
          notified before announcing the recipients at the 2022 NYU FCU Annual
          Meeting on September 20, 2022. Judging will be based on both
          subjective and objective criteria.
        </div>
      </div>
    </div>
  );
  return <PageLayout content={content} />;
}
