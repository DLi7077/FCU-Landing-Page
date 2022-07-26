import React, { useState } from "react";
import { Box, Collapse, IconButton, TableRow, TableCell } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
/**
 * @description Collapsible row containing calendar and event details
 * @param {Object} props - An Object containing calendar and event info
 * @returns {ReactComponent} a Collapsible Row
 */
export default function Calendar(props) {
  const [open, setOpen] = useState(true);

  return (
    <>
      <div id="calendar"></div>
      <TableRow sx={{ backgroundColor: "#d4d4d4" }}>
        <TableCell sx={{ width: "100px" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src={props.calendar.icon} className='cell-icon'/>
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
              }}
            >
              {props.calendar.content.map((c, idx) => {
                return (
                  <div key={idx} style={{ padding: "0.5rem" }}>
                    <div style={{ fontWeight: 700, fontSize: "1.5rem" }}>
                      {c.subtitle}
                    </div>
                    {c.bullet_points.map((point, idx) => {
                      return (
                        <li key={idx} style={props.text}>
                          {point}
                        </li>
                      );
                    })}
                  </div>
                );
              })}
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}
