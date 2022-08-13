import PageLayout from "../../../Components/PageLayout";
import Personal from "./Tables/Personal";
import BillConsolidation from "./Tables/BillConsolidation";
import Vacation from "./Tables/Vacation";
import CreditBuilder from "./Tables/CreditBuilder";
import LifeHappens from "./Tables/LifeHappens";
import MortagePrep from "./Tables/MortgagePrep";
import NYUButton from "../../../Components/Buttons/NYUButton";
import JoinButton from "../../../Components/Buttons/JoinButton";
import water from "../water.jpg";

export default function index() {
  const content = (
    <div className="content-container">
      <div style={{ paddingInline: "5vw" }}>
        <div className="title" style={{ textAlign: "center" }}>
          Loan Rates
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <JoinButton />
          <NYUButton
            label="Learn More about Loan Types"
            redirect="/personal-loans"
          />
        </div>
        <div className="content-block">
          <div className="subtitle">Personal Loans</div>
          <Personal />
        </div>
        <div className="content-block">
          <div className="subtitle">Bill Consolidation Loans</div>
          <BillConsolidation />
        </div>
        <div className="content-block">
          <div className="subtitle">Vacation and Holiday Loans</div>
          <Vacation />
        </div>
        <div className="content-block">
          <div className="subtitle">Credit Builder Loan</div>
          <CreditBuilder />
        </div>
        <div className="content-block">
          <div className="subtitle">Life Happens Loan</div>
          <LifeHappens />
        </div>
        <div className="content-block">
          <div className="subtitle">Mortgage Preparedness Loan</div>
          <MortagePrep />
        </div>
      </div>
    </div>
  );

  const img = <img src={water} alt= "page-background" className="visit" />;
  const imgContent = (
    <div className="image-content">
      <div className="visit-text">Loan Rates</div>
    </div>
  );
  return <PageLayout content={content} img_content={imgContent} img={img} />;
}
