import React from 'react';
import { withStyles } from '@mui/styles';
import { Typography } from '@mui/material';

const styles = (theme) => ({
  quote: {
    fontStyle: 'italic',
    margin: '1rem',
  },
  author: {
    fontSize: '0.85rem',
    fontStyle: 'normal',
  },
  highlighted: {
    fontSize: '1.2rem',
    color: theme.palette.primary.main,
  },
})

const CollapsedWidget = ({ classes }) => {
  return (
    <Typography component={'div'}>
      <blockquote className={classes.quote}>
        "There are no limits. There are plateaus, but you must not stay there, you must go beyond
        them. If it kills you, it kills you. A man must constantly exceed his level."
        <footer className={classes.author}>
        — Bruce Lee
        </footer>
      </blockquote>
      <p>To make a widget initially collapsed just add <code className={classes.highlighted}>collapsed</code> property
        to <code className={classes.highlighted}>.widget</code>.</p>
      <p>To make it locked (prevent dragging) add <code className={classes.highlighted}>.locked</code> class.</p>
  </Typography>
  )
}

export default withStyles(styles)(CollapsedWidget);