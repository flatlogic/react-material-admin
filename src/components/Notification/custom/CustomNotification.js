import React from 'react'
import { toast } from 'react-toastify'

import Notification from "../Notification";

import useStyles from './styles';

export default function sendNotification(text) {
  var classes = useStyles();
  const componentProps = {
    type: "feedback",
    message: text,
    variant: "contained",
    color: "success"
  };
  const options = {
    type: "info",
    position: toast.POSITION.TOP_RIGHT,
    progressClassName: classes.progress,
    className: classes.notification,
    timeOut: 1000
  };
  // toast(
  //   <Notification
  //     {...componentProps}
  //     className={classes.notificationComponent}
  //   />,
  //   options
  // );
  return <></>;
}
