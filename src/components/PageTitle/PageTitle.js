import React from 'react';
import { Button } from '@mui/material';

// styles
import useStyles from './styles';

// components
import { Typography } from '../Wrappers';

export default function PageTitle(props) {
  let classes = useStyles();

  return (
    <div className={classes.pageTitleContainer}>
      <Typography className={classes.typo} variant='h1' size='sm'>
        {props.title}
      </Typography>
      {props.button && (
        <Button
          classes={{ root: classes.button }}
          variant='contained'
          size='large'
          color='secondary'
        >
          {props.button}
        </Button>
      )}
    </div>
  );
}
