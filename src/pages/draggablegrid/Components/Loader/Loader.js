import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { withStyles } from '@mui/styles';

const styles = (theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '3.5rem',
  },  
})

const Loader = ({ classes }) => {
  return (
      <div className={classes.container}>
        <CircularProgress/>
      </div>
  )
}

export default withStyles(styles)(Loader);
