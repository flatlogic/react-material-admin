import React from 'react';
import { withStyles } from '@mui/styles';

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
  mediaIconsWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    '@media (max-width: 1280px)': {
      marginTop: 40,
    }
  },
  valueLabel: {
    marginBottom: '-8px',
  }
})

const MediaBlock = ({ classes }) => {
  return (
    <div className={classes.mediaIconsWrapper}>
      <div className={classes.mediaIndicator}>
        <DocIcon/>
        <strong className={classes.valueLabel}>194</strong>
        <span>Posts</span>
      </div>
      <div className={classes.mediaIndicator}>
        <ProjectIcon />
        <strong>554</strong>
        <span>Projects</span>
      </div>
      <div className={classes.mediaIndicator}>
        <UsersIcon />
        <strong>12.8k</strong>
        <span>Followers</span>
      </div>
      <div className={classes.mediaIndicator}>
        <FollowIcon />
        <strong>1.1k</strong>
        <span>Following</span>
      </div>
    </div>
  )
}

export default withStyles(styles)(MediaBlock);