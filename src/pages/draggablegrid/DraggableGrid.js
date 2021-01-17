import React, { useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useTheme, makeStyles } from '@material-ui/styles';
import Widget from '../../components/Widget';
import Sortable from 'react-sortablejs'

import mock from './mock';
import useStyles from "./styles";

function DraggableGrid() {
  var classes = useStyles();
  var theme = useTheme();

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <Sortable options={{
              group: "shared",
              animation: 550,
              ghostClass: 'widget-placeholder-react'
            }}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Widget className={classes.widgetLayout}
                    title="Default Widget">
              <Typography >
                {mock.mainData.default.map(item => (  
                    <p key={item.value}>{item.value}</p>
                ))} 
              </Typography>
            </Widget>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Widget className={classes.widgetLayout}>
              1.2 block
            </Widget>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Widget className={classes.widgetLayout}>
              1.3 block
            </Widget>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Widget className={classes.widgetLayout}>
              1.4 block
            </Widget>
          </Grid>
        </Sortable>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <Sortable options={{
              group: "shared",
              animation: 550,
              ghostClass: 'widget-placeholder-react'
            }}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Widget className={classes.widgetLayout}>
              2.1 block
            </Widget>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Widget className={classes.widgetLayout}>
              2.2 block
            </Widget>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Widget className={classes.widgetLayout}>
              2.3 block
            </Widget>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Widget className={classes.widgetLayout}>
              2.4 block
            </Widget>
          </Grid>
          </Sortable>
      </Grid>
    </Grid>
  )
}

export default DraggableGrid;