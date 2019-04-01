import React from "react";
import classnames from "classnames";
import { withStyles } from "@material-ui/core";

const Dot = ({ classes, size, color, theme }) => (
  <div
    className={classnames(classes.dotBase, {
      [classes.dotLarge]: size === "large",
      [classes.dotSmall]: size === "small"
    })}
    style={{ backgroundColor: color && theme.palette[color] && theme.palette[color].main }}
  />
);

const styles = theme => ({
  dotBase: {
    width: 5,
    height: 5,
    backgroundColor: theme.palette.text.hint,
    borderRadius: "50%",
    transition: theme.transitions.create("background-color")
  },
  dotLarge: {
    width: 8,
    height: 8
  }
});

export default withStyles(styles, { withTheme: true })(Dot);
