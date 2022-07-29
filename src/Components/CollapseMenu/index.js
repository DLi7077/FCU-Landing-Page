import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import { Button } from "@mui/material";
import menuContent from "../../Constants/CollapseMenu";
import arrow from "../../Assets/menu_icons/arrow.svg";

export default function Menu() {
  const [currDrop, setCurrDrop] = useState(-1);

  /**
   * @description Scroll to top of page on load
   */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDropDown = (index) => {
    setCurrDrop(index === currDrop ? -1 : index);
  };
  //Changes background color when selected
  const selectedIcon = (idx) => {
    return idx === currDrop ? { backgroundColor: "#d9d9d9" } : {};
  };
  //Rotates the arrow when selected
  const rotateArrow = (idx) => {
    return idx === currDrop ? { transform: "rotate(0deg)" } : {};
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
              "&:hover": {
                backgroundColor: "#cccccc",
              },
              "&:click": {
                backgroundColor: "#cccccc",
              },
            })}
          >
            <>
              <img src={content.icon} className="icon" />
              <div className="icon-title">{content.label}</div>
              <img src={arrow} className="arrow" style={rotateArrow(idx)} />
            </>
          </Button>
        );
      })}
    </div>
  );

  const dropDownLinks = currDrop !== -1 && (
    <div className="dropdown-view">
      {menuContent[currDrop].redirects.map((page, idx) => {
        return (
          <HashLink
            key={idx}
            smooth
            to={{
              pathname: page.link,
              hash: page.hash ?? null,
            }}
          >
            <div className="dropdown-text">{page.label} </div>
          </HashLink>
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
