import PageLayout from "../../../Components/PageLayout";
import SavingsAccounts from "./SavingsAccounts";
import CheckingAccounts from "./CheckingAccounts";
import GeneralMaintenance from "./GeneralMaintenance";

export default function index() {
  const content = (
    <div className="content-container">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        <div className="title" style={{ textAlign: "center" }}>
          Service Charge Schedule
        </div>
        <div
          style={{
            width: "100%",
            border: "1px solid black",
          }}
        >
          <SavingsAccounts />
          <CheckingAccounts />
          <GeneralMaintenance />
        </div>
      </div>
      <div className="content-block">
        <div className="subtitle"></div>
        <div className="paragraph"></div>
      </div>
    </div>
  );

  return <PageLayout content={content} />;
}
