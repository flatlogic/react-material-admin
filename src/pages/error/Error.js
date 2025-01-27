import React from 'react';
import { Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

// styles
import useStyles from './styles';

//components
import { Button, Typography } from '../../components/Wrappers';

// logo
import logo from './logo.svg';

export default function Error() {
  let classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <div className={classes.logotype}>
        <img className={classes.logotypeIcon} src={logo} alt='logo' />
        <Typography variant='h3' className={classes.logotypeText}>
          React Material Admin Full
        </Typography>
      </div>
      <Paper classes={{ root: classes.paperRoot }}>
        <Typography
          variant='h1'
          color='primary'
          className={classnames(classes.textRow, classes.errorCode)}
        >
          404
        </Typography>
        <Typography variant='h5' color='primary' className={classes.textRow}>
          Oops. Looks like the page you're looking for no longer exists
        </Typography>
        <Typography
          variant='h6'
          color='text'
          colorBrightness='hint'
          className={classnames(classes.textRow, classes.safetyText)}
        >
          But we're here to bring you back to safety
        </Typography>
        <Button
          variant='contained'
          color='primary'
          component={Link}
          to='/'
          size='large'
          className={classes.backButton}
        >
          Back to Home
        </Button>
      </Paper>
    </Grid>
  );
}
