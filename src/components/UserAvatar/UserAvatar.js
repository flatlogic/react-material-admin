import React from "react";
import { withStyles } from "@material-ui/core";

import { Typography } from "../Wrappers";

const UserAvatar = ({ classes, theme, color = 'primary', ...props }) => {
  const letters = props.name
    .split(" ")
    .map(word => word[0])
    .join("");

  return (
    <div className={classes.avatar} style={{ backgroundColor: theme.palette[color].main}}>
      <Typography className={classes.text}>{letters}</Typography>
    </div>
  );
};

const styles = () => ({
  avatar: {
    width: 30,
    height: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%"
  },
  text: {
    color: 'white',
  }
});

export default withStyles(styles, { withTheme: true })(UserAvatar);
