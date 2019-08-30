import React from "react";
import { Grid, Box, Tabs, Tab } from "@material-ui/core";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
// components
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
import { Typography, Button } from "../../components/Wrappers";
import PhoneIcon from '@material-ui/icons/Phone';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function TabsComp() {
  // const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function handleChangeIndex(index) {
    setValue(index);
  }

  return (
    <div>
      <PageTitle title="Tabs" />
      <Grid container spacing={6}>
        <Grid item md={6}>
          <Widget title="Tabs Example" disableWidgetMenu inheritHeight>
            <AppBar position="static" color="default" style={{marginTop: 10}}>
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
                aria-label="full width tabs example"
              >
                <Tab label="Item One" {...a11yProps(0)} />
                <Tab label="Item Two" {...a11yProps(1)} />
                <Tab label="Item Three" {...a11yProps(2)} />
              </Tabs>
            </AppBar>
            <SwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={value}
              onChangeIndex={handleChangeIndex}
            >
              <TabPanel value={value} index={0} dir={theme.direction}>
                Tabs-enabled widget You will never know exactly how something
                will go until you try it. You can think three hundred times and
                still have no precise result. If you see attractive girl all you
                need to do is to go and ask her to give you her phone. You don’t
                need to think about HOW it can turn out. All you have to do is
                to GO and DO IT. It should be super-fast and easy. No
                hesitation. You ask me: “What to do with these fearful thoughts
                preventing me from doing that?” The answer is to ignore them,
                because they can’t disappear immediately. The same thing is for
                startups and ideas. If you have an idea right away after it
                appears in your mind you should go and make a first step to
                implement it.
                <Box display="flex" justifyContent={"flex-end"}>
                  <Box m={1}>
                    <Button variant={"contained"} color={"secondary"}>
                      Cancel
                    </Button>
                  </Box>
                  <Box m={1}>
                    <Button variant={"contained"} color={"primary"}>
                      Some button
                    </Button>
                  </Box>
                </Box>
              </TabPanel>
              <TabPanel value={value} index={1} dir={theme.direction}>
                Why don't use Lore Ipsum? I think if some one says don't use
                lore ipsum it's very controversial point. I think the opposite
                actually. Everyone knows what is lore ipsum - it is easy to
                understand if text is lore ipsum.
              </TabPanel>
              <TabPanel value={value} index={2} dir={theme.direction}>
                If you will think too much it will sink in the swamp of never
                implemented plans and ideas or will just go away or will be
                implemented by someone else. 5 months of doing everything to
                achieve nothing. You'll automatically skip - because you know -
                it's just non-informative stub. But what if there some text like
                this one?
              </TabPanel>
            </SwipeableViews>
          </Widget>
        </Grid>

        <Grid item md={6}>
          <Widget title="Icons Tabs" disableWidgetMenu inheritHeight>
            <AppBar position="static" color="default" style={{marginTop: 10}}>
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
                aria-label="full width tabs example"
              >
                <Tab label="Item One" icon={<PhoneIcon />} {...a11yProps(0)} />
                <Tab label="Item Two" icon={<PhoneIcon />} {...a11yProps(1)} />
                <Tab label="Item Three" icon={<PhoneIcon />} {...a11yProps(2)} />
              </Tabs>
            </AppBar>
            <SwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={value}
              onChangeIndex={handleChangeIndex}
            >
              <TabPanel value={value} index={0} dir={theme.direction}>
                Tabs-enabled widget You will never know exactly how something
                will go until you try it. You can think three hundred times and
                still have no precise result. If you see attractive girl all you
                need to do is to go and ask her to give you her phone. You don’t
                need to think about HOW it can turn out. All you have to do is
                to GO and DO IT. It should be super-fast and easy. No
                hesitation. You ask me: “What to do with these fearful thoughts
                preventing me from doing that?” The answer is to ignore them,
                because they can’t disappear immediately. The same thing is for
                startups and ideas. If you have an idea right away after it
                appears in your mind you should go and make a first step to
                implement it.
                <Box display="flex" justifyContent={"flex-end"}>
                  <Box m={1}>
                    <Button variant={"contained"} color={"secondary"}>
                      Cancel
                    </Button>
                  </Box>
                  <Box m={1}>
                    <Button variant={"contained"} color={"primary"}>
                      Some button
                    </Button>
                  </Box>
                </Box>
              </TabPanel>
              <TabPanel value={value} index={1} dir={theme.direction}>
                Why don't use Lore Ipsum? I think if some one says don't use
                lore ipsum it's very controversial point. I think the opposite
                actually. Everyone knows what is lore ipsum - it is easy to
                understand if text is lore ipsum.
              </TabPanel>
              <TabPanel value={value} index={2} dir={theme.direction}>
                If you will think too much it will sink in the swamp of never
                implemented plans and ideas or will just go away or will be
                implemented by someone else. 5 months of doing everything to
                achieve nothing. You'll automatically skip - because you know -
                it's just non-informative stub. But what if there some text like
                this one?
              </TabPanel>
            </SwipeableViews>
          </Widget>
        </Grid>

      </Grid>
    </div>
  );
}
