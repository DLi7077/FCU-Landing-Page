import React, { useState } from "react";
import {
  Box,
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

const tableMapping = [<LoansTable />, <SavingsTable />, <CreditCardTable />];

/**
 * @description Collapsible row containing rates details
 * @param {Object} props - An Object containing rates info
 * @returns {ReactComponent} a Collapsible Row
 */
export default function Rates(props) {
  const [open, setOpen] = useState(true);
  const [idx, setIdx] = useState(0);

  const handleIdxChange = (event, newValue) => {
    setIdx(newValue);
  };

  return (
    <>
      <TableRow id="news" sx={{ backgroundColor: "#d4d4d4", width: "100%" }}>
        <TableCell sx={{ width: "100px" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src={props.news.icon} className="cell-icon" alt="menu icon" />
          </div>
        </TableCell>
        <TableCell sx={{ width: "60px", padding: 0 }}>
          <IconButton
            aria-label="expand row"
            size="large"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <KeyboardArrowDownIcon
                sx={{ color: "#72007c", fontSize: "4rem" }}
              />
            ) : (
              <KeyboardArrowRightIcon
                sx={{ color: "#72007c", fontSize: "4rem" }}
              />
            )}
          </IconButton>
        </TableCell>
        <TableCell colSpan={2} sx={props.bold}>
          {props.news.title}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell
          sx={{
            paddingBottom: 0,
            paddingTop: 0,
          }}
          colSpan={6}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "min(10%,12rem)",
                paddingBottom: "2rem",
              }}
            >
              {props.news.content.map((c, idx) => {
                return (
                  <div key={idx} style={{ padding: "1rem" }}>
                    <div style={{ fontWeight: 700, fontSize: "1.5rem" }}>
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
                          fontSize: "1.5rem",
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
              <Tabs value={idx} onChange={handleIdxChange}>
                <Tab label="Loans" sx={{ color: "purple" }} />
                <Tab label="Savings" sx={{ color: "purple" }} />
                <Tab label="Credit Card" sx={{ color: "purple" }} />
              </Tabs>
              <div>{tableMapping[idx]}</div>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}
