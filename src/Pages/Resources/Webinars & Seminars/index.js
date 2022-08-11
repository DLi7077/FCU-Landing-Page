import PageLayout from "../../../Components/PageLayout";
import TabGroup from "../../../Components/TabGroup";
import ReactPlayer from "react-player";
import Grant_Bronx from "../../../Assets/pdfs/Resources/Presentations/Grant_Brooklyn.pdf";
import Grant_Brooklyn from "../../../Assets/pdfs/Resources/Presentations/Grant_Brooklyn.pdf";
import ChoosingMortgages from "../../../Assets/pdfs/Resources/Presentations/Choosing Mortgages.pptx";
import ClosingCosts from "../../../Assets/pdfs/Resources/Presentations/Closing Costs and Interest Rates.pptx";
import FirstTimeHomeBuyer from "../../../Assets/pdfs/Resources/Presentations/First Time Home Buyer.pptx";
import MoneyManagement from "../../../Assets/pdfs/Resources/Presentations/Money Management.ppt";
import MortgageProcess from "../../../Assets/pdfs/Resources/Presentations/Mortgage Process.pptx";

const webinarVideos = [
  {
    label: "First Time Mortgage",
    content: <ReactPlayer controls={true} url="https://youtu.be/zc0pGvWDEbY" />,
  },
  {
    label: "Building Credit",
    content: <ReactPlayer controls={true} url="https://youtu.be/hRWrYhnzj7A" />,
  },
  {
    label: "Credit Score and Report",
    content: <ReactPlayer controls={true} url="https://youtu.be/k08Ap5BLk3A" />,
  },
  {
    label: "Wise use of Credit Cards",
    content: <ReactPlayer controls={true} url="https://youtu.be/7JL9CGC1CSo" />,
  },
];

export default function index() {
  const content = (
    <div className="content-container">
      <div className="title">Webinars and Seminars</div>
      <div className="content-block">
        <div className="subtitle">Videos</div>
        <TabGroup tabs={webinarVideos} />
      </div>
      <div className="content-block">
        <div className="subtitle">Presentations</div>
        <div className="paragraph">
          <ul>
            <li>
              <a href={Grant_Bronx} target="_blank" rel="noreferrer">
                Grant Opportunities for Home Buyers and Home Owners by NHS
                Brooklyn
              </a>
            </li>
            <li>
              <a href={Grant_Brooklyn} target="_blank" rel="noreferrer">
                Grant Opportunities for Home Buyers and Home Owners by NHS Bronx
              </a>
            </li>
            <li>
              <a href={ClosingCosts} target="_blank" rel="noreferrer">
                Impacts on Closing Costs and Interest Rates
              </a>
            </li>
            <li>
              <a href={MoneyManagement} target="_blank" rel="noreferrer">
                Money Management Seminar
              </a>
            </li>
            <li>
              <a href={ChoosingMortgages} target="_blank" rel="noreferrer">
                Not All Mortgages Are Alike- Know Which Mortgage is Right for
                You
              </a>
            </li>
            <li>
              <a href={FirstTimeHomeBuyer} target="_blank" rel="noreferrer">
                First Time Homebuyer: Your Roadmap and Options
              </a>
            </li>
            <li>
              <a href={MortgageProcess} target="_blank" rel="noreferrer">
                Mastering the Mortgage Process
              </a>
            </li>
            <li>
              <a
                href="https://prezi.com/view/4cIpGzXGAWUyhcPWpmJe/"
                target="_blank"
                rel="noreferrer"
              >
                NYU FCU Smart Money Management
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="content-block">
        <div className="subtitle">Webinars</div>
        <div className="paragraph">
          <ul>
            <li>
              <a
                href="https://nyu.zoom.us/rec/play/2NvJddYPfYLC5FyxGPm7kDTO3ApL75SL80Nrw1cyLaaerfJQTQ2t-xHveGhvlOBhbGZTAgotQIN_6oU.WOth-kdZxOQ4w5qK?continueMode=true"
                target="_blank"
                rel="noreferrer"
              >
                Mortgage 101: The Basics of Mortgage Loans - Mar 9, 2022
              </a>
            </li>
            <li>
              <a
                href="https://nyu.zoom.us/rec/play/mOCX5DyM_8903sLWyje2zzomHgo-VsUFe5ZQaMGB0LYCqAOQ5KKNZcb9A5-A8aogk_xvcl31ajaecziq.TLlXFuiLVnGR-YSF?continueMode=true"
                target="_blank"
                rel="noreferrer"
              >
                Mastering The Mortgage Process - Mar 16, 2022
              </a>
            </li>
            <li>
              <a
                href="https://nyu.zoom.us/rec/share/F_Ilpl2xoNNKFGFF5iuuwM7Ju6hWCdMmfA6EysTFHb6PEDwEoj9dQs5hSoOT0I2V.AtcCJrVcddUB-m3c"
                target="_blank"
                rel="noreferrer"
              >
                Down Payment Options for the First Time Home Buyer - April 6,
                2022
              </a>
            </li>
            <li>
              <a
                href="https://nyu.zoom.us/rec/share/SUf9A_h8zDs_yQjSuWlvDf_7XYJCp1RYdSkOzOtc0GKfm5As7ihMAxu5N8a0pQbo.kLhL0zVc4M6frMmZ"
                target="_blank"
                rel="noreferrer"
              >
                Mortgage Closing Costs and Interest Rates - April 19, 2022
              </a>
            </li>
            <li>
              <a
                href="https://nyu.zoom.us/rec/share/OWYbqIp-Kuk1zVajt_mS928R2H6etSRqVUZVU_cICCYyCyYCNPdfZGP6ppnooyOh.w7dSWOmq684UJoG5?startTime=1643130223000"
                target="_blank"
                rel="noreferrer"
              >
                College Savings: Preparing for Higher Education Expenses with
                529 Plans
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

  return <PageLayout content={content} />;
}
