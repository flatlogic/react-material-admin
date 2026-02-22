import { Grid, Paper } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import classnames from 'classnames';

// styles
import useStyles from './styles';

//components
import { Button, Typography } from '../../components/Wrappers';

// logo
import logo from './logo.svg';

const ERROR_CONTENT = {
  403: {
    title: 'Access denied',
    description: "You don't have permissions to view this page",
  },
  404: {
    title: "Page doesn't exist",
    description: "Looks like the page you're looking for no longer exists",
  },
  500: {
    title: 'Server error',
    description: 'Something went wrong while processing your request',
  },
};

export default function Error({ code }) {
  let classes = useStyles();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const queryCode = Number(queryParams.get('code'));
  const errorCode = Number(code) || queryCode || 404;
  const content = ERROR_CONTENT[errorCode] || ERROR_CONTENT[404];

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
          {errorCode}
        </Typography>
        <Typography variant='h5' color='primary' className={classes.textRow}>
          {content.title}
        </Typography>
        <Typography
          variant='h6'
          color='text'
          colorBrightness='hint'
          className={classnames(classes.textRow, classes.safetyText)}
        >
          {content.description}
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
