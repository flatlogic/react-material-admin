import React from "react";
import { Grid } from "@material-ui/core";


// components
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
import { Typography, Button } from "../../components/Wrappers";

export default function EcommercePage() {

  return (
    <>
      <PageTitle title="Typography" />
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Widget title="List of Products" disableWidgetMenu>
            <Button variant={"contained"} color={"success"}>Create Product</Button>
          </Widget>
        </Grid>
      </Grid>
    </>
  );
}
