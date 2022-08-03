import Agreement_Disclosure from "../../Assets/pdfs/Credit Card/Agreement_Disclosure.pdf";
import Application_Disclosure from "../../Assets/pdfs/Credit Card/Application_Disclosure.pdf";
import Opening_Disclosure_Gold from "../../Assets/pdfs/Credit Card/Opening_Disclosure_Gold.pdf";
import Opening_Disclosure_Classic from "../../Assets/pdfs/Credit Card/Opening_Disclosure_Classic.pdf";
import Direct_Deposit_Authorization from "../../Assets/pdfs/Direct Deposit/Direct_Deposit_Authorization.pdf";
import Direct_Deposit_Change from "../../Assets/pdfs/Direct Deposit/Direct_Deposit_Change.pdf";

export const APPLICATIONS = [
  {
    label: "Membership Application",
    link: "https://www.mobicint.net/nyu/openAccount/start",
  },
  {
    label: "Loan Application",
    link: "https://www.mobicint.net/nyu/login/loanapp",
  },
  {
    label: "Mortgage Application",
    link: "https://nyufcu.mortgagewebcenter.com/Account/Login?ReturnUrl=%2fApplyNow",
  },
  {
    label: "HELOC and Home Equity Loan Application",
    link: "https://home-equity.nyufcu.com/register",
  },
  {
    label: "Lucky Savers Application",
    link: "https://secure.na1.echosign.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhBQo9y8lJbK_xCpfSBKDqE1KtS4AOUvFb6MBqiKzbKentXezMPI0Dz4RjiB2fe7Z_M%2A",
  },
];

export const FORMS = [
  {
    title: "Account Related",
    forms: [
      {
        label: "Paper Statement Enrollment",
        link: "https://secure.na1.echosign.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhC4JU7T8DLgIfsDPBY8-Lwoyl-3YOO__nSxOOXi1WmBnhGJRRl-Lpcg15GuTwZklPs%2A",
      },
      {
        label: "Debit Card or Credit Card Request",
        link: "https://secure.na1.echosign.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhDktvU7ql4rMmr2pvuJlpI-tKuHhV1i61hQI5a2ycgTVR7hFP3D6vXqpI7eGQGszLk%2A",
      },
      {
        label: "Checking Account Application",
        link: "https://secure.na1.echosign.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhCG2lJyuHNSSHqZ3Z_uLj6uArrcwxDV3zCqlZHYS4NRWBSh66H5-QIooAaZEqgR_O4%2A",
      },
      {
        label: "Holiday or Dream Club",
        link: "https://secure.na1.echosign.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhAVyBqj__ruaR2pCrIFY6vN81KO9VZzLI1xAFk2QHhaPYQ5gj-AlAfR1pXJfg6nM8U%2A",
      },
      {
        label: "Overdraft Protection",
        link: "https://secure.na1.echosign.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhAgOiPFAPs7281FywlT7-3hWYWPdEBLv7qfPIj87dzOYoQ5pa0vkoGFA6ItpWWYbTM%2A",
      },
      {
        label: "Contact Update",
        link: "https://secure.na1.echosign.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhBTAWCmiopisXhDkdcUJuJso3SUVxPrmESLRNjQFs83dHRz9MhtcVdoiWeo0md4xWw%2A",
      },
      {
        label: "Account Closing",
        link: "https://secure.na1.echosign.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhBPBoZBd-SNols2GR8QzwmMryKg9by7KMACVsvGTQjdWxm9Yo-rCDorzi1wFwT66KY%2A",
      },
      {
        label: "Dormant Account Notification",
        link: "https://secure.na1.echosign.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhCBdxtGmLgLKF_4nvptJEzTTbYFedphGx6n2YnLv42BqOSzTIVYqJMS1d2L-HWs6i8%2A",
      },
      {
        label: "Payable on Death (Beneficiary)",
        link: "https://secure.na1.echosign.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhCG0SO28hMZk0531oLO9gJGnC6emo8pmGzCnIIvCrfVCn4QZxW9DbnhDvya0Yiwuew%2A",
      },
    ],
  },
  {
    title: "Credit Card",
    forms: [
      {
        label: "Credit Card Limit Increase",
        link: "https://secure.na1.echosign.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhDvRvQJqSgEg_PxFlDM9dKUq-6BPgyaGpp3VIKEAlEpU05x60aXgAQOgyDlDHjhO_E*",
      },
      {
        label: "Credit Card Balance Transfer",
        link: "https://secure.na1.echosign.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhCUz80lDWO8_YdQAEZZ_UfLAy330XADS3TlUWbdUOA-lO3hPTlHMS1TqalveYK7_XU*",
      },
      {
        label: "Application and Solicitation Disclosure",
        link: Application_Disclosure,
      },
      {
        label: "Consumer Credit Card Agreement and Disclosure",
        link: Agreement_Disclosure,
      },
      {
        label: "Credit Card Account Opening Disclosure- Classic",
        link: Opening_Disclosure_Classic,
      },
      {
        label: "Credit Card Account Opening Disclosure- Gold",
        link: Opening_Disclosure_Gold,
      },
    ],
  },
  {
    title: "Loan Related",
    forms: [
      {
        label: "Loan Document Submission",
        link: "/loan-submission",
        local: true,
      },
      {
        label: "ACH Authroization Form",
        link: "https://secure.na1.echosign.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhCbJ8fhX68xgiKQvDSzV495yZFIwcH0jECgBV1Jc0QJxp3eRKP84sbqvFbQZiZKNa0%2A",
      },
      {
        label: "Skip-A-Pay Application",
        link: "https://secure.na1.echosign.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhBQ5muiHkPqrHvLBYZrVoLTs-30Fo9PM19PjMlltqOjxqHUNIWginDHaNaFwY2xPTo%2A",
      },
    ],
  },
  {
    title: "Payroll",
    forms: [
      {
        label: "NYU Direct Deposit",
        link: Direct_Deposit_Authorization,
      },
      {
        label: "Direct Deposit",
        link: Direct_Deposit_Change,
      },
    ],
  },
  {
    title: "Other Services & Resources",
    forms: [
      {
        label: "Citi Bike Code affidavit",
        link: "https://secure.na1.echosign.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhBnggDIbq2TgGSsPBGr4UrxWAwRQ6NMu7cBl42fZulcfmjBT8qKw5EGLZHmvPJqj20%2A",
      },
    ],
  },
  {
    title: "Transfers",
    forms: [
      {
        label: "Domestic Outgoing Wire Transfer",
        link: "https://secure.na1.echosign.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhDcUXbb22gi7IHrzdVJSZpD-2tlGdS41VwzVysHlqIuaNAPQxjWfJh6ERgPnbyZilk%2A",
      },
      {
        label: "International Outgoing Wire Transfer",
        link: "https://secure.na1.echosign.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhDcUXbb22gi7IHrzdVJSZpD-2tlGdS41VwzVysHlqIuaNAPQxjWfJh6ERgPnbyZilk%2A",
      },
    ],
  },
];
