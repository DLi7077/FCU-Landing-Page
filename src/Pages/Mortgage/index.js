import HomeEquity from "./Home Equity";
import HomebuyerDreamPrograms from "./Homebuyer Dream Programs";
import MortgageLoans from "./Mortgage Loans";
import RealtyRewards from "./Realty Rewards";

const MortgagePages = [
  {
    path: "/home-equity",
    label: "Home Equity",
    element: <HomeEquity />,
  },
  {
    path: "/homebuyer-dream-programs",
    label: "Homebuyer Dream Programs",
    element: <HomebuyerDreamPrograms />,
  },
  {
    path: "/mortgage-loans",
    label: "Mortgage Loans",
    element: <MortgageLoans />,
  },
];

export const MortagePageLinks = [
  ...MortgagePages.map((page) => {
    return {
      path: page.path,
      label: page.label,
    };
  }),
  {
    path: "/mortgage-loans",
    hash: "realty-rewards",
    label: "Realty Rewards",
  },
];

export default MortgagePages;
