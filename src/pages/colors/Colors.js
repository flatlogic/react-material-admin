import React from "react";
import {
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Grid,
  Box,
} from "@material-ui/core";
import useStyles from "./styles";

// components
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
import Dot from "../../components/Sidebar/components/Dot";
import Code from "../../components/Code";
import { Typography, Button } from "../../components/Wrappers";

export default function ColorsComp() {
  const classes = useStyles();
  return (
    <>
      <PageTitle title="Colors" />
      <Grid container spacing={6}>
        <Grid item xs={12} md={12}>
          <Widget title="States Colors" disableWidgetMenu>
            <Typography>
              There is a couple of brand colors that we're using.
            </Typography>
            <Table className="mb-0">
              <TableHead>
                <TableRow>
                  <TableCell>State</TableCell>
                  <TableCell>Preview</TableCell>
                  <TableCell>Usage Example</TableCell>
                  <TableCell>Hex Value</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Primary</TableCell>
                  <TableCell>
                    <Dot color="primary" size="superlarge" />
                  </TableCell>
                  <TableCell>
                    <Code row>{`<Button color="primary">`}</Code>
                  </TableCell>
                  <TableCell>
                    <Typography color="primary">#536DFE</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">Secondary</TableCell>
                  <TableCell>
                    <Dot color="secondary" size="superlarge" />
                  </TableCell>
                  <TableCell>
                    <Code row>{`<Dot color="secondary">`}</Code>
                  </TableCell>
                  <TableCell>
                    <Typography color="secondary">#FF5C93</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">Warning</TableCell>
                  <TableCell>
                    <Dot color="warning" size="superlarge" />
                  </TableCell>
                  <TableCell>
                    <Code row>{`<Typography color="warning">`}</Code>
                  </TableCell>
                  <TableCell>
                    <Typography color="warning">#FFC260</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">Success</TableCell>
                  <TableCell>
                    <Dot color="success" size="superlarge" />
                  </TableCell>
                  <TableCell>
                    <Code row>{`<Notification color="success">`}</Code>
                  </TableCell>
                  <TableCell>
                    <Typography color="success">#3CD4A0</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">Info</TableCell>
                  <TableCell align="right">
                    <Dot color="info" size="superlarge" />
                  </TableCell>
                  <TableCell>
                    <Code row>{`<Icon color="info">`}</Code>
                  </TableCell>
                  <TableCell>
                    <Typography color="info">#9013FE</Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Widget>
        </Grid>
        <Grid item xs={12} md={6}>
          <Widget title="Typography Colors" disableWidgetMenu>
            <div className={classes.dashedBorder}>
              <Typography variant="h1" color="primary" className={classes.text}>
                h1. Heading
              </Typography>
              <Typography variant="h2" color="success" className={classes.text}>
                h2. Heading
              </Typography>
              <Typography
                variant="h3"
                color="secondary"
                className={classes.text}
              >
                h3. Heading
              </Typography>
              <Typography variant="h4" color="warning" className={classes.text}>
                h4. Heading
              </Typography>
              <Typography
                variant="h5"
                color="primary"
                colorBrightness="light"
                className={classes.text}
              >
                h5. Heading
              </Typography>
              <Typography variant="h6" color="info">
                h6. Heading
              </Typography>
            </div>
          </Widget>
        </Grid>
        <Grid item xs={12} md={6}>
          <Widget title="Example buttons" disableWidgetMenu inheritHeight>
            <Box display={"flex"} flexWrap="wrap">
              <Box mt={1} mr={1}>
                <Button variant="contained">default</Button>
              </Box>
              <Box mt={1} mr={1}>
                <Button
                  color="primary"
                  variant="contained"
                  className={classes.button}
                >
                  primary
                </Button>
              </Box>
              <Box mt={1} mr={1}>
                <Button
                  color="secondary"
                  variant="contained"
                  className={classes.button}
                >
                  secondary
                </Button>
              </Box>
              <Box mt={1} mr={1}>
                <Button
                  color="warning"
                  variant="contained"
                  className={classes.button}
                >
                  warning
                </Button>
              </Box>
              <Box mt={1} mr={1}>
                <Button
                  color="success"
                  variant="contained"
                  className={classes.button}
                >
                  success
                </Button>
              </Box>
              <Box mt={1} mr={1}>
                <Button variant="contained" color="info">
                  info
                </Button>
              </Box>
            </Box>
          </Widget>
        </Grid>
      </Grid>
    </>
  );
}
