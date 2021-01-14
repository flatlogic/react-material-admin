import React, { useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useTheme, makeStyles } from '@material-ui/styles';
import Widget from '../../components/Widget';

import mock from './mock';
import { useStyles } from '../typography/Typography';

function DraggableGrid() {
  var classes = useStyles();
  var theme = useTheme();

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Widget>
              1.1 block
            </Widget>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Widget>
              1.2 block
            </Widget>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Widget>
              1.3 block
            </Widget>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Widget>
              1.4 block
            </Widget>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Widget>
              2.1 block
            </Widget>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Widget>
              2.2 block
            </Widget>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Widget>
              2.3 block
            </Widget>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Widget>
              2.4 block
            </Widget>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default DraggableGrid;
