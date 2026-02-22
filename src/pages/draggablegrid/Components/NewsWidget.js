import React from 'react';
import { makeStyles } from 'styles/mui';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import {
  Star as StarIcon,
  Mic as MicIcon,
  Visibility as VisibilityIcon,
  Lock as LockIcon,
  HelpOutline as HelpOutlineIcon,
} from '@mui/icons-material';
import mock from '../mock';

const styles = (theme) => ({
  newsList: {
    marginBottom: 0,
    paddingLeft: 0,
  },
  listRow: {
    display: 'flex',
    listStyle: 'none',
    boxSizing: 'content-box',
    borderTop: `2px solid rgba(185, 185, 185, 0.3)`,
    padding: '12px 12px 12px 0',
    cursor: 'pointer',
    '&:last-child': {
      height: 'auto'
    }
  },
  iconBlock: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    '@media (max-width: 425px)': {
      display: 'none',
    }
  },
  icon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
    width: 60,
    height: 60,
    borderRadius: '50%',
    color: '#fff',
  },
  newsItemInfo: {
    marginLeft: '1rem',
  },
  newsHeader: {
    textDecoration: 'none',
    textTransform: 'uppercase',
    color: '#536DFE',
  },
  timeBlock: {
    marginTop: 10,
    fontSize: '0.9rem',
    color: theme.palette.text.secondary,
    display: 'block',
  }
})

const useStyles = makeStyles(styles);

const NewsWidget = () => {
  const classes = useStyles();
  const getNewsIcon = (icon) => {
    switch (icon) {
      case 'star':
        return <StarIcon />;
      case 'microphone':
        return <MicIcon />;
      case 'eye':
        return <VisibilityIcon />;
      case 'lock':
        return <LockIcon />;
      default:
        return <HelpOutlineIcon />;
    }
  };

  return (
    <ul className={classes.newsList}>
      {mock.mainData.news.map(item => (
        <li className={classes.listRow} key={item.title}>
          <div className={classes.iconBlock}>
            <span className={`${classes.icon}`} style={{ backgroundColor: item.background }}>
              {getNewsIcon(item.icon)}
            </span>
          </div>
          <div className={classes.newsItemInfo}>
            <Typography variant="h5">
              <Link className={classes.newsHeader} to="/app/grid">
                {item.title}
              </Link>
            </Typography>
            <div>
              {item.description}
            </div>
            <time className={classes.timeBlock}>{item.date}</time>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default NewsWidget;
