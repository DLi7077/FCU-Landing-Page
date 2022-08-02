import React from "react";
import { Button } from "@mui/material";

/**
 * Generates a styled button to an external link
 * @param {any} props contains:
 * @param {string} label: The button text
 * @param {string} redirect: The redirect link
 * }
 * @returns a button
 */
export default function NYUButton(props) {
  return (
    <div>
      <a
        href={props.redirect}
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: "none" }}
      >
        <Button
          style={{
            backgroundColor: props.backgroundColor ?? "#CC11DC",
            height: "auto",
            width: props.width ?? "auto",
            border: 0,
            borderRadius: 0,
            color: props.color ?? "white",
            fontSize: "1.5rem",
            fontWeight: 300,
            textTransform: "capitalize",
            marginTop: "0.5rem",
          }}
        >
          {props.label} &#8594;
        </Button>
      </a>
    </div>
  );
}
