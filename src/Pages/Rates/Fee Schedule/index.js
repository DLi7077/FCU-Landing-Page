import PageLayout from "../../../Components/PageLayout";
import SavingsAccounts from "./SavingsAccounts";
import CheckingAccounts from "./CheckingAccounts";
import GeneralMaintenance from "./GeneralMaintenance";
import water from "../water.jpg";

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
  const img = <img src={water} alt= "page-background" className="visit" />;
  const imgContent = (
    <div className="image-content">
      <div className="visit-text">Service Charge Schedule</div>
    </div>
  );
  return <PageLayout content={content} img_content={imgContent} img={img} />;
}
