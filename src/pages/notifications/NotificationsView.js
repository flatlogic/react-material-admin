import React from 'react';
import { Grid, Typography, Button, withStyles } from '@material-ui/core';
import { grey, blue, purple, red, green } from '@material-ui/core/colors';
import { Close as CloseIcon } from '@material-ui/icons';
import classnames from 'classnames';
import { ToastContainer } from 'react-toastify';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import 'react-toastify/dist/ReactToastify.css';

import Widget from '../../components/Widget';

const NotificationComponent = ({ classes, ...props} ) => (
  <div className={classes.notification}>
    <Typography variant="subtitle2" className={classes.text}>{props.title}</Typography>
    <Typography className={classes.text}>{props.message}</Typography>
    {props.extraButtonText && <Button onClick={props.extraButtonAction} className={classes.text}>{props.extraButtonText}</Button>}
  </div>
);

const CloseButton = ({ closeToast }) => (
  <CloseIcon
    onClick={closeToast}
  />
);

const NotificationsPage = ({ classes, ...props}) => (
  <Grid container spacing={32}>
    <ToastContainer closeButton={<CloseButton />} closeOnClick={false} progressClassName={classes.notificationProgress} />
    <Grid item xs={12}>
      <Widget title="Notifications" upperTitle>
        <Grid container spacing={16}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Layout options</Typography>
            <Typography>There are few position options available for notifications. You can click any of them to change notifications position:</Typography>
            <div className={classes.layoutContainer}>
              <div className={classes.layoutButtonsRow}>
                <button onClick={() => props.changeNotificationPosition(0)} className={classnames(classes.layoutButton, { [classes.layoutButtonActive]: props.notificationsPosition === 0})} />
                <button onClick={() => props.changeNotificationPosition(1)} className={classnames(classes.layoutButton, { [classes.layoutButtonActive]: props.notificationsPosition === 1})} />
                <button onClick={() => props.changeNotificationPosition(2)} className={classnames(classes.layoutButton, { [classes.layoutButtonActive]: props.notificationsPosition === 2})} />
              </div>
              <div className={classes.layoutButtonsRow}>
                <button onClick={() => props.changeNotificationPosition(3)} className={classnames(classes.layoutButton, { [classes.layoutButtonActive]: props.notificationsPosition === 3})} />
                <button onClick={() => props.changeNotificationPosition(4)} className={classnames(classes.layoutButton, { [classes.layoutButtonActive]: props.notificationsPosition === 4})} />
                <button onClick={() => props.changeNotificationPosition(5)} className={classnames(classes.layoutButton, { [classes.layoutButtonActive]: props.notificationsPosition === 5})} />
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Notification Types</Typography>
            <Typography>Different types of notifications for lost of use cases. Custom classes are also supported.</Typography>
            <div className={classes.buttonsContainer}>
              <Button variant="contained" onClick={() => props.handleNotificationCall('info')} className={classnames(classes.notificationCallButton, classes.buttonInfo)}>Info Message</Button>
              <Button variant="contained" onClick={() => props.handleNotificationCall('error')} className={classnames(classes.notificationCallButton, classes.buttonError)}>Error + Retry Message</Button>
              <Button variant="contained" onClick={() => props.handleNotificationCall('success')} className={classnames(classes.notificationCallButton, classes.buttonSuccess)}>Success Message</Button>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Usage</Typography>
            <Typography>Notifications are created with the help of <a href="https://github.com/fkhadra/react-toastify">react-toastify</a></Typography>
            <div className={classes.codeContainer}>
              <SyntaxHighlighter className={classes.codeComponent} language='javascript' style={docco}>{`
// import needed components, functions and styles
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Page = () => {
  <div>
    <ToastContainer />
    <button onClick={() => toast('Toast Mesasge')}>
      show notification
    </button>
  </div>
};
              `}</SyntaxHighlighter>
              <Typography variant="caption">For more API information refer to the library documentation</Typography>
            </div>
          </Grid>
        </Grid>
      </Widget>
    </Grid>
  </Grid>
);

const styles = (theme) => ({
  layoutContainer: {
    backgroundColor: grey[200],
    height: 300,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: theme.spacing.unit * 2,
  },
  layoutButtonsRow: {
    wifht: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  layoutButton: {
    backgroundColor: grey[300],
    width: 120,
    height: 80,
    outline: 'none',
    border: 'none',
  },
  layoutButtonActive: {
    backgroundColor: blue[200],
  },
  notificationProgress: {
    backgroundColor: grey[800]
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: theme.spacing.unit * 2,
  },
  notificationCallButton: {
    color: 'white',
    marginBottom: theme.spacing.unit,
  },
  buttonInfo: {
    backgroundColor: purple[300],
    '&:hover': {
      backgroundColor: purple[400],
    },
  },
  buttonError: {
    backgroundColor: red[300],
    '&:hover': {
      backgroundColor: red[400],
    },
  },
  buttonSuccess: {
    backgroundColor: green[300],
    '&:hover': {
      backgroundColor: green[400],
    },
  },
  codeContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing.unit * 2,
  },
  codeComponent: {
    flexGrow: 1,
  }
});

const notificationStyles = {
  notification: {
    width: 250,
  },
  text: {
    color: 'white',
  }
};

export const Notification = withStyles(notificationStyles)(NotificationComponent)
export default withStyles(styles, { withTheme: true})(NotificationsPage);
