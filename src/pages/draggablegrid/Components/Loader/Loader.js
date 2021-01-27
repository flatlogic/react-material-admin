import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alingItems: 'center',
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
