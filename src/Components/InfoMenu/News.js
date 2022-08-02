import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Collapse,
  IconButton,
  TableRow,
  TableCell,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "./styles.css";

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
        <TableCell style={{ width: "10%" }}>
          <div className="button-cell">
            <div
              id="news"
              style={{
                position: "relative",
                top: "-80px",
                width: 0,
                height: 0,
                padding: 0,
                margin: 0,
                visibility: "hidden",
              }}
            />
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
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}
