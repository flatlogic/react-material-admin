import React, { useState, useEffect } from "react";
import { Drawer, IconButton, List } from "@material-ui/core";
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

function Sidebar({ location }) {
  var classes = useStyles();
  var theme = useTheme();

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
    >
      <div className={classes.toolbar}/>
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
