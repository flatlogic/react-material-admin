import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Fab,
  withStyles
} from "@material-ui/core";
import {
  Menu as MenuIcon,
  MailOutline as MailIcon,
  NotificationsNone as NotificationsIcon,
  Person as AccountIcon,
  Search as SearchIcon,
  Send as SendIcon,
  ArrowBack as ArrowBackIcon
} from "@material-ui/icons";
import { fade } from "@material-ui/core/styles/colorManipulator";
import classNames from "classnames";

import { Badge, Typography } from "../Wrappers";
import Notification from "../Notification";
import UserAvatar from "../UserAvatar";

const messages = [
  {
    id: 0,
    variant: "warning",
    name: "Jane Hew",
    message: "Hey! How is it going?",
    time: "9:32"
  },
  {
    id: 1,
    variant: "success",
    name: "Lloyd Brown",
    message: "Check out my new Dashboard",
    time: "9:18"
  },
  {
    id: 2,
    variant: "primary",
    name: "Mark Winstein",
    message: "I want rearrange the appointment",
    time: "9:15"
  },
  {
    id: 3,
    variant: "secondary",
    name: "Liana Dutti",
    message: "Good news from sale department",
    time: "9:09"
  }
];

const notifications = [
  { id: 0, color: "warning", message: "Check out this awesome ticket" },
  {
    id: 1,
    color: "success",
    type: "info",
    message: "What is the best way to get ..."
  },
  {
    id: 2,
    color: "secondary",
    type: "notification",
    message: "This is just a simple notification"
  },
  {
    id: 3,
    color: "primary",
    type: "e-commerce",
    message: "12 new orders has arrived today"
  }
];

