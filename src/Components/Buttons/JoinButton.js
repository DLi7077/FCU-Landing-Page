import React from "react";
import { Button } from "@mui/material";

export default function JoinButton() {
  return (
    <div style={{ display: "block", textDecoration: "none", width: "100%" }}>
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
        <a
          href="https://www.mobicint.net/nyu/openAccount/start"
          target="_blank"
          rel="noreferrer"
          width={"100px"}
        ></a>
        Become a Member &#8594;
      </Button>
    </div>
  );
}
