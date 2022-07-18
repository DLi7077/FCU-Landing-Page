import React from "react";
import "./styles.css";
import NyuFcu from "../../Assets/nyu_fcu.svg";
import Insurance from "../../Assets/insurance.svg";

export default function index(props) {
  const addressInfo = [
    "MAIN OFFICE",
    "NYU Federal Credit Union",
    "726 Broadway, Suite 110",
    "New York, NY 10003-9502",
    "Phone: 212-995-3171",
    "Routing Number: 226082129",
  ];
  const otherInfo = [
    "*APR = Annual Percentage Rate",
    "*APY = Annual Percentage Yield.",
    "Your savings are federally insured to at least $250,000 and backed by the full faith and credit of the United States Government, National Credit Union Administration, a U. S. Government Agency. NYU FCU is an equal opportunity housing lender.",
    "We may provide links to third party partners, independent from NYU FCU. We do not manage the content of those sites. The privacy and security policies of external websites will differ from those of NYU Federal Credit Union.",
  ];
  const redirects = [
    "DISCLOSURES",
    "PRIVACY POLICY",
    "CONTACT US",
    "SERVICE CHARGE SCHEDULE",
    "WEBSITE ACCESSIBILITY",
  ];

  const addressText = addressInfo.map((address) => {
    return <div>{address}</div>;
  });
  const otherText = otherInfo.map((other) => {
    return <div style={{ fontWeight: "400" }}>{other}</div>;
  });
  const redirectSection = redirects.map((redirect) => {
    return <div style={{ padding: "1rem" }}>{redirect}</div>;
  });

  return (
    <div className="footer">
      <div className="fcu-logo">
        <img src={NyuFcu} alt="NYU logo" />
      </div>
      <div className="address-info">
        <div>{addressText}</div>
      </div>
      <div className="insurance-logo">
        <img
          src={Insurance}
          alt="Federally Insured by NCUA Equal Housing Lender"
        />
      </div>
      <div className="other-section">{otherText}</div>
      <div className="redirect-section">{redirectSection}</div>
    </div>
  );
}
