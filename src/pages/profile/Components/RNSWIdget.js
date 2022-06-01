import React from 'react';
import { withStyles } from '@mui/styles';
import { Grid, IconButton } from "@mui/material";
import { Bookmark as BookmarkIcon } from '@mui/icons-material';

import rnsHero from "../../../images/profile/rnsHero.png";

const styles = (theme) => ({
  header: {
    fontSize: 18,
    fontWeight: 500,
  },
  rnsImgWrap: {
    '& img': {
      maxWidth: '100%',
    },
  },
  author: {
    opacity: .8,
    fontSize: 12,
  },
  text: {
    fontWeight: theme.typography.fontWeightMedium,
  },
  date: {
    opacity: .6,
    fontSize: 12,
  },
  flexContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconColor: {
    color: '#FFC35F',
    padding: 0,
  },
})

const RNSWidget = ({ classes }) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <span className={classes.header}>TOP 5 REACT NATIVE STARTER KITS</span>
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <div className={classes.rnsImgWrap}>
          <img src={rnsHero} alt="RNS" />
        </div>
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <div>
          <span className={classes.author}>Nastassia Ovchinnikova</span>
          <p className={classes.text} >React Native allows us to create a boilerplate that have been crafted for both platforms. The ability to create an app both for Android and iOS...</p>
          <div className={classes.flexContainer}>
            <span className={classes.date}>11 Sep 2020 | 5 min read</span>
            <IconButton classes={{ root: classes.iconColor }} aria-label="bookmark">
              <BookmarkIcon/>
            </IconButton>
          </div>
        </div>
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(RNSWidget);