import { useState } from "react";
import PageLayout from "../../../Components/PageLayout";
import PasswordPrompt from "./PasswordPrompt";
import "../../../Pages/layout.css";
import DisclosurePage from "./DisclosurePage";

export default function Disclosures() {
  const [showPage, setPage] = useState(localStorage.getItem("permit") ?? false);
  const handlePageChange = () => {
    setPage(true);
    localStorage.setItem("permit", true);
  };
  const passwordPromptPage = (
    <PasswordPrompt password="nyufcumember" pass={handlePageChange} />
  );
  const disclosurePage = <DisclosurePage />;

  return (
    <PageLayout content={showPage ? disclosurePage : passwordPromptPage} />
  );
}
