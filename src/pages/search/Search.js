import React from "react";
import {
  Grid,
  Box,
  Select,
  FormControl,
  MenuItem,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ButtonGroup
} from "@mui/material";
import Pagination from '@mui/material/Pagination';

import {
  BorderAll as GridIcon,
  FormatAlignJustify as RowIcon
} from "@mui/icons-material";
import useStyles from "./styles";

//images
import img1 from "../../images/search/img1.jpg";
import img2 from "../../images/search/img2.jpg";
import img3 from "../../images/search/img3.jpg";
import img4 from "../../images/search/img4.jpg";

//components
import { Typography, Button, Link, Chip } from "../../components/Wrappers";
import Widget from "../../components/Widget";

export default function SearchComp() {
  const [select, setSelect] = React.useState({
    row: true,
    grid: false
  });
  const [popularField, setValues] = React.useState("Popular");
  const [timeField, setTimeField] = React.useState("All Time");
  const handleChange = event => {
    setValues(event.target.value);
  };
  const handleChangeTimeField = event => {
    setTimeField(event.target.value);
  };
  const toggleSelect = () => {
    setSelect(prevState => ({
      row: !prevState.row,
      grid: !prevState.grid
    }));
  };
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Box display="flex" alignItems="center">
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
            <Box style={{ display: "inline-flex", marginLeft: "auto" }}>
              <ButtonGroup
                color="primary"
                size="large"
                aria-label="large contained secondary button group"
              >
                <Button
                  select={select.row ? 1 : 0}
                  onClick={() => toggleSelect()}
                  className={classes.adjustRightBorderRadius}
                >
                  <RowIcon />
                </Button>
                <Button
                  select={select.grid ? 1 : 0}
                  onClick={() => toggleSelect()}
                  className={classes.adjustLeftBorderRadius}
                >
                  <GridIcon />
                </Button>
              </ButtonGroup>
            </Box>
          </Box>
          <Box my={2}>
            <Typography variant={"subtitle2"}>
              About 94 700 000 (0.39 sec.) results
            </Typography>
          </Box>
        </Grid>
        <Grid item container xs={12} direction="row-reverse" spacing={3}>
          <Grid item xs={12} md={4}>
            <Box display={"flex"} flexDirection={"column"}>
              <Typography block variant="h5">
                Results{" "}
                <Typography weight="medium" variant="h5" display="inline">
                  Filtering
                </Typography>
                <Box fontSize={".875rem"}>
                  Listed content is categorized by the following groups:
                </Box>
                <List component="nav" aria-label="main mailbox folders">
                  <ListItem button>
                    <ListItemText primary="Hot Ideas" />
                    <ListItemIcon>
                      <Chip label="34" color="primary" />
                    </ListItemIcon>
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="Latest Pictures" />
                    <ListItemIcon>
                      <Chip label="9" color="secondary" />
                    </ListItemIcon>
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="Labels of Day" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="Recent Movies" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="Globals" />
                    <ListItemIcon>
                      <Chip label="18" color="warning" />
                    </ListItemIcon>
                  </ListItem>
                </List>
              </Typography>
            </Box>
          </Grid>
          <Grid item container spacing={3} md={8} xs={12}>
            <Grid item>
              <Widget disableWidgetMenu noBodyPadding inheritHeight>
                <Grid container>
                  <Grid item md={2} xs={12}>
                    <img
                      src={img1}
                      alt="admin templates"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </Grid>
                  <Grid item md={8} xs={12}>
                    <Box display={"flex"} flexDirection={"column"} m={3}>
                      <Typography block>
                        <Box
                          fontWeight={"fontWeightBold"}
                          fontSize="h5.fontSize"
                        >
                          <Link color="primary">
                            Next generation admin template
                          </Link>{" "}
                        </Box>
                        <Box fontSize={".875rem"} mb={1}>
                          New York, NY 2018
                        </Box>
                        <Box>
                          Not just usual Metro. But something bigger. Not just
                          usual widgets, but real widgets. Not just yet another
                          admin template, but next generation admin template.
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
                      <Typography weight={"bold"}>$9700</Typography>
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
            <Grid item>
              <Widget disableWidgetMenu noBodyPadding inheritHeight>
                <Grid container>
                  <Grid item md={2} xs={12}>
                    <img
                      src={img2}
                      alt="admin templates"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </Grid>
                  <Grid item md={8} xs={12}>
                    <Box display={"flex"} flexDirection={"column"} m={3}>
                      <Typography block>
                        <Box
                          fontWeight={"fontWeightBold"}
                          fontSize="h5.fontSize"
                          display={"flex"}
                        >
                          <Link color="secondary">
                            Try. Posted by Okendoken
                          </Link>{" "}
                          <Chip
                            label="Best Deal!"
                            color={"secondary"}
                            style={{ marginLeft: "auto" }}
                          />
                        </Box>
                        <Box fontSize={".875rem"} mb={1}>
                          Los Angeles, NY 20188
                        </Box>
                        <Box>
                          You will never know exactly how something will go
                          until you try it. You can think three hundred times
                          and still have no precise result.
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
                      <Button variant={"contained"} color={"secondary"}>
                        Learn More
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Widget>
            </Grid>
            <Grid item>
              <Widget disableWidgetMenu noBodyPadding inheritHeight>
                <Grid container>
                  <Grid item md={2} xs={12}>
                    <img
                      src={img3}
                      alt="admin templates"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </Grid>
                  <Grid item md={8} xs={12}>
                    <Box display={"flex"} flexDirection={"column"} m={3}>
                      <Typography block>
                        <Box
                          fontWeight={"fontWeightBold"}
                          fontSize="h5.fontSize"
                        >
                          <Link color="warning">Vitaut the Great</Link>{" "}
                        </Box>
                        <Box fontSize={".875rem"} mb={1}>
                          New York, NY 20188
                        </Box>
                        <Box>
                          The Great Prince of the Grand Duchy of Lithuania he
                          had stopped the invasion to Europe of Timur (Tamerlan)
                          from Asia heading a big Army of Belarusians,
                          Lithuanians.
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
                      <Typography weight={"bold"}>$3200</Typography>
                      <Typography variant={"caption"} uppercase>
                        per week
                      </Typography>
                      <Button variant={"contained"} color={"warning"}>
                        Learn More
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Widget>
            </Grid>
            <Grid item>
              <Widget disableWidgetMenu noBodyPadding inheritHeight>
                <Grid container>
                  <Grid item md={2} xs={12}>
                    <img
                      src={img4}
                      alt="admin templates"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </Grid>
                  <Grid item md={8} xs={12}>
                    <Box display={"flex"} flexDirection={"column"} m={3}>
                      <Typography block>
                        <Box
                          fontWeight={"fontWeightBold"}
                          fontSize="h5.fontSize"
                        >
                          <Link color="success">
                            Can I use CSS3 Radial-Gradient?
                          </Link>{" "}
                        </Box>
                        <Box fontSize={".875rem"} mb={1}>
                          Minsk, NY 20188
                        </Box>
                        <Box>
                          Yes you can! Further more, you should! It let's you
                          create really beautiful images either for elements or
                          for the entire background.
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
                      <Typography weight={"bold"}>$2400</Typography>
                      <Typography variant={"caption"} uppercase>
                        per week
                      </Typography>
                      <Button variant={"contained"} color={"success"}>
                        Learn More
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Widget>
              <Box
                m={4}
                display="flex"
                alignItems="center"
                justifyContent={"center"}
              >
                <Pagination 
                  count={10} 
                  color="primary" 
                  size="large"
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
