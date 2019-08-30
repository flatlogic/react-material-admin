import React from "react";
import {
  Grid,
  Box,
  ClickAwayListener,
  Button as ButtonNative,
} from "@material-ui/core";

// components
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
import { Tooltip } from "../../components/Wrappers";
import useStyles from "./styles";

export default function TooltipsComp() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  function handleTooltipClose() {
    setOpen(false);
  }

  function handleTooltipOpen() {
    setOpen(true);
  }

  return (
    <div>
      <PageTitle title="Tooltips" />
      <Grid container spacing={6}>
        <Grid item md={6}>
          <Widget title="Tooltip Example" disableWidgetMenu inheritHeight>
            <Grid container alignItems={"center"}>
              <Box mt={2}>
                <ClickAwayListener onClickAway={handleTooltipClose}>
                  <React.Fragment>
                    <Tooltip
                      placement="top"
                      color={"primary"}
                      PopperProps={{
                        disablePortal: true,
                      }}
                      onClose={handleTooltipClose}
                      open={open}
                      disableFocusListener
                      disableHoverListener
                      disableTouchListener
                      title="Add"
                    >
                      <ButtonNative
                        variant={"contained"}
                        color={"primary"}
                        onClick={handleTooltipOpen}
                        className={classes.marginRight}
                      >
                        Click to toggle a tooltip
                      </ButtonNative>
                    </Tooltip>
                  </React.Fragment>
                </ClickAwayListener>
                <Tooltip
                  placement="top"
                  color={"secondary"}
                  disableFocusListener
                  disableTouchListener
                  title="Add"
                >
                  <ButtonNative
                    variant={"contained"}
                    color={"secondary"}
                    className={classes.marginRight}
                  >
                    Hover to toggle a tooltip
                  </ButtonNative>
                </Tooltip>
              </Box>
            </Grid>
          </Widget>
        </Grid>

        <Grid item md={6}>
          <Widget title="Popover Example" disableWidgetMenu>
            <Box mt={2} width="100%">
              {" "}
              <Grid container justify="center">
                <Grid item>
                  <Tooltip title="Add" placement="top-start">
                    <ButtonNative
                      variant={"contained"}
                      className={classes.buttonMargin}
                    >
                      top-start
                    </ButtonNative>
                  </Tooltip>
                  <Tooltip title="Add" placement="top">
                    <ButtonNative
                      variant={"contained"}
                      className={classes.buttonMargin}
                    >
                      top
                    </ButtonNative>
                  </Tooltip>
                  <Tooltip title="Add" placement="top-end">
                    <ButtonNative
                      variant={"contained"}
                      className={classes.buttonMargin}
                    >
                      top-end
                    </ButtonNative>
                  </Tooltip>
                </Grid>
              </Grid>
              <Grid container justify="center">
                <Grid item xs={6}>
                  <Tooltip title="Add" placement="left-start">
                    <ButtonNative
                      variant={"contained"}
                      className={classes.buttonMargin}
                    >
                      left-start
                    </ButtonNative>
                  </Tooltip>
                  <br />
                  <Tooltip title="Add" placement="left">
                    <ButtonNative
                      variant={"contained"}
                      className={classes.buttonMargin}
                    >
                      left
                    </ButtonNative>
                  </Tooltip>
                  <br />
                  <Tooltip title="Add" placement="left-end">
                    <ButtonNative
                      variant={"contained"}
                      className={classes.buttonMargin}
                    >
                      left-end
                    </ButtonNative>
                  </Tooltip>
                </Grid>
                <Grid
                  item
                  container
                  xs={6}
                  alignItems="flex-end"
                  direction="column"
                >
                  <Grid item>
                    <Tooltip title="Add" placement="right-start">
                      <ButtonNative
                        variant={"contained"}
                        className={classes.buttonMargin}
                      >
                        right-start
                      </ButtonNative>
                    </Tooltip>
                  </Grid>
                  <Grid item>
                    <Tooltip title="Add" placement="right">
                      <ButtonNative
                        variant={"contained"}
                        className={classes.buttonMargin}
                      >
                        right
                      </ButtonNative>
                    </Tooltip>
                  </Grid>
                  <Grid item>
                    <Tooltip title="Add" placement="right-end">
                      <ButtonNative
                        variant={"contained"}
                        className={classes.buttonMargin}
                      >
                        right-end
                      </ButtonNative>
                    </Tooltip>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container justify="center">
                <Grid item>
                  <Tooltip title="Add" placement="bottom-start">
                    <ButtonNative
                      variant={"contained"}
                      className={classes.buttonMargin}
                    >
                      bottom-start
                    </ButtonNative>
                  </Tooltip>
                  <Tooltip title="Add" placement="bottom">
                    <ButtonNative
                      variant={"contained"}
                      className={classes.buttonMargin}
                    >
                      bottom
                    </ButtonNative>
                  </Tooltip>
                  <Tooltip title="Add" placement="bottom-end">
                    <ButtonNative
                      variant={"contained"}
                      className={classes.buttonMargin}
                    >
                      bottom-end
                    </ButtonNative>
                  </Tooltip>
                </Grid>
              </Grid>
            </Box>
          </Widget>
        </Grid>
      </Grid>
    </div>
  );
}
