import React from "react";
import { Grid, Box, Select, FormControl, MenuItem } from "@material-ui/core";
import useStyles from "./styles";

//components
import { Typography, Avatar, Link, Input } from "../../components/Wrappers";
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";

export default function SearchComp() {
  const [popularField, setValues] = React.useState("Popular");
  const [timeField, setTimeField] = React.useState("All Time");
  const handleChange = event => {
    setValues(event.target.value);
  };
  const handleChangeTimeField = event => {
    setTimeField(event.target.value);
  };
  const classes = useStyles();
  return (
    <>
      <PageTitle title="Search" />
      <Grid container spacing={6}>
        <Grid item md={12} xs={12}>
          <FormControl
            variant={"outlined"}
            className={classes.filter}
            style={{ marginRight: 8 }}
          >
            <Select value={popularField} onChange={handleChange}>
              <MenuItem value={"All"}>All</MenuItem>
              <MenuItem value={"Popular"}>Popular</MenuItem>
              <MenuItem value={"Interesting"}>Interesting</MenuItem>
              <MenuItem value={"Latest"}>Latest</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant={"outlined"} className={classes.filter}>
            <Select value={timeField} onChange={handleChangeTimeField}>
              <MenuItem value={"All Time"}>All Time</MenuItem>
              <MenuItem value={"Last 24h"}>Last 24h</MenuItem>
              <MenuItem value={"Last Month"}>Last Month</MenuItem>
              <MenuItem value={"Last Year"}>Last Year</MenuItem>
              <MenuItem value={"Latest"}>Latest</MenuItem>
            </Select>
          </FormControl>
          <Box my={1}>
            <Typography variant={"subtitle2"}>About 94 700 000 (0.39 sec.) results</Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
