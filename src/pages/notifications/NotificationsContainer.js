import React from "react";
import { withStyles } from "@material-ui/core";
import { compose, withState, withHandlers } from "recompose";
import { toast } from "react-toastify";

import Notification from "../../components/Notification";
import NotificationsView from "./NotificationsView";

const positions = [
  toast.POSITION.TOP_LEFT,
  toast.POSITION.TOP_CENTER,
  toast.POSITION.TOP_RIGHT,
  toast.POSITION.BOTTOM_LEFT,
  toast.POSITION.BOTTOM_CENTER,
  toast.POSITION.BOTTOM_RIGHT
];

export default compose(
  withStyles(theme => ({
    /*progress: {
      visibility: "hidden"
    },
    notification: {
      display: "flex",
      alignItems: "center",
      background: "transparent",
      boxShadow: "none",
      overflow: "visible"
    },
    notificationComponent: {
      paddingRight: theme.spacing.unit * 4
    }*/
  })),
  withState("notificationsPosition", "setNotificationPosition", 2),
  withState("errorToastId", "setErrorToastId", null),
  withHandlers({
    sendNotification: props => (componentProps, options) => {
      return toast(
        <Notification
          {...componentProps}
          className={props.classes.notificationComponent}
        />,
        options
      );
    }
  }),
  withHandlers({
    retryErrorNotification: props => () => {
      const componentProps = {
        type: "message",
        message: "Message was sent successfully!",
        variant: "contained",
        color: "success",
      };

      toast.update(props.errorToastId, {
        render: <Notification {...componentProps} />,
        type: "success"
      });
      props.setErrorToastId(null);
    }
  }),
  withHandlers({
    handleNotificationCall: props => notificationType => {
      let componentProps;

      if (props.errorToastId && notificationType === "error") return;

      switch (notificationType) {
        case "info":
          componentProps = {
            type: "feedback",
            message: "New user feedback received",
            variant: "contained",
            color: "primary"
          };
          break;
        case "error":
          componentProps = {
            type: "message",
            message: "Message was not sent!",
            variant: "contained",
            color: "secondary",
            extraButton: "Resend",
            extraButtonClick: props.retryErrorNotification
          };
          break;
        default:
          componentProps = {
            type: "shipped",
            message: "The item was shipped",
            variant: "contained",
            color: "success"
          };
      }

      const toastId = props.sendNotification(componentProps, {
        type: notificationType,
        position: positions[props.notificationsPosition],
        progressClassName: props.classes.progress,
        onClose:
          notificationType === "error" && (() => props.setErrorToastId(null)),
        className: props.classes.notification
      });

      if (notificationType === "error") props.setErrorToastId(toastId);
    },
    changeNotificationPosition: props => positionId => {
      props.setNotificationPosition(positionId);
    }
  })
)(NotificationsView);
