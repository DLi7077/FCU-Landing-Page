import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";
import { Tab, Tabs } from "@mui/material";
import PageLayout from "../../../Components/PageLayout";
import Slideshow from "../../../Components/Slideshow";
import NYUButton from "../../../Components/Buttons/NYUButton";
import ceremony from "../../../Assets/about_us/august_1982_opening_ceremony.jpg";
import annual2019PDF from "../../../Assets/about_us/files/2019_annual_report_spread.pdf";
import "./styles.css";
import "../../../Pages/layout.css";
import Profile from "./Profile";
import {
  BOARD_MEMBERS,
  FCU_TEAM,
  KitchenSlides,
  MeetingSlides,
} from "../../../Constants/About/AboutUs";

const videos = [
  {
    label: "NYU FCU Theme Song",
    link: "https://youtu.be/K7g8xdoxBKc",
  },
  {
    label: "Our History",
    link: "https://youtu.be/l43B6vIJ-Zw",
  },
  {
    label: "Products & Services",
    link: "https://youtu.be/fzlKDJDLPpc",
  },
  {
    label: "Meet Our Members: Edgar The Singer",
    link: "https://youtu.be/XX_zYRVg88g",
  },
  {
    label: "Meet Our Members: Robert's Life In Pictures",
    link: "https://youtu.be/hxlrPtA2HMo",
  },
  {
    label: "NYU President Andy Hamilton's Speech",
    link: "https://youtu.be/Y9WK5sQEnHM",
  },
  {
    label: "NYU FCU Grand Opening",
    link: "https://youtu.be/RxpT6_wNvho",
  },
  {
    label: "NYU FCU ITM Instructions",
    link: "https://youtu.be/Ckp0B-hYSck",
  },
  {
    label: "NYU FCU After Hours",
    link: "https://youtu.be/8x-it1djM1U",
  },
];

