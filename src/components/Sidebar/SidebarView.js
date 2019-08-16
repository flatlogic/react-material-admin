import React from "react";
import { Drawer, IconButton, List, withStyles } from "@material-ui/core";
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
} from "@material-ui/icons";
import classNames from "classnames";

import SidebarLink from "./components/SidebarLink/SidebarLinkContainer";
import Dot from "./components/Dot";

const structure = [
  { id: 0, label: "Dashboard", link: "/app/dashboard", icon: <HomeIcon/> },
  { id: 1, label: "Charts", link: "/app/charts", icon: <ChartIcon/> },
  { id: 2, label: "Maps", link: "/app/maps", icon: <MapIcon/> },
  { id: 3, type: "divider" },
  { id: 4, type: "title", label: "TEMPLATE" },
  {
    id: 5,
    label: "Core",
    link: "/app/core",
    icon: <CoreIcon/>,
    children: [{
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
  { id: 7, label: "Tables", link: "/app/tables", icon: <TableIcon/> },
  {
    id: 9,
    label: "UI Elements",
    link: "/app/ui",
    icon: <UIElementsIcon/>,
    children: [{ label: "Icons", link: "/app/ui/icons" }, {
      label: "Notifications",
      link: "/app/ui/notifications",
    }],
  },
  { id: 10, type: "divider" },
  { id: 11, type: "title", label: "HELP" },
  { id: 12, label: "Library", link: "", icon: <LibraryIcon/> },
  { id: 13, label: "Support", link: "", icon: <SupportIcon/> },
  { id: 14, label: "FAQ", link: "", icon: <FAQIcon/> },
  { id: 15, type: "divider" },
  { id: 16, type: "title", label: "PROJECTS" },
  {
    id: 17,
    label: "My recent",
    link: "",
    icon: <Dot size="large" color="secondary"/>,
  },
  {
    id: 18,
    label: "Starred",
    link: "",
    icon: <Dot size="large" color="primary"/>,
  },
  {
    id: 19,
    label: "Background",
    link: "",
    icon: <Dot size="large" color="secondary"/>,
  },
];

const SidebarView = ({
                       classes,
                       theme,
                       toggleSidebar,
                       isSidebarOpened,
                       isPermanent,
                       location,
                     }) => {
  return (
    <Drawer
      variant={isPermanent ? "permanent" : "temporary"}
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: isSidebarOpened,
        [classes.drawerClose]: !isSidebarOpened,
      })}
      classes={{
        paper: classNames(classes.drawer, {
          [classes.drawerOpen]: isSidebarOpened,
          [classes.drawerClose]: !isSidebarOpened,
        }),
      }}
      open={isSidebarOpened}
    >
      <div className={classes.mobileBackButton}>
        <IconButton onClick={toggleSidebar}>
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
          />
        ))}
      </List>
    </Drawer>
  );
};

const drawerWidth = 240;

const styles = theme => ({
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    top: theme.spacing.unit * 8,
    [theme.breakpoints.down("sm")]: {
      top: 0,
    },
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing.unit * 7 + 40,
    [theme.breakpoints.down("sm")]: {
      width: drawerWidth,
    },
  },
  toolbar: {
    ...theme.mixins.toolbar,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  mobileBackButton: {
    marginTop: theme.spacing.unit * 0.5,
    marginLeft: theme.spacing.unit * 3,
    [theme.breakpoints.only("sm")]: {
      marginTop: theme.spacing.unit * 0.625,
    },
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
});

export default withStyles(styles, { withTheme: true })(SidebarView);
