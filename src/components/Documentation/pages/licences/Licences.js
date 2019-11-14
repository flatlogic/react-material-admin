import React from "react";
import {
  Grid,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import { Done as DoneIcon } from "@material-ui/icons";

//components
import PageTitle from "../../../PageTitle";
import Widget from "../../../Widget";
import { Typography } from "../../../Wrappers";

const Overview = () => {
  return (
    <>
      <PageTitle title="Overview" />
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Widget disableWidgetMenu>
            <Typography variant={"h6"}>
              React Material Admin Full is an admin dashboard template built
              with React 16.8.6. Sing App goes beyond usual admin templates and
              provides you entire intuitive programming framework. You can use
              React Material Admin Full to build any type of web applications
              like SAAS, CMS, financial dashboards, project management tools,
              etc.
            </Typography>
          </Widget>
        </Grid>
      </Grid>
    </>
  );
};

export default Overview;
