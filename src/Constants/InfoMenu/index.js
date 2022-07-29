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
        subtitle: "Closures",
        bullet_points: [
          "1/17/2022 - Martin Luther King- Closed",
          "1/31/2022 - Mineola Branch Only Closed",
          "2/21/2022 - President's Day- Closed",
          "5/30/2022 - Memorial Day- Closed",
          "6/20/2022 - Juneteenth Observed- Closed",
          "7/4/2022 - Independence Day- Closed",
          "9/5/2022 - Labor Day- Closed",
          "10/10/2022 - Indigenous Peoples' Day- Closed",
          "11/11/2022 - Veteran's Day- Closed",
          "11/24/2022 - Thanksgiving- Closed",
          "11/25/2022 - Thanksgiving (Day After)- Closed",
          "12/26/2022 - Christmas Observed- Closed",
          "1/2/2023 - New Year's Day Observed - Closed",
        ],
      },
      {
        subtitle: "Events",
        bullet_points: ["August 13 - SYEP Ends"],
      },
    ],
    hours: [
      {
        branch_name: "NYC Branch",
        times: [
          "Monday, Wednesday, Thursday, Friday: 9am - 5pm",
          "Tuesday: 9am - 3pm",
        ],
      },
      {
        branch_name: "Mineola Branch",
        times: [
          "Monday, Wednesday, and Thursday 9 am - 4 pm",
          "Tuesday: 9am - 3pm",
          "Friday 7 am - 2 pm",
        ],
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
