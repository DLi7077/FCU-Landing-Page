import PageLayout from "../../../Components/PageLayout";
import TabGroup from "../../../Components/TabGroup";
import MultipleDeposit from "./Calcs/MultipleDeposit";
import SingleDeposit from "./Calcs/SingleDeposit";
import LoanAffordability from "./Calcs/LoadAffordability";
import LoanPayment from "./Calcs/LoanPayment";
import nice from "../nice.jpg";

const calculators = [
  { label: "Multiple Deposit", content: <MultipleDeposit /> },
  { label: "Single Deposit", content: <SingleDeposit /> },
  { label: "Loan Affordability", content: <LoanAffordability /> },
  { label: "Loan Payment", content: <LoanPayment /> },
];
export default function index() {
  const content = (
    <div className="content-container" style={{ alignItems: "center" }}>
      <div className="content-block" style={{ width: "100%" }}>
        <TabGroup tabs={calculators} />
      </div>
    </div>
  );

  const img = <img src={nice} alt= "page-background" className="visit" />;
  const imgContent = (
    <div className="image-content">
      <div className="visit-text">Calculators</div>
    </div>
  );
  return <PageLayout content={content} img_content={imgContent} img={img} />;
}
