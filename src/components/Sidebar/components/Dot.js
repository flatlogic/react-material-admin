import React from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import classnames from "classnames";

// styles
var useStyles = makeStyles(theme => ({
  dotBase: {
    width: 5,
    height: 5,
    backgroundColor: theme.palette.text.hint,
    borderRadius: "50%",
    transition: theme.transitions.create("background-color")
  },
  dotMedium: {
    width: 8,
    height: 8
  },
  dotLarge: {
    width: 18,
    height: 18
  }
}));

export default function Dot({ size = "small", color, style }) {
  var classes = useStyles();
  var theme = useTheme();

  return (
    <div
      className={classnames(classes.dotBase, {
        [classes.dotMedium]: size === "medium",
        [classes.dotBase]: size === "small",
        [classes.dotLarge]: size === "large"
      })}
      style={{
        backgroundColor:
          color && theme.palette[color] && theme.palette[color].main,
        ...style
      }}
    />
  );
}
