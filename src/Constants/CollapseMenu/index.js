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
import { SavingPageLinks } from "../../Pages/Savings";
import { ResourcePageLinks } from "../../Pages/Resources";
import { BusinessPageLinks } from "../../Pages/Business";
import { RatesPageLinks } from "../../Pages/Rates";

const menuContent = [
  {
    label: "About",
    icon: about,
    redirects: AboutPageLinks,
  },
  {
    label: "Savings",
    icon: savings,
    redirects: SavingPageLinks,
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
    redirects: ResourcePageLinks,
  },
  {
    label: "Business",
    icon: business,
    redirects: BusinessPageLinks,
  },
  {
    label: "Rates",
    icon: rates,
    redirects: RatesPageLinks,
  },
];

export default menuContent;
