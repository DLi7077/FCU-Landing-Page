import about from "../../Assets/menu_icons/about.svg";
import business from "../../Assets/menu_icons/business.svg";
import loans from "../../Assets/menu_icons/loans.svg";
import mortgage from "../../Assets/menu_icons/mortgage.svg";
import rates from "../../Assets/menu_icons/rates.svg";
import resources from "../../Assets/menu_icons/resources.svg";
import savings from "../../Assets/menu_icons/savings.svg";

import { AboutPageLinks } from "../../Pages/About";
import { LoansPageLinks } from "../../Pages/Loans";
import { MortagePageLinks } from "../../Pages/Mortgage";
import { SavingPagesLinks } from "../../Pages/Savings";

const menuContent = [
  {
    label: "About",
    icon: about,
    redirects: AboutPageLinks,
  },
  {
    label: "Savings",
    icon: savings,
    redirects: SavingPagesLinks,
  },
  {
    label: "Loans",
    icon: loans,
    redirects: LoansPageLinks,
  },
  {
    label: "Mortgage",
    icon: mortgage,
    redirects: MortagePageLinks,
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
