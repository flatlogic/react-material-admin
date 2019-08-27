import React from "react";
import { Grid, Paper } from "@material-ui/core";
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
import { Typography } from "../../components/Wrappers";

export default function GridComp() {
  const classes = useStyles();

  return (
    <div>
      <PageTitle title="Grid System" />
      <Grid container spacing={6}>
        <Grid item md={6}>
          <Widget title="How it works" disableWidgetMenu>
            <Typography>
              Material UI’s grid system uses a series of containers, rows, and
              columns to layout and align content. It’s built with flexbox and
              is fully responsive. Below is an example and an in-depth look at
              how the grid comes together.
            </Typography>
            <Paper className={classes.paper}>
              <Grid container spacing={3}>
                <Grid item xs={4}>
                  <Paper className={classes.paperItem}>One of three</Paper>
                </Grid>
                <Grid item xs={4}>
                  <Paper className={classes.paperItem}>One of three</Paper>
                </Grid>
                <Grid item xs={4}>
                  <Paper className={classes.paperItem}>One of three</Paper>
                </Grid>
                <Grid item xs zeroMinWidth>
                  <pre>
                    <Typography color="primary">
                      <code>{"<Grid container>"}</code>
                    </Typography>
                    <Typography
                      color="secondary"
                      noWrap
                      className={classes.wrapFix}
                    >
                      <code>
                        {"   <Grid item xs={4}>One of three</Grid>\n"}
                      </code>
                    </Typography>
                    <Typography
                      color="secondary"
                      noWrap
                      className={classes.wrapFix}
                    >
                      <code>
                        {"   <Grid item xs={4}>One of three</Grid>\n"}
                      </code>
                    </Typography>
                    <Typography
                      color="secondary"
                      noWrap
                      className={classes.wrapFix}
                    >
                      <code>
                        {"   <Grid item xs={4}>One of three</Grid>\n"}
                      </code>
                    </Typography>
                    <Typography color="primary">
                      <code>{"</Grid>"}</code>
                    </Typography>
                  </pre>
                </Grid>
              </Grid>
            </Paper>
          </Widget>
        </Grid>
        <Grid item md={6}>
          <Widget title="Equal width" disableWidgetMenu>
            <Typography>
              For example, here are two grid layouts that apply to every device
              and viewport, from xs to xl. Add any number of unit-less classes
              for each breakpoint you need and every column will be the same
              width.
            </Typography>
            <Paper className={classes.paper}>
              <Grid container spacing={3}>
                <Grid item xs>
                  <Paper className={classes.paperItem}>1 of 2</Paper>
                </Grid>
                <Grid item xs>
                  <Paper className={classes.paperItem}>2 of 2</Paper>
                </Grid>
                <Grid item xs={12}>
                  <pre>
                    <Typography color="primary">
                      <code>{"<Grid container>"}</code>
                    </Typography>
                    <Typography color="secondary">
                      <code>{"   <Grid item xs>1 of 2</Grid>\n"}</code>
                    </Typography>
                    <Typography color="secondary">
                      <code>{"   <Grid item xs>2 of 2</Grid>\n"}</code>
                    </Typography>
                    <Typography color="primary">
                      <code>{"</Grid>"}</code>
                    </Typography>
                  </pre>
                </Grid>
              </Grid>
            </Paper>
          </Widget>
        </Grid>
        <Grid item md={12}>
          <Widget title="Grid options" disableWidgetMenu>
            <Typography>
              While Material UI grid uses ems or rems for defining most sizes,
              pxs are used for grid breakpoints and container widths. This is
              because the viewport width is in pixels and does not change with
              the font size. See how aspects of the Material UI grid system work
              across multiple devices with a handy table.
            </Typography>
            <Table className="mb-0">
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell>
                    <b>Extra small</b>
                    <br />
                    <small>&lt;576px</small>
                  </TableCell>
                  <TableCell>
                    <b>Small</b>
                    <br />
                    <small>≥576px</small>
                  </TableCell>
                  <TableCell>
                    <b>Medium</b>
                    <br />
                    <small>≥768px</small>
                  </TableCell>
                  <TableCell>
                    <b>Large</b>
                    <br />
                    <small>≥992px</small>
                  </TableCell>
                  <TableCell>
                    <b>Extra large</b>
                    <br />
                    <small>≥1200px</small>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <b>Max container width</b>
                  </TableCell>
                  <TableCell>None (auto)</TableCell>
                  <TableCell>540px</TableCell>
                  <TableCell>720px</TableCell>
                  <TableCell>960px</TableCell>
                  <TableCell>1140px</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <b>Component property</b>
                  </TableCell>
                  <TableCell>
                    <Typography className={classes.codeBack}>
                      {"<Grid item xs={}>"}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography className={classes.codeBack}>
                      {"<Grid item sm={}>"}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography className={classes.codeBack}>
                      {"<Grid item md={}>"}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography className={classes.codeBack}>
                      {"<Grid item lg={}>"}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography className={classes.codeBack}>
                      {"<Grid item xl={}>"}
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <b># of columns</b>
                  </TableCell>
                  <TableCell>12</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <b>Spacing</b> (output(spacing) = spacing * 8px, spacing ={" "}
                    {"{from 2 to 10 inclusive}"})
                  </TableCell>
                  <TableCell>
                    <Typography className={classes.codeBack}>
                      {"<Grid container spacing={2}>"}
                    </Typography>
                  </TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <b>Nestable</b>
                  </TableCell>
                  <TableCell>Yes</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <b>Column ordering</b>
                  </TableCell>
                  <TableCell>Yes</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Widget>
        </Grid>
        <Grid item md={6} xs={12}>
          <Widget title="Vertical Alignment" disableWidgetMenu>
            <Typography>
              Use flexbox alignment utilities to vertically and horizontally
              align columns.
            </Typography>
            <Paper className={classes.paper}>
              <Grid container spacing={3}>
                <Box display="flex" height={150} width={"100%"}>
                  <Box alignSelf="flex-start" width={"100%"}>
                    <Grid item xs={12}>
                      <Paper className={classes.paperItem}>Start</Paper>
                    </Grid>
                  </Box>
                  <Box alignSelf="center" width={"100%"}>
                    <Grid item xs={12}>
                      <Paper className={classes.paperItem}>Center</Paper>
                    </Grid>
                  </Box>
                  <Box alignSelf="flex-end" width={"100%"}>
                    <Grid item xs={12}>
                      <Paper className={classes.paperItem}>End</Paper>
                    </Grid>
                  </Box>
                </Box>
                <Grid item xs zeroMinWidth>
                  <pre>
                    <Typography color="primary">
                      <code>{"<Grid container>"}</code>
                    </Typography>
                    <Typography color="info">
                      <code>{'  <Box display="flex">'}</code>
                    </Typography>
                    <Typography color="warning">
                      <code>{'    <Box alignSelf="flex-start">'}</code>
                    </Typography>
                    <Typography
                      color="secondary"
                      noWrap
                      className={classes.wrapFix}
                    >
                      <code>
                        {"       <Grid item xs={4}>One of three</Grid>\n"}
                      </code>
                    </Typography>
                    <Typography color="warning">
                      <code>{"    </Box>"}</code>
                    </Typography>
                    <Typography color="warning">
                      <code>{'    <Box alignSelf="center">'}</code>
                    </Typography>
                    <Typography
                      color="secondary"
                      noWrap
                      className={classes.wrapFix}
                    >
                      <code>
                        {"       <Grid item xs={4}>One of three</Grid>\n"}
                      </code>
                    </Typography>
                    <Typography color="warning">
                      <code>{"    </Box>"}</code>
                    </Typography>
                    <Typography color="warning">
                      <code>{'    <Box alignSelf="flex-end">'}</code>
                    </Typography>
                    <Typography
                      color="secondary"
                      noWrap
                      className={classes.wrapFix}
                    >
                      <code>
                        {"       <Grid item xs={4}>One of three</Grid>\n"}
                      </code>
                    </Typography>
                    <Typography color="warning">
                      <code>{"    </Box>"}</code>
                    </Typography>
                    <Typography color="info">
                      <code>{"  </Box>"}</code>
                    </Typography>
                    <Typography color="primary">
                      <code>{"</Grid>"}</code>
                    </Typography>
                  </pre>
                </Grid>
              </Grid>
            </Paper>
          </Widget>
        </Grid>
        <Grid item md={6} xs={12}>
          <Widget title="Vertical Alignment" disableWidgetMenu>
            <Typography>
              Use flexbox alignment utilities to vertically and horizontally
              align columns.
            </Typography>
            <Paper className={classes.paper}>
              <Grid container spacing={3}>
                <Box display="flex" width={"100%"} flexDirection="column">
                  <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="flex-end"
                    width={"100%"}
                  >
                    <Grid item xs={3}>
                      <Paper
                        className={classes.paperItem}
                        style={{ margin: "12px" }}
                      >
                        1
                      </Paper>
                    </Grid>
                    <Grid item xs={3}>
                      <Paper
                        className={classes.paperItem}
                        style={{ margin: "12px" }}
                      >
                        2
                      </Paper>
                    </Grid>
                  </Box>
                  <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-around"
                    width={"100%"}
                  >
                    <Grid item xs={3}>
                      <Paper
                        className={classes.paperItem}
                        style={{ margin: "12px" }}
                      >
                        1
                      </Paper>
                    </Grid>
                    <Grid item xs={3}>
                      <Paper
                        className={classes.paperItem}
                        style={{ margin: "12px" }}
                      >
                        2
                      </Paper>
                    </Grid>
                  </Box>
                  <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    width={"100%"}
                  >
                    <Grid item xs={3}>
                      <Paper
                        className={classes.paperItem}
                        style={{ margin: "12px" }}
                      >
                        1
                      </Paper>
                    </Grid>
                    <Grid item xs={3}>
                      <Paper
                        className={classes.paperItem}
                        style={{ margin: "12px" }}
                      >
                        2
                      </Paper>
                    </Grid>
                    <Grid item xs={3}>
                      <Paper
                        className={classes.paperItem}
                        style={{ margin: "12px" }}
                      >
                        3
                      </Paper>
                    </Grid>
                  </Box>
                </Box>
                <Grid item xs zeroMinWidth>
                  <pre>
                    <Typography color="primary">
                      <code>{"<Grid container>"}</code>
                    </Typography>
                    <Typography
                      color="secondary"
                      noWrap
                      className={classes.wrapFix}
                    >
                      <code>
                        {'  <Box display="flex" flexDirection="column">'}
                      </code>
                    </Typography>
                    <Typography color="info" noWrap className={classes.wrapFix}>
                      <code>
                        {
                          '    <Box display="flex" flexDirection="row" justifyContent="flex-end">'
                        }
                      </code>
                    </Typography>
                    <Typography color="warning">
                      <code>{"      <Grid item xs={3}>1</Grid>"}</code>
                    </Typography>
                    <Typography color="warning">
                      <code>{"      <Grid item xs={3}>2</Grid>"}</code>
                    </Typography>
                    <Typography color="info">
                      <code>{"    </Box>"}</code>
                    </Typography>
                    <Typography color="info" noWrap className={classes.wrapFix}>
                      <code>
                        {
                          '    <Box display="flex" flexDirection="row" justifyContent="flex-around">'
                        }
                      </code>
                    </Typography>
                    <Typography color="warning">
                      <code>{"      <Grid item xs={3}>1</Grid>"}</code>
                    </Typography>
                    <Typography color="warning">
                      <code>{"      <Grid item xs={3}>2</Grid>"}</code>
                    </Typography>
                    <Typography color="info">
                      <code>{"    </Box>"}</code>
                    </Typography>
                    <Typography color="info" noWrap className={classes.wrapFix}>
                      <code>
                        {
                          '    <Box display="flex" flexDirection="row" justifyContent="flex-between">'
                        }
                      </code>
                    </Typography>
                    <Typography color="warning">
                      <code>{"      <Grid item xs={3}>1</Grid>"}</code>
                    </Typography>
                    <Typography color="warning">
                      <code>{"      <Grid item xs={3}>2</Grid>"}</code>
                    </Typography>
                    <Typography color="warning">
                      <code>{"      <Grid item xs={3}>3</Grid>"}</code>
                    </Typography>
                    <Typography color="info">
                      <code>{"    </Box>"}</code>
                    </Typography>
                    <Typography color="secondary">
                      <code>{"  </Box>"}</code>
                    </Typography>
                    <Typography color="primary">
                      <code>{"</Grid>"}</code>
                    </Typography>
                  </pre>
                </Grid>
              </Grid>
            </Paper>
          </Widget>
        </Grid>
      </Grid>
    </div>
  );
}
