import Checking from "./Checking";
import DreamHolidayClub from "./Dream & Holiday Club";
import FormsApplications from "./Forms & Applications";
import LuckySaversClub from "./Lucky Savers Club";
import MobileBanking from "./Mobile Banking";
import OtherServices from "./Other Services";
import SavingsAccounts from "./Savings Accounts";
import TraditionalIRA from "./Traditional IRA";
import Zelle from "./Zelle";

const SavingsPages = [
  { path: "/checking", element: <Checking /> },
  { path: "/dream-&-holiday-club", element: <DreamHolidayClub /> },
  { path: "/forms-&-applications", element: <FormsApplications /> },
  { path: "/lucky-savers-club", element: <LuckySaversClub /> },
  { path: "/mobile-banking", element: <MobileBanking/> },
  { path: "/other-services", element: <OtherServices /> },
  { path: "/savings-accounts", element: <SavingsAccounts /> },
  { path: "/traditional-ira", element: <TraditionalIRA /> },
  { path: "/zelle", element: <Zelle/> },
];

export default SavingsPages;
