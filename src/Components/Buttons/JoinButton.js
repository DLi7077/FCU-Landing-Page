import React from "react";
import { Button } from "@mui/material";

export default function JoinButton() {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "0.5rem" }}
    >
      <a
        href="https://www.mobicint.net/nyu/openAccount/start"
        target="_blank"
        rel="noreferrer"
        style={{
          textDecoration: "none",
        }}
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
          }}
        >
          Become a Member &#8594;
        </Button>
      </a>
    </div>
  );
}
