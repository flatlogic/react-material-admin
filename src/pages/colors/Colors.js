import React from "react";
import { Grid } from "@material-ui/core";

// components
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
import { Typography } from "../../components/Wrappers";

export default function Colors() {

  return (
    <>
      <PageTitle title="Colors" />
      <Grid container>
        <Grid item xs={12} md={12}>
          <Widget title="Default colors" disableWidgetMenu>
            <Typography>
              There are few position options available for notifications. You
              can click any of them to change notifications position:
            </Typography>
          </Widget>
        </Grid>
      </Grid>
    </>
  );
}

/* 
const primary = "#536DFE";
const secondary = "#FF5C93";
const warning = "#FFC260";
const success = "#3CD4A0";
const info = "#9013FE";
*/
