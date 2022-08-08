import PageLayout from "../../../Components/PageLayout";
import NYUButton from "../../../Components/Buttons/NYUButton";

export default function HomebuyerDreamPrograms() {
  const content = (
    <div className="content-container">
      <div className="title"></div>
      <div className="content-block">
        <div className="subtitle">HOMEBUYER DREAM PROGRAM</div>
        <div className="paragraph">
          <div>
            Through our partnership with the FHLBNY, we will be providing
            members with the ability to apply for the Homebuyer Dream Program
            (HDP). Details regarding the program are below.{" "}
          </div>
          <div>
            The HDP is a set-aside program managed within regulatory
            requirements established by the Federal Housing Finance Agency
            (FHFA) 12 C.F.R. Part 1291, as may be amended from time to time (AHP
            Regulation). The HDP provides funds in the form of a grant to be
            used towards down payment and closing cost assistance to first-time
            homebuyers earning at or below 80% of the Area Median Income (AMI)
            and purchasing homes in New York, New Jersey, Puerto Rico or the
            U.S. Virgin Islands.{" "}
          </div>
          <div>
            Homeownership assistance for up to $10,000. The maximum grant amount
            that a household may receive is up to $9,500, as determined by the
            FHLBNY member. Additionally, the Homebuyer Dream Program also offers
            up to $500 towards the defrayment of homeownership counseling costs
            which will be provided for the use of the household via the member
            to the non-profit housing agency. The amount of the defrayment will
            be added to the grant.
          </div>
          <div>
            The HDP will be administered as an annual round on a first-come,
            first served basis. Please <strong>contact us</strong> if you are
            interested in the program.
            <NYUButton label="Contact Us" redirect="/contact-us" />
          </div>
          <div>
            General information can be found Federal Home Loan Bank's Website.
            <NYUButton
              label="Federal Home Loan Bank"
              redirect="https://www.fhlbny.com/community/housing-programs/hdp/"
            />
          </div>
        </div>
      </div>
    </div>
  );
  return <PageLayout content={content} />;
}
