import about from "../../Assets/menu_icons/about.svg";
import business from "../../Assets/menu_icons/business.svg";
import loans from "../../Assets/menu_icons/loans.svg";
import mortgage from "../../Assets/menu_icons/mortgage.svg";
import rates from "../../Assets/menu_icons/rates.svg";
import resources from "../../Assets/menu_icons/resources.svg";
import savings from "../../Assets/menu_icons/savings.svg";

const menuContent = [
  {
    label: "About",
    icon: about,
    redirects: [
      { label: "About us", link: "/about-us" },
      { label: "ATM Locations", link: "/atm-locations" },
      { label: "Contact us", link: "/contact-us" },
      { label: "Disclosures", link: "/disclosures" },
      { label: "FAQ", link: "/faq" },
      { label: "Join", link: "/join" },
      { label: "Schedule", link: "/", hash: "calendar" },
    ],
  },
  {
    label: "Savings",
    icon: savings,
    redirects: [
      { label: "Checking", link: "/checking" },
      { label: "Dream & Holiday Club", link: "/dream-&-holiday-club" },
      { label: "Forms & Applications", link: "/forms-&-applications" },
      { label: "Lucky Savers Club", link: "/lucky-savers-club" },
      { label: "Mobile Banking", link: "/mobile-banking" },
      { label: "Other Services", link: "/other-services" },
      { label: "Savings Accounts", link: "/savings-accounts" },
      { label: "Scholarships", link: "/scholarships" },
      { label: "Traditional IRA", link: "/traditional-ira" },
      { label: "Zelle®", link: "/zelle" },
    ],
  },
  {
    label: "Loans",
    icon: loans,
    redirects: [
      { label: "Credit Cards", link: "/credit-cards" },
      {
        label: "Loans and Credit Requirements",
        link: "/loans-credit-requirements",
      },
      { label: "Loan Submission", link: "/loan-submission" },
      { label: "Personal Loans", link: "/personal-loans" },
      {
        label: "Student and Consolidation",
        link: "/student-loan-consolidation",
      },
      { label: "Vehicle Loans", link: "/vehicle-loans" },
    ],
  },
  {
    label: "Mortgage",
    icon: mortgage,
    redirects: [
      { label: "Mortgage Loans", link: "/" },
      { label: "Home Equity", link: "/" },
      { label: "Down Payment Assistance", link: "/" },
      { label: "Realty Rewards", link: "/" },
      { label: "Mortgage Prepardness Loan", link: "/" },
      { label: "Homebuyer Dream Programs", link: "/" },
    ],
  },
  {
    label: "Resources",
    icon: resources,
    redirects: [
      { label: "Articles", link: "/" },
      { label: "Calculators", link: "/" },
      { label: "Personal Finance Tools", link: "/" },
      { label: "Trustage", link: "/" },
      { label: "Webinars and Seminars", link: "/" },
      { label: "NYU FCU Events", link: "/" },
      { label: "Resource Links", link: "/" },
    ],
  },
  {
    label: "Business",
    icon: business,
    redirects: [
      { label: "Accounts", link: "/" },
      { label: "Loans", link: "/" },
    ],
  },
  {
    label: "Rates",
    icon: rates,
    redirects: [
      { label: "Share Rates", link: "/" },
      { label: "Loan Rates", link: "/" },
      { label: "Fee Schedule", link: "/" },
    ],
  },
];

export default menuContent;
