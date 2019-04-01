import React from "react";
import { withStyles, Badge as BadgeBase } from "@material-ui/core";
import classnames from "classnames";

const BadgeExtended = ({ classes, children, ...props }) => (
  <BadgeBase
    classes={{
      badge: classnames(classes.badge, {
        [classes[props.color]]: classes[props.color]
      })
    }}
    {...props}
  >
    {children}
  </BadgeBase>
);

export const Badge = withStyles(theme => ({
  badge: {
    fontWeight: 600,
    height: 16,
    minWidth: 16, 
  },
  warning: {
    backgroundColor: theme.palette.warning.main
  }
}))(BadgeExtended);
