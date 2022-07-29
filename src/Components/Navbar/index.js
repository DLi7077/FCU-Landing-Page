import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { map } from "lodash";
import "./styles.css";
import icon from "../../Assets/nyu_icon.svg";
import { Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  const navigate = useNavigate();
  const [dropDisplay, setDropDisplay] = useState(false);
  const headers = {
    Loans: "/loans",
    Eligibility: "/eligibility",
    Forms: "/forms",
  };
  const headerLinks = map(headers, (redirect, key) => {
    return (
      <Button
        key={key}
        style={{ textTransform: "none" }}
        onClick={() => {
          navigate(redirect);
        }}
      >
        <div className="text">{key}</div>
      </Button>
    );
  });

  return (
    <>
      <div className="navbar">
        <div className="burger">
          <IconButton
            onClick={() => {
              setDropDisplay(!dropDisplay);
            }}
          >
            <MenuIcon style={{ fontSize: "4rem", color: "white" }} />
          </IconButton>
        </div>
        <div className="wrapper">
          <Button
            onClick={() => {
              navigate("/");
            }}
            className="home-icon"
          >
            <img src={icon} style={{ maxWidth: "100%", maxHeight: "100%" }} />
          </Button>
          <div className="redirects">{headerLinks}</div>
        </div>
        <div className="sign-up">
          <div className="text">Sign up</div>
        </div>
      </div>

      {dropDisplay && (
        <div className="drop-down">
          {headerLinks}

          <a
            href="https://www.mobicint.net/nyu/login"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Button style={{ textTransform: "none" }}>
              <div className="text">Sign up</div>
            </Button>
          </a>
        </div>
      )}
    </>
  );
}
