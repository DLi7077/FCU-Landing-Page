import { Tab, Tabs } from "@mui/material";
import { useState } from "react";

export default function TabGroup(props) {
  const [tab, setTab] = useState(0);
  return (
    <>
      <Tabs
        variant="scrollable"
        value={tab}
        onChange={(event, newTab) => {
          setTab(newTab);
        }}
      >
        {props.tabs.map((content, idx) => {
          return (
            <Tab
              key={idx}
              label={content.label}
              style={{ color: "#91009e", fontSize: "1.25rem" }}
            />
          );
        })}
      </Tabs>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {props.tabs[tab].content}
      </div>
    </>
  );
}
