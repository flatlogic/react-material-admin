import React, { useState } from "react";
import { Grid, Box, Menu, Paper, InputBase } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";

// components
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
import { Typography } from "../../components/Wrappers";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import classNames from "classnames";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { Search as SearchIcon } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  wrapFix: {
    whiteSpace: "pre",
  },
  paper: {
    margin: theme.spacing(3),
    padding: 10,
    backgroundColor: "#f3f3f3",
  },
  grow: {
    flexGrow: 1,
  },
  search: {
    position: "relative",
    borderRadius: 25,
    paddingLeft: theme.spacing.unit * 2.5,
    width: 36,
    backgroundColor: fade(theme.palette.common.black, 0),
    transition: theme.transitions.create(["background-color", "width"]),
    "&:hover": {
      cursor: "pointer",
      backgroundColor: fade(theme.palette.common.black, 0.08),
    },
  },
  searchFocused: {
    backgroundColor: fade(theme.palette.common.black, 0.08),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 250,
    },
  },
  searchIcon: {
    width: 36,
    right: 0,
    height: "100%",
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: theme.transitions.create("right"),
    "&:hover": {
      cursor: "pointer",
    },
  },

  searchIconOpened: {
    right: theme.spacing.unit * 1.25,
  },
  headerIcon: {
    fontSize: 28,
    color: "rgba(255, 255, 255, 0.35)",
  },
  inputRoot: {
    color: "inherit",
    width: "100%",
  },
  inputInput: {
    height: 36,
    padding: 0,
    paddingRight: 36 + theme.spacing.unit * 1.25,
    width: "100%",
  },
}));

export default function NavComp() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  function handleMenu(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const [isSearchOpen, setSearchOpen] = useState(false);

  const classes = useStyles();
  return (
    <div>
      <PageTitle title="Navbar" />
      <Grid container spacing={6}>
        <Grid item md={6}>
          <Widget title="Navbar Example" disableWidgetMenu>
            <Typography>
              App bar displays yours app links by importing and inserting AppBar
              component. To swap links style add attribute within Button
              component.
            </Typography>
            <div className={classes.root}>
              <Box my={3}>
                <AppBar position="static">
                  <Toolbar>
                    <IconButton
                      edge="start"
                      className={classes.menuButton}
                      color="inherit"
                      aria-label="menu"
                    >
                      <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                      Navbar
                    </Typography>
                    <Button color="inherit">Link</Button>
                    <Button color="inherit">Link2</Button>
                    <Button color="inherit">Another Link</Button>
                    <Button disabled>Disabled Link</Button>
                  </Toolbar>
                </AppBar>
              </Box>
              <Paper className={classes.paper}>
                <Grid item xs zeroMinWidth>
                  <pre>
                    <Typography color="primary">
                      <code>{"<AppBar>"}</code>
                    </Typography>
                    <Typography
                      color="secondary"
                      noWrap
                      className={classes.wrapFix}
                    >
                      <code>{"   <Toolbar>"}</code>
                    </Typography>
                    <Typography
                      color="secondary"
                      noWrap
                      className={classes.wrapFix}
                    >
                      <code>{"     <IconButton>"}</code>
                    </Typography>
                    <Typography
                      color="secondary"
                      noWrap
                      className={classes.wrapFix}
                    >
                      <code>{"       <MenuIcon />"}</code>
                    </Typography>
                    <Typography color="secondary">
                      <code>{"    </IconButton>"}</code>
                    </Typography>
                    <Typography color="warning">
                      <code>{'    <Typography variant="h6"> '}</code>
                    </Typography>
                    <Typography color="warning">
                      <code>{"     Nav"}</code>
                    </Typography>
                    <Typography color="warning">
                      <code>{"    </Typography> "}</code>
                    </Typography>
                    <Typography color="danger">
                      <code>
                        {'     <Button color="inherit">Link</Button> /> '}
                      </code>
                    </Typography>
                    <Typography color="danger">
                      <code>
                        {'     <Button color="inherit">Link2</Button> /> '}
                      </code>
                    </Typography>
                    <Typography color="danger">
                      <code>
                        {'     <Button color="inherit">Another Link</Button>'}
                      </code>
                    </Typography>
                    <Typography color="danger">
                      <code>
                        {"     <Button disabled>Disabled Link</Button>"}
                      </code>
                    </Typography>
                    <Typography
                      color="secondary"
                      noWrap
                      className={classes.wrapFix}
                    >
                      <code>{"   </Toolbar>"}</code>
                    </Typography>
                    <Typography color="primary">
                      <code>{"</AppBar>"}</code>
                    </Typography>
                  </pre>
                </Grid>
              </Paper>
            </div>
            <Typography>With menu</Typography>
            <Box my={3}>
              <AppBar position="static">
                <Toolbar>
                  <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="menu"
                  >
                    <MenuIcon />
                  </IconButton>
                  <Typography variant="h6" className={classes.title}>
                    Navbar menu
                  </Typography>
                  <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={open}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                  </Menu>
                </Toolbar>
              </AppBar>
            </Box>
          </Widget>
        </Grid>
        <Grid item md={6}>
          <Widget title="Navbar Search" disableWidgetMenu inheritHeight>
            <Typography>
              Search icon makes UX more flexible. To start using search icon,
              make sure you got all relative functions.
            </Typography>
            <div className={classes.root}>
              <Box mt={3}>
                <AppBar position="static">
                  <Toolbar>
                    <IconButton
                      edge="start"
                      className={classes.menuButton}
                      color="inherit"
                      aria-label="menu"
                    >
                      <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                      Navbar search
                    </Typography>
                    <div className={classes.grow} />
                    <div
                      className={classNames(classes.search, {
                        [classes.searchFocused]: isSearchOpen,
                      })}
                    >
                      <div
                        className={classNames(classes.searchIcon, {
                          [classes.searchIconOpened]: isSearchOpen,
                        })}
                        onClick={() => setSearchOpen(!isSearchOpen)}
                      >
                        <SearchIcon classes={{ root: classes.headerIcon }} />
                      </div>
                      <InputBase
                        placeholder="Search"
                        classes={{
                          root: classes.inputRoot,
                          input: classes.inputInput,
                        }}
                      />
                    </div>
                  </Toolbar>
                </AppBar>
              </Box>
            </div>
          </Widget>
        </Grid>
      </Grid>
    </div>
  );
}
