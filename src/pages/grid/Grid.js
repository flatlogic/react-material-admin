import React, { useState, useEffect } from "react";
import { Grid, Paper } from "@material-ui/core";
import {} from "@material-ui/core";
import useStyles from "./styles";
import {
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Box,
} from "@material-ui/core";

// components
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
import { Typography, Button } from "../../components/Wrappers";

export default function Colors() {
  const classes = useStyles();

  return (
    <div>
      <PageTitle title="Grid System"/>
      <Grid container spacing={6}>
        <Grid item md={6}>
          <Widget title="How it works" disableWidgetMenu>
            <Typography>Material UI’s grid system uses a series of containers, rows, and columns to layout and align
              content. It’s built with flexbox and is fully responsive. Below is an example and an in-depth look at how
              the grid comes together.</Typography>
            <Paper className={classes.paper}>
              <Grid container spacing={3}>
                <Grid item xs={4}><Paper className={classes.paperItem}>One of three</Paper></Grid>
                <Grid item xs={4}><Paper className={classes.paperItem}>One of three</Paper></Grid>
                <Grid item xs={4}><Paper className={classes.paperItem}>One of three</Paper></Grid>
                <Grid item>
                  <pre>
                    <Typography color="primary"><code>{"<Grid container>"}</code></Typography>
                    <Typography
                      color="secondary"><code>{"   <Grid item xs={4}>One of three</Grid>\n"}</code></Typography>
                    <Typography
                      color="secondary"><code>{"   <Grid item xs={4}>One of three</Grid>\n"}</code></Typography>
                    <Typography
                      color="secondary"><code>{"   <Grid item xs={4}>One of three</Grid>\n"}</code></Typography>
                    <Typography color="primary"><code>{"</Grid>"}</code></Typography>
                  </pre>
                </Grid>
              </Grid>
            </Paper>
          </Widget>
        </Grid>
        <Grid item md={6}>
          <Widget title="Equal width" disableWidgetMenu>
            <Typography>For example, here are two grid layouts that apply to every device and viewport, from xs to xl.
              Add any number of unit-less classes for each breakpoint you need and every column will be the same
              width.</Typography>
            <Paper className={classes.paper}>
              <Grid container spacing={3}>
                <Grid item xs><Paper className={classes.paperItem}>1 of 2</Paper></Grid>
                <Grid item xs><Paper className={classes.paperItem}>2 of 2</Paper></Grid>
                <Grid item xs={12}>
                  <pre>
                    <Typography color="primary"><code>{"<Grid container>"}</code></Typography>
                    <Typography color="secondary"><code>{"   <Grid item xs>1 of 2</Grid>\n"}</code></Typography>
                    <Typography color="secondary"><code>{"   <Grid item xs>2 of 2</Grid>\n"}</code></Typography>
                    <Typography color="primary"><code>{"</Grid>"}</code></Typography>
                  </pre>
                </Grid>
              </Grid>
            </Paper>
          </Widget>
        </Grid>
        <Grid item md={12}>
          <Widget title="Grid options" disableWidgetMenu>
            <Typography>While Material UI grid uses ems or rems for defining most sizes, pxs are used for grid
              breakpoints and container widths. This is because the viewport width is in pixels and does not change with
              the font size. See how aspects of the Material UI grid system work across multiple devices with a handy
              table.</Typography>
            <Table className="mb-0">
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell>Extra small
                    <small>&lt;576px</small>
                  </TableCell>
                  <TableCell>Small
                    <small>≥576px</small>
                  </TableCell>
                  <TableCell>Medium
                    <small>≥768px</small>
                  </TableCell>
                  <TableCell>Large
                    <small>≥992px</small>
                  </TableCell>
                  <TableCell>Extra large
                    <small>≥1200px</small>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Max container width</TableCell>
                  <TableCell>
                    None (auto)
                  </TableCell>
                  <TableCell>
                    540px
                  </TableCell>
                  <TableCell>720px</TableCell>
                  <TableCell>960px</TableCell>
                  <TableCell>1140px</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Component property</TableCell>
                  <TableCell>
                    <Typography className={classes.codeBack}>{"<Grid item xs={}>"}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography className={classes.codeBack}>{"<Grid item sm={}>"}</Typography>
                  </TableCell>
                  <TableCell><Typography className={classes.codeBack}>{"<Grid item md={}>"}</Typography></TableCell>
                  <TableCell><Typography className={classes.codeBack}>{"<Grid item lg={}>"}</Typography></TableCell>
                  <TableCell><Typography className={classes.codeBack}>{"<Grid item xl={}>"}</Typography></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell># of columns</TableCell>
                  <TableCell>
                    12
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Spacing (output(spacing) = spacing * 8px, spacing = {'{from 2 to 10 inclusive}'})</TableCell>
                  <TableCell>
                    <Typography className={classes.codeBack}>{"<Grid container spacing={2}>"}</Typography>
                  </TableCell>
                  <TableCell>

                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Nestable</TableCell>
                  <TableCell>
                    Yes
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Column ordering</TableCell>
                  <TableCell>
                    Yes
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Widget>
        </Grid>
        <Grid item md={6}>
          <Widget title="Vertical Alignment" disableWidgetMenu>
            <Typography>Use flexbox alignment utilities to vertically and horizontally align columns.</Typography>
            <Paper className={classes.paper}>
              <Grid container spacing={3} direction="column">
                <Grid item xs={4}><Box alignSelf="center"><Paper className={classes.paperItem}>Start</Paper></Box></Grid>
                <Grid item xs={4}><Paper className={classes.paperItem}>Center</Paper></Grid>
                <Grid item xs={4}><Paper className={classes.paperItem}>End</Paper></Grid>
                <Grid item>
                  <pre>
                    <Typography color="primary"><code>{"<Grid container>"}</code></Typography>
                    <Typography
                      color="secondary"><code>{"   <Grid item xs={4}>One of three</Grid>\n"}</code></Typography>
                    <Typography
                      color="secondary"><code>{"   <Grid item xs={4}>One of three</Grid>\n"}</code></Typography>
                    <Typography
                      color="secondary"><code>{"   <Grid item xs={4}>One of three</Grid>\n"}</code></Typography>
                    <Typography color="primary"><code>{"</Grid>"}</code></Typography>
                  </pre>
                </Grid>
              </Grid>
            </Paper>
          </Widget>
        </Grid>
      </Grid>
    </div>);
}
