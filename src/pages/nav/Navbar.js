import React, { useState } from "react";
import {
  Grid,
  Box,
  Menu,
  InputBase,
  MenuItem,
  Toolbar,
  Button,
  IconButton
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import { Search as SearchIcon } from "@mui/icons-material";

// components
import Widget from "../../components/Widget";
import { Typography, AppBar } from "../../components/Wrappers";

import classNames from "classnames";
import useStyles from "./styles";

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
            </div>
            <Typography>With menu</Typography>
            <Box my={3}>
              <AppBar position="static" color="secondary">
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
                      horizontal: "right"
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right"
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
        <Grid item md={6} xs={12}>
          <Widget title="Navbar Search" disableWidgetMenu inheritHeight>
            <Typography>
              Search icon makes UX more flexible. To start using search icon,
              make sure you got all relative functions.
            </Typography>
            <div className={classes.root}>
              <Box mt={3}>
                <AppBar position="static" color="warning">
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
                        [classes.searchFocused]: isSearchOpen
                      })}
                    >
                      <div
                        className={classNames(classes.searchIcon, {
                          [classes.searchIconOpened]: isSearchOpen
                        })}
                        onClick={() => setSearchOpen(!isSearchOpen)}
                      >
                        <SearchIcon classes={{ root: classes.headerIcon }} />
                      </div>
                      <InputBase
                        placeholder="Search"
                        classes={{
                          root: classes.inputRoot,
                          input: classes.inputInput
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
