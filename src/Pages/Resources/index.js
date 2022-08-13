import Articles from "./Articles";
import Calculators from "./Calculators";
import PersonalFinanceTools from "./Personal Finance Tools";
import ResourceLinks from "./Resource Links";
import Trustage from "./Trustage®";
import WebinarsAndSeminars from "./Webinars & Seminars";

const ResourcePages = [
  {
    path: "/articles",
    label: "Articles",
    element: <Articles />,
  },
  {
    path: "/calculators",
    label: "Calculators",
    element: <Calculators />,
  },
  {
    path: "/personal-finance-tools",
    label: "Personal Finance Tools",
    element: <PersonalFinanceTools />,
  },
  {
    path: "/resource-links",
    label: "Resource Links",
    element: <ResourceLinks />,
  },
  {
    path: "/trustage",
    label: "TruStage®",
    element: <Trustage />,
  },
  {
    path: "/webinars-and-seminars",
    label: "Webinars and Seminars",
    element: <WebinarsAndSeminars />,
  },
  
];

export const ResourcePageLinks = [
  ...ResourcePages.map((page) => {
    return {
      path: page.path,
      label: page.label,
    };
  }),
];

export default ResourcePages;
