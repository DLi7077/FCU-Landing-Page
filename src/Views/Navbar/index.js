import React from "react";
import "./styles.css";
import CarRentalIcon from "@mui/icons-material/CarRental";
import SavingsIcon from "@mui/icons-material/Savings";
import icon from "../../Assets/nyu_icon.svg";

export default function Navbar() {
  const headers = ["Loans", "Eligibility", "Forms"];
  const headerLinks = headers.map((header) => {
    return <div className="text">{header}</div>;
  });

  return (
    <div className="navbar">
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <img src={icon} />
        <div className="redirects">{headerLinks}</div>
      </div>
      <div className="sign-up">
        <div className="text">Sign up</div>
      </div>
    </div>
  );
}
