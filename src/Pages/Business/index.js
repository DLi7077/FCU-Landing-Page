import Accounts from "./Accounts";
import Loans from "./Loans";

const BusinessPages = [
  { path: "/business-accounts", label: "Accounts", element: <Accounts /> },
  { path: "/business-loans", label: "Loans", element: <Loans /> },
];

export const BusinessPageLinks = [
  ...BusinessPages.map((page) => {
    return {
      path: page.path,
      label: page.label,
    };
  }),
];

export default BusinessPages;
