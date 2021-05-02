import React from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import classnames from "classnames";

var useStyles = makeStyles(theme => ({
  dotBase: {
    width: 6,
    height: 6,
    backgroundColor: theme.palette.text.hint,
    borderRadius: "50%",
    transition: theme.transitions.create("background-color")
  },
  dotMedium: {
    width: 8,
    height: 8
  },
  dotLarge: {
    width: 14,
    height: 14
  }
}));

export default function Dot({ size = "small", color, style }) {
  var classes = useStyles();
  var theme = useTheme();

  return (
    <div
      className={classnames(classes.dotBase, {
        [classes.dotBase]: size === "small",
        [classes.dotMedium]: size === "medium",
        [classes.dotLarge]: size === "large"
      })}
      style={{
        backgroundColor:
        // eslint-disable-next-line no-mixed-operators
          color && (theme.palette.text[color] && theme.palette.text[color]) || color,
        ...style
      }}
    />
  );
}