import React from "react";
import { Grid, Box } from "@material-ui/core";
import {Navigation} from '@material-ui/icons'

//images
import img1 from '../../images/a2.jpg'


//components
import { Typography, Button, Avatar } from "../../components/Wrappers";
import { Annotation, Timestep, Circle } from "../../components/Timeline";
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";

export default function TimelineComp() {
  return (
    <>
      <PageTitle title="Timeline" />
      <Grid container spacing={6}>
        <Grid item md={12} xs={12}>
          <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <Annotation>
              <Box width={"45%"}>
                <Widget disableWidgetMenu inheritHeight>
                  <Box display={"flex"} alignItems={"center"}>
                    <Avatar src={img1} />
                    <Typography block>
                      <Box>
                      Jessica Nilson @jess
                      </Box>
                      <Box>
                        10:12 am - Publicly near Minsk
                      </Box>
                    </Typography>
                  </Box>
                </Widget>
              </Box>
              <Circle color={"primary"}><Navigation /></Circle>
              <Timestep day={"yesterday"} timestep={"8:03 pm"} />
            </Annotation>
            <Annotation>
              <Timestep day={"yesterday"} timestep={"9:03 am"} />
              <Circle color={"primary"}>M</Circle>
              <Box width={"45%"}>
                <Widget title="Tabs Example" disableWidgetMenu inheritHeight>
                  Lorem ipsum dolor sit amet.
                </Widget>
              </Box>
            </Annotation>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
