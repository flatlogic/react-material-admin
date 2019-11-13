import React from "react";

// components
import { Typography, Button } from "../../../Wrappers";
import Dot from "../../../Sidebar/components/Dot";

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
        label: "Quick Start",
        link: "/documentation/getting-started/quick-start"
      }
    ]
  },
  {
    id: 1,
    label: "Pages",
    link: "/documentation/pages"
  },
  {
    id: 2,
    label: "Components",
    link: "/documentation/components",
    children: [
      {
        label: "Alerts",
        link: "/documentation/components/alerts"
      }
    ]
  },
  {
    id: 3,
    label: "Libs",
    link: "/documentation/libs"
  }
];

export default structure;
