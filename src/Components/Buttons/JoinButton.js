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
            padding: "0.2rem",
            paddingInline: "0.5rem",
            height: "auto",
            width: "auto",
            border: 0,
            color: "white",
            fontSize: "1.25rem",
            fontWeight: 300,
            textTransform: "capitalize",
            margin: "0.25rem",
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