const Header = ({ classes, isSidebarOpened, toggleSidebar, ...props }) => (
  <AppBar position="fixed" className={classes.appBar}>
    <Toolbar className={classes.toolbar}>
      <IconButton
        color="inherit"
        onClick={toggleSidebar}
        className={classNames(
          classes.headerMenuButton,
          classes.headerMenuButtonCollapse
        )}
      >
        {isSidebarOpened ? (
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
      <Typography variant="h6" weight="medium" className={classes.logotype}>
        React Material Admin
      </Typography>
      <div className={classes.grow} />
      <div
        className={classNames(classes.search, {
          [classes.searchFocused]: props.isSearchOpen
        })}
      >
        <div
          className={classNames(classes.searchIcon, {
            [classes.searchIconOpened]: props.isSearchOpen
          })}
          onClick={props.toggleSearch}
        >
          <SearchIcon classes={{ root: classes.headerIcon }} />
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
        />
      </div>
      <IconButton
        color="inherit"
        aria-haspopup="true"
        aria-controls="mail-menu"
        onClick={props.openNotificationsMenu}
        className={classes.headerMenuButton}
      >
        <Badge
          badgeContent={
            props.isNotificationsUnread ? notifications.length : null
          }
        >
          <NotificationsIcon classes={{ root: classes.headerIcon }} />
        </Badge>
      </IconButton>
      <IconButton
        color="inherit"
        aria-haspopup="true"
        aria-controls="mail-menu"
        onClick={props.openMailMenu}
        className={classes.headerMenuButton}
      >
        <Badge
          badgeContent={props.isMailsUnread ? messages.length : null}
          color="secondary"
        >
          <MailIcon classes={{ root: classes.headerIcon }} />
        </Badge>
      </IconButton>
      <IconButton
        aria-haspopup="true"
        color="inherit"
        className={classes.headerMenuButton}
        aria-controls="profile-menu"
        onClick={props.openProfileMenu}
      >
        <AccountIcon classes={{ root: classes.headerIcon }} />
      </IconButton>
      <Menu
        id="mail-menu"
        open={Boolean(props.mailMenu)}
        anchorEl={props.mailMenu}
        onClose={props.closeMailMenu}
        MenuListProps={{ className: classes.headerMenuList }}
        className={classes.headerMenu}
        classes={{ paper: classes.profileMenu }}
        disableAutoFocusItem
      >
        <div className={classes.profileMenuUser}>
          <Typography variant="h4" weight="medium">
            New Messages
          </Typography>
          <Typography
            className={classes.profileMenuLink}
            component="a"
            color="secondary"
          >
            {messages.length} New Messages
          </Typography>
        </div>
        {messages.map(message => (
          <MenuItem key={message.id} className={classes.messageNotification}>
            <div className={classes.messageNotificationSide}>
              <UserAvatar color={message.variant} name={message.name} />
              <Typography size="sm" color="textSecondary">
                {message.time}
              </Typography>
            </div>
            <div
              className={classNames(
                classes.messageNotificationSide,
                classes.messageNotificationBodySide
              )}
            >
              <Typography weight="medium" gutterBottom>
                {message.name}
              </Typography>
              <Typography color="textSecondary">{message.message}</Typography>
            </div>
          </MenuItem>
        ))}
        <Fab
          variant="extended"
          color="primary"
          aria-label="Add"
          className={classes.sendMessageButton}
        >
          Send New Message
          <SendIcon className={classes.sendButtonIcon} />
        </Fab>
      </Menu>
      <Menu
        id="notifications-menu"
        open={Boolean(props.notificationsMenu)}
        anchorEl={props.notificationsMenu}
        onClose={props.closeNotificationsMenu}
        className={classes.headerMenu}
        disableAutoFocusItem
      >
        {notifications.map(notification => (
          <MenuItem
            key={notification.id}
            onClick={props.closeNotificationsMenu}
            className={classes.headerMenuItem}
          >
            <Notification {...notification} typographyVariant="inherit" />
          </MenuItem>
        ))}
      </Menu>
      <Menu
        id="profile-menu"
        open={Boolean(props.profileMenu)}
        anchorEl={props.profileMenu}
        onClose={props.closeProfileMenu}
        className={classes.headerMenu}
        classes={{ paper: classes.profileMenu }}
        disableAutoFocusItem
      >
        <div className={classes.profileMenuUser}>
          <Typography variant="h4" weight="medium">
            John Smith
          </Typography>
          <Typography
            className={classes.profileMenuLink}
            component="a"
            color="primary"
            href="https://flatlogic.com"
          >
            Flalogic.com
          </Typography>
        </div>
        <MenuItem
          className={classNames(
            classes.profileMenuItem,
            classes.headerMenuItem
          )}
        >
          <AccountIcon className={classes.profileMenuIcon} /> Profile
        </MenuItem>
        <MenuItem
          className={classNames(
            classes.profileMenuItem,
            classes.headerMenuItem
          )}
        >
          <AccountIcon className={classes.profileMenuIcon} /> Tasks
        </MenuItem>
        <MenuItem
          className={classNames(
            classes.profileMenuItem,
            classes.headerMenuItem
          )}
        >
          <AccountIcon className={classes.profileMenuIcon} /> Messages
        </MenuItem>
        <div className={classes.profileMenuUser}>
          <Typography
            className={classes.profileMenuLink}
            color="primary"
            onClick={props.signOut}
          >
            Sign Out
          </Typography>
        </div>
      </Menu>
    </Toolbar>
  </AppBar>
);

const styles = theme => ({
  logotype: {
    color: "white",
    marginLeft: theme.spacing(2.5),
    marginRight: theme.spacing(2.5),
    fontWeight: 500,
    fontSize: 18,
    whiteSpace: "nowrap",
    [theme.breakpoints.down("xs")]: {
      display: "none"
    }
  },
  appBar: {
    width: "100vw",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  toolbar: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  hide: {
    display: "none"
  },
  grow: {
    flexGrow: 1
  },
  search: {
    position: "relative",
    borderRadius: 25,
    paddingLeft: theme.spacing(2.5),
    width: 36,
    backgroundColor: fade(theme.palette.common.black, 0),
    transition: theme.transitions.create(["background-color", "width"]),
    "&:hover": {
      cursor: "pointer",
      backgroundColor: fade(theme.palette.common.black, 0.08)
    }
  },
  searchFocused: {
    backgroundColor: fade(theme.palette.common.black, 0.08),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 250
    }
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
      cursor: "pointer"
    }
  },
  searchIconOpened: {
    right: theme.spacing(1.25)
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    height: 36,
    padding: 0,
    paddingRight: 36 + theme.spacing(1.25),
    width: "100%"
  },
  messageContent: {
    display: "flex",
    flexDirection: "column"
  },
  headerMenu: {
    marginTop: theme.spacing(7)
  },
  headerMenuList: {
    display: "flex",
    flexDirection: "column"
  },
  headerMenuItem: {
    "&:hover, &:focus": {
      backgroundColor: theme.palette.primary.main,
      color: "white"
    }
  },
  headerMenuButton: {
    marginLeft: theme.spacing(2),
    padding: theme.spacing.unit / 2
  },
  headerMenuButtonCollapse: {
    marginRight: theme.spacing(2)
  },
  headerIcon: {
    fontSize: 28,
    color: "rgba(255, 255, 255, 0.35)"
  },
  headerIconCollapse: {
    color: "white"
  },
  profileMenu: {
    minWidth: 265
  },
  profileMenuUser: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(2)
  },
  profileMenuItem: {
    color: theme.palette.text.hint
  },
  profileMenuIcon: {
    marginRight: theme.spacing(2),
    color: theme.palette.text.hint
  },
  profileMenuLink: {
    fontSize: 16,
    textDecoration: "none",
    "&:hover": {
      cursor: "pointer"
    }
  },
  messageNotification: {
    height: "auto",
    display: "flex",
    alignItems: "center",
    "&:hover, &:focus": {
      backgroundColor: theme.palette.background.light
    }
  },
  messageNotificationSide: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginRight: theme.spacing(2)
  },
  messageNotificationBodySide: {
    alignItems: "flex-start",
    marginRight: 0
  },
  sendMessageButton: {
    margin: theme.spacing(4),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    textTransform: "none"
  },
  sendButtonIcon: {
    marginLeft: theme.spacing(2)
  }
});

export default withStyles(styles)(Header);
