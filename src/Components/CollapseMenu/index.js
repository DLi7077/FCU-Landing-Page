import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import { Button, Link } from "@mui/material";
import menuContent from "../../Constants/CollapseMenu";
import arrow from "../../Assets/menu_icons/arrow.svg";

export default function Menu() {
  const [currDrop, setCurrDrop] = useState(-1);
  const navigate = useNavigate();

  const handleDropDown = (index) => {
    setCurrDrop(index === currDrop ? -1 : index);
  };
  //Changes background color when selected
  const selectedIcon = (idx) => {
    return idx === currDrop ? { backgroundColor: "#d9d9d9" } : {};
  };
  //Rotates the arrow when selected
  const rotateArrow = (idx) => {
    return idx === currDrop ? { transform: "rotate(180deg)" } : {};
  };

  const collapseView = (
    <div className="menu">
      {menuContent.map((content, idx) => {
        return (
          <Button
            key={idx}
            className="icon-button"
            onClick={() => {
              handleDropDown(idx);
            }}
            sx={Object.assign(selectedIcon(idx), {
              borderRadius: 0,
              borderLeft: "1px solid purple",
              borderRight: "1px solid purple",
              "&:hover": {
                backgroundColor: "#cccccc",
              },
              "&:click": {
                backgroundColor: "#cccccc",
              },
            })}
          >
            <img src={content.icon} className="icon" />
            <div className="icon-title">{content.label}</div>
            <img src={arrow} className="arrow" style={rotateArrow(idx)} />
          </Button>
        );
      })}
    </div>
  );

  const dropDownLinks = currDrop !== -1 && (
    <div className="dropdown-view">
      {menuContent[currDrop].redirects.map((link, idx) => {
        return (
          <Link
            key={idx}
            component="button"
            underline="hover"
            sx={{ width: "100%" }}
            onClick={() => {
              navigate(link.link);
            }}
          >
            <div className="dropdown-text">{link.label} </div>
          </Link>
        );
      })}
    </div>
  );

  return (
    <div className="menu-container">
      {collapseView}
      {dropDownLinks}
    </div>
  );
}
