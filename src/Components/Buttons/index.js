import React from "react";
import { Button } from "@mui/material";

export default function NYUButton(props) {
  return (
    <a
      href={props.redirect}
      target="_blank"
      rel="noreferrer"
      style={{ textDecoration: "none" }}
    >
      <Button
        style={{
          backgroundColor: "#CC11DC",
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
        {props.label} &#8594;
      </Button>
    </a>
  );
}
