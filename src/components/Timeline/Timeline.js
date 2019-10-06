import React from "react";
import { Box } from "@material-ui/core";
import useStyles from "./styles";

//components
import { Typography, Avatar } from "../Wrappers";

const Timestep = props => {
  return (
    <Box width={"45%"} align={props.right && "right"}>
      <time>
        <Typography>{props.day}</Typography>
        <Typography weight={"medium"}>{props.timestep}</Typography>
      </time>
    </Box>
  );
};

const Circle = ({ children, ...props }) => {
  const classes = useStyles();
  return (
    <Avatar {...props} className={classes.circle}>
      {children ? children : null}
    </Avatar>
  );
};

const Annotation = props => {
  const classes = useStyles();
  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        style={{ width: "100%" }}
        className={classes.border}
      >
        {props.children}
      </Box>
    </>
  );
};

export { Annotation, Circle, Timestep };
