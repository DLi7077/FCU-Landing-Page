import React from "react";
import { get } from "lodash";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import HashRedirect from "../HashRedirect";

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
        backgroundColor: props.backgroundColor ?? "primary.main",
        padding: "0.2rem",
        paddingInline: "0.5rem",
        height: "auto",
        width: props.width ?? "auto",
        border: 0,
        color: props.color ?? "white",
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
      {props.label} &#8594;
    </Button>
  );

  return (
    <div style={{ width: "auto" }}>
      {!!get(props, "local") ? (
        <HashRedirect
          to={{
            pathname: props.redirect,
            hash: props.hash ?? "",
          }}
          target="_blank"
          style={{ textDecoration: "none" }}
          content={button_info}
        />
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
