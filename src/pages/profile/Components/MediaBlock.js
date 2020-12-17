import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import DocIcon from '../Icons/DocIcon';
import ProjectIcon from '../Icons/ProjectIcon';
import UsersIcon from '../Icons/UsersIcon';
import FollowIcon from '../Icons/FollowIcon';

const styles = (theme) => ({
  mediaIndicator: {
    fontSize: 18,
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '22px 0',
    '& strong': {
      margin: '1px 0',
    },
    '& span': {
      fontSize: 13,
      opacity: .6,
    }
  },
  // iconWraper: {
  //   position: 'relative',
  //   '&:before': {
  //     content: '""',
  //     position: 'absolute',
  //     width: 30,
  //     height: 30,
  //     background: '#FEB35D',
  //     top: 0,
  //     left: '50%',
  //     transform: 'translateX(-50%)',
  //     borderRadius: '50%',
  //   }
  // },
  mediaIconsWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    '@media (max-width: 1280px)': {
      marginTop: 40,
    }
  }
})

const MediaBlock = ({ classes }) => {
  return (
    <div className={classes.mediaIconsWrapper}>
      <div className={classes.mediaIndicator}>
        <DocIcon/>
        <strong className={classes.mediaValue}>194</strong>
        <span className={classes.mediaLabel}>Posts</span>
      </div>
      <div className={classes.mediaIndicator}>
        <ProjectIcon />
        <strong className={classes.mediaValue}>554</strong>
        <span className={classes.mediaLabel}>Projects</span>
      </div>
      <div className={classes.mediaIndicator}>
        <UsersIcon />
        <strong className={classes.mediaValue}>12.8k</strong>
        <span className={classes.mediaLabel}>Followers</span>
      </div>
      <div className={classes.mediaIndicator}>
        <FollowIcon />
        <strong className={classes.mediaValue}>1.1k</strong>
        <span className={classes.mediaLabel}>Following</span>
      </div>
    </div>
  )
}

export default withStyles(styles)(MediaBlock);