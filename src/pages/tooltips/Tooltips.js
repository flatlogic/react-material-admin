import React from "react";
import {
  Grid,
  Box,
  ClickAwayListener,
  Popover,
  Button as ButtonNative
} from "@mui/material";
import cn from "classnames";

// components
import Widget from "../../components/Widget";
import { Tooltip, Typography } from "../../components/Wrappers";
import useStyles from "./styles";

const reducer = (state, action) => {
  switch (action.type) {
    case "OPEN_TOOLTIP":
      return {
        ...state,
        tooltipOpened: true
      };
    case "CLOSE_TOOLTIP":
      return {
        ...state,
        tooltipOpened: false
      };
    case "OPEN_POPOVER":
      return {
        ...state,
        togglePopover: true,
        popoverSibling: action.setSibling
      };
    case "CLOSE_POPOVER":
      return {
        ...state,
        togglePopover: false,
        popoverSibling: null
      };
    case "OPEN_HOVER_POPOVER":
      return {
        ...state,
        toggleHoverPopover: true,
        hoverPopoverSibling: action.setHoverPopoverSibling
      };
    case "CLOSE_HOVER_POPOVER":
      return {
        ...state,
        toggleHoverPopover: false,
        hoverPopoverSibling: null
      };
    case "OPEN_TOP_TOOLTIP":
      return {
        ...state,
        toggleTopTooltip: true
      };
    case "CLOSE_TOP_TOOLTIP":
      return {
        ...state,
        toggleTopTooltip: false
      };
    case "OPEN_RIGHT_TOOLTIP":
      return {
        ...state,
        toggleRightTooltip: true
      };
    case "CLOSE_RIGHT_TOOLTIP":
      return {
        ...state,
        toggleRightTooltip: false
      };
    case "OPEN_BOTTOM_TOOLTIP":
      return {
        ...state,
        toggleBottomTooltip: true
      };
    case "CLOSE_BOTTOM_TOOLTIP":
      return {
        ...state,
        toggleBottomTooltip: false
      };
    case "OPEN_LEFT_TOOLTIP":
      return {
        ...state,
        toggleLeftTooltip: true
      };
    case "CLOSE_LEFT_TOOLTIP":
      return {
        ...state,
        toggleLeftTooltip: false
      };
    case "OPEN_TOP_POPOVER":
      return {
        ...state,
        toggleTopPopover: true,
        topPopoverSibling: action.setTopPopoverSibling
      };
    case "CLOSE_TOP_POPOVER":
      return {
        ...state,
        toggleTopPopover: false,
        topPopoverSibling: null
      };
    case "OPEN_RIGHT_POPOVER":
      return {
        ...state,
        toggleRightPopover: true,
        rightPopoverSibling: action.setRightPopoverSibling
      };
    case "CLOSE_RIGHT_POPOVER":
      return {
        ...state,
        toggleRightPopover: false,
        rightPopoverSibling: null
      };
    case "OPEN_BOTTOM_POPOVER":
      return {
        ...state,
        toggleBottomPopover: true,
        bottomPopoverSibling: action.setBottomPopoverSibling
      };
    case "CLOSE_BOTTOM_POPOVER":
      return {
        ...state,
        toggleBottomPopover: false,
        bottomPopoverSibling: null
      };
    case "OPEN_LEFT_POPOVER":
      return {
        ...state,
        toggleLeftPopover: true,
        leftPopoverSibling: action.setLeftPopoverSibling
      };
    case "CLOSE_LEFT_POPOVER":
      return {
        ...state,
        toggleLeftPopover: false,
        leftPopoverSibling: null
      };
    default:
      return {};
  }
};

