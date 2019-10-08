import React from "react";
import { Grid, Box, Select, FormControl, MenuItem } from "@material-ui/core";
import {
  BorderAll as GridIcon,
  FormatAlignJustify as RowIcon,
} from "@material-ui/icons";
import useStyles from "./styles";

//images
import img1 from "../../images/1.jpg";
import img2 from "../../images/2.jpg";
import img3 from "../../images/3.jpg";

//components
import { Typography, Button, Link } from "../../components/Wrappers";
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
        <Grid item md={8} xs={12}>
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
          <Box my={2}>
            <Typography variant={"subtitle2"}>
              About 94 700 000 (0.39 sec.) results
            </Typography>
          </Box>
          <Widget disableWidgetMenu noBodyPadding inheritHeight>
            <Grid container>
              <Grid item md={2} xs={12}>
                <img
                  src={img1}
                  alt="admin templates"
                  style={{ width: '100%', height: "100%" }}
                />
              </Grid>
              <Grid item md={8} xs={12}>
                <Box display={"flex"} flexDirection={"column"} m={3}>
                  <Typography block>
                    <Box fontWeight={"fontWeightBold"} fontSize="h4.fontSize">
                      <Link color="primary">
                        Next generation admin template
                      </Link>{" "}
                    </Box>
                    <Box fontSize={".875rem"} mb={1}>
                      New York, NY 2018
                    </Box>
                    <Box>
                      Not just usual Metro. But something bigger. Not just usual
                      widgets, but real widgets. Not just yet another admin
                      template, but next generation admin template.
                    </Box>
                  </Typography>
                </Box>
              </Grid>
              <Grid item md={2} xs={12}>
                <Box
                  m={3}
                  display="flex"
                  height={"calc(100% - 48px)"}
                  flexDirection={"column"}
                  alignItems="center"
                  justifyContent={"space-between"}
                >
                  <Typography weight={"bold"}>$10300</Typography>
                  <Typography variant={"caption"} uppercase>
                    per week
                  </Typography>
                  <Button variant={"contained"} color={"primary"}>
                    Learn More
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Widget>
        </Grid>
          <Grid item xs={12} md={4}>
            <Box
              display={"flex"}
              flexDirection={"column"}
            >
              <Box style={{ display: "inline-flex" }}>
                <Button
                  variant={"contained"}
                  select={"true"}
                  style={{ marginRight: 8 }}
                >
                  <RowIcon />
                </Button>
                <Button variant={"contained"}>
                  <GridIcon />
                </Button>
              </Box>
            </Box>
          </Grid>
      </Grid>
    </>
  );
}
