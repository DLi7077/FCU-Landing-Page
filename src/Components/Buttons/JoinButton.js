import React from "react";
import { Button } from "@mui/material";

export default function JoinButton() {
  return (
    <div style={{ width: "fit-content" }}>
      <a
        href="https://www.mobicint.net/nyu/openAccount/start"
        target="_blank"
        rel="noreferrer"
        style={{
          textDecoration: "none",
        }}
      >
        <Button
          sx={{
            backgroundColor: "primary.main",
            height: "3rem",
            border: 0,
            color: "white",
            margin: "0.25rem",
            fontSize: "1.5rem",
            fontWeight: 300,
            textTransform: "capitalize",
            borderRadius: "4px",
            "&:hover": {
              backgroundColor: "primary.darker",
            },
          }}
        >
          Become a Member &#8594;
        </Button>
      </a>
    </div>
  );
}
