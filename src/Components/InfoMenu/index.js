import React from "react";
import "./styles.css";
import "../../Pages/layout.css";
import Calendar from "./Calendar";
import News from "./News";
import Rates from "./Rates";
import { Table, TableBody } from "@mui/material";
import { InfoMenuContent } from "../../Constants/InfoMenu";
import JoinButton from "../Buttons/JoinButton";

const classes = {
  bold: { fontSize: "3rem" },
  text: { fontSize: "1.5rem" },
  arrow: { color: "#72007c", fontSize: "4rem" },
};

export default function InfoMenu() {
  const { calendar, news, rates } = InfoMenuContent;

  return (
    <div className="content-container">
      <Table sx={{ backgroundColor: "white" }}>
        <TableBody sx={{ margin: 0 }}>
          <Calendar
            calendar={calendar}
            arrow={classes.arrow}
            bold={classes.bold}
            text={classes.text}
          />
          <News
            news={news}
            arrow={classes.arrow}
            bold={classes.bold}
            text={classes.text}
          />
          <Rates
            rates={rates}
            arrow={classes.arrow}
            bold={classes.bold}
            text={classes.text}
          />
        </TableBody>
      </Table>
      <div
        style={{
          marginTop: "5rem",
          width: "100%",
          height: "2px",
          backgroundColor: "black",
        }}
      />
      <div
        style={{
          color: "#DD11DD",
          marginInline: "10%",
          marginTop: "2rem",
          fontSize: "1.5rem",
          display: "flex",
          flexDirection: "column",
          textShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)",
          gap: "2rem",
          paddingBottom: "4rem",
        }}
      >
        <div>
          Membership is open to anyone who is an employee, faculty, staff,
          student, alumni or retired employed of NYU or NYU Langone, immediate
          family of NYU FCU member or an individual who resides in and shares
          financial responsibility of a household with a NYU FCU member.
          Membership consists of at least a Savings Account with the NYU FCU.
          Click below to open your NYU FCU Savings account and become a member.
        </div>
        <JoinButton />
      </div>
    </div>
  );
}
