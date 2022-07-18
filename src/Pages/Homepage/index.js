import React from "react";
import visit_image from "../../Assets/visit_image.jpg";
import "./styles.css";
import "@fontsource/pacifico";
import { Button } from "@mui/material";
import InfoMenu from "../../Components/InfoMenu";
import PageLayout from "../../Components/PageLayout";

const classes = {
  button: {
    textTransform: "none",
    backgroundColor: "rgba(217,217,217,.65)",
    color: "white",
    "&:hover": {
      backgroundColor: "rgba(100,100,100,.5)",
    },
    fontSize: "48px",
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
      <div>
        <div>Your stories and your goals</div>
        <div style={{ fontFamily: "Pacifico", fontSize: "7rem" }}>Matter</div>
      </div>
      <div className="button-area">
        <Button sx={classes.button}>Apply for a Loan</Button>
        <Button sx={classes.button}>Become a member</Button>
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
