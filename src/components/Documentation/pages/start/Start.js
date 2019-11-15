import React from "react";
import { Grid, List, ListItem, ListItemText } from "@material-ui/core";

//components
import Widget from "../../../Widget";
import { Typography } from "../../../Wrappers";

const Start = () => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Widget disableWidgetMenu>
            <Typography variant={"h5"} weight={"medium"}>
              Requirements:
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="1. Mac OS X, Windows, or Linux" />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="2. Yarn package + Node.js v6.5 or newer
"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="3. Running our Node.js backend (Required only in full stack version)
"
                />
              </ListItem>
            </List>
            <Typography variant={"h5"} weight={"medium"}>
              Quick Start:
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="1. Run yarn install" />
              </ListItem>
              <ListItem>
                <ListItemText primary="2. Run yarn start" />
              </ListItem>
            </List>
            <Typography variant={"h5"} weight={"medium"}>
              There are also other npm tasks:
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="yarn build: if you need just to build the app (without running a dev server)" />
              </ListItem>
              <ListItem>
                <ListItemText primary="yarn lint: to check the source code for syntax errors and potential issues" />
              </ListItem>
            </List>
            <Typography variant={"body2"}>
              For more instruction please refer to Sing App React readme.md.
            </Typography>
          </Widget>
        </Grid>
      </Grid>
    </>
  );
};

export default Start;
