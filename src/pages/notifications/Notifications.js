import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { Close as CloseIcon } from "@material-ui/icons";
import { ToastContainer, toast } from "react-toastify";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import classnames from "classnames";

// styles
import "react-toastify/dist/ReactToastify.css";
import useStyles from "./styles";

// components
import Widget from "../../components/Widget/Widget";
import PageTitle from "../../components/PageTitle/PageTitle";
import Notification from "../../components/Notification";
import { Typography, Button } from "../../components/Wrappers/Wrappers";

const positions = [
  toast.POSITION.TOP_LEFT,
  toast.POSITION.TOP_CENTER,
  toast.POSITION.TOP_RIGHT,
  toast.POSITION.BOTTOM_LEFT,
  toast.POSITION.BOTTOM_CENTER,
  toast.POSITION.BOTTOM_RIGHT,
];

export default function NotificationsPage(props) {
  var classes = useStyles();

  // local
  var [notificationsPosition, setNotificationPosition] = useState(2);
  var [errorToastId, setErrorToastId] = useState(null);

  return (
    <>
      <PageTitle title="Notifications" />
      <Grid container spacing={4}>
        <ToastContainer
          className={classes.toastsContainer}
          closeButton={
            <CloseButton className={classes.notificationCloseButton} />
          }
          closeOnClick={false}
          progressClassName={classes.notificationProgress}
        />
        <Grid item xs={12}>
        <Widget disableWidgetMenu>
          <Grid container item xs={12}>
          <Grid item xs={4}>
          <Widget title="Layout Options" noWidgetShadow disableWidgetMenu noBodyPadding noHeaderPadding style={{paddingRight: 15}} headerClass={classes.widgetHeader}>
            <Typography>
              There are few position options available for notifications. You
              can click any of them to change notifications position:
            </Typography>
            <div className={classes.layoutContainer}>
              <div className={classes.layoutButtonsRow}>
                <button
                  onClick={() => changeNotificationPosition(0)}
                  className={classnames(classes.layoutButton, {
                    [classes.layoutButtonActive]: notificationsPosition === 0,
                  })}
                />
                <button
                  onClick={() => changeNotificationPosition(1)}
                  className={classnames(classes.layoutButton, {
                    [classes.layoutButtonActive]: notificationsPosition === 1,
                  })}
                />
                <button
                  onClick={() => changeNotificationPosition(2)}
                  className={classnames(classes.layoutButton, {
                    [classes.layoutButtonActive]: notificationsPosition === 2,
                  })}
                />
              </div>
              <Typography className={classes.layoutText} size="md">
                Click any position
              </Typography>
              <div className={classes.layoutButtonsRow}>
                <button
                  onClick={() => changeNotificationPosition(3)}
                  className={classnames(classes.layoutButton, {
                    [classes.layoutButtonActive]: notificationsPosition === 3,
                  })}
                />
                <button
                  onClick={() => changeNotificationPosition(4)}
                  className={classnames(classes.layoutButton, {
                    [classes.layoutButtonActive]: notificationsPosition === 4,
                  })}
                />
                <button
                  onClick={() => changeNotificationPosition(5)}
                  className={classnames(classes.layoutButton, {
                    [classes.layoutButtonActive]: notificationsPosition === 5,
                  })}
                />
              </div>
            </div>
          </Widget>
            </Grid>
            <Grid item xs={4}>
          <Widget title="Notifications Types" disableWidgetMenu noBodyPadding noWidgetShadow noHeaderPadding style={{paddingRight: 15}} headerClass={classes.widgetHeader}>
            <Typography>
              Different types of notifications for lost of use cases. Custom
              classes are also supported.
            </Typography>
            <div className={classes.buttonsContainer}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleNotificationCall("info")}
                className={classnames(classes.notificationCallButton)}
              >
                Info Message
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => handleNotificationCall("error")}
                className={classnames(classes.notificationCallButton)}
              >
                Error + Retry Message
              </Button>
              <Button
                variant="contained"
                color="success"
                onClick={() => handleNotificationCall("success")}
                className={classnames(classes.notificationCallButton)}
              >
                Success Message
              </Button>
            </div>
          </Widget>
            </Grid>
            <Grid item xs={4}>
          <Widget title="Usage" disableWidgetMenu noBodyPadding noWidgetShadow noHeaderPadding style={{paddingRight: 15}} headerClass={classes.widgetHeader}>
            <Typography>
              Notifications are created with the help of{" "}
              <a href="https://github.com/fkhadra/react-toastify">
                react-toastify
              </a>
            </Typography>
            <div className={classes.codeContainer}>
              <SyntaxHighlighter
                className={classes.codeComponent}
                language="javascript"
                style={docco}
              >{`
  // import needed components, functions and styles
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

  const Page = () => {
    <div>
      <ToastContainer />
      <button onClick={() => toast('Toast Message')}>
        show notification
      </button>
    </div>
  };
            `}</SyntaxHighlighter>
              <Typography variant="caption">
                For more API information refer to the library documentation
              </Typography>
            </div>
          </Widget>
            </Grid>
          </Grid>
          </Widget>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Widget title="Notification Types Examples" disableWidgetMenu>
            <Notification
              className={classes.notificationItem}
              shadowless
              type="message"
              message="Thanks for Checking out Messenger"
              variant="contained"
              color="secondary"
            />
            <Notification
              className={classes.notificationItem}
              shadowless
              type="feedback"
              message="New user feedback received"
              variant="contained"
              color="primary"
            />
            <Notification
              className={classes.notificationItem}
              shadowless
              type="customer"
              message="New customer is registered"
              variant="contained"
              color="success"
            />
            <Notification
              className={classes.notificationItem}
              shadowless
              type="shipped"
              message="The order was shipped"
              variant="contained"
              color="warning"
            />
            <Notification
              className={classes.notificationItem}
              shadowless
              type="delivered"
              message="The order was delivered"
              variant="contained"
              color="primary"
            />
            <Notification
              className={classes.notificationItem}
              shadowless
              type="defence"
              message="5 Defence alerts"
              variant="contained"
              color="info"
            />
          </Widget>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Widget title="Notification Types Examples" disableWidgetMenu>
            <Notification
              className={classes.notificationItem}
              type="report"
              message="New report has been received"
              color="secondary"
            />
            <Notification
              className={classes.notificationItem}
              type="feedback"
              message="New user feedback received"
              color="primary"
            />
            <Notification
              className={classes.notificationItem}
              type="shipped"
              message="The item was shipped"
              color="success"
            />
            <Notification
              className={classes.notificationItem}
              type="message"
              message="The new message from user @nahawaii"
              color="warning"
            />
            <Notification
              className={classes.notificationItem}
              type="upload"
              message="Your file is ready to upload"
              color="primary"
            />
            <Notification
              className={classes.notificationItem}
              type="disc"
              message="The disc is full"
              color="info"
            />
          </Widget>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Widget title="Notification Types Examples" disableWidgetMenu>
            <Notification
              className={classes.notificationItem}
              type="report"
              message="New report has been received"
              variant="rounded"
              color="secondary"
            />
            <Notification
              className={classes.notificationItem}
              type="feedback"
              message="New user feedback received"
              variant="rounded"
              color="primary"
            />
            <Notification
              className={classes.notificationItem}
              type="shipped"
              message="The item was shipped"
              variant="rounded"
              color="success"
            />
            <Notification
              className={classes.notificationItem}
              type="message"
              message="The new message from user @nahawaii"
              variant="rounded"
              color="warning"
            />
            <Notification
              className={classes.notificationItem}
              type="upload"
              message="Your file is ready to upload"
              variant="rounded"
              color="primary"
            />
            <Notification
              className={classes.notificationItem}
              type="disc"
              message="The disc is full"
              variant="rounded"
              color="info"
            />
          </Widget>
        </Grid>
      </Grid>
    </>
  );

  // #############################################################
  function sendNotification(componentProps, options) {
    return toast(
      <Notification
        {...componentProps}
        className={classes.notificationComponent}
      />,
      options,
    );
  }

  function retryErrorNotification() {
    var componentProps = {
      type: "message",
      message: "Message was sent successfully!",
      variant: "contained",
      color: "success",
    };
    toast.update(errorToastId, {
      render: <Notification {...componentProps} />,
      type: "success",
    });
    setErrorToastId(null);
  }

  function handleNotificationCall(notificationType) {
    var componentProps;

    if (errorToastId && notificationType === "error") return;

    switch (notificationType) {
      case "info":
        componentProps = {
          type: "feedback",
          message: "New user feedback received",
          variant: "contained",
          color: "primary",
        };
        break;
      case "error":
        componentProps = {
          type: "message",
          message: "Message was not sent!",
          variant: "contained",
          color: "secondary",
          extraButton: "Resend",
          extraButtonClick: retryErrorNotification,
        };
        break;
      default:
        componentProps = {
          type: "shipped",
          message: "The item was shipped",
          variant: "contained",
          color: "success",
        };
    }

    var toastId = sendNotification(componentProps, {
      type: notificationType,
      position: positions[notificationsPosition],
      progressClassName: classes.progress,
      onClose: notificationType === "error" && (() => setErrorToastId(null)),
      className: classes.notification,
    });

    if (notificationType === "error") setErrorToastId(toastId);
  }

  function changeNotificationPosition(positionId) {
    setNotificationPosition(positionId);
  }
}

// #############################################################
function CloseButton({ closeToast, className }) {
  return <CloseIcon className={className} onClick={closeToast} />;
}
