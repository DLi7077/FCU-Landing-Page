import { useState } from "react";
import PageLayout from "../../../Components/PageLayout";
import PasswordPrompt from "./PasswordPrompt";
import "../../../Pages/layout.css";
import DisclosurePage from "./DisclosurePage";

export default function Disclosures() {
  const [showPage, setPage] = useState(false);

  const handlePageChange = () => {
    setPage(true);
  };
  const passwordPromptPage = (
    <PasswordPrompt password="password" pass={handlePageChange} />
  );
  const disclosurePage = <DisclosurePage />;

  return (
    <PageLayout content={showPage ? disclosurePage : passwordPromptPage} />
  );
}
