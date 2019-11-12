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
  StarBorder as ExtraIcon
} from "@material-ui/icons";

// components
import { Typography, Button } from "../../../Wrappers";
import Dot from "../../../Sidebar/components/Dot";

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
      { label: "Login Page", link: "/app/extra/login" },
      { label: "Error Page", link: "/404" },
      { label: "Gallery", link: "/app/extra/gallery" },
      { label: "Search Result", link: "/app/extra/search" },
      { label: "Time Line", link: "/app/extra/timeline" }
    ]
  },
  { id: 12, type: "divider" },
  { id: 13, type: "title", label: "HELP" },
  { id: 14, label: "Library", link: "", icon: <LibraryIcon /> },
  { id: 15, label: "Support", link: "", icon: <SupportIcon /> },
  { id: 16, label: "FAQ", link: "", icon: <FAQIcon /> },
  { id: 17, type: "divider" },
  { id: 18, type: "title", label: "PROJECTS" },
  {
    id: 19,
    label: "My recent",
    link: "",
    icon: <Dot size="medium" color="secondary" />
  },
  {
    id: 20,
    label: "Starred",
    link: "",
    icon: <Dot size="medium" color="primary" />
  },
  {
    id: 21,
    label: "Background",
    link: "",
    icon: <Dot size="medium" color="secondary" />
  }
];

export default structure;
