import PageLayout from "../../../Components/PageLayout";
import TabGroup from "../../../Components/TabGroup";
import MultipleDeposit from "./Calcs/MultipleDeposit";
import SingleDeposit from "./Calcs/SingleDeposit";
import LoanAffordability from "./Calcs/LoadAffordability";
import LoanPayment from "./Calcs/LoanPayment";

const calculators = [
  { label: "Multiple Deposit", content: <MultipleDeposit /> },
  { label: "Single Deposit", content: <SingleDeposit /> },
  { label: "Loan Affordability", content: <LoanAffordability /> },
  { label: "Loan Payment", content: <LoanPayment /> },
];
export default function index() {
  const content = (
    <div className="content-container" style={{ alignItems: "center" }}>
      <div className="title" style={{ width: "fit-content" }}>
        Calculators
      </div>
      <div
        className="content-block"
        style={{ width: "100%" }}
      >
        <TabGroup tabs={calculators} />
      </div>
    </div>
  );

  return <PageLayout content={content} />;
}
