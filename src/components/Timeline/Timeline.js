import React from "react";
import {Box} from '@material-ui/core'
import useStyles from './styles'

//components
import {Typography, Avatar} from "../Wrappers";

const Timestep = props => {
  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"}>
      <Typography>{props.day}</Typography>
      <Typography>{props.timestep}</Typography>
    </Box>
  )
}

const Circle = ({children,...props}) => {
  const classes = useStyles()
  return (
    <Box className={classes.border} display={"flex"} alignItems={"center"}>
    <Avatar {...props}>{children ? children : null}</Avatar>
    </Box>
  )
}

const Annotation = (props) => {
  return (
    <>
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <Box display={"flex"} flexDirection={props.right ? 'row-reverse' : 'row'} height={400}>
          <Timestep day={"yesterday"} timestep={"9:03am"} />
          <Circle color={"primary"}>M</Circle>
        </Box>
      </Box>
    </>
  );
};

export { Annotation, Circle, Timestep};
