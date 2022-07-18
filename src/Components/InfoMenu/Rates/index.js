import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const handleIdxChange = (event, newValue) => {
    setIdx(newValue);
  };

  return (
    <>
      <div id="news"></div>
      <TableRow sx={{ backgroundColor: "#d4d4d4" }}>
        <TableCell sx={{ width: "200px" }}>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <img src={props.news.icon} />
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
                sx={{ color: "black", fontSize: "4rem" }}
              />
            ) : (
              <KeyboardArrowRightIcon
                sx={{ color: "black", fontSize: "4rem" }}
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
                marginLeft: "18rem",
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
                      onClick={() => {
                        navigate(c.redirect.link);
                      }}
                    >
                      {c.redirect.label}
                    </Button>
                  </div>
                );
              })}
              <Tabs value={idx} onChange={handleIdxChange}>
                <Tab label="Loans" sx={{ color: "purple" }} />
                <Tab label="Savings" sx={{ color: "purple" }} />
                <Tab label="Credit Card" sx={{ color: "purple" }} />
              </Tabs>
              {tableMapping[idx]}
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}
