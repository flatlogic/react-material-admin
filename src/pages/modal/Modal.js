import React from "react";
import { Grid, Paper, Box, Button as ButtonNative } from "@material-ui/core";
import useStyles from "./styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

// components
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
import { Typography, Button } from "../../components/Wrappers";

export default function Colors() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [openBody, setOpenBody] = React.useState(false);
  const [openLarge, setOpenLarge] = React.useState(false);
  const [openSmall, setOpenSmall] = React.useState(false);
  const [openGrid, setOpenGrid] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleClickOpenBody() {
    setOpenBody(true);
  }

  function handleCloseBody() {
    setOpenBody(false);
  }

  function handleClickOpenLarge() {
    setOpenLarge(true);
  }

  function handleCloseLarge() {
    setOpenLarge(false);
  }

  function handleClickOpenSmall() {
    setOpenSmall(true);
  }

  function handleCloseSmall() {
    setOpenSmall(false);
  }

  function handleClickOpenGrid() {
    setOpenGrid(true);
  }

  function handleCloseGrid() {
    setOpenGrid(false);
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
            <Box my={2}>
              <Button
                color={"primary"}
                className={classes.marginRight}
                onClick={handleClickOpen}
              >
                Demo
              </Button>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {"Use Google's location service?"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    Let Google help apps determine location. This means sending
                    anonymous location data to Google, even when no apps are
                    running.
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
              <Button color={"primary"} onClick={handleClickOpenBody}>
                Scrolling long content
              </Button>
              <Dialog
                open={openBody}
                onClose={handleCloseBody}
                scroll={"body"}
                aria-labelledby="scroll-dialog-title"
              >
                <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    {[...new Array(50)]
                      .map(
                        () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                      )
                      .join("\n")}
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <ButtonNative onClick={handleCloseBody} color="primary">
                    Cancel
                  </ButtonNative>
                  <ButtonNative onClick={handleCloseBody} color="primary">
                    Subscribe
                  </ButtonNative>
                </DialogActions>
              </Dialog>
            </Box>
          </Widget>
        </Grid>
        <Grid item md={6}>
          <Widget title="Using Grid" disableWidgetMenu>
            <Typography>
              Utilize the Bootstrap grid system within a modal by nesting .
              Then, use the normal grid system classes as you would anywhere
              else.
            </Typography>
            <Button
              color={"primary"}
              className={classes.marginRight}
              onClick={handleClickOpenGrid}
            >
              Demo
            </Button>
            <Dialog
              open={openGrid}
              onClose={handleCloseGrid}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">{"Grid system"}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description" component={'div'}>
                  <Box display="flex" width={"100%"} flexDirection="column">
                    <Box
                      display="flex"
                      flexDirection="row"
                      justifyContent="flex-end"
                      width={"100%"}
                    >
                      <Grid item xs={3}>
                        <Paper
                          className={classes.paperItem}
                          style={{ margin: "12px" }}
                        >
                          1
                        </Paper>
                      </Grid>
                      <Grid item xs={3}>
                        <Paper
                          className={classes.paperItem}
                          style={{ margin: "12px" }}
                        >
                          2
                        </Paper>
                      </Grid>
                    </Box>
                    <Box
                      display="flex"
                      flexDirection="row"
                      justifyContent="space-around"
                      width={"100%"}
                    >
                      <Grid item xs={3}>
                        <Paper
                          className={classes.paperItem}
                          style={{ margin: "12px" }}
                        >
                          1
                        </Paper>
                      </Grid>
                      <Grid item xs={3}>
                        <Paper
                          className={classes.paperItem}
                          style={{ margin: "12px" }}
                        >
                          2
                        </Paper>
                      </Grid>
                    </Box>
                    <Box
                      display="flex"
                      flexDirection="row"
                      justifyContent="space-between"
                      width={"100%"}
                    >
                      <Grid item xs={3}>
                        <Paper
                          className={classes.paperItem}
                          style={{ margin: "12px" }}
                        >
                          1
                        </Paper>
                      </Grid>
                      <Grid item xs={3}>
                        <Paper
                          className={classes.paperItem}
                          style={{ margin: "12px" }}
                        >
                          2
                        </Paper>
                      </Grid>
                      <Grid item xs={3}>
                        <Paper
                          className={classes.paperItem}
                          style={{ margin: "12px" }}
                        >
                          3
                        </Paper>
                      </Grid>
                    </Box>
                  </Box>
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <ButtonNative onClick={handleCloseGrid} color="primary">
                  Disagree
                </ButtonNative>
                <ButtonNative
                  onClick={handleCloseGrid}
                  color="primary"
                  autoFocus
                >
                  Agree
                </ButtonNative>
              </DialogActions>
            </Dialog>
          </Widget>
        </Grid>
        <Grid item md={6}>
          <Widget title="Optional Sizes" disableWidgetMenu>
            <Typography>
              To appoint modal's width size, equal maxWidth attribute to one of
              values: xs, sm, md, lg, xl.
            </Typography>
            <Box my={2}>
              <Button
                color={"primary"}
                className={classes.marginRight}
                onClick={handleClickOpenLarge}
              >
                Large Modal
              </Button>
              <Dialog
                maxWidth={"xl"}
                open={openLarge}
                onClose={handleCloseLarge}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {"Use Google's location service?"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    Let Google help apps determine location. This means sending
                    anonymous location data to Google, even when no apps are
                    running.
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <ButtonNative onClick={handleCloseLarge} color="primary">
                    Disagree
                  </ButtonNative>
                  <ButtonNative
                    onClick={handleCloseLarge}
                    color="primary"
                    autoFocus
                  >
                    Agree
                  </ButtonNative>
                </DialogActions>
              </Dialog>
              <Button
                color={"primary"}
                className={classes.marginRight}
                onClick={handleClickOpenSmall}
              >
                Small modal
              </Button>
              <Dialog
                maxWidth={"sm"}
                open={openSmall}
                onClose={handleCloseSmall}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {"Use Google's location service?"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    Let Google help apps determine location. This means sending
                    anonymous location data to Google, even when no apps are
                    running.
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <ButtonNative onClick={handleCloseSmall} color="primary">
                    Disagree
                  </ButtonNative>
                  <ButtonNative
                    onClick={handleCloseSmall}
                    color="primary"
                    autoFocus
                  >
                    Agree
                  </ButtonNative>
                </DialogActions>
              </Dialog>
            </Box>
          </Widget>
        </Grid>
      </Grid>
    </div>
  );
}
