import Checking from "./Checking";
import DreamHolidayClub from "./Dream & Holiday Club";
import FormsApplications from "./Forms & Applications";
import LuckySaversClub from "./Lucky Savers Club";
import MobileBanking from "./Mobile Banking";
import OtherServices from "./Other Services";
import SavingsAccounts from "./Savings Accounts";
import Scholarships from "./Scholarships";
import TraditionalIRA from "./Traditional IRA";
import Zelle from "./Zelle";

const SavingsPages = [
  { path: "/checking", label: "Checking", element: <Checking /> },
  {
    path: "/dream-&-holiday-club",
    label: "Dream and Holiday Club",
    element: <DreamHolidayClub />,
  },
  {
    path: "/forms-&-applications",
    label: "Forms and Applications",
    element: <FormsApplications />,
  },
  {
    path: "/lucky-savers-club",
    label: "Lucky Savers Club",
    element: <LuckySaversClub />,
  },
  {
    path: "/mobile-banking",
    label: "Mobile Banking",
    element: <MobileBanking />,
  },
  {
    path: "/other-services",
    label: "Other Services",
    element: <OtherServices />,
  },
  {
    path: "/savings-accounts",
    label: "Savings Accounts",
    element: <SavingsAccounts />,
  },
  {
    path: "/scholarships",
    label: "Scholarships",
    element: <Scholarships />,
  },
  {
    path: "/traditional-ira",
    label: "Traditional IRA",
    element: <TraditionalIRA />,
  },
  {
    path: "/zelle",
    label: "Zelle®",
    element: <Zelle />,
  },
];

export const SavingPageLinks = SavingsPages.map((page) => {
  return {
    path: page.path,
    label: page.label,
  };
});

export default SavingsPages;
