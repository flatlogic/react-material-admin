import React from 'react';
import './Loader.css';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alingItems: 'center',
    margin: '3.5rem',
  },

  loader: {
    
  },

  
})

const Loader = ({ classes }) => {
  return (
      <div className={classes.container}>
        <div className="lds-default">
          <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      </div>
  )
}

export default withStyles(styles)(Loader);