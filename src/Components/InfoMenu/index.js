import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import Calendar from "./Calendar";
import News from "./News";
import Rates from "./Rates";
import { Table, TableBody } from "@mui/material";
import { InfoMenuContent } from "../../Constants/InfoMenu";
import JoinButton from "../Buttons/JoinButton";

const classes = {
  bold: {
    fontSize: "2.5rem",
  },
  text: {
    fontSize: "1.5rem",
  },
};

export default function InfoMenu() {
  const { calendar, news, rates } = InfoMenuContent;
  const navigate = useNavigate();

  return (
    <div className="info-container">
      <Table>
        <TableBody sx={{ margin: 0 }}>
          <Calendar
            calendar={calendar}
            bold={classes.bold}
            text={classes.text}
          />
          <News news={news} bold={classes.bold} text={classes.text} />
          <Rates news={rates} bold={classes.bold} text={classes.text} />
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
          textShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)",
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
