import React from "react";
import "./styles.css";
import NyuFcu from "../../Assets/nyu_fcu.svg";
import Insurance from "../../Assets/insurance.svg";
import AccessibilityPDF from "../../Assets/pdfs/accessibility.pdf";
import HashRedirect from "../HashRedirect";

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
    {
      label: "DISCLOSURES",
      redirect: "disclosures",
    },
    {
      label: "PRIVACY POLICY",
      redirect: "privacy-policy",
    },
    {
      label: "CONTACT US",
      redirect: "contact-us",
    },
    {
      label: "SERVICE CHARGE SCHEDULE",
      redirect: "fee-schedule",
    },
    {
      label: "WEBSITE ACCESSIBILITY",
      redirect: AccessibilityPDF,
    },
  ];

  const addressText = addressInfo.map((address, idx) => {
    return (
      <div key={idx} style={{ fontSize: "1.25rem" }}>
        {address}
      </div>
    );
  });
  const otherText = otherInfo.map((other, idx) => {
    return (
      <div key={idx} style={{ fontWeight: "400" }}>
        {other}
      </div>
    );
  });
  const redirectSection = redirects.map((redirect, idx) => {
    return (
      <div key={idx} style={{ padding: "1rem" }}>
        <a href={redirect.redirect} target="_blank" rel="noreferrer">
          {redirect.label}
        </a>
      </div>
    );
  });

  return (
    <div className="footer">
      <div className="footer-content">
        <div className="bars">
          <div className="address-info">
            <div>{addressText}</div>
          </div>
          <div className="logo">
            <img src={NyuFcu} alt="NYU logo" />
            <img
              src={Insurance}
              alt="Federally Insured by NCUA Equal Housing Lender"
            />
          </div>
        </div>
        <div className="other-section">{otherText}</div>
        <div className="redirect-section">{redirectSection}</div>
      </div>
    </div>
  );
}
