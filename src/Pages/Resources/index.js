import Articles from "./Articles";

const ResourcePages = [
  {
    path: "/articles",
    label: "Articles",
    element: <Articles />,
  },
];

export const ResourcePagesLinks = [
  ...ResourcePages.map((page) => {
    return {
      path: page.path,
      label: page.label,
    };
  }),
];

export default ResourcePages;
