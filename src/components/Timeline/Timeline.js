import React from "react";
import { Box } from "@material-ui/core";
import useStyles from "./styles";

//components
import { Typography, Avatar } from "../Wrappers";

const Timestep = props => {
  const classes = useStyles();
  return (
    <Box style={{width: '45%'}}>
      <Typography>{props.day}</Typography>
      <Typography>{props.timestep}</Typography>
    </Box>
  );
};

const Circle = ({ children, ...props }) => {
  return <Avatar {...props}>{children ? children : null}</Avatar>;
};

const Annotation = props => {
  const classes = useStyles();
  return (
    <>
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <Box
          display={"flex"}
          flexDirection={"row"}
          width={"100%"}
          style={{ minHeight: 400 }}
          justifyContent={"center"}
          className={classes.border}
        >
          {props.children}
        </Box>
      </Box>
    </>
  );
};

export { Annotation, Circle, Timestep };
