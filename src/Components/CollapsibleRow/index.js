import React, { useState } from "react";
import { assign } from "lodash";
import { Box, Collapse, IconButton, TableRow, TableCell } from "@mui/material";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function CollapsibleRow(props) {
  const [open, setOpen] = useState(props.open ?? false);
  // const openedStyle = { backgroundColor: "rgba(131, 0, 143,0.5)" };
  const openedStyle = {};
  const defaultStyle = {
    padding: 0,
    borderBottom: "2px solid #84008f",
    width: "100%",
  };
  const arrowStyle = { color: "#84008f", fontSize: "4rem" };
  return (
    <>
      <TableRow sx={open ? assign(defaultStyle, openedStyle) : defaultStyle}>
        <TableCell sx={{ width: "60px", padding: 0 }}>
          <IconButton
            aria-label="expand row"
            size="large"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <ArrowDropDownIcon sx={arrowStyle} />
            ) : (
              <ArrowRightIcon sx={arrowStyle} />
            )}
          </IconButton>
        </TableCell>
        <TableCell colSpan={6} sx={{ fontSize: "1.5rem" }}>
          {props.title}
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
                marginLeft: "5rem",
                paddingTop: "1rem",
                paddingBottom: "1rem",
              }}
            >
              {props.content}
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}
