import React, { useState, useEffect } from "react";
import { Drawer, IconButton, List, Fab, Box, Popover } from "@material-ui/core";
import {
  Home as HomeIcon,
  FilterNone as UIElementsIcon,
  BorderAll as TableIcon,
  QuestionAnswer as SupportIcon,
  LibraryBooks as LibraryIcon,
  HelpOutline as FAQIcon,
  ArrowBack as ArrowBackIcon,
  BarChart as ChartIcon,
  Map as MapIcon,
  Apps as CoreIcon,
  Description as DescriptionIcon,
  ShoppingCart as ShoppingCartIcon,
  StarBorder as ExtraIcon,
  Add as AddIcon,
} from "@material-ui/icons";
import { useTheme } from "@material-ui/styles";
import { withRouter } from "react-router-dom";
import classNames from "classnames";

// styles
import useStyles from "./styles";

// components
import SidebarLink from "./components/SidebarLink/SidebarLink";
import Dot from "./components/Dot";

// context
import {
  useLayoutState,
  useLayoutDispatch,
  toggleSidebar,
} from "../../context/LayoutContext";

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
        link: "/app/ecommerce/management",
      },
      {
        label: "Products Grid",
        link: "/app/ecommerce/gridproducts",
      },
      {
        label: "Product Page",
        link: "/app/ecommerce/product",
      },
    ],
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
        link: "/app/core/typography",
      },
      {
        label: "Colors",
        link: "/app/core/colors",
      },
      {
        label: "Grid",
        link: "/app/core/grid",
      },
    ],
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
        link: "/app/tables/dynamic",
      },
    ],
  },
  {
    id: 7,
    label: "UI Elements",
    link: "/app/ui",
    icon: <UIElementsIcon />,
    children: [
      { label: "Icons", link: "/app/ui/icons" },
      { label: "Badge", link: "/app/ui/badge" },
      { label: "Carousel", link: "/app/ui/сarousel" },
      { label: "Cards", link: "/app/ui/cards" },
      { label: "Modal", link: "/app/ui/modal" },
      {
        label: "Notifications",
        link: "/app/ui/notifications",
      },
      { label: "Navbar", link: "/app/ui/navbar" },
      { label: "Tooltips", link: "/app/ui/tooltips" },
      { label: "Tabs", link: "/app/ui/tabs" },
      { label: "Pagination", link: "/app/tables/dynamic" },
      { label: "Progress", link: "/app/ui/progress" },
      { label: "Widget", link: "/app/ui/widget" },
    ],
  },
  {
    id: 8,
    label: "Forms",
    link: "/app/forms",
    icon: <DescriptionIcon />,
    children: [{ label: "Form Elements", link: "/app/forms/elements" }],
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
      { label: "Pie Charts", link: "/app/charts/pie" },
    ],
  },
  {
    id: 10,
    label: "Maps",
    link: "/app/maps",
    icon: <MapIcon />,
    children: [
      { label: "Google Maps", link: "/app/maps/google" },
      { label: "Vector Map", link: "/app/maps/vector" },
    ],
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
      { label: "Time Line", link: "/app/extra/timeline" },
    ],
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
    icon: <Dot size="large" color="secondary" />,
  },
  {
    id: 20,
    label: "Starred",
    link: "",
    icon: <Dot size="large" color="primary" />,
  },
  {
    id: 21,
    label: "Background",
    link: "",
    icon: <Dot size="large" color="secondary" />,
  },
  { id: 22, type: "divider" },
  {
    id: 23,
    label: "Add section",
    link: "",
    icon: <AddSection />,
  },
];

function AddSection() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Fab
        color="primary"
        aria-label="add"
        className={classes.fab}
        onClick={e => handleClick(e)}
      >
        <AddIcon />
      </Fab>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        classes={{ paper: classes.popover }}
      >
        Lorem ipsum dolor sit amet.
      </Popover>
    </>
  );
}

function Sidebar({ location, ...props }) {
  var classes = useStyles();
  var theme = useTheme();

  const toggleDrawer = value => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    if (value && !isPermanent) toggleSidebar(layoutDispatch);
  };

  // global
  var { isSidebarOpened } = useLayoutState();
  var layoutDispatch = useLayoutDispatch();

  // local
  var [isPermanent, setPermanent] = useState(true);

  useEffect(function() {
    window.addEventListener("resize", handleWindowWidthChange);
    handleWindowWidthChange();
    return function cleanup() {
      window.removeEventListener("resize", handleWindowWidthChange);
    };
  });

  return (
    <Drawer
      variant={isPermanent ? "permanent" : "temporary"}
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: isSidebarOpened,
        [classes.drawerClose]: !isSidebarOpened,
      })}
      classes={{
        paper: classNames({
          [classes.drawerOpen]: isSidebarOpened,
          [classes.drawerClose]: !isSidebarOpened,
        }),
      }}
      open={isSidebarOpened}
      onClose={toggleDrawer(true)}
    >
      <div className={classes.toolbar} />
      <div className={classes.mobileBackButton}>
        <IconButton onClick={() => toggleSidebar(layoutDispatch)}>
          <ArrowBackIcon
            classes={{
              root: classNames(classes.headerIcon, classes.headerIconCollapse),
            }}
          />
        </IconButton>
      </div>
      <List className={classes.sidebarList}>
        {structure.map(link => (
          <SidebarLink
            key={link.id}
            location={location}
            isSidebarOpened={isSidebarOpened}
            {...link}
            toggleDrawer={toggleDrawer(true)}
          />
        ))}
      </List>
    </Drawer>
  );

  // ##################################################################
  function handleWindowWidthChange() {
    var windowWidth = window.innerWidth;
    var breakpointWidth = theme.breakpoints.values.md;
    var isSmallScreen = windowWidth < breakpointWidth;

    if (isSmallScreen && isPermanent) {
      setPermanent(false);
    } else if (!isSmallScreen && !isPermanent) {
      setPermanent(true);
    }
  }
}

export default withRouter(Sidebar);
