import React from "react";
import { Grid, Box } from "@mui/material";
import useStyles from "./styles";

// components
import Widget from "../../components/Widget";
import Code from "../../components/Code";
import { Typography } from "../../components/Wrappers";

export default function WidgetComp() {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <Widget title="Simple Widget" disableWidgetMenu>
            <Typography block>
              It appears in the top of the page container. It have to be the
              first component after <Code row inline>{`return`}</Code>{" "}
              statement.
            </Typography>
              <Widget
                className={classes.paper}
                title="Simple Widget"
                disableWidgetMenu
                slyle={{ backgroundColor: "#fff"}}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. A,
                rem?
              <Code className={classes.scrollX}>
                {`
  <Widget title="Simple Widget" disableWidgetMenu>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. A,
    rem?
  </Widget>
              `}
              </Code>
              </Widget>
          </Widget>
        </Grid>
        <Grid item xs={12} md={6}>
          <Widget title="Page Title" disableWidgetMenu inheritHeight>
            <Typography block>
              It appears in the top of the page container. It have to be the
              first component after <Code row inline>{`return`}</Code>{" "}
              statement.
            </Typography>
            <Box mt={1}>
              <Code className={classes.ScrollX}>
                {`
              <PageTitle title="Widget" />
              `}
              </Code>
            </Box>
          </Widget>
        </Grid>
      </Grid>
    </>
  );
}
