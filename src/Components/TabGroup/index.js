import { Tab, Tabs } from "@mui/material";
import { useState } from "react"; 

/**
 * @description
 * @param {*} tabs contains a list of objects with the following:
 * @param {string} label - The tab label
 * @param {any} content - The content to render
 * @returns A tab group with the provided contents
 */
export default function TabGroup(props) {
  const [tab, setTab] = useState(0);
  return (
    <>
      <Tabs
        variant="scrollable"
        value={tab}
        scrollButtons={true}
        allowScrollButtonsMobile
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
