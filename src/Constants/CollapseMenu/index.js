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
      { label: "Join", link: "/join" },
      { label: "About us", link: "/" },
      { label: "Schedule", link: "/" },
      { label: "Locations", link: "/" },
      { label: "FAQ", link: "/" },
      { label: "Disclosures", link: "/" },
      { label: "Contact us", link: "/" },
    ],
  },
  {
    label: "Savings",
    icon: savings,
    redirects: [
      { label: "Savings Accounts", link: "/" },
      { label: "Checking", link: "/" },
      { label: "Traditional IRA", link: "/" },
      { label: "Lucky Savers Club", link: "/" },
      { label: "Dream & Holiday Club", link: "/" },
      { label: "Mobile Banking", link: "/" },
      { label: "Zelle®", link: "/" },
      { label: "Forms & Applications", link: "/" },
      { label: "Other Services", link: "/" },
    ],
  },
  {
    label: "Loans",
    icon: loans,
    redirects: [
      { label: "Loans and Credit Requirements", link: "/" },
      { label: "Student and Consolidation", link: "/" },
      { label: "Vehicle Loans", link: "/" },
      { label: "Home Loans", link: "/" },
      { label: "Personal Loans", link: "/" },
      { label: "Credit Cards", link: "/" },
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
