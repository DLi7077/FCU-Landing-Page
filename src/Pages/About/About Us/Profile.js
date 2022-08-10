import { Avatar } from "@mui/material";
import { get } from "lodash";
import React from "react";

export default function Profile(props) {
  const { member } = props;
  return (
    <div
      style={{
        borderBottom: "2px solid #91009e",
        paddingBottom: "1rem",
        padding: "1rem",
        margin: 0,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Avatar
          src={get(member, "image")}
          sx={{
            width: "160px",
            maxWidth: "160px",
            height: "160px",
            border: "4px solid #91009e",
          }}
        />
      </div>
      <div
        style={{
          fontSize: "2rem",
          textAlign: "center",
          lineHeight: 1,
          paddingBottom: "0.5rem",
        }}
      >
        {get(member, "name")}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        {get(member, "roles").map((role, idx) => {
          return (
            <div key={idx} style={{ fontSize: "1.25rem" }}>
              {role}
            </div>
          );
        })}
      </div>
    </div>
  );
}
