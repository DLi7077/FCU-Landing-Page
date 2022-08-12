import AboutUs from "./About Us";
import ATMLocations from "./ATM Locations";
import ContactUs from "./Contact Us";
import Disclosures from "./Disclosures";
import FAQ from "./FAQ";
import Join from "./Join";
import PrivacyPolicy from "./Privacy Policy";

const AboutPages = [
  { path: "/about-us", label: "About Us", element: <AboutUs /> },
  { path: "/atm-locations", label: "ATM Locations", element: <ATMLocations /> },
  { path: "/contact-us", label: "Contact Us", element: <ContactUs /> },
  { path: "/disclosures", label: "Disclosures", element: <Disclosures /> },
  { path: "/faq", label: "FAQ", element: <FAQ /> },
  { path: "/join", label: "Join", element: <Join /> },
  {
    path: "/privacy-policy",
    label: "Privacy Policy",
    element: <PrivacyPolicy />,
  },
];

export const AboutPageLinks = [
  ...AboutPages.map((page) => {
    return {
      path: page.path,
      label: page.label,
    };
  }),
  { path: "/", hash: "calendar", label: "Calendar" },
];

export default AboutPages;
