import { useEffect, useState } from "react";
import "./styles.css";
import NumberField from "../../../../Components/NumberField";
import { LoanPaymentCalc } from "../../../../utils/Calculator";
import numeral from "numeral";

export default function LoanPayment() {
  const [loanAmount, setLoanAmount] = useState(0);
  const [interest, setInterest] = useState(0);
  const [months, setMonths] = useState(1);

  const [payment, setPayment] = useState(0);

  useEffect(() => {
    const updatedResult = LoanPaymentCalc({
      loan_amount: loanAmount,
      annual_rate: interest / 100,
      loan_duration_in_months: months,
    });
    console.log(payment);

    setPayment(updatedResult);
  }, [loanAmount, interest, months]);

  return (
    <div className="stat-wrapper">
      <NumberField
        value={loanAmount ?? 0}
        setValue={setLoanAmount}
        type="number"
        label="Loan Amount"
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
        label="Loan Duration (months)"
        min={1}
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
          Loan Payment:
        </div>
        <div style={{ fontSize: "2rem" }}>
          ${numeral(payment).format("0,0")}
        </div>
      </div>
    </div>
  );
}
