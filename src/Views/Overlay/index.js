import React from "react";
import "./styles.css";

export default function Overlay() {
  const Elaina = require("../../Assets/beach.png");
  return (
    <div className="container">
      <img src={Elaina} loading="lazy" style={{ overflow: "hidden" }} />
      <div className="nested-text">Elaina</div>
    </div>
  );
}
