import React from 'react';
import { Grid } from '@material-ui/core';

import Widget from '../../components/Widget';
import ApexLineChart from './components/ApexLineChart';
import ApexHeatmap from './components/ApexHeatmap'

const Charts = (props) => (
  <Grid container spacing={32}>
    <Grid item xs={12} md={6}>
      <Widget title="Apex Line Chart" upperTitle noBodyPadding>
        <ApexLineChart />
      </Widget>
    </Grid>
    <Grid item xs={12} md={6}>
      <Widget title="Apex Heatmap" upperTitle noBodyPadding>
        <ApexHeatmap />
      </Widget>
    </Grid>
  </Grid>
);

export default Charts;