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
  Divider,
} from "@material-ui/core";
import {
  BorderAll as GridIcon,
  FormatAlignJustify as RowIcon,
  Inbox as InboxIcon,
  Drafts as DraftsIcon,
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

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

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
              <Button
                variant={"contained"}
                select={"true"}
                className={classes.adjustRightBorderRadius}
              >
                <RowIcon />
              </Button>
              <Button
                variant={"contained"}
                className={classes.adjustLeftBorderRadius}
              >
                <GridIcon />
              </Button>
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
              <Typography block>
                Results{" "}
                <Typography weight="medium" display="inline">
                  Filtering
                </Typography>
                <Box fontSize={".8rem"}>
                  Listed content is categorized by the following groups:
                </Box>
                <List component="nav" aria-label="main mailbox folders">
                  <ListItem button>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Inbox" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Drafts" />
                  </ListItem>
                </List>
                <Divider />
                <List component="nav" aria-label="secondary mailbox folders">
                  <ListItem button>
                    <ListItemText primary="Trash" />
                  </ListItem>
                  <ListItemLink href="#simple-list">
                    <ListItemText primary="Spam" />
                  </ListItemLink>
                </List>
              </Typography>
            </Box>
          </Grid>
          <Grid item md={8} xs={12}>
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
                      <Box fontWeight={"fontWeightBold"} fontSize="h4.fontSize">
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
        </Grid>
      </Grid>
    </>
  );
}
