import React from "react";
import { Grid, Box } from "@material-ui/core";

//components
import { Typography, Button, Widget } from "../../components/Wrappers";
import { Annotation, Timestep, Circle } from "../../components/Timeline";
import PageTitle from "../../components/PageTitle";

export default function TimelineComp() {
  return (
    <>
      <PageTitle title="Timeline" />
      <Grid container spacing={6}>
        <Grid item md={12} xs={12}>
          <Annotation>
             <Timestep day={"yesterday"} timestep={"9:03am"} />
             <Circle color={"primary"}>M</Circle>
            <Box style={{width: '50%'}}>Lorem ipsum dolor sit amet, consectetur.</Box>
          </Annotation>
          <Annotation>
            <Circle color={"primary"}>D</Circle>
            <Timestep day={"yesterday"} timestep={"9:03am"} />
          </Annotation>
        </Grid>
      </Grid>
    </>
  );
}
