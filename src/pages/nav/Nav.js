import React from "react";
import { Grid } from "@material-ui/core";

// components
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
import { Typography } from "../../components/Wrappers";

export default function Colors() {
  return (
    <div>
      <PageTitle title="Nav" />
      <Grid container spacing={6}>
        <Grid item md={6}>
          <Widget title="Base Nav" disableWidgetMenu>
            <Typography>
              Navigation available in Material UI share general markup and
              styles, from the base .nav class to the active and disabled
              states. Swap modifier classes to switch between each style.
            </Typography>
          </Widget>
        </Grid>
      </Grid>
    </div>
  );
}
