import React from "react";
import { Grid } from "@material-ui/core";

// components
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
import { Typography } from "../../components/Wrappers";

export default function Colors() {

  return (
    <div>
      <PageTitle title="Badge" />
      <Grid container spacing={6}>
        <Grid item md={6}>
          <Widget title="Badge simple" disableWidgetMenu>
            <Typography></Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, quos!
          </Widget>
        </Grid>
      </Grid>
    </div>
  );
}
