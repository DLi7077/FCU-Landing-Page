import { useState } from "react";
import PageLayout from "../../../Components/PageLayout";
import { ARTICLE_CONTENT } from "./Articles";
import { Button } from "@mui/material";
import "./styles.css";
import nice from "../nice.jpg";

export default function Articles() {
  const [article, setArticle] = useState(0);
  const content = (
    <div className="content-container">
      <div className="group-wrapper">
        <div className="article-buttons">
          {ARTICLE_CONTENT.map((article_block, idx) => {
            return (
              <Button
                key={idx}
                onClick={() => {
                  setArticle(idx);
                  window.scrollTo(0, 600);
                }}
                style={{
                  width: "100%",
                  display: "flex",
                  fontSize: "1.35rem",
                  fontWeight: 600,
                  justifyContent: "flex-start",
                  padding: "0.25rem",
                  borderRadius: 0,
                  borderBottom: "1px solid #841ca1",
                  backgroundColor:
                    article === idx ? "rgba(132, 28, 160,0.8)" : "white",
                  color: article === idx ? "white" : "#841ca1",
                }}
              >
                <div style={{ textAlign: "left" }}>{article_block.title}</div>
              </Button>
            );
          })}
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <div className="content-block">
            <div className="subtitle">{ARTICLE_CONTENT[article].title}</div>
            {ARTICLE_CONTENT[article].content}
          </div>
        </div>
      </div>
    </div>
  );

  const img = <img src={nice} alt= "page-background" className="visit" />;
  const imgContent = (
    <div className="image-content">
      <div className="visit-text">Articles</div>
    </div>
  );
  return <PageLayout content={content} img_content={imgContent} img={img} />;
}
