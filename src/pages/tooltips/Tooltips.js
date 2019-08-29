import React from "react";
import {
  Grid,
  Box,
  makeStyles,
  ClickAwayListener,
  Button as NativeButton,
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
          <Widget title="Tooltip Example" disableWidgetMenu>
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
                    <NativeButton
                      variant={"contained"}
                      color={"primary"}
                      onClick={handleTooltipOpen}
                      className={classes.button}
                      style={{color: 'white'}}
                    >
                      Click to toggle a tooltip
                    </NativeButton>
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
                <NativeButton
                  className={classes.button}
                  variant={"contained"}
                  color={"secondary"}
                >
                  Hover to toggle a tooltip
                </NativeButton>
              </Tooltip>
            </Box>
          </Widget>
        </Grid>

        <Grid item md={6}>
          <Widget title="Popover Example" disableWidgetMenu>
            <Box mt={2}>
              <Box justifyContent={"center"}>
                <Tooltip
                  placement="top-start"
                  disableFocusListener
                  disableTouchListener
                  title="Add"
                >
                  <NativeButton
                    variant={"contained"}
                    className={classes.button}
                  >
                    Top-start
                  </NativeButton>
                </Tooltip>
                <Tooltip
                  placement="top"
                  disableFocusListener
                  disableTouchListener
                  title="Add"
                >
                  <NativeButton
                    variant={"contained"}
                    className={classes.button}
                  >
                    Top
                  </NativeButton>
                </Tooltip>
                <Tooltip
                  placement="top-end"
                  disableFocusListener
                  disableTouchListener
                  title="Add"
                >
                  <NativeButton
                    variant={"contained"}
                    className={classes.button}
                  >
                    Top-end
                  </NativeButton>
                </Tooltip>
              </Box>
            </Box>
          </Widget>
        </Grid>
        <Grid item md={6}>
          <Widget title="Tooltip Directions" disableWidgetMenu>
            <Box>123</Box>
          </Widget>
        </Grid>
        <Grid item md={6}>
          <Widget title="Popover Directions" disableWidgetMenu>
            <Box>123</Box>
          </Widget>
        </Grid>
      </Grid>
    </div>
  );
}
