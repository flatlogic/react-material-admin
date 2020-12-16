import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import { useTheme, makeStyles } from "@material-ui/styles";

import { Badge, Chip } from '../../components/Wrappers';
import Tabs from './Components/Tabs';
import ProfileIcon from '../../images/profile/profilePhoto.png';
import BehanceIcon from '../../images/profile/behanceIcon.png';
import MediumIcon from '../../images/profile/mediumIcon.png';
import FacebookIcon from '../../images/profile/facebookIcon.png';
import DribbleIcon from '../../images/profile/dribbleIcon.png';
import InstagramIcon from '../../images/profile/instagramIcon.png';

// styles
import useStyles from "./styles";

// components
import Widget from "../../components/Widget/Widget";

function Profile() {
  var classes = useStyles();
  var theme = useTheme();

  return (
    <Grid container spacing={3}>
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
              {/* Исправить ширину и высоту бэйджа  */}
              </div>
            </Grid>
            <Grid item xs={12} sm={7} md={7} lg={7}>
              <div class={classes.profileDescription}>
                <Typography variant="h3" className={classes.profileTitle}>
                {/* Сделать нужный шрифт!  */}
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
                  <a href="#"><img src={FacebookIcon} alt="FacebookIcon" /></a>
                  <a href="#"><img src={MediumIcon} alt="MediumIcon" /></a>
                  <a href="#"><img src={DribbleIcon} alt="DribbleIcon" /></a>
                  <a href="#"><img src={BehanceIcon} alt="BehanceIcon" /></a>
                  <a href="#"><img src={InstagramIcon} alt="InstagramIcon" /></a>
                  {/* Использовать вместо картинок иконки */}
                </div>
              </div>
            </Grid>
          </Grid>
        </Widget>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={7}>
        <Widget title="Files">
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Tabs />
            </Grid>
          </Grid>
        </Widget>
      </Grid>
      <Grid item xs={12} lg={5}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4} md={4} lg={5}>
            <Widget
              title="Widget"
              className={classes.card}
              bodyClass={classes.fullHeightBody}
            >
            </Widget>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={7}>
            <Widget
              title="Widget"
              className={classes.card}
              bodyClass={classes.fullHeightBody}
            >
            </Widget>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={12}>
            <Widget
              title="Widget"
              className={classes.card}
              bodyClass={classes.fullHeightBody}
            >
            </Widget>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} lg={4}>
        <Widget
          title="New Widget"
          className={classes.card}
          bodyClass={classes.fullHeightBody}
        >
        </Widget>
      </Grid>
      <Grid item xs={12} lg={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6} lg={12}>
            <Widget
              title="Container Widget 2"
              className={classes.card}
              bodyClass={classes.fullHeightBody}
            >
            </Widget>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={12}>
            <Widget
              title="Container Widget 2"
              className={classes.card}
              bodyClass={classes.fullHeightBody}
            >
            </Widget>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Widget
              title="New Widget"
              className={classes.card}
              bodyClass={classes.fullHeightBody}
            >
            </Widget>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

// #######################################################################

export default Profile;