export default function TooltipsComp() {
  const classes = useStyles();
  const [state, dispatch] = React.useReducer(reducer, false);

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item md={6} xs={12}>
          <Widget title="Tooltip Example" disableWidgetMenu inheritHeight>
            <Grid container alignItems={"center"}>
              <Box mt={2} display={"flex"}>
                <ClickAwayListener
                  onClickAway={() => dispatch({ type: "CLOSE_TOOLTIP" })}
                >
                  <div>
                    <Tooltip
                      placement="top"
                      color={"primary"}
                      PopperProps={{
                        disablePortal: true
                      }}
                      onClose={() => dispatch({ type: "CLOSE_TOOLTIP" })}
                      open={state.tooltipOpened || false}
                      disableFocusListener
                      disableHoverListener
                      disableTouchListener
                      title="Add"
                    >
                      <ButtonNative
                        variant={"contained"}
                        color={"primary"}
                        onClick={() => dispatch({ type: "OPEN_TOOLTIP" })}
                        className={cn(classes.button, classes.buttonWhite)}
                      >
                        Click to toggle a tooltip
                      </ButtonNative>
                    </Tooltip>
                  </div>
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
                    className={cn(classes.button, classes.buttonWhite)}
                  >
                    Hover to toggle a tooltip
                  </ButtonNative>
                </Tooltip>
              </Box>
            </Grid>
          </Widget>
        </Grid>

        <Grid item md={6} xs={12}>
          <Widget title="Popover Example" disableWidgetMenu>
            <Box mt={2} width="100%">
              {" "}
              <Grid container alignItems={"center"}>
                <Grid item>
                  <ButtonNative
                    variant={"contained"}
                    className={classes.button}
                    aria-describedby={
                      state.togglePopover ? "simple-popover" : undefined
                    }
                    onClick={e =>
                      dispatch({
                        type: "OPEN_POPOVER",
                        setSibling: e.currentTarget
                      })
                    }
                  >
                    Open Popover
                  </ButtonNative>
                  <Popover
                    id={state.togglePopover ? "simple-popover" : undefined}
                    open={state.togglePopover || false}
                    anchorEl={state.popoverSibling}
                    onClose={() => dispatch({ type: "CLOSE_POPOVER" })}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "center"
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "center"
                    }}
                  >
                    <Typography className={classes.typography}>
                      The content of the Popover.
                    </Typography>
                  </Popover>
                </Grid>
                <Grid item>
                  <Typography
                    aria-owns={
                      state.toggleHoverPopover
                        ? "mouse-over-popover"
                        : undefined
                    }
                    aria-haspopup="true"
                    onMouseEnter={e =>
                      dispatch({
                        type: "OPEN_HOVER_POPOVER",
                        setHoverPopoverSibling: e.currentTarget
                      })
                    }
                    onMouseLeave={() =>
                      dispatch({ type: "CLOSE_HOVER_POPOVER" })
                    }
                  >
                    Hover with a Popover.
                  </Typography>
                  <Popover
                    id="mouse-over-popover"
                    open={state.toggleHoverPopover || false}
                    anchorEl={state.hoverPopoverSibling}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left"
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left"
                    }}
                    onClose={() => dispatch({ type: "CLOSE_HOVER_POPOVER" })}
                    disableRestoreFocus
                  >
                    <Typography className={classes.typography}>
                      I use Popover.
                    </Typography>
                  </Popover>
                </Grid>
              </Grid>
            </Box>
          </Widget>
        </Grid>
        <Grid item md={6} xs={12}>
          <Widget title="Tooltip Directions" disableWidgetMenu>
            <Box mt={2} display={"flex"}>
              <ClickAwayListener
                onClickAway={() => dispatch({ type: "CLOSE_TOP_TOOLTIP" })}
              >
                <div>
                  <Tooltip
                    placement="top"
                    color={"primary"}
                    PopperProps={{
                      disablePortal: true
                    }}
                    onClose={() => dispatch({ type: "CLOSE_TOP_TOOLTIP" })}
                    open={state.toggleTopTooltip || false}
                    disableFocusListener
                    disableHoverListener
                    disableTouchListener
                    title="Add"
                  >
                    <ButtonNative
                      variant={"contained"}
                      color={"primary"}
                      onClick={() => dispatch({ type: "OPEN_TOP_TOOLTIP" })}
                      className={cn(classes.button, classes.buttonWhite)}
                    >
                      Tooltip on top
                    </ButtonNative>
                  </Tooltip>
                </div>
              </ClickAwayListener>
              <ClickAwayListener
                onClickAway={() => dispatch({ type: "CLOSE_RIGHT_TOOLTIP" })}
              >
                <div>
                  <Tooltip
                    placement="right"
                    color={"primary"}
                    PopperProps={{
                      disablePortal: true
                    }}
                    onClose={() => dispatch({ type: "CLOSE_RIGHT_TOOLTIP" })}
                    open={state.toggleRightTooltip || false}
                    disableFocusListener
                    disableHoverListener
                    disableTouchListener
                    title="Add"
                  >
                    <ButtonNative
                      variant={"contained"}
                      color={"primary"}
                      onClick={() => dispatch({ type: "OPEN_RIGHT_TOOLTIP" })}
                      className={cn(classes.button, classes.buttonWhite)}
                    >
                      Tooltip on right
                    </ButtonNative>
                  </Tooltip>
                </div>
              </ClickAwayListener>
              <ClickAwayListener
                onClickAway={() => dispatch({ type: "CLOSE_BOTTOM_TOOLTIP" })}
              >
                <div>
                  <Tooltip
                    placement="bottom"
                    color={"primary"}
                    PopperProps={{
                      disablePortal: true
                    }}
                    onClose={() => dispatch({ type: "CLOSE_BOTTOM_TOOLTIP" })}
                    open={state.toggleBottomTooltip || false}
                    disableFocusListener
                    disableHoverListener
                    disableTouchListener
                    title="Add"
                  >
                    <ButtonNative
                      variant={"contained"}
                      color={"primary"}
                      onClick={() => dispatch({ type: "OPEN_BOTTOM_TOOLTIP" })}
                      className={cn(classes.button, classes.buttonWhite)}
                    >
                      Tooltip on bottom
                    </ButtonNative>
                  </Tooltip>
                </div>
              </ClickAwayListener>
              <ClickAwayListener
                onClickAway={() => dispatch({ type: "CLOSE_LEFT_TOOLTIP" })}
              >
                <div>
                  <Tooltip
                    placement="left"
                    color={"primary"}
                    PopperProps={{
                      disablePortal: true
                    }}
                    onClose={() => dispatch({ type: "CLOSE_LEFT_TOOLTIP" })}
                    open={state.toggleLeftTooltip || false}
                    disableFocusListener
                    disableHoverListener
                    disableTouchListener
                    title="Add"
                  >
                    <ButtonNative
                      variant={"contained"}
                      color={"primary"}
                      onClick={() => dispatch({ type: "OPEN_LEFT_TOOLTIP" })}
                      className={cn(classes.button, classes.buttonWhite)}
                    >
                      Tooltip on left
                    </ButtonNative>
                  </Tooltip>
                </div>
              </ClickAwayListener>
            </Box>
          </Widget>
        </Grid>
        <Grid item md={6} xs={12}>
          <Widget title="Popover Directions" disableWidgetMenu>
            <Box mt={2} width="100%">
              {" "}
              <Grid container alignItems={"center"}>
                <Grid item>
                  <ButtonNative
                    variant={"contained"}
                    className={classes.button}
                    aria-describedby={
                      state.toggleTopPopover ? "simple-popover" : undefined
                    }
                    onClick={e =>
                      dispatch({
                        type: "OPEN_TOP_POPOVER",
                        setTopPopoverSibling: e.currentTarget
                      })
                    }
                  >
                    Popover on top
                  </ButtonNative>
                  <Popover
                    id={state.toggleTopPopover ? "simple-popover" : undefined}
                    open={state.toggleTopPopover || false}
                    anchorEl={state.topPopoverSibling}
                    onClose={() => dispatch({ type: "CLOSE_TOP_POPOVER" })}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "center"
                    }}
                    transformOrigin={{
                      vertical: "bottom",
                      horizontal: "center"
                    }}
                  >
                    <Typography className={classes.typography}>
                      The content of the Popover.
                    </Typography>
                  </Popover>
                </Grid>
                <Grid item>
                  <ButtonNative
                    variant={"contained"}
                    className={classes.button}
                    aria-describedby={
                      state.toggleRightPopover ? "simple-popover" : undefined
                    }
                    onClick={e =>
                      dispatch({
                        type: "OPEN_RIGHT_POPOVER",
                        setRightPopoverSibling: e.currentTarget
                      })
                    }
                  >
                    Popover on right
                  </ButtonNative>
                  <Popover
                    id={state.toggleRightPopover ? "simple-popover" : undefined}
                    open={state.toggleRightPopover || false}
                    anchorEl={state.rightPopoverSibling}
                    onClose={() => dispatch({ type: "CLOSE_RIGHT_POPOVER" })}
                    anchorOrigin={{
                      vertical: "center",
                      horizontal: "right"
                    }}
                    transformOrigin={{
                      vertical: "center",
                      horizontal: "left"
                    }}
                  >
                    <Typography className={classes.typography}>
                      The content of the Popover.
                    </Typography>
                  </Popover>
                </Grid>
                <Grid item>
                  <ButtonNative
                    variant={"contained"}
                    className={classes.button}
                    aria-describedby={
                      state.toggleBottomPopover ? "simple-popover" : undefined
                    }
                    onClick={e =>
                      dispatch({
                        type: "OPEN_BOTTOM_POPOVER",
                        setBottomPopoverSibling: e.currentTarget
                      })
                    }
                  >
                    Popover on bottom
                  </ButtonNative>
                  <Popover
                    id={
                      state.toggleBottomPopover ? "simple-popover" : undefined
                    }
                    open={state.toggleBottomPopover || false}
                    anchorEl={state.bottomPopoverSibling}
                    onClose={() => dispatch({ type: "CLOSE_BOTTOM_POPOVER" })}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "center"
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "center"
                    }}
                  >
                    <Typography className={classes.typography}>
                      The content of the Popover.
                    </Typography>
                  </Popover>
                </Grid>
                <Grid item>
                  <ButtonNative
                    variant={"contained"}
                    className={classes.button}
                    aria-describedby={
                      state.toggleLeftPopover ? "simple-popover" : undefined
                    }
                    onClick={e =>
                      dispatch({
                        type: "OPEN_LEFT_POPOVER",
                        setLeftPopoverSibling: e.currentTarget
                      })
                    }
                  >
                    Popover on left
                  </ButtonNative>
                  <Popover
                    id={state.toggleLeftPopover ? "simple-popover" : undefined}
                    open={state.toggleLeftPopover || false}
                    anchorEl={state.leftPopoverSibling}
                    onClose={() => dispatch({ type: "CLOSE_LEFT_POPOVER" })}
                    anchorOrigin={{
                      vertical: "center",
                      horizontal: "left"
                    }}
                    transformOrigin={{
                      vertical: "center",
                      horizontal: "right"
                    }}
                  >
                    <Typography className={classes.typography}>
                      The content of the Popover.
                    </Typography>
                  </Popover>
                </Grid>
              </Grid>
            </Box>
          </Widget>
        </Grid>
      </Grid>
    </div>
  );
}
