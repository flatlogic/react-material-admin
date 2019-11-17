import React from "react";
import {
  Home as HomeIcon,
  FilterNone as UIElementsIcon,
  BorderAll as TableIcon,
  QuestionAnswer as SupportIcon,
  LibraryBooks as LibraryIcon,
  HelpOutline as FAQIcon,
  BarChart as ChartIcon,
  Map as MapIcon,
  Apps as CoreIcon,
  Description as DescriptionIcon,
  ShoppingCart as ShoppingCartIcon,
  StarBorder as ExtraIcon,
  Chat as ChatIcon,
  AddCircle as AddSectionIcon,
  FolderOpen as FolderIcon,
  Description as DocumentationIcon
} from "@material-ui/icons";
import { useTheme, makeStyles } from "@material-ui/styles";

// components
import { Typography } from "../Wrappers/Wrappers";
import Dot from "./components/Dot";

const structure = [
  { id: 0, label: "Dashboard", link: "/app/dashboard", icon: <HomeIcon /> },
  {
    id: 1,
    label: "E-commerce",
    link: "/app/ecommerce",
    icon: <ShoppingCartIcon />,
    children: [
      {
        label: "Product Manage",
        link: "/app/ecommerce/management"
      },
      {
        label: "Products Grid",
        link: "/app/ecommerce/gridproducts"
      },
      {
        label: "Product Page",
        link: "/app/ecommerce/product"
      }
    ]
  },
  {
    id: 2,
    label: "Documentation",
    link: "/documentation",
    icon: <DocumentationIcon />
  },
  { id: 3, type: "divider" },
  { id: 4, type: "title", label: "TEMPLATE" },
  {
    id: 5,
    label: "Core",
    link: "/app/core",
    icon: <CoreIcon />,
    children: [
      {
        label: "Typography",
        link: "/app/core/typography"
      },
      {
        label: "Colors",
        link: "/app/core/colors"
      },
      {
        label: "Grid",
        link: "/app/core/grid"
      }
    ]
  },
  {
    id: 6,
    label: "Tables",
    link: "/app/tables",
    icon: <TableIcon />,
    children: [
      { label: "Tables Basic", link: "/app/tables/static" },
      {
        label: "Tables Dynamic",
        link: "/app/tables/dynamic"
      }
    ]
  },
  {
    id: 7,
    label: "UI Elements",
    link: "/app/ui",
    icon: <UIElementsIcon />,
    children: [
      { label: "Icons", link: "/app/ui/icons" },
      { label: "Badge", link: "/app/ui/badge" },
      { label: "Carousel", link: "/app/ui/carousel" },
      { label: "Cards", link: "/app/ui/cards" },
      { label: "Modal", link: "/app/ui/modal" },
      {
        label: "Notifications",
        link: "/app/ui/notifications"
      },
      { label: "Navbar", link: "/app/ui/navbar" },
      { label: "Tooltips", link: "/app/ui/tooltips" },
      { label: "Tabs", link: "/app/ui/tabs" },
      { label: "Pagination", link: "/app/tables/dynamic" },
      { label: "Progress", link: "/app/ui/progress" },
      { label: "Widget", link: "/app/ui/widget" }
    ]
  },
  {
    id: 8,
    label: "Forms",
    link: "/app/forms",
    icon: <DescriptionIcon />,
    children: [
      { label: "Form Elements", link: "/app/forms/elements" },
      { label: "Form Validation", link: "/app/forms/validation" }
    ]
  },
  {
    id: 9,
    label: "Charts",
    link: "/app/charts",
    icon: <ChartIcon />,
    children: [
      { label: "Charts Overview", link: "/app/charts/overview" },
      { label: "Line Charts", link: "/app/charts/line" },
      { label: "Bar Charts", link: "/app/charts/bar" },
      { label: "Pie Charts", link: "/app/charts/pie" }
    ]
  },
  {
    id: 10,
    label: "Maps",
    link: "/app/maps",
    icon: <MapIcon />,
    children: [
      { label: "Google Maps", link: "/app/maps/google" },
      { label: "Vector Map", link: "/app/maps/vector" }
    ]
  },
  {
    id: 11,
    label: "Extra",
    link: "/app/extra",
    icon: <ExtraIcon />,
    children: [
      { label: "Calendar", link: "/app/extra/calendar" },
      { label: "Invoice", link: "/app/extra/invoice" },
      {
        label: "Login Page",
        click: function(...rest) {
          const name = "onLogin";
          rest.forEach(c => {
            if (c.clickName === name) {
              return c();
            }
            console.log("in here");
            return false;
          });
        }
      },
      { label: "Error Page", link: "/404" },
      { label: "Gallery", link: "/app/extra/gallery" },
      { label: "Search Result", link: "/app/extra/search" },
      { label: "Time Line", link: "/app/extra/timeline" }
    ]
  },
  {
    id: 12,
    label: "Menu Levels",
    icon: <FolderIcon />,
    children: [
      { label: "Level 1.1" },
      {
        label: "Level 1.2",
        type: "nested",
        children: [
          { label: "Level 2.1" },
          {
            label: "Level 2.2",
            children: [
              {
                label: "Level 3.1"
              }
            ]
          }
        ]
      }
    ]
  },
  { id: 13, type: "divider" },
  { id: 14, type: "title", label: "HELP" },
  { id: 15, label: "Library", link: "", icon: <LibraryIcon /> },
  { id: 16, label: "Support", link: "", icon: <SupportIcon /> },
  { id: 17, label: "FAQ", link: "", icon: <FAQIcon /> },
  { id: 18, type: "divider" },
  { id: 19, type: "title", label: "PROJECTS" },
  {
    id: 20,
    label: "My recent",
    link: "",
    icon: <Dot size="medium" color="secondary" />
  },
  {
    id: 21,
    label: "Starred",
    link: "",
    icon: <Dot size="medium" color="primary" />
  },
  {
    id: 22,
    label: "Background",
    link: "",
    icon: <Dot size="medium" color="secondary" />
  },
  { id: 23, type: "divider" },
  {
    id: 24,
    label: "Add section",
    icon: <AddSection />,
    click: function(event, ...rest) {
      const name = "addSectionClick";
      rest.forEach(c => {
        if (c.clickName === name) {
          return c(event);
        }
        return false;
      });
    }
  },
  { id: 25, type: "divider" },
  { id: 26, type: "margin" },
  { id: 27, type: "divider" },
  {
    id: 28,
    label: "Chat",
    icon: <Chat />,
    click: function(event, ...rest) {
      const name = "chatSetOpen";
      rest.forEach(c => {
        if (c.clickName === name) {
          return c(event);
        }
        return false;
      });
    }
  }
];

function AddSection() {
  const theme = useTheme();
  return (
    <AddSectionIcon
      style={{ color: theme.palette.secondary.main, fontSize: 45 }}
    />
  );
}

function Chat() {
  const useStyles = makeStyles(theme => ({
    root: {
      backgroundColor: theme.palette.primary.main,
      borderRadius: "50%",
      height: 50,
      width: 50,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#fff"
    }
  }));

  const classes = useStyles();

  return (
    <>
      <section className={classes.root}>
        <ChatIcon />
      </section>
    </>
  );
}

export default structure;
