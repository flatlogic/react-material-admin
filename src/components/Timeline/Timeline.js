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
    <Box className={classes.border} display={"flex"}>
      <Avatar {...props} className={classes.circle}>
        {children ? children : null}
      </Avatar>
    </Box>
  );
};

const Annotation = props => {
  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
      >
        {props.children}
      </Box>
    </>
  );
};

export { Annotation, Circle, Timestep };