export default function AboutUs() {
  const [video, setVideo] = useState(0);
  const content = (
    <div className="content-container">
      <div className="title">About Us</div>
      <div className="content-block">
        <div className="subtitle">NYU Federal Credit Union</div>
        <div className="paragraph">
          <div>
            New York University Federal Credit Union was founded in August of
            1982 by then President of NYU,{" "}
            <a
              href="https://www.nyu.edu/community/government-affairs/study-of-congress/about-john-brademas.html"
              target="_blank"
              rel="noreferrer"
            >
              John Brademas
            </a>{" "}
            for the benefit of the NYU employees.
          </div>
          <div>
            <div className="article-image-container">
              <img src={ceremony} alt="ceremony" className="article-image" />
              <div style={{ fontSize: "0.8rem" }}>
                John Brademas, NYU President with James Ramsey, NYU FCU
                President August 1982, Opening Ceremony
              </div>
            </div>
            <div style={{ paddingTop: "1.5rem" }}>
              Since then the services of the <strong> NYU FCU </strong> were
              extended to faculty, alumni, students, retirees and their family
              members. Most recently, with devoted staff and dedicated volunteer
              Board of Directors, compromised of current and former NYU
              employees, the <strong> NYUFCU </strong> has grown rapidly and
              expanded products and services.
            </div>
            <div style={{ paddingTop: "1.5rem" }}>
              We currently have over 8,000 members and over $30 million in
              assets. All interest that <strong> NYU FCU </strong> accrues as a
              financial institution is passed on to our members in the form of
              better rates on loans, and lower or no fees for financial
              services.
            </div>
            <div style={{ paddingTop: "1.5rem" }}>
              As a member of the credit union, you are encouraged to attend the
              annual meeting. At this meeting you may vote to elect a volunteer
              board of directors, who oversee the credit union's operations.
              Each member receives one vote regardless of their account balance
              as long as the minimum balance ($50) is maintained in the primary
              savings account.
            </div>
            <div style={{ paddingTop: "1.5rem" }}>
              Because its members own <strong> NYU FCU </strong> collectively,
              we realize that people are our most valuable asset, and quality
              service is our most important goal.
            </div>
          </div>
        </div>
      </div>
      <div className="content-block">
        <div className="subtitle">MISSION STATEMENT</div>
        <div className="paragraph">
          Member owned and directed financial institution, dedicated to serving
          the financial needs of our members, through cost effective financial
          services consistent with co-operative principles, applicable
          legislation, and sound management.
        </div>
      </div>
      <div className="content-block">
        <div className="subtitle">VISION STATEMENT</div>
        <div className="paragraph">
          <div>
            <strong>
              We are committed to being a service organization where members
              desire to fulfill their financial needs and employees desire to
              build a career.{" "}
            </strong>
            We are focused on the needs of our members and on their
            satisfaction.
          </div>
          <div>
            To successfully achieve our vision, we must live by our core values
            daily.
          </div>
        </div>
      </div>
      <div className="content-block">
        <div className="subtitle">CORE VALUES</div>
        <div className="paragraph">
          <div>
            <strong>Integrity</strong>
            <div>
              We are dedicated to building strong relationships with our
              members, employees, and community through mutual confidence and
              trust. We will keep our promises and conduct ourselves honorably
              and with the utmost integrity.
            </div>
          </div>
          <div>
            <strong>Service</strong>
            <div>
              Our members are the sole reason we exist. We offer assistance,
              anticipate member needs, and recommend appropriate products and
              services that benefit them financially. Our efforts are focused on
              exceeding expectations and creating an excellent member experience
              overall.
            </div>
          </div>
          <div>
            <strong>Communication</strong>
            <div>
              We expect and support open, honest and ongoing communication with
              members and each other. Our goal is to gain mutual understanding
              and we will do so by actively listening, asking questions and
              together, coming up with viable solutions.
            </div>
          </div>
          <div>
            <strong>Accountability</strong>
            <div>
              We expect and support initiative, ownership, and accountability in
              making decisions that reflect the best interest of the member. Our
              culture promotes good morale and a high level of synergy.
            </div>
          </div>
          <div>
            <strong>Passion and Urgency</strong>
            <div>
              Everything begins with a positive attitude, professional
              appearance and a respectful demeanor. We work together for the
              benefit of our members, and we ensure diligence and a sense of
              urgency when serving others.
            </div>
          </div>
        </div>
      </div>
      <div className="content-block">
        <div className="subtitle">
          BOARD OF DIRECTORS & SUPERVISORY COMMITTEE
        </div>
        <div className="member-group">
          {BOARD_MEMBERS.map((member, idx) => {
            return <Profile key={idx} member={member} />;
          })}
        </div>
      </div>
      <div className="content-block">
        <div className="subtitle">NYU Federal Credit Union Team</div>
        <div className="member-group">
          {FCU_TEAM.map((member, idx) => {
            return <Profile key={idx} member={member} />;
          })}
        </div>
      </div>
      <div className="content-block">
        <div className="subtitle">Annual Report</div>
        <div className="paragraph">
          <NYUButton redirect={annual2019PDF} label="read more" />
        </div>
      </div>
      <div className="content-block">
        <div className="subtitle">Pictures</div>
        <div style={{ display: "flex", gap: "5rem", flexDirection: "column" }}>
          <Slideshow slides={KitchenSlides} />
          <Slideshow slides={MeetingSlides} />
        </div>
      </div>
      <div className="content-block">
        <div className="subtitle">Videos</div>
        <div className="paragraph">
          <Tabs
            variant="scrollable"
            value={video}
            onChange={(event, newValue) => {
              setVideo(newValue);
            }}
          >
            {videos.map((video, idx) => {
              return (
                <Tab
                  key={idx}
                  label={video.label}
                  style={{ color: "#91009e" }}
                />
              );
            })}
          </Tabs>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ReactPlayer controls={true} url={videos[video].link} />
          </div>
        </div>
      </div>
    </div>
  );
  return <PageLayout content={content} />;
}
