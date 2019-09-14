import React from "react";
import {
  Grid,
  Box,
  Button as ButtonNative,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import cn from "classnames";
import useStyles from "./styles";

// components
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
import Code from "../../components/Code";
import { Typography, Button, Paper } from "../../components/Wrappers";

const reducer = (state, action) => {
  switch (action.type) {
    case "OPEN_MODAL":
      return {
        ...state,
        toggleModal: true,
      };
    case "CLOSE_MODAL":
      return {
        ...state,
        toggleModal: false,
      };
    case "OPEN_BODY":
      return {
        ...state,
        toggleBody: true,
      };
    case "CLOSE_BODY":
      return {
        ...state,
        toggleBody: false,
      };
    case "OPEN_SMALL":
      return {
        ...state,
        toggleSmall: true,
      };
    case "CLOSE_SMALL":
      return {
        ...state,
        toggleSmall: false,
      };
    case "OPEN_LARGE":
      return {
        ...state,
        toggleLarge: true,
      };
    case "CLOSE_LARGE":
      return {
        ...state,
        toggleLarge: false,
      };
    case "OPEN_GRID":
      return {
        ...state,
        toggleGrid: true,
      };
    case "CLOSE_GRID":
      return {
        ...state,
        toggleGrid: false,
      };
    default:
      return null;
  }
};

export default function ModalComp() {
  const classes = useStyles();
  const [state, dispatch] = React.useReducer(reducer, {
    toggleModal: false,
    toggleBody: false,
    toggleSmall: false,
    toggleGrid: false,
    toggleLarge: false,
  });

  return (
    <div>
      <PageTitle title="Modal" />
      <Grid container spacing={6} alignItems={"flex-start"}>
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
                onClick={() => dispatch({ type: "OPEN_MODAL" })}
              >
                Demo
              </Button>
              <Dialog
                open={state.toggleModal}
                onClose={() => dispatch({ type: "CLOSE_MODAL" })}
                scroll={"body"}
                aria-labelledby="scroll-dialog-title"
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
                  <ButtonNative
                    onClick={() => dispatch({ type: "CLOSE_MODAL" })}
                    color="primary"
                  >
                    Disagree
                  </ButtonNative>
                  <ButtonNative
                    onClick={() => dispatch({ type: "CLOSE_MODAL" })}
                    color="primary"
                    autoFocus
                  >
                    Agree
                  </ButtonNative>
                </DialogActions>
              </Dialog>
              <Button
                color={"secondary"}
                onClick={() => dispatch({ type: "OPEN_BODY" })}
              >
                Scrolling long content
              </Button>
              <Dialog
                open={state.toggleBody}
                onClose={() => dispatch({ type: "CLOSE_BODY" })}
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
                  <ButtonNative
                    onClick={() => dispatch({ type: "CLOSE_BODY" })}
                    color="primary"
                  >
                    Cancel
                  </ButtonNative>
                  <ButtonNative
                    onClick={() => dispatch({ type: "CLOSE_BODY" })}
                    color="primary"
                  >
                    Subscribe
                  </ButtonNative>
                </DialogActions>
              </Dialog>
            </Box>
          </Widget>
          <Box my={6}>
            <Widget title="Optional Sizes" disableWidgetMenu>
              <Typography block>
                To appoint modal's width size, equal maxWidth attribute to one
                of values: <Code row inline>{`xs, sm, md, lg, xl`}</Code>
              </Typography>
              <Box my={2}>
                <Button
                  color={"primary"}
                  className={classes.marginRight}
                  onClick={() => dispatch({ type: "OPEN_LARGE" })}
                >
                  Large Modal
                </Button>
                <Dialog
                  maxWidth={"xl"}
                  open={state.toggleLarge}
                  onClose={() => dispatch({ type: "CLOSE_LARGE" })}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">
                    {"Use Google's location service?"}
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      Let Google help apps determine location. This means
                      sending anonymous location data to Google, even when no
                      apps are running.
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <ButtonNative
                      onClick={() => dispatch({ type: "CLOSE_LARGE" })}
                      color="primary"
                    >
                      Disagree
                    </ButtonNative>
                    <ButtonNative
                      onClick={() => dispatch({ type: "CLOSE_LARGE" })}
                      color="primary"
                      autoFocus
                    >
                      Agree
                    </ButtonNative>
                  </DialogActions>
                </Dialog>
                <Button
                  color={"secondary"}
                  className={classes.marginRight}
                  onClick={() => dispatch({ type: "OPEN_SMALL" })}
                >
                  Small modal
                </Button>
                <Dialog
                  maxWidth={"sm"}
                  open={state.toggleSmall}
                  onClose={() => dispatch({ type: "CLOSE_SMALL" })}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">
                    {"Use Google's location service?"}
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      Let Google help apps determine location. This means
                      sending anonymous location data to Google, even when no
                      apps are running.
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <ButtonNative
                      onClick={() => dispatch({ type: "CLOSE_SMALL" })}
                      color="primary"
                    >
                      Disagree
                    </ButtonNative>
                    <ButtonNative
                      onClick={() => dispatch({ type: "CLOSE_SMALL" })}
                      color="primary"
                      autoFocus
                    >
                      Agree
                    </ButtonNative>
                  </DialogActions>
                </Dialog>
              </Box>
            </Widget>
          </Box>
        </Grid>
        <Grid item md={6} xs={12}>
          <Widget title="Using Grid" disableWidgetMenu>
            <Typography block>
              Utilize the Material UI grid system within a modal by nesting{" "}
              <Code row inline>{`<Grid container>`}</Code> within the{" "}
              <Code row inline>{`<Dialog>`}</Code>. Then, use the normal grid
              system classes as you would anywhere else.
            </Typography>
            <Box my={2}>
              <Button
                color={"primary"}
                className={classes.marginRight}
                onClick={() => dispatch({ type: "OPEN_GRID" })}
              >
                Grid
              </Button>
              <Paper className={classes.paper}>
                <Grid item xs zeroMinWidth>
                  <Code>{`
  <Grid container>
    <Box display="flex" flexDirection="column">
      <Box display="flex" flexDirection="row" justifyContent="flex-end">
        <Grid item xs={3}>1</Grid>
        <Grid item xs={3}>2</Grid>
      </Box>
      <Box display="flex" flexDirection="row" justifyContent="flex-around">
        <Grid item xs={3}>1</Grid>
        <Grid item xs={3}>2</Grid>
      </Box>
      <Box display="flex" flexDirection="row" justifyContent="flex-between">
        <Grid item xs={3}>1</Grid>
        <Grid item xs={3}>2</Grid>
        <Grid item xs={3}>3</Grid>Code
      </Box>
    </Box>
  </Grid>
                  `}</Code>
                </Grid>
              </Paper>
            </Box>
            <Dialog
              fullWidth={true}
              maxWidth={"lg"}
              open={state.toggleGrid}
              onClose={() => dispatch({ type: "CLOSE_GRID" })}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">{"Grid system"}</DialogTitle>
              <DialogContent>
                <DialogContentText
                  id="alert-dialog-description"
                  component={"div"}
                >
                  <Box display="flex" width={"100%"} flexDirection="column">
                    <Box
                      display="flex"
                      flexDirection="row"
                      justifyContent="flex-end"
                      width={"100%"}
                    >
                      <Grid item xs={3}>
                        <Paper
                          className={cn(classes.paperItem, classes.paperMargin)}
                          color="primary"
                        >
                          1
                        </Paper>
                      </Grid>
                      <Grid item xs={3}>
                        <Paper
                          className={cn(classes.paperItem, classes.paperMargin)}
                          color="secondary"
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
                          className={cn(classes.paperItem, classes.paperMargin)}
                          color="primary"
                        >
                          1
                        </Paper>
                      </Grid>
                      <Grid item xs={3}>
                        <Paper
                          className={cn(classes.paperItem, classes.paperMargin)}
                          color="secondary"
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
                          className={cn(classes.paperItem, classes.paperMargin)}
                          color="primary"
                        >
                          1
                        </Paper>
                      </Grid>
                      <Grid item xs={3}>
                        <Paper
                          className={cn(classes.paperItem, classes.paperMargin)}
                          color="secondary"
                        >
                          2
                        </Paper>
                      </Grid>
                      <Grid item xs={3}>
                        <Paper
                          className={cn(classes.paperItem, classes.paperMargin)}
                          color="warning"
                        >
                          3
                        </Paper>
                      </Grid>
                    </Box>
                  </Box>
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <ButtonNative
                  onClick={() => dispatch({ type: "CLOSE_GRID" })}
                  color="primary"
                >
                  Disagree
                </ButtonNative>
                <ButtonNative
                  onClick={() => dispatch({ type: "CLOSE_GRID" })}
                  color="primary"
                  autoFocus
                >
                  Agree
                </ButtonNative>
              </DialogActions>
            </Dialog>
          </Widget>
        </Grid>
      </Grid>
    </div>
  );
}
