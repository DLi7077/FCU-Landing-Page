import CalendarIcon from "../../Assets/info_icons/calendar.svg";
import Newspaper from "../../Assets/info_icons/newspaper.svg";
import Rates from "../../Assets/info_icons/rates.svg";

export const InfoMenuContent = {
  calendar: {
    // calendar content
    icon: CalendarIcon,
    title: "Calendar",
    content: [
      {
        subtitle: "Hours and Holiday Schedule",
        bullet_points: [
          "Monday, September 5th - Closed",
          "December 25th - Christmas",
        ],
      },
      {
        subtitle: "Events",
        bullet_points: ["August 13 - SYEP Ends"],
      },
    ],
  },
  news: {
    //news content
    icon: Newspaper,
    title: "News",
    content: [
      {
        subtitle: "Down Payment Assistance",
        description:
          "We are excited to announce the Down Payment Assistance Loan will be reinstated on 05/01/2021.",
        redirect: {
          label: "More Information",
          link: "/",
        },
      },
      {
        subtitle: "Deposit Rates, Loan Rates and Fees",
        description:
          "Money Market dividends, Used Auto rates, and schedule of fees will change on 04/01/2021 and are effective 05/01/2021.",
        redirect: {
          label: "Schedule of fees",
          link: "/",
        },
      },
      {
        subtitle: "Beware of Phishing Emails and Texts",
        description:
          "Phishing is when criminals trick individuals by creating and sending fake emails or text messages that appear to be from a real business. Safeguard yourself and do not share your personal financial information in an email or text.",
        redirect: {
          label: "Learn More",
          link: "/",
        },
      },
    ],
  },
  rates: {
    //news content
    icon: Rates,
    title: "Rates",
    content: [
      {
        subtitle: "Crazy Low Auto Loan Rates",
        description:
          "Auto loans as low as 2% APR* for first 36 months on new and used auto purchases.",
        redirect: {
          label: "Apply for a Loan",
          link: "https://www.mobicint.net/nyu/login/loanapp",
        },
      },
    ],
  },
};
