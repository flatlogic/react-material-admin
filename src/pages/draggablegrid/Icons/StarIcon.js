import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import StarIcon from '@material-ui/icons/Star';

const styles = (theme) => ({
    iconWrap: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 50,
      width: 50,
      borderRadius: 25,
      backgroundColor: 'fd5f00',
      marginRight: 10,
    },
})

const Star = ({ classes }) => {
    return (
        <div className={classes.iconWrap}>
            <StarIcon />
        </div>
    )
}

export default withStyles(styles)(Star);