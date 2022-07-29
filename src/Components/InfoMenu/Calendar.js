import React, { useState } from "react";
import { Box, Collapse, IconButton, TableRow, TableCell } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "../../Pages/layout.css";

/**
 * @description Collapsible row containing calendar and event details
 * @param {Object} props - An Object containing calendar and event info
 * @returns {ReactComponent} a Collapsible Row
 */
export default function Calendar(props) {
  const [open, setOpen] = useState(true);

  return (
    <>
      <TableRow id="calendar" sx={{ backgroundColor: "#d4d4d4" }}>
        <TableCell sx={{ width: "100px" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src={props.calendar.icon} className="cell-icon" />
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
          {props.calendar.title}
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
                gap: "1rem",
                fontSize: "1.5rem",
              }}
            >
              <div className="subtitle">Hours of Operation</div>
              <div
                style={{
                  display: "flex",
                  columnGap: "5rem",
                  rowGap: "2rem",
                  flexWrap: "wrap",
                  justifyContent: "flex-start",
                  paddingTop: "0.5rem",
                }}
              >
                {props.calendar.hours.map((branch, idx) => {
                  return (
                    <ul
                      key={idx}
                      className="unordered-list"
                      style={{ fontSize: "1.5rem" }}
                    >
                      <strong>{branch.branch_name}</strong>
                      {branch.times.map((time, idx) => {
                        return (
                          <li key={idx} style={{ fontSize: "1.5rem" }}>
                            {time}
                          </li>
                        );
                      })}
                    </ul>
                  );
                })}
              </div>

              {props.calendar.content.map((c, idx) => {
                return (
                  <>
                    <div key={idx} className="subtitle">
                      {c.subtitle}
                    </div>
                    {c.bullet_points.map((point, idx) => {
                      return (
                        <li key={idx} style={props.text}>
                          {point}
                        </li>
                      );
                    })}
                  </>
                );
              })}

              <div className="subtitle">
                Satellite Branch- Interactive Teller Machine At NYU Langone
                Medical Center
              </div>
              <div className="paragraph" style={{ fontSize: "1.5rem" }}>
                <div>
                  ITM Machine is operating by appointment only. To request an
                  appointment, please contact{" "}
                  <a href="mailto: nyufcu.memberassist@nyu.edu">
                    nyufcu.memberassist@nyu.edu
                  </a>
                </div>
              </div>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}
