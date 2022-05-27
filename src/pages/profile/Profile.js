import React from "react";
import { Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/styles";

import { Badge, Chip, Button } from '../../components/Wrappers';
import Tabs from './Components/Tabs';
import Donut from './Components/DonutChart';
import RNSWidget from './Components/RNSWIdget';
import ToDo from './Components/ToDo';
import Calendar from './Components/Calendar/Calendar';
import MediaBlock from './Components/MediaBlock';
import ViewsWidget from './Components/ViewsWidget';
import ProfileIcon from '../../images/profile/profilePhoto.svg';
import BehanceIcon from '../../images/profile/BehanceIcon.svg';
import MediumIcon from '../../images/profile/MediumIcon.svg';
import FacebookIcon from '../../images/profile/FacebookIcon.svg';
import DribbleIcon from '../../images/profile/DribbleIcon.svg';
import InstagramIcon from '../../images/profile/InstagramIcon.svg';
import CloudIcon from './Icons/CloudIcon' 

// styles
import useStyles from "./styles";

// components
import Widget from "../../components/Widget/Widget";

function Profile() {
  let classes = useStyles();
  let theme = useTheme();

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6} md={6} lg={5}>
        <Widget>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={5} md={5} lg={5}>
              <div className={classes.visualProfile}>
                <div className={classes.profileImage}>
                  <img width="100%" src={ProfileIcon} alt="profile" />
                </div>
                <Chip
                  className={classes.chipMargin}
                  color="secondary"
                  label={"PRO"}
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={7} md={7} lg={7}>
              <div className={classes.profileDescription}>
                <Typography variant="h3" className={classes.profileTitle}>
                  Julee Cruise
                </Typography>
                <span className={classes.profileSubtitle}>Product Designer</span>
                <a className={classes.profileExternalRes} href="https://flatlogic.com">Flatlogic.com</a>
                <div>
                  <Badge type="tag" badgeContent={"UI/UX"} color="primary"/>
                  <Badge type="tag" badgeContent={"Art"} color="warning"/>
                  <Badge type="tag" badgeContent={"Design"} color="secondary"/>
                  <Badge type="tag" badgeContent={"Illustration"} color="warning"/>
                  <Badge type="tag" badgeContent={"Mobile"} color="success"/>
                </div>
                <div className={classes.socials}>
                  {/* eslint-disable-next-line */}
                  <a href="#"><img src={FacebookIcon} alt="FacebookIcon" /></a>
                  {/* eslint-disable-next-line */}
                  <a href="#"><img src={MediumIcon} alt="MediumIcon" /></a>
                  {/* eslint-disable-next-line */}
                  <a href="#"><img src={DribbleIcon} alt="DribbleIcon" /></a>
                  {/* eslint-disable-next-line */}
                  <a href="#"><img src={BehanceIcon} alt="BehanceIcon" /></a>
                  {/* eslint-disable-next-line */}
                  <a href="#"><img src={InstagramIcon} alt="InstagramIcon" /></a>
                </div>
              </div>
            </Grid>
          </Grid>
        </Widget>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={7}>
        <Widget title="Files" >
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Tabs />
            </Grid>
          </Grid>
        </Widget>
      </Grid>

      <Grid item xs={12} lg={5}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4} md={4} lg={6}>
            <Widget
              bodyClass={classes.mediaBlockPadding}
              title="Media"
            >
              <Grid container spacing={1}>
                <MediaBlock />
              </Grid>
            </Widget>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={6}>
            <Widget
              className={classes.adjustHeight}
              title="Projects"
            >
              <Donut />
            </Widget>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={12}>
            <Widget>
              <RNSWidget/>
            </Widget>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} lg={4}>
        <Widget
          title="Tasks"
          bodyClass={classes.widgetBody}
        >
          <ToDo />
        </Widget>
      </Grid>
      <Grid item xs={12} lg={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6} lg={12}>
            <Widget>
              <Calendar />
            </Widget>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={12}>
            <Widget>
              <ViewsWidget color={theme.palette.primary.main} title="Views" subtitle="7.2%" value={7.156} />
            </Widget>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <div className={classes.updateWidget}>
              <div className={classes.updateWidgetFlexContainer}>
                <CloudIcon />
                <div className={classes.updateLabel}>Updates</div>
                <div className={classes.spacer}></div>
                <Button className={classes.detailsBtn} variant="outlined" color="transparent">DETAILS</Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

// #######################################################################

export default Profile;
