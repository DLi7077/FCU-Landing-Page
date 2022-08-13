import { useState } from "react";
import PageLayout from "../../../Components/PageLayout";
import PasswordPrompt from "./PasswordPrompt";
import "../../../Pages/layout.css";
import DisclosurePage from "./DisclosurePage";
import bird_eye from "../bird_eye.png";

export default function Disclosures() {
  const img = <img src={bird_eye} alt= "page-background" className="visit" />;
  const imgContent = (
    <div className="image-content">
      <div className="visit-text">Disclosures</div>
    </div>
  );
  const [showPage, setPage] = useState(localStorage.getItem("permit") ?? false);
  const handlePageChange = () => {
    setPage(true);
    localStorage.setItem("permit", true);
  };
  const passwordPromptPage = (
    <PasswordPrompt password="nyufcumember" pass={handlePageChange} />
  );
  const disclosurePage = <DisclosurePage />;

  if (showPage)
    return (
      <PageLayout content={disclosurePage} img_content={imgContent} img={img} />
    );
    
  return <PageLayout content={passwordPromptPage} />;
}
