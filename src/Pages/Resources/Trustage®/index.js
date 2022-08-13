import NYUButton from "../../../Components/Buttons/NYUButton";
import PageLayout from "../../../Components/PageLayout";
import nice from "../nice.jpg";

export default function index() {
  const content = (
    <div className="content-container">
      <div className="content-block">
        <div className="paragraph">
          <div className="part-title">
            TruStage® Insurance: Simple, Straightforward, Budget-Friendly.
          </div>
          nsurance is an important part of a solid financial plan. The key is
          finding coverage that fits your needs and budget from someone you can
          trust. The right insurance can help give you peace of mind.
          <div />
          Backed by more than 80 years of working with credit unions and their
          members, you can count on TruStage to help protect what matters most.
          Trust us for all your insurance needs, including life, health, car and
          home, accidental death and dismemberment coverage and more.
          <NYUButton
            label="Request a Quote or Explore Options"
            redirect="https://trustage.liveplatform.com/CreditUnions/NewYorkUniversityFederalCreditUnion/Orders/Order2022-05-26141402/MintedAssets/GEN-29440472GENINSWebCopyFullVersion/track.mhtml"
          />
          <div>
            TruStage® insurance products and programs are made available through
            TruStage Insurance Agency, LLC. Life insurance and AD&D insurance
            are issued by CMFG Life Insurance Company, PO Box 61, Waverly IA
            50677-0061. Auto and Home Insurance Program are issued by leading
            insurance companies. The insurance offered is not a deposit, and is
            not federally insured, sold or guaranteed by your credit union.
            Products and features may vary by state.
            <blockquote>
              © TruStage Insurance Agency
              <br />
              GEN-2944047.2
            </blockquote>
          </div>
        </div>
        <div className="paragraph">
          <div className="part-title">
            Accidents can happen anytime. Be prepared.
          </div>
          <div>
            A serious or fatal accident could change your family's life in a
            heartbeat.
            <br /> In fact,{" "}
            <i>
              accidents are the third leading cause of death for people of all
              ages.*
            </i>
            <br />
            That's why you're entitled to $0 of no-cost TruStage® Accidental
            Death & Dismemberment Insurance—an exclusive member benefit fully
            paid for by New York University Federal Credit Union.
            <blockquote>
              *Accident statistic from National Safety Council "Injury Facts",
              2018.
            </blockquote>
          </div>
          You can enroll in your no-cost coverage in just a few minutes. If you
          choose, additional insurance is available for you or your entire
          family designed to be at budget-friendly rates. Your acceptance is
          guaranteed—with no health questions or medical exam.
          <NYUButton
            label="enroll in no-cost coverage"
            redirect="https://trustage.liveplatform.com/CreditUnions/NewYorkUniversityFederalCreditUnion/Orders/Order2022-05-26142118/MintedAssets/ADI-29510702EmotionWebCopy/track.mhtml"
          />
          Since accidents can happen anytime, there's no better time to help
          protect the people who matter most.
          <div>
            TruStage® Accidental Death & Dismemberment Insurance is made
            available through TruStage Insurance Agency, LLC and issued by CMFG
            Life Insurance Company, PO Box 61, Waverly, IA 50677-0061. The
            insurance offered is not a deposit, and is not federally insured,
            sold or guaranteed by your credit union. Products and features may
            vary by state. Base Policy Series E10a-015-2012, E10a-014-2012,
            E10a-ADD-2012 and 2018-ADD-POL
            <blockquote>
              © TruStage Insurance Agency
              <br />
              ADI-2951070.2
            </blockquote>
          </div>
        </div>
      </div>
      <div>
        <div className="part-title">TRUSTAGE INSURANCE MAILING OPT-OUT</div>
        <div className="paragraph" style={{ textAlign: "center" }}>
          <div>
            To opt-out of the TruStage insurance mailings, call us at
            212-995-3171 or email{" "}
            <a href="mailto:nyufcu.memberassist@nyu.edu">
              nyufcu.memberassist@nyu.edu
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  const img = <img src={nice} alt= "page-background" className="visit" />;
  const imgContent = (
    <div className="image-content">
      <div className="visit-text">TruStage®</div>
    </div>
  );
  return <PageLayout content={content} img_content={imgContent} img={img} />;
}
