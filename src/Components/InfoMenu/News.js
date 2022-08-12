import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Collapse, IconButton, TableRow, TableCell } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "./styles.css";
import NYUButton from "../Buttons/NYUButton";

/**
 * @description Collapsible row containing news details
 * @param {Object} props - An Object containing news info
 * @returns {ReactComponent} a Collapsible Row
 */

export default function News(props) {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  return (
    <>
      <TableRow className="row">
        <TableCell style={{ padding: 0 }}>
          <div className="button-cell">
            <img src={props.news.icon} className="cell-icon" alt="icon" />
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
          <div className="row-title">{props.news.title}</div>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell sx={{ padding: 0 }} colSpan={2}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <div className="collapse-section">
              {props.news.content.map((c, idx) => {
                return (
                  <div key={idx} style={{ padding: "1rem" }}>
                    <div style={{ fontWeight: 700, fontSize: "1.25rem" }}>
                      {c.subtitle}
                    </div>
                    <div style={props.text}>{c.description}</div>
                    {c.redirect && (
                      <NYUButton
                        label={c.redirect.label}
                        redirect={c.redirect.link}
                        hash={c.redirect.hash}
                        local={true}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}
