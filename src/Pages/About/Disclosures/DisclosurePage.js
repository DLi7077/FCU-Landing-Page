import "../../../Pages/layout.css";
import pdfs from "../../../Constants/About/DisclosurePDF";
import PageLayout from "../../../Components/PageLayout";
import NYUButton from "../../../Components/Buttons/NYUButton";

const classes = {
  pdfGroup: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,300px)",
    justifyContent: "center",
    columnGap: "5rem",
    gap: "1rem",
  },
};

/**
 * @description Disclosure page - presents when password is entered
 * @returns The DIsclosure page
 */
export default function DisclosurePage() {
  const content = (
    <div className="content-container">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="title">Disclosures</div>
      </div>
      <div className="content-block">
        <div style={classes.pdfGroup}>
          {pdfs.map((info, idx) => {
            return (
              <NYUButton
                key={idx}
                label={info.label}
                redirect={info.file}
                width="300px"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
  return <PageLayout content={content} />;
}
