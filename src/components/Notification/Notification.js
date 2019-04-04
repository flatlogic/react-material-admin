import React from "react";
import { Button, withStyles } from "@material-ui/core";
import {
  NotificationsNone as NotificationsIcon,
  ThumbUp as ThumbUpIcon,
  ShoppingCart as ShoppingCartIcon,
  LocalOffer as TicketIcon,
  BusinessCenter as DeliveredIcon,
  SmsFailed as FeedbackIcon,
  DiscFull as DiscIcon,
  Email as MessageIcon,
  Report as ReportIcon,
  Error as DefenceIcon,
  AccountBox as CustomerIcon,
  Done as ShippedIcon,
  Publish as UploadIcon,
} from "@material-ui/icons";
import classnames from "classnames";
import tinycolor from 'tinycolor2';

import { Typography } from "../Wrappers";

const typesIcons = {
  "e-commerce": <ShoppingCartIcon />,
  notification: <NotificationsIcon />,
  offer: <TicketIcon />,
  info: <ThumbUpIcon />,
  message: <MessageIcon />,
  feedback: <FeedbackIcon />,
  customer: <CustomerIcon />,
  shipped: <ShippedIcon />,
  delivered: <DeliveredIcon />,
  defence: <DefenceIcon />,
  report: <ReportIcon />,
  upload: <UploadIcon />,
  disc: <DiscIcon />,
};

const getIconByType = (type = "offer") => typesIcons[type];

const Notification = ({ classes, theme, variant, ...props }) => {
  const icon = getIconByType(props.type);
  const iconWithStyles = React.cloneElement(icon, {
    classes: {
      root: classes.notificationIcon
    },
    style: {
      color: variant !== "contained" && theme.palette[props.color] && theme.palette[props.color].main
    }
  });

  return (
    <div
      className={classnames(classes.notificationContainer, props.className, {
        [classes.notificationContained]: variant === "contained",
        [classes.notificationContainedShadowless]: props.shadowless,
      })}
      style={{
        backgroundColor:
          variant === "contained" &&
          theme.palette[props.color] &&
          theme.palette[props.color].main
      }}
    >
      <div
        className={classnames(classes.notificationIconContainer, {
          [classes.notificationIconContainerContained]: variant === "contained",
          [classes.notificationIconContainerRounded]: variant === "rounded",
        }
        )}
        style={{
          backgroundColor: variant === "rounded" &&
          theme.palette[props.color] &&
          tinycolor(theme.palette[props.color].main).setAlpha(0.15).toRgbString()
        }}
      >{iconWithStyles}</div>
      <div className={classes.messageContainer}>
        <Typography
          className={classnames({
            [classes.containedTypography]: variant === "contained"
          })}
          variant={props.typographyVariant}
          size={variant !== "contained" && !props.typographyVariant && "md"}
        >
          {props.message}
        </Typography>
        {props.extraButton && props.extraButtonClick && (<Button onClick={props.extraButtonClick} disableRipple className={classes.extraButton}>{props.extraButton}</Button>)}
      </div>
    </div>
  );
};

const styles = theme => ({
  notificationContainer: {
    display: "flex",
    alignItems: "center"
  },
  notificationContained: {
    borderRadius: 45,
    height: 45,
    boxShadow: theme.customShadows.widgetDark
  },
  notificationContainedShadowless: {
    boxShadow: 'none',
  },
  notificationIconContainer: {
    width: 45,
    height: 45,
    borderRadius: 45,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 24,
  },
  notificationIconContainerContained: {
    fontSize: 18,
    color: '#FFFFFF80',
  },
  notificationIconContainerRounded: {
    marginRight: theme.spacing.unit * 2,
  },
  containedTypography: {
    color: "white"
  },
  messageContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexGrow: 1,
  },
  extraButton: {
    color: 'white',
    '&:hover, &:focus': {
      background: 'transparent',
    }
  },
});

export default withStyles(styles, { withTheme: true })(Notification);
