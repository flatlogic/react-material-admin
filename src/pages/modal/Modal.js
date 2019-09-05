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
  const [state, dispatch] = React.useReducer(reducer, {toggleModal: false, toggleBody: false, toggleSmall: false, toggleGrid: false, toggleLarge: false});

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
                color={"primary"}
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
              <Typography>
                To appoint modal's width size, equal maxWidth attribute to one
                of values: xs, sm, md, lg, xl.
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
                  color={"primary"}
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
            <React.Fragment>
              Utilize the Bootstrap grid system within a modal by nesting{" "}
              <Typography
                className={classes.codeBack}
              >{`<Grid container>`}</Typography>{" "}
              within the{" "}
              <Typography className={classes.codeBack}>{`<Dialog>`}</Typography>
              Typography>. Then, use the normal grid system classes as you would
              anywhere else.
            </React.Fragment>
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
                  <pre>
                    <Typography color="primary">
                      <code>{"<Grid container>"}</code>
                    </Typography>
                    <Typography
                      color="secondary"
                      noWrap
                      className={classes.wrapFix}
                    >
                      <code>
                        {'  <Box display="flex" flexDirection="column">'}
                      </code>
                    </Typography>
                    <Typography color="info" noWrap className={classes.wrapFix}>
                      <code>
                        {
                          '    <Box display="flex" flexDirection="row" justifyContent="flex-end">'
                        }
                      </code>
                    </Typography>
                    <Typography color="warning">
                      <code>{"      <Grid item xs={3}>1</Grid>"}</code>
                    </Typography>
                    <Typography color="warning">
                      <code>{"      <Grid item xs={3}>2</Grid>"}</code>
                    </Typography>
                    <Typography color="info">
                      <code>{"    </Box>"}</code>
                    </Typography>
                    <Typography color="info" noWrap className={classes.wrapFix}>
                      <code>
                        {
                          '    <Box display="flex" flexDirection="row" justifyContent="flex-around">'
                        }
                      </code>
                    </Typography>
                    <Typography color="warning">
                      <code>{"      <Grid item xs={3}>1</Grid>"}</code>
                    </Typography>
                    <Typography color="warning">
                      <code>{"      <Grid item xs={3}>2</Grid>"}</code>
                    </Typography>
                    <Typography color="info">
                      <code>{"    </Box>"}</code>
                    </Typography>
                    <Typography color="info" noWrap className={classes.wrapFix}>
                      <code>
                        {
                          '    <Box display="flex" flexDirection="row" justifyContent="flex-between">'
                        }
                      </code>
                    </Typography>
                    <Typography color="warning">
                      <code>{"      <Grid item xs={3}>1</Grid>"}</code>
                    </Typography>
                    <Typography color="warning">
                      <code>{"      <Grid item xs={3}>2</Grid>"}</code>
                    </Typography>
                    <Typography color="warning">
                      <code>{"      <Grid item xs={3}>3</Grid>"}</code>
                    </Typography>
                    <Typography color="info">
                      <code>{"    </Box>"}</code>
                    </Typography>
                    <Typography color="secondary">
                      <code>{"  </Box>"}</code>
                    </Typography>
                    <Typography color="primary">
                      <code>{"</Grid>"}</code>
                    </Typography>
                  </pre>
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
