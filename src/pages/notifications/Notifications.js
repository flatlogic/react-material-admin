import React, { useState } from "react";
import {Grid, Box, Snackbar, Alert} from "@mui/material";

// styles
import classnames from "classnames";
import useStyles from "./styles";

// components
import Widget from "../../components/Widget";
import Notification from "../../components/Notification";
import Code from "../../components/Code";
import { Typography, Button } from "../../components/Wrappers";


export default function NotificationsPage() {
  let classes = useStyles();

  const [type, setType] = useState({
    type: 'success',
    message: 'This is a success message!'
  })
  const [state, setState] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const { vertical, horizontal, open } = state;

  const handleClick = (newState, positionId) => () => {
    setState({ open: true, ...newState });
    setNotificationPosition(positionId)
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  let [notificationsPosition, setNotificationPosition] = useState(2);

  const handleChange = (type) => {
    setType(type)
    setState({...state, open: true})
  }

  return (
    <>
      <Grid container spacing={3}>
       <Grid item xs={12} md={12} lg={12}>
        <Widget>
          <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
              <Typography className={classes.head5}>
                Layout Options
              </Typography>
              <Typography>
                There are few position options available for notifications. You
                can click any of them to change notifications position:
              </Typography>
              <div className={classes.layoutContainer}>
                <div className={classes.layoutButtonsRow}>
                  <button
                    onClick={handleClick({
                      vertical: 'top',
                      horizontal: 'left',
                    }, 0)}

                    className={classnames(classes.layoutButton, {
                      [classes.layoutButtonActive]: notificationsPosition === 0
                    })}
                  />
                  <button
                    onClick={handleClick({
                      vertical: 'top',
                      horizontal: 'center',
                    }, 1)}
                    className={classnames(classes.layoutButton, {
                      [classes.layoutButtonActive]: notificationsPosition === 1
                    })}
                  />
                  <button
                    onClick={handleClick({
                      vertical: 'top',
                      horizontal: 'right',
                    }, 2)}
                    className={classnames(classes.layoutButton, {
                      [classes.layoutButtonActive]: notificationsPosition === 2
                    })}
                  />
                </div>
                <Typography className={classes.layoutText} size="md">
                  Click any position
                </Typography>
                <div className={classes.layoutButtonsRow}>
                  <button
                    onClick={handleClick({
                      vertical: 'bottom',
                      horizontal: 'left',
                    }, 3)}
                    className={classnames(classes.layoutButton, {
                      [classes.layoutButtonActive]: notificationsPosition === 3
                    })}
                  />
                  <button
                    onClick={handleClick({
                      vertical: 'bottom',
                      horizontal: 'center',
                    }, 4)}
                    className={classnames(classes.layoutButton, {
                      [classes.layoutButtonActive]: notificationsPosition === 4
                    })}
                  />
                  <button
                    onClick={handleClick({
                      vertical: 'bottom',
                      horizontal: 'right',
                    }, 5)}
                    className={classnames(classes.layoutButton, {
                      [classes.layoutButtonActive]: notificationsPosition === 5
                    })}
                  />
                </div>
              </div>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
              <Typography className={classes.head5}>
                  Notifications Types
              </Typography>
              <Typography>
                Different types of notifications for lost of use cases. Custom
                classes are also supported.
              </Typography>
              <div className={classes.buttonsContainer}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleChange({type: 'info', message: 'This is a info message!'})}
                  className={classnames(classes.notificationCallButton)}
                >
                  Info Message
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => handleChange({type: 'error', message: 'This is a error message!'})}
                  className={classnames(classes.notificationCallButton)}
                >
                  Error + Retry Message
                </Button>
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => handleChange({type: "success", message: 'This is a success message!' })}
                  className={classnames(classes.notificationCallButton)}
                >
                  Success Message
                </Button>
              </div>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Typography className={classes.head5}>
                  Usage
              </Typography>
              <Typography>
                Notifications are created with the help of{" "}
                <a href="https://mui.com/material-ui/react-snackbar/">
                  react-snackbar
                </a>
              </Typography>
              <Code>{`
    // import needed components, functions and styles
    import Snackbar from '@mui/material/Snackbar';

    return (
        <div>
          <Button onClick={handleClick}>Open simple snackbar</Button>
          <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message="Note archived"
            action={action}
          />
        </div>
      );
              `}</Code>
              <Box py={1}>
                <Typography variant="caption">
                  For more API information refer to the library documentation
                </Typography>
              </Box>
          </Grid>
          </Grid>
          </Widget>
        </Grid>
      </Grid>

        <Grid container spacing={3}>
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
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        key={vertical + horizontal}
      >
        <Alert onClose={handleClose} severity={type.type} sx={{ width: '100%' }}>
          {type.message}
        </Alert>
      </Snackbar>
    </>
  );
}
