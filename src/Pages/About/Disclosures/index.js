import React from "react";
import PageLayout from "../../../Components/PageLayout";
import "../../../Pages/layout.css";

export default function Disclosures() {
  const content = (
    <div className="content-container">
      <div className="content-block">
        <div className="title">Disclosures</div>
      </div>
    </div>
  );
  return <PageLayout content={content} />;
}
