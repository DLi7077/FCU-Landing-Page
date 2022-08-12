import React, { useState } from "react";
import {
  Button,
  Collapse,
  IconButton,
  Tab,
  Tabs,
  TableRow,
  TableCell,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import LoansTable from "./LoansTable";
import SavingsTable from "./SavingsTable";
import CreditCardTable from "./CreditCardTable";
import "../styles.css";

const tableMapping = [<LoansTable />, <SavingsTable />, <CreditCardTable />];

/**
 * @description Collapsible row containing rates details
 * @param {Object} props - An Object containing rates info
 * @returns {ReactComponent} a Collapsible Row
 */
export default function Rates(props) {
  const [open, setOpen] = useState(true);
  const [idx, setIdx] = useState(0);

  const tabStyle = { color: "purple", fontSize: "1.25rem" };
  const handleIdxChange = (event, newValue) => {
    setIdx(newValue);
  };

  return (
    <>
      <TableRow className="row">
        <TableCell style={{ padding: 0 }}>
          <div className="button-cell">
            <img src={props.rates.icon} className="cell-icon" alt="icon" />
            <IconButton
              aria-label="expand row"
              size="large"
              style={{ padding: 0, width: "40px", height: "40px" }}
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <KeyboardArrowDownIcon sx={props.arrow} />
              ) : (
                <KeyboardArrowRightIcon sx={props.arrow} />
              )}
            </IconButton>
          </div>
        </TableCell>
        <TableCell>
          <div className="row-title">{props.rates.title}</div>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell sx={{ padding: 0 }} colSpan={2}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <div className="collapse-section">
              {props.rates.content.map((c, idx) => {
                return (
                  <div key={idx} style={{ padding: "1rem" }}>
                    <div style={{ fontWeight: 700, fontSize: "1.25rem" }}>
                      {c.subtitle}
                    </div>
                    <div style={props.text}>{c.description}</div>

                    <a
                      href={c.redirect.link}
                      target="_blank"
                      rel="noreferrer"
                      style={{ textDecoration: "none" }}
                    >
                      <Button
                        style={{
                          backgroundColor: "#CC11DC",
                          width: "15rem",
                          height: "3rem",
                          border: 0,
                          borderRadius: 0,
                          color: "white",
                          fontSize: "1.25rem",
                          fontWeight: 300,
                          textTransform: "capitalize",
                          marginTop: "0.5rem",
                        }}
                      >
                        {c.redirect.label}
                      </Button>
                    </a>
                  </div>
                );
              })}
              <div style={{ maxWidth: "1000px" }}>
                <Tabs
                  variant="scrollable"
                  value={idx}
                  onChange={handleIdxChange}
                >
                  <Tab label="Loans" sx={tabStyle} />
                  <Tab label="Savings" sx={tabStyle} />
                  <Tab label="Credit Card" sx={tabStyle} />
                </Tabs>
                {tableMapping[idx]}
              </div>
            </div>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}
