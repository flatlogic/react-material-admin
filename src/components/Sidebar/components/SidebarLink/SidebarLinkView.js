import React from "react";
import {
  Collapse,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  withStyles
} from "@material-ui/core";
import { Link } from "react-router-dom";
import classnames from "classnames";
import { Inbox as InboxIcon } from "@material-ui/icons";

import Dot from "../Dot";

const SidebarLink = ({
  link,
  icon,
  label,
  children,
  location,
  classes,
  isSidebarOpened,
  nested,
  type,
  isOpen,
  toggleCollapse
}) => {

  const isLinkActive =
    link &&
    (location.pathname === link || location.pathname.indexOf(link) !== -1);

  if (type === "title")
    return (
      <Typography
        className={classnames(classes.linkText, classes.sectionTitle, {
          [classes.linkTextHidden]: !isSidebarOpened
        })}
      >
        {label}
      </Typography>
    );

  if (type === "divider") return <Divider className={classes.divider} />;

  if (!children)
    return (
      <ListItem
        button
        component={link && Link}
        to={link}
        className={classes.link}
        classes={{
          root: classnames(classes.linkRoot, {
            [classes.linkActive]: isLinkActive && !nested,
            [classes.linkNested]: nested
          })
        }}
        disableRipple
      >
        <ListItemIcon
          className={classnames(classes.linkIcon, {
            [classes.linkIconActive]: isLinkActive
          })}
        >
          {nested ? <Dot color={isLinkActive && "primary"} /> : icon}
        </ListItemIcon>
        <ListItemText
          classes={{
            primary: classnames(classes.linkText, {
              [classes.linkTextActive]: isLinkActive,
              [classes.linkTextHidden]: !isSidebarOpened
            })
          }}
          primary={label}
        />
      </ListItem>
    );

  return (
    <React.Fragment>
      <ListItem
        button
        component={link && Link}
        onClick={toggleCollapse}
        className={classes.link}
        to={link}
        disableRipple
      >
        <ListItemIcon
          className={classnames(classes.linkIcon, {
            [classes.linkIconActive]: isLinkActive
          })}
        >
          {icon ? icon : <InboxIcon />}
        </ListItemIcon>
        <ListItemText
          classes={{
            primary: classnames(classes.linkText, {
              [classes.linkTextActive]: isLinkActive,
              [classes.linkTextHidden]: !isSidebarOpened
            })
          }}
          primary={label}
        />
      </ListItem>
      {children && (
        <Collapse
          in={isOpen && isSidebarOpened}
          timeout="auto"
          unmountOnExit
          className={classes.nestedList}
        >
          <List component="div" disablePadding>
            {children.map(childrenLink => (
              <SidebarLink
                key={childrenLink && childrenLink.link}
                location={location}
                isSidebarOpened={isSidebarOpened}
                classes={classes}
                nested
                {...childrenLink}
              />
            ))}
          </List>
        </Collapse>
      )}
    </React.Fragment>
  );
};

const styles = theme => ({
  link: {
    textDecoration: "none",
    paddingLeft: theme.spacing.unit * 4.5,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    "&:hover, &:focus": {
      backgroundColor: theme.palette.background.light
    }
  },
  linkActive: {
    backgroundColor: theme.palette.background.light
  },
  linkNested: {
    paddingLeft: 0,
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    "&:hover, &:focus": {
      backgroundColor: "#FFFFFF"
    }
  },
  linkIcon: {
    marginRight: theme.spacing.unit,
    color: theme.palette.text.secondary + "99",
    transition: theme.transitions.create("color"),
    width: 24,
    display: "flex",
    justifyContent: "center"
  },
  linkIconActive: {
    color: theme.palette.primary.main
  },
  linkText: {
    padding: 0,
    color: theme.palette.text.secondary + "CC",
    transition: theme.transitions.create(["opacity", "color"]),
    fontSize: 16
  },
  linkTextActive: {
    color: theme.palette.text.primary
  },
  linkTextHidden: {
    opacity: 0
  },
  nestedList: {
    paddingLeft: theme.spacing.unit * 4.5 + 40
  },
  sectionTitle: {
    marginLeft: theme.spacing.unit * 4.5,
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2
  },
  divider: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 4,
    height: 1,
    backgroundColor: "#D8D8D880"
  }
});

export default withStyles(styles, { withTheme: true })(SidebarLink);
