import React from "react";
import { Grid, Box, Paper } from "@material-ui/core";
import useStyles from "./styles";

// components
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
import Code from "../../components/Code";
import { Typography } from "../../components/Wrappers";

export default function WidgetComp() {
  const classes = useStyles();
  return (
    <>
      <PageTitle title="Widget" />
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <Widget title="Simple Widget" disableWidgetMenu>
            <Typography block>
              It appears in the top of the page container. It have to be the
              first component after <Code row inline>{`return`}</Code>{" "}
              statement.
            </Typography>
            <Widget className={classes.paper} disableWidgetMenu>
              <Widget title="Simple Widget" disableWidgetMenu>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. A,
                rem?
              </Widget>
              <Code>
                {`
  <Widget title="Simple Widget" disableWidgetMenu>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. A,
    rem?
  </Widget>
              `}
              </Code>
            </Widget>
            <Typography block>
              To make <Code inline row>{`WidgetMenu`}</Code> visible, don't
              append <Code inline row>{`disableWidgetMenu`}</Code> to{" "}
              <Code inline row>{`Widget`}</Code> component.
            </Typography>
            <Widget className={classes.paper} disableWidgetMenu>
              <Widget title="Simple Widget">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. A,
                rem?
              </Widget>
              <Code>
                {`
  <Widget title="Simple Widget">
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
            <Code>
              {`
              <PageTitle title="Widget" />
              `}
            </Code>
          </Widget>
        </Grid>
      </Grid>
    </>
  );
}
