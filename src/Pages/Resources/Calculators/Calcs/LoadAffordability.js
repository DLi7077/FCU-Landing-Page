import { useEffect, useState } from "react";
import "./styles.css";
import NumberField from "../../../../Components/NumberField";
import { LoanAffordabilityCalc } from "../../../../utils/Calculator";
import numeral from "numeral";

export default function LoanAffordability() {
  const [desiredAmount, setDesiredAmount] = useState(0);
  const [interest, setInterest] = useState(0);
  const [months, setMonths] = useState(1);

  const [loanAmount, setLoanAmount] = useState(0);

  useEffect(() => {
    const updatedResult = LoanAffordabilityCalc({
      desired_payment: desiredAmount,
      annual_rate: interest / 100,
      months: months,
    });

    setLoanAmount(updatedResult);
  }, [desiredAmount, interest, months]);

  return (
    <div className="stat-wrapper">
      <NumberField
        value={desiredAmount ?? 0}
        setValue={setDesiredAmount}
        type="number"
        label="Desired Amount"
        min={0}
        max={1000000}
        step={10000}
      />
      <NumberField
        value={interest ?? 0}
        setValue={setInterest}
        type="number"
        label="Interest Rate%"
        min={0}
        max={40}
        step={0.01}
      />
      <NumberField
        value={months ?? 0}
        setValue={setMonths}
        type="number"
        label="Months"
        min={0}
        max={100}
        step={1}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          columnGap: "1rem",
          flexWrap: "wrap",
        }}
      >
        <div className="part-title" style={{ width: "fit-content" }}>
          Loan Amount:
        </div>
        <div style={{ fontSize: "2rem" }}>
          ${numeral(loanAmount).format("0,0")}
        </div>
      </div>
    </div>
  );
}
