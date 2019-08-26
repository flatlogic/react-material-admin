import React from "react";
import { Grid, Paper, Box, Button as ButtonNative } from "@material-ui/core";
import useStyles from "./styles";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// components
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
import { Typography, Button } from "../../components/Wrappers";

export default function Colors() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <PageTitle title="Modal" />
      <Grid container spacing={6}>
        <Grid item md={6}>
          <Widget title="Live Demo" disableWidgetMenu>
            <Typography>
              Toggle a working modal demo by clicking the button below. It will
              slide down and fade in from the top of the page.
            </Typography>
            <Box my={1}>
              <Button color={"primary"} className={classes.marginRight} onClick={handleClickOpen}>
                Demo
              </Button>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    Let Google help apps determine location. This means sending anonymous location data to
                    Google, even when no apps are running.
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <ButtonNative onClick={handleClose} color="primary">
                    Disagree
                  </ButtonNative>
                  <ButtonNative onClick={handleClose} color="primary" autoFocus>
                    Agree
                  </ButtonNative>
                </DialogActions>
              </Dialog>
              <Button color={"primary"}>Scrolling long content</Button>
            </Box>
          </Widget>
        </Grid>
        <Grid item md={6}>
          <Widget title="Using Grid" disableWidgetMenu>
            <Typography>
              For example, here are two grid layouts that apply to every device
              and viewport, from xs to xl. Add any number of unit-less classes
              for each breakpoint you need and every column will be the same
              width.
            </Typography>
          </Widget>
        </Grid>
      </Grid>
    </div>
  );
}
