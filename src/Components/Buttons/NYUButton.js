import React from "react";
import { get } from "lodash";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

/**
 * Generates a styled button to an external link
 * @param {any} props contains:
 * @param {string} label: The button text
 * @param {string} redirect: The redirect link
 * @param {boolean} local: The link is a local component
 * @returns a button
 */
export default function NYUButton(props) {
  const button_info = (
    <Button
      sx={{
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
        borderRadius: "4px",
        "&:hover": {
          backgroundColor: "#91009e",
        },
      }}
    >
      {props.label} &#8594;
    </Button>
  );

  return (
    <div>
      {!!get(props, "local") ? (
        <Link
          to={props.redirect}
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          {button_info}
        </Link>
      ) : (
        <a
          href={props.redirect}
          rel="noreferrer"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          {button_info}
        </a>
      )}
    </div>
  );
}
