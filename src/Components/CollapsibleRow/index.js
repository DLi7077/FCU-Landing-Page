import React, { useState } from "react";
import { assign } from "lodash";
import { Box, Collapse, IconButton, TableRow, TableCell } from "@mui/material";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function CollapsibleRow(props) {
  const [open, setOpen] = useState(props.open ?? false);
  const openedStyle = {};
  const arrowPosition = props.arrow_position === "right" ? "right" : "left";

  const defaultStyle = {
    padding: 0,
    borderBottom: "2px solid #91009e",
    width: "100%",
    backgroundColor: props.row_color?? "none",
  };
  const arrowStyle = {
    color: props.arrow_color ?? "#91009e",
    fontSize: `${props.arrow_rem ?? 4}rem`,
  };

  const arrowComponent = (
    <TableCell style={{ width: "60px", padding: 0 }}>
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
  );

  return (
    <>
      <TableRow sx={open ? assign(defaultStyle, openedStyle) : defaultStyle}>
        {arrowPosition === "left" && arrowComponent}
        <TableCell sx={{ fontSize: "2rem", paddingBottom: "0.5rem" }}>
          {props.title}
        </TableCell>
        {arrowPosition === "right" && arrowComponent}
      </TableRow>
      <TableRow>
        <TableCell style={{ padding: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box
              sx={{
                display: "flex",
                marginLeft: props.margin_left ?? "5rem",
                alignItems: 'center',
                paddingTop: "0.25rem",
                paddingBottom: "1rem",
                backgroundColor: props.collapse_color ?? "none",
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
