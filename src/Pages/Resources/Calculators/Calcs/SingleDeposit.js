import { useEffect, useState } from "react";
import "./styles.css";
import NumberField from "../../../../Components/NumberField";
import { SingleDepositCalc } from "../../../../utils/Calculator";
import numeral from "numeral";

export default function SingleDeposit() {
  const [initialDeposit, setInitialDeposit] = useState(0);
  const [interest, setInterest] = useState(0);
  const [years, setYears] = useState(0);

  const [endAmount, setEndAmount] = useState(0);
  const [interestEarned, setInterestEarned] = useState(0);

  useEffect(() => {
    const updatedResult = SingleDepositCalc({
      intial_deposit: initialDeposit,
      annual_interest_rate: interest / 100,
      years: years,
    });

    setEndAmount(updatedResult.end_amount);
    setInterestEarned(updatedResult.interest_earned);
  }, [initialDeposit, interest, years]);

  return (
    <div className="stat-wrapper">
      <NumberField
        value={initialDeposit ?? 0}
        setValue={setInitialDeposit}
        type="number"
        label="Initial Deposit"
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
        value={years ?? 0}
        setValue={setYears}
        type="number"
        label="Years"
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
          Future Value:
        </div>
        <div style={{ fontSize: "2rem" }}>
          ${numeral(endAmount).format("0,0")}
        </div>
      </div>
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
          Interest Earned:
        </div>
        <div style={{ fontSize: "2rem" }}>
          ${numeral(interestEarned).format("0,0")}
        </div>
      </div>
    </div>
  );
}
