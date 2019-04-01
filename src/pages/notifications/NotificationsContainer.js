import React from 'react';
import { withStyles } from '@material-ui/core';
import { green, purple, red } from '@material-ui/core/colors'
import { compose, withState, withHandlers } from 'recompose';
import { toast } from 'react-toastify';

import NotificationsView, { Notification } from './NotificationsView';

const positions = [
  toast.POSITION.TOP_LEFT,
  toast.POSITION.TOP_CENTER,
  toast.POSITION.TOP_RIGHT,
  toast.POSITION.BOTTOM_LEFT,
  toast.POSITION.BOTTOM_CENTER,
  toast.POSITION.BOTTOM_RIGHT,
];

export default compose(
  withStyles({
    progress: {
      backgroundColor: 'white',
    },
    successProgressBody: {
      backgroundColor: green[300],
    },
    infoProgressBody: {
      backgroundColor: purple[300],
    },
    errorProgressBody: {
      backgroundColor: red[300],
    },
  }),
  withState('notificationsPosition', 'setNotificationPosition', 2),
  withState('errorToastId', 'setErrorToastId', null),
  withHandlers({
    sendNotification: props => (props, options) => {
      return toast(<Notification {...props} />, options);
    }
  }),
  withHandlers({
    retryErrorNotification: props => () => {
      const componentProps = { title: 'Success!', message: 'Message was sent.' };

      toast.update(props.errorToastId, { render: <Notification {...componentProps} />, type: 'success', className: props.classes.successProgressBody});
      props.setErrorToastId(null);
    }
  }),
  withHandlers({
    handleNotificationCall: props => (notificationType) => {
      let className;
      let componentProps;

      if (props.errorToastId && notificationType === 'error') return;

      switch(notificationType) {
        case 'info':
          className = props.classes.infoProgressBody;
          componentProps = { title: 'Important Message!', message: 'You have 5 unread messages.' }
          break;
        case 'error':
          className = props.classes.errorProgressBody;
          componentProps = { title: 'Error!', message: 'Message cannot be sent.', extraButtonText: 'Retry', extraButtonAction: props.retryErrorNotification}
          break;
        default:
          className = props.classes.successProgressBody;
          componentProps = { title: 'Success!', message: 'You are all done for today.' }
      }

      const toastId = props.sendNotification(componentProps, {
        type: notificationType,
        position: positions[props.notificationsPosition],
        progressClassName: props.classes.progress,
        onClose: notificationType === 'error' && (() => props.setErrorToastId(null)),
        className,
      });

      if (notificationType === 'error') props.setErrorToastId(toastId);
    },
    changeNotificationPosition: props => positionId => {
      props.setNotificationPosition(positionId);
    },
  })
)(NotificationsView);