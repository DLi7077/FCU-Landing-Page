import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { get } from "lodash";
import "./styles.css";
import menuContent from "../../Constants/CollapseMenu";
import icon from "../../Assets/nyu_icon.svg";
import { Button, Drawer, IconButton, Table, TableBody } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CollapsibleRow from "../CollapsibleRow";

export default function Navbar() {
  const navigate = useNavigate();
  const [drawerOpen, setDrawer] = useState(false);

  return (
    <>
      <div className="navbar">
        <div className="burger">
          <IconButton
            onClick={() => {
              setDrawer(!drawerOpen);
            }}
          >
            <MenuIcon style={{ fontSize: "4rem", color: "white" }} />
          </IconButton>
          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={() => {
              setDrawer(false);
            }}
            style={{ maxWidth: "70%" }}
          >
            <div className="drawer">
              <Button
                style={{ width: "100%" }}
                onClick={() => {
                  setDrawer(false);
                }}
              >
                <MenuIcon style={{ fontSize: "4rem", color: "white" }} />
              </Button>
              <Table>
                <TableBody>
                  {menuContent.map((content, idx) => {
                    const label = (
                      <div
                        key={idx}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "1rem",
                        }}
                      >
                        <img src={content.icon} style={{ width: "2.5rem" }} />
                        <div style={{ color: "white", fontSize: "1.75rem" }}>
                          {get(content, "label")}
                        </div>
                      </div>
                    );
                    const { redirects } = content;
                    const dropdownLinks = (
                      <div className="linkGroup">
                        {redirects.map((page, idx) => {
                          return (
                            <div key={idx} style={{ width: "100%" }}>
                              <HashLink
                                to={{
                                  pathname: page.link,
                                  hash: page.hash ?? null,
                                }}
                                style={{
                                  textDecoration: "none",
                                  color: "white",
                                }}
                                onClick={() => {
                                  setDrawer(false);
                                }}
                              >
                                <div className="redirect">{page.label}</div>
                              </HashLink>
                            </div>
                          );
                        })}
                      </div>
                    );

                    return (
                      <CollapsibleRow
                        key={idx}
                        arrow_color="white"
                        arrow_position="right"
                        arrow_rem={3}
                        margin_left="0rem"
                        row_color="#91009e"
                        collapse_color="#aa62b1"
                        title={label}
                        content={dropdownLinks}
                      />
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          </Drawer>
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
        </div>
      </div>
    </>
  );
}
