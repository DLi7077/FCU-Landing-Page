import React from "react";
import visit_image from "../../../Assets/visit_image.jpg";
import "./styles.css";
import "@fontsource/pacifico";
import { Button } from "@mui/material";
import InfoMenu from "../../../Components/InfoMenu";
import PageLayout from "../../../Components/PageLayout";

const classes = {
  button: {
    textTransform: "none",
    backgroundColor: "rgba(217,217,217,.65)",
    color: "white",
    "&:hover": {
      backgroundColor: "rgba(100,100,100,.5)",
    },
    fontSize: "min(4rem,max(2rem,3vw))",
    fontWeight: 400,
    borderRadius: 0.5,
    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    fontFamily: '"Inter", sans-serif',
    paddingTop: 0,
    paddingBottom: 0,
  },
};

export default function Home(props) {
  const visit_img = <img src={visit_image} alt="visit" className="visit" />;
  const img_content = (
    <div className="image-content">
      <div className="visit-text">Your stories and your goals</div>
      <div className="fancy-text" style={{ fontFamily: "Pacifico" }}>
        Matter
      </div>
      <div className="button-area">
        <div>
          <a
            href="https://www.mobicint.net/nyu/login/loanapp"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Button sx={classes.button}>Apply for a Loan</Button>
          </a>
        </div>
        <div>
          <a
            href="https://www.mobicint.net/nyu/openAccount/start"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Button sx={classes.button}>Become a member</Button>
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <PageLayout
      img={visit_img}
      img_content={img_content}
      content={<InfoMenu />}
    />
  );
}
