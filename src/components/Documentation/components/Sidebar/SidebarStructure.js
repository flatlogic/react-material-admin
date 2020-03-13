import React from "react";
import {
  LibraryBooks as PagesIcon,
  LocalLibrary as LibsIcon
} from "@material-ui/icons";

const structure = [
  {
    id: 0,
    label: "Getting Started",
    link: "/documentation/getting-started",
    children: [
      {
        label: "Overview",
        link: "/documentation/getting-started/overview"
      },
      {
        label: "Licences",
        link: "/documentation/getting-started/licences"
      },
      {
        label: "Quick start",
        link: "/documentation/getting-started/quick-start"
      }
    ]
  },
  {
    id: 1,
    label: "Pages",
    link: "/documentation/pages",
    icon: <PagesIcon />
  },
  {
    id: 2,
    label: "Components",
    link: "/documentation/components",
    children: [
      {
        label: "Typography",
        link: "/documentation/components/typography"
      },
      {
        label: "Widget",
        link: "/documentation/components/widget"
      },
      {
        label: "Header",
        link: "/documentation/components/header"
      },
      {
        label: "Sidebar",
        link: "/documentation/components/sidebar"
      },
      {
        label: "Buttons",
        link: "/documentation/components/buttons"
      },
    ]
  },
  {
    id: 3,
    label: "Libs",
    link: "/documentation/libs",
    icon: <LibsIcon />
  }
];

export default structure;
