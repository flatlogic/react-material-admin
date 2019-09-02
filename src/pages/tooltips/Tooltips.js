import React from "react";
import {
  Grid,
  Box,
  ClickAwayListener,
  Button as ButtonNative,
  Popover
} from "@material-ui/core";

// components
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
import { Tooltip, Typography } from "../../components/Wrappers";
import useStyles from "./styles";

const reducer = (state, action) => {
  switch (action.type) {
    case "OPEN_TOOLTIP":
      return true;
    case "CLOSE_TOOLTIP":
      return false;
    default:
      return null;
  }
};

export default function TooltipsComp() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [state, dispatch] = React.useReducer(reducer, false);
  const [openDirection, setOpenDirection] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorElHover, setAnchorElHover] = React.useState(null);
  /*

  function handleTooltipClose() {
    setOpen(false);
  }

  function handleTooltipOpen() {
    setOpen(true);
  }
*/

  function handleTooltipDirectionClose() {
    setOpenDirection(false);
  }

  function handleTooltipDirectionOpen() {
    setOpenDirection(true);
  }

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function handleClickHover(event) {
    setAnchorElHover(event.currentTarget);
  }

  function handleCloseHover() {
    setAnchorElHover(null);
  }

  const openPop = Boolean(anchorEl),
    openHoverPop = Boolean(anchorElHover),
    openPopDirection = Boolean(openDirection);
  const id = openPop ? "simple-popover" : undefined;
  return (
    <div>
      <PageTitle title="Tooltips" />
      <Grid container spacing={6}>
        <Grid item md={6}>
          <Widget title="Tooltip Example" disableWidgetMenu inheritHeight>
            <Grid container alignItems={"center"}>
              <Box mt={2}>
                <ClickAwayListener onClickAway={() => dispatch({type: 'CLOSE_TOOLTIP'})}>
                  <React.Fragment>
                    <Tooltip
                      placement="top"
                      color={"primary"}
                      PopperProps={{
                        disablePortal: true,
                      }}
                      onClose={() => dispatch({type: 'OPEN_TOOLTIP'})}
                      open={state}
                      disableFocusListener
                      disableHoverListener
                      disableTouchListener
                      title="Add"
                    >
                      <ButtonNative
                        variant={"contained"}
                        color={"primary"}
                        onClick={() => dispatch({type: 'OPEN_TOOLTIP'})}
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
              <Grid container alignItems={"center"}>
                <Grid item>
                  <ButtonNative
                    variant={"contained"}
                    className={classes.buttonMargin}
                    aria-describedby={id}
                    onClick={handleClick}
                  >
                    Open Popover
                  </ButtonNative>
                  <Popover
                    id={id}
                    open={openPop}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "center",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "center",
                    }}
                  >
                    <Typography className={classes.typography}>
                      The content of the Popover.
                    </Typography>
                  </Popover>
                </Grid>
                <Grid item>
                  <Typography
                    aria-owns={openHoverPop ? "mouse-over-popover" : undefined}
                    aria-haspopup="true"
                    onMouseEnter={handleClickHover}
                    onMouseLeave={handleCloseHover}
                  >
                    Hover with a Popover.
                  </Typography>
                  <Popover
                    id="mouse-over-popover"
                    open={openHoverPop}
                    anchorEl={anchorElHover}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    onClose={handleCloseHover}
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
        <Grid item md={6}>
          <Widget title="Tooltip Directions" disableWidgetMenu>
            <Box mt={2}>
              <ClickAwayListener onClickAway={handleTooltipDirectionClose}>
                <React.Fragment>
                  <Tooltip
                    placement="top"
                    color={"primary"}
                    PopperProps={{
                      disablePortal: true,
                    }}
                    onClose={handleTooltipDirectionClose}
                    open={openDirection}
                    disableFocusListener
                    disableHoverListener
                    disableTouchListener
                    title="Add"
                  >
                    <ButtonNative
                      variant={"contained"}
                      color={"primary"}
                      onClick={handleTooltipDirectionOpen}
                      className={classes.marginRight}
                    >
                      Tooltip on top
                    </ButtonNative>
                  </Tooltip>
                </React.Fragment>
              </ClickAwayListener>
              <ClickAwayListener onClickAway={handleTooltipDirectionClose}>
                <React.Fragment>
                  <Tooltip
                    placement="right"
                    color={"primary"}
                    PopperProps={{
                      disablePortal: true,
                    }}
                    onClose={handleTooltipDirectionClose}
                    open={openDirection}
                    disableFocusListener
                    disableHoverListener
                    disableTouchListener
                    title="Add"
                  >
                    <ButtonNative
                      variant={"contained"}
                      color={"primary"}
                      onClick={handleTooltipDirectionOpen}
                      className={classes.marginRight}
                    >
                      Tooltip on right
                    </ButtonNative>
                  </Tooltip>
                </React.Fragment>
              </ClickAwayListener>
              <ClickAwayListener onClickAway={handleTooltipDirectionClose}>
                <React.Fragment>
                  <Tooltip
                    placement="bottom"
                    color={"primary"}
                    PopperProps={{
                      disablePortal: true,
                    }}
                    onClose={handleTooltipDirectionClose}
                    open={openDirection}
                    disableFocusListener
                    disableHoverListener
                    disableTouchListener
                    title="Add"
                  >
                    <ButtonNative
                      variant={"contained"}
                      color={"primary"}
                      onClick={openDirection}
                      className={classes.marginRight}
                    >
                      Tooltip on bottom
                    </ButtonNative>
                  </Tooltip>
                </React.Fragment>
              </ClickAwayListener>
              <ClickAwayListener onClickAway={handleTooltipDirectionClose}>
                <React.Fragment>
                  <Tooltip
                    placement="left"
                    color={"primary"}
                    PopperProps={{
                      disablePortal: true,
                    }}
                    onClose={handleTooltipDirectionClose}
                    open={openDirection}
                    disableFocusListener
                    disableHoverListener
                    disableTouchListener
                    title="Add"
                  >
                    <ButtonNative
                      variant={"contained"}
                      color={"primary"}
                      onClick={handleTooltipDirectionOpen}
                      className={classes.marginRight}
                    >
                      Tooltip on left
                    </ButtonNative>
                  </Tooltip>
                </React.Fragment>
              </ClickAwayListener>
            </Box>
          </Widget>
        </Grid>
        <Grid item md={6}>
          <Widget title="Popover Directions" disableWidgetMenu>
            <Box mt={2}>
              <ClickAwayListener onClickAway={handleTooltipDirectionClose}>
                <React.Fragment>
                  <Tooltip
                    placement="top"
                    color={"primary"}
                    PopperProps={{
                      disablePortal: true,
                    }}
                    onClose={handleTooltipDirectionClose}
                    open={openDirection}
                    disableFocusListener
                    disableHoverListener
                    disableTouchListener
                    title="Add"
                  >
                    <ButtonNative
                      variant={"contained"}
                      color={"primary"}
                      onClick={handleTooltipDirectionOpen}
                      className={classes.marginRight}
                    >
                      Popover on top
                    </ButtonNative>
                  </Tooltip>
                </React.Fragment>
              </ClickAwayListener>
              <ClickAwayListener onClickAway={handleTooltipDirectionClose}>
                <React.Fragment>
                  <Tooltip
                    placement="right"
                    color={"primary"}
                    PopperProps={{
                      disablePortal: true,
                    }}
                    onClose={handleTooltipDirectionClose}
                    open={openDirection}
                    disableFocusListener
                    disableHoverListener
                    disableTouchListener
                    title="Add"
                  >
                    <ButtonNative
                      variant={"contained"}
                      color={"primary"}
                      onClick={handleTooltipDirectionOpen}
                      className={classes.marginRight}
                    >
                      Popover on right
                    </ButtonNative>
                  </Tooltip>
                </React.Fragment>
              </ClickAwayListener>
              <ClickAwayListener onClickAway={handleTooltipDirectionClose}>
                <React.Fragment>
                  <Tooltip
                    placement="bottom"
                    color={"primary"}
                    PopperProps={{
                      disablePortal: true,
                    }}
                    onClose={handleTooltipDirectionClose}
                    open={openDirection}
                    disableFocusListener
                    disableHoverListener
                    disableTouchListener
                    title="Add"
                  >
                    <ButtonNative
                      variant={"contained"}
                      color={"primary"}
                      onClick={openDirection}
                      className={classes.marginRight}
                    >
                      Popover on bottom
                    </ButtonNative>
                  </Tooltip>
                </React.Fragment>
              </ClickAwayListener>
              <ClickAwayListener onClickAway={handleTooltipDirectionClose}>
                <React.Fragment>
                  <Tooltip
                    placement="left"
                    color={"primary"}
                    PopperProps={{
                      disablePortal: true,
                    }}
                    onClose={handleTooltipDirectionClose}
                    open={openDirection}
                    disableFocusListener
                    disableHoverListener
                    disableTouchListener
                    title="Add"
                  >
                    <ButtonNative
                      variant={"contained"}
                      color={"primary"}
                      onClick={handleTooltipDirectionOpen}
                      className={classes.marginRight}
                    >
                      Popover on left
                    </ButtonNative>
                  </Tooltip>
                </React.Fragment>
              </ClickAwayListener>
            </Box>
          </Widget>
        </Grid>
      </Grid>
    </div>
  );
}
