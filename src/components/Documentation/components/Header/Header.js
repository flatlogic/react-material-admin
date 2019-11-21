import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import Icon from "@mdi/react";
import { withRouter } from "react-router-dom";

// Material-UI core components
import { AppBar, Toolbar, IconButton, Box } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";

// Material Icons
import {
  ArrowBack as ArrowBackIcon,
  Menu as MenuIcon,
  Twitter as TwitterIcon
} from "@material-ui/icons";
import {
  mdiDribbble as DribbbleIcon,
  mdiFacebook as FacebookIcon,
  mdiInstagram as InstagramIcon,
  mdiLinkedin as LinkedinIcon,
  mdiGithubCircle as GithubIcon
} from "@mdi/js";

// Components
import { Typography, Button, Link } from "../../../Wrappers";
import {
  toggleSidebar,
  useLayoutDispatch,
  useLayoutState
} from "../../../../context/LayoutContext";
import classNames from "classnames";

const Header = props => {
  const theme = useTheme();
  const classes = useStyles();
  var layoutState = useLayoutState();
  var layoutDispatch = useLayoutDispatch();
  const [isSmall, setSmall] = useState(false);

  useEffect(function() {
    window.addEventListener("resize", handleWindowWidthChange);
    handleWindowWidthChange();
    return function cleanup() {
      window.removeEventListener("resize", handleWindowWidthChange);
    };
  });

  function handleWindowWidthChange() {
    var windowWidth = window.innerWidth;
    var breakpointWidth = theme.breakpoints.values.md;
    var isSmallScreen = windowWidth < breakpointWidth;
    setSmall(isSmallScreen);
  }

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          color="inherit"
          onClick={() => toggleSidebar(layoutDispatch)}
          className={classNames(
            classes.headerMenuButton,
            classes.headerMenuButtonCollapse
          )}
        >
          {(!layoutState.isSidebarOpened && isSmall) ||
          (layoutState.isSidebarOpened && !isSmall) ? (
            <ArrowBackIcon
              classes={{
                root: classNames(classes.headerIcon, classes.headerIconCollapse)
              }}
            />
          ) : (
            <MenuIcon
              classes={{
                root: classNames(classes.headerIcon, classes.headerIconCollapse)
              }}
            />
          )}
        </IconButton>
        <Typography variant="h6" block className={classes.logo}>
          React Material Admin Full{" "}
          <Typography variant={"h5"}>&nbsp; Documentation</Typography>
        </Typography>
        <Box
          display={"flex"}
          alignItems={"center"}
          className={classes.fullWidthXs}
        >
          <Box display={"flex"} className={classes.icons}>
            <Link href={"https://twitter.com/flatlogic"}>
              <IconButton>
                <TwitterIcon style={{ color: "#fff" }} />
              </IconButton>
            </Link>
            <Link href={"https://dribbble.com/flatlogic"}>
              <IconButton>
                <Icon path={DribbbleIcon} size={1} color={"#fff"} />
              </IconButton>
            </Link>
            <Link href={"https://www.facebook.com/flatlogic"}>
              <IconButton>
                <Icon path={FacebookIcon} size={1} color={"#fff"} />
              </IconButton>
            </Link>
            <Link href={"https://instagram.com/flatlogiccom/"}>
              <IconButton>
                <Icon path={InstagramIcon} size={1} color={"#fff"} />
              </IconButton>
            </Link>
            <Link href={"https://www.linkedin.com/company/flatlogic/"}>
              <IconButton>
                <Icon path={LinkedinIcon} size={1} color={"#fff"} />
              </IconButton>
            </Link>
            <Link href={"https://github.com/flatlogic"}>
              <IconButton>
                <Icon path={GithubIcon} size={1} color={"#fff"} />
              </IconButton>
            </Link>
          </Box>
          <Box className={classes.headerButtons}>
            <Button
              color={"inherit"}
              style={{ marginRight: 16 }}
              onClick={() => props.history.push("/app")}
            >
              Live Preview
            </Button>
            <Button
              href={"https://flatlogic.com/templates/react-material-admin-full"}
              variant="outlined"
              color="secondary"
            >
              Buy
            </Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(Header);
