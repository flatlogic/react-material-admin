import React from "react";
import { Typography, withStyles } from "@material-ui/core";
import {
  NotificationsNone as NotificationsIcon,
  ThumbUp as ThumbUpIcon,
  ShoppingCart as ShoppingCartIcon,
  LocalOffer as TicketIcon
} from "@material-ui/icons";

const typesIcons = {
  "e-commerce": <ShoppingCartIcon />,
  notification: <NotificationsIcon />,
  offer: <TicketIcon />,
  info: <ThumbUpIcon />
};

const getIconByType = (type = "offer") => typesIcons[type];

const Notification = ({ classes, theme, ...props }) => {
  const icon = getIconByType(props.type);
  const iconWithStyles = React.cloneElement(icon, {
    classes: {
      root: classes.notificationIcon
    },
    style: {
      color: theme.palette[props.color] && theme.palette[props.color].main,
    }
  });

  return (
    <div className={classes.notificationContainer}>
      {iconWithStyles}
      <Typography variant="inherit">{props.message}</Typography>
    </div>
  );
};

const styles = theme => ({
  notificationContainer: {
    display: "flex",
    alignItems: "center"
  },
  notificationIcon: {
    fontSize: 18,
    marginRight: theme.spacing.unit * 2
  }
});

export default withStyles(styles, { withTheme: true })(Notification);
