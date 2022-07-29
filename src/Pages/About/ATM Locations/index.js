import React from "react";
import PageLayout from "../../../Components/PageLayout";
import {
  WASHINGTON_SQUARE_CAMPUS_ATMS,
  TANDON_CAMPUS_ATMS,
  COLLEGE_OF_DENTISTRY_ATMS,
  LUTHERAN_MEDICAL_CENTER_ATMS,
} from "../../../Constants/About/ATMLocations.js";
import "../../../Pages/layout.css";
import { Table, TableBody } from "@mui/material";
import CollapsibleRow from "../../../Components/CollapsibleRow";
import NYUButton from "../../../Components/Buttons/NYUButton";
import coopCreditUnionLogo from "../../../Assets/about_us/co-op_credit_union.png";

/**
 * @description atm locations page, found in /atm-locations
 * @returns the faq page contents
 */
export default function ATMLocations() {
  const washingtion_square_atm_list = (
    <div style={{ fontSize: "1.5rem" }}>
      <ul className="unordered-list">
        {WASHINGTON_SQUARE_CAMPUS_ATMS.map((location, idx) => {
          return (
            <li key={idx}>
              <a
                href={location.redirect}
                target="_blank"
                rel="noreferrer"
                style={{
                  textDecoration: "none",
                  color: "#84008f",
                  fontWeight: 500,
                }}
              >
                {location.label}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
  const tandon_campus_atm_list = (
    <div style={{ fontSize: "1.5rem" }}>
      <ul className="unordered-list">
        {TANDON_CAMPUS_ATMS.map((location, idx) => {
          return (
            <li key={idx}>
              <a
                href={location.redirect}
                target="_blank"
                rel="noreferrer"
                style={{
                  textDecoration: "none",
                  color: "#84008f",
                  fontWeight: 500,
                }}
              >
                {location.label}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
  const dentistry_college_atm_list = (
    <div style={{ fontSize: "1.5rem" }}>
      <ul className="unordered-list">
        {COLLEGE_OF_DENTISTRY_ATMS.map((location, idx) => {
          return (
            <li key={idx}>
              <a
                href={location.redirect}
                target="_blank"
                rel="noreferrer"
                style={{
                  textDecoration: "none",
                  color: "#84008f",
                  fontWeight: 500,
                }}
              >
                {location.label}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
  const lutheran_medical_center_atms = (
    <div style={{ fontSize: "1.5rem" }}>
      <ul className="unordered-list">
        {LUTHERAN_MEDICAL_CENTER_ATMS.map((location, idx) => {
          return (
            <li key={idx}>
              <a
                href={location.redirect}
                target="_blank"
                rel="noreferrer"
                style={{
                  textDecoration: "none",
                  color: "#84008f",
                  fontWeight: 500,
                }}
              >
                {location.label}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
  // https://co-opcreditunions.org/locator/
  const content = (
    <div className="content-container">
      <div className="title">ATM Locations</div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          fontSize: "1.5rem",
        }}
      >
        Search for a ATM near you with Co-op Credit Unions
        <NYUButton
          label={
            <>
              <img
                src={coopCreditUnionLogo}
                alt="co-op credit union logo"
                width={40}
              />
              Search for an ATM
            </>
          }
          redirect={"https://co-opcreditunions.org/locator/"}
          backgroundColor="lightGray"
          color="black"
        />
      </div>
      <div className="content-block">
        <div className="subtitle">SURCHARGE-FREE ACCESS TO:</div>
        <div className="paragraph">
          <div>
            NYUFCU offers surcharge-free access to 12 NYUFCU ATMs at{" "}
            <strong>NYU's Washington Square campus</strong>, 1 NYUFCU ATM at the
            <strong>NYU Tandon campus </strong>, 1 ATM at{" "}
            <strong>NYU Lutheran Medical Center </strong> and 1 ATM at the{" "}
            <strong>NYU College of Dentistry.</strong>
          </div>
          12 NYUFCU ATMs on Washington Square campus (using your NYUFCU Debit
          Card)
          <div>
            <strong>NYUFCU is part of the Co-op Network. </strong>Your NYUFCU
            MasterCard debit card gives you access to 30,000 surcharge-free ATMs
            across the United States and Canada, as well as some international
            locations. Co-op ATMs can be identified by the logo or using the ATM
            locator at{" "}
            <a
              href="https://co-opcreditunions.org/"
              target="_blank"
              rel="noreferrer"
            >
              https://co-opcreditunions.org/
            </a>{" "}
            or below.
          </div>
          <div>
            <strong>
              NYUFCU does not charge for using an out-of-network ATM, however
              the owners of that ATM may charge you a fee.
            </strong>{" "}
          </div>
          <div>
            <div>On-Campus ATM Locations:</div>

            <Table>
              <TableBody sx={{ margin: 0 }}>
                <CollapsibleRow
                  title="12 NYUFCU ATMs on Washington Square campus (using your NYUFCU Debit Card)"
                  content={washingtion_square_atm_list}
                />
                <CollapsibleRow
                  title="2 NYUFCU ATM on NYU Tandon Campus (using your NYUFCU Debit Card)"
                  content={tandon_campus_atm_list}
                />
                <CollapsibleRow
                  title="1 NYUFCU ATM at NYU College of Dentistry (using your NYUFCU Debit Card)"
                  content={dentistry_college_atm_list}
                />
                <CollapsibleRow
                  title="1 NYUFCU ATM at NYU Lutheran Medical Center (using your NYUFCU Debit Card)"
                  content={lutheran_medical_center_atms}
                />
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );

  return <PageLayout content={content} />;
}
// https://co-opcreditunions.org/locator/search-results/?loctype=AS&zip=11204
