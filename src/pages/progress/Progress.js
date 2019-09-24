import React from "react";
import { Grid, Box } from "@material-ui/core";
// import useStyles from "./styles";

// components
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
import Code from "../../components/Code";
import {
  Typography,
  CircularProgress,
  LinearProgress,
} from "../../components/Wrappers";

export default function WidgetComp() {
  // const classes = useStyles();
  return (
    <>
      <PageTitle title="Progress" />
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <Widget title="Circular Indeterminate" disableWidgetMenu>
            <Box my={3} display="flex" flexWrap="wrap" justifyContent="center">
              <Box mt={1} mr={2}>
                <CircularProgress />
              </Box>
              <Box mt={1} mr={2}>
                <CircularProgress color="secondary" />
              </Box>
              <Box mt={1} mr={2}>
                <CircularProgress color="warning" />
              </Box>
              <Box mt={1} mr={2}>
                <CircularProgress color="success" />
              </Box>
              <Box mt={1} mr={2}>
                <CircularProgress color="info" />
              </Box>
            </Box>
          </Widget>
        </Grid>
        <Grid item xs={12} md={6}>
        <Widget title="Linear Indeterminate" disableWidgetMenu>
          <Box
            my={3}
            display="flex"
            flexWrap="wrap"
            alignItems="center"
            flexDirection="column"
          >
            <Box mt={1} mr={2} display="flex">
              <LinearProgress />
            </Box>
            <Box mt={1} mr={2}>
              <LinearProgress color="primary" />
            </Box>
            <Box mt={1} mr={2}>
              <LinearProgress color="secondary" />
            </Box>
            <Box mt={1} mr={2}>
              <LinearProgress color="warning" />
            </Box>
            <Box mt={1} mr={2}>
              <LinearProgress color="success" />
            </Box>
            <Box mt={1} mr={2}>
              <LinearProgress color="info" />
            </Box>
          </Box>
        </Widget>
        </Grid>
      </Grid>
    </>
  );
}
