import React from 'react';
import { Grid, LinearProgress, Typography, withStyles } from '@material-ui/core';
import { pink, purple, blue, green, orange, yellow, red } from '@material-ui/core/colors';
import { ShowChart as ShowChartIcon } from '@material-ui/icons';
import { ResponsiveContainer, ComposedChart, AreaChart, CartesianGrid, Line, Area, Tooltip, PieChart, Pie, Cell } from 'recharts';
import classnames from 'classnames';


import mock from './mock';
import Widget from '../../components/Widget';
import PageTitle from '../../components/PageTitle';

import Table from './components/Table/Table';
import BigStat from './components/BigStat/BigStat';

function getMainChartData() { // eslint-disable-line
  function generateRandomPicks(minPoint, maxPoint, picksAmount, xMax) {
    let x = 0;
    let y = 0;
    const result = [];
    const xStep = 1;
    const smoothness = 0.3;
    const pointsPerPick = Math.ceil(xMax / ((picksAmount * 2) + 1) / 2);

    const maxValues = [];
    const minValues = [];

    for (let i = 0; i < picksAmount; i += 1) {
      const minResult = minPoint + Math.random();
      const maxResult = maxPoint - Math.random();

      minValues.push(minResult);
      maxValues.push(maxResult);
    }

    let localMax = maxValues.shift(0);
    let localMin = 0;
    let yStep = parseFloat(((localMax - localMin) / pointsPerPick).toFixed(2));

    for (let j = 0; j < Math.ceil(xMax); j += 1) {
      result.push([x, y]);

      if ((y + yStep >= localMax) || (y + yStep <= localMin)) {
        y += yStep * smoothness;
      } else if ((result[result.length - 1][1] === localMax) || (result[result.length - 1][1] === localMin)) {
        y += yStep * smoothness;
      } else {
        y += yStep;
      }

      if (y > localMax) {
        y = localMax;
      } else if (y < localMin) {
        y = localMin;
      }

      if (y === localMin) {
        localMax = maxValues.shift(0) || localMax;

        const share = (localMax - localMin) / localMax;
        const p = share > 0.5 ? Math.round(pointsPerPick * 1.2) : Math.round(pointsPerPick * share);

        yStep = parseFloat(((localMax - localMin) / p).toFixed(2));
        yStep *= Math.abs(yStep);
      }

      if (y === localMax) {
        localMin = minValues.shift(0) || localMin;

        const share = (localMax - localMin) / localMax;
        const p = share > 0.5 ? Math.round(pointsPerPick * 1.5) : Math.round(pointsPerPick * 0.5);

        yStep = parseFloat(((localMax - localMin) / p).toFixed(2));
        yStep *= -1;
      }

      x += xStep;
    }

    return result;
  }

  const d1 = generateRandomPicks(0.2, 3, 4, 90);
  const d2 = generateRandomPicks(0.4, 3.8, 4, 90);
  const d3 = generateRandomPicks(0.2, 4.2, 3, 90);

  const result = [];

  for (let i = 1; i < d1.length; i++) {
    result.push({ unique: d1[i][1], visits: d2[i][1], conversion_rate: d3[i][1] });
  }

  return result;
}

const data = getMainChartData();

const getRandomData = length => new Array(length).fill().map(() => ({ value: Math.floor(Math.random() * 10)}));

const PieChartData = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const COLORS = [blue[500], orange[500], yellow[500], red[500]];

console.log(getRandomData(10));

const Dashboard = ({ classes }) => (
  <React.Fragment>
    <PageTitle title="Dashboard" button="Latest Reports" />
    <Grid container spacing={32}>
      <Grid item md={3} sm={6} xs={12}>
        <Widget title="Visits Today" upperTitle bodyClass={classes.visitsBody} className={classes.card}>
          <Grid container justify="space-between" alignItems="center">
            <Typography variant="h3">192</Typography>
            <ShowChartIcon style={{ fill: green[500], fontSize: '2rem' }}/>
          </Grid>
          <Grid container direction="row" justify="space-between" alignItems="center">
            <Grid item direction="column" alignItems="center">
              <Typography variant="h6">32</Typography>
              <Typography>Registrations</Typography>
            </Grid>
            <Grid item direction="column" alignItems="center">
              <Typography variant="h6">32</Typography>
              <Typography>Sign Out</Typography>
            </Grid>
            <Grid item direction="column" alignItems="center">
              <Typography variant="h6">3.25%</Typography>
              <Typography>Rate</Typography>
            </Grid>
          </Grid>
        </Widget>
      </Grid>
      <Grid item md={3} sm={6} xs={12}>
        <Widget title="Revenue Breakdown" upperTitle className={classes.card}>
          <Grid container spacing={16}>
            <Grid item sm={6}>
              <PieChart width={144} height={144}>
                <Pie
                  data={PieChartData}
                  innerRadius={40}
                  outerRadius={60}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {
                    data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                  }
                </Pie>
              </PieChart>
            </Grid>
            <Grid item sm={6}>
              <div className={classes.pieChartLegendWrapper}>
                {PieChartData.map(({name, value}, index) => (
                  <div className={classes.legendItemContainer}>
                    <div className={classes.dot} style={{ backgroundColor: COLORS[index % COLORS.length]}} />
                    <Typography><b>{name}</b> - {value}</Typography>
                  </div>
                ))}
              </div>
            </Grid>
          </Grid>
        </Widget>
      </Grid>
      <Grid item md={3} sm={6} xs={12}>
        <Widget title="App Performance" upperTitle className={classes.card}>
          <div className={classes.performanceLegendWrapper}>
            <div className={classes.legendElement}>
              <div className={classnames(classes.dot, classes.progressBarIntegration)} />
              <Typography>Integration</Typography>
            </div>
            <div className={classes.legendElement}>
              <div className={classnames(classes.dot, classes.progressBarSDK)} />
              <Typography>SDK</Typography>
            </div>
          </div>
          <div className={classes.progressSection}>
            <Typography variant="h6" className={classes.progressSectionTitle}>SDK</Typography>
            <LinearProgress variant="determinate" value={60} classes={{ barColorPrimary: classes.progressBarIntegration }} className={classes.progress} />
            <LinearProgress variant="determinate" value={47} classes={{ barColorPrimary: classes.progressBarSDK }} />
          </div>
          <div>
            <Typography variant="h6" className={classes.progressSectionTitle}>Integration</Typography>
            <LinearProgress variant="determinate" value={74} classes={{ barColorPrimary: classes.progressBarIntegration }} className={classes.progress} />
            <LinearProgress variant="determinate" value={62} classes={{ barColorPrimary: classes.progressBarSDK }} />
          </div>
        </Widget>
      </Grid>
      <Grid item md={3} sm={6} xs={12}>
        <Widget title="Server Overview" upperTitle className={classes.card}>
          <div className={classes.serverOverviewElement}>
            <Typography className={classes.serverOverviewElementText}>60% / 37°С / 3.3 Ghz</Typography>
            <div className={classes.serverOverviewElementChartWrapper}>
              <ResponsiveContainer height={50} width='99%'>
                <AreaChart data={getRandomData(10)}>
                  <Area type="monotone" dataKey="value" stroke={blue[500]} fill={blue[500]} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className={classes.serverOverviewElement}>
            <Typography className={classes.serverOverviewElementText}>54% / 31°С / 3.3 Ghz</Typography>
            <div className={classes.serverOverviewElementChartWrapper}>
              <ResponsiveContainer height={50} width='99%'>
                <AreaChart data={getRandomData(10)}>
                  <Area type="monotone" dataKey="value" stroke={orange[500]} fill={orange[500]} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className={classes.serverOverviewElement}>
            <Typography className={classes.serverOverviewElementText}>57% / 21°С / 3.3 Ghz</Typography>
            <div className={classes.serverOverviewElementChartWrapper}>
              <ResponsiveContainer height={50} width='99%'>
                <AreaChart data={getRandomData(10)}>
                  <Area type="monotone" dataKey="value" stroke={yellow[500]} fill={yellow[500]}  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </Widget>
      </Grid>
      <Grid item xs={12}>
        <Widget title="Daily Line Chart" noBodyPadding upperTitle>
          <ResponsiveContainer width="100%" height={350}>
            <ComposedChart margin={{ top: 0, right: -15, left: -15, bottom: 0 }} data={data}>
              <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
              <Area type="monotone" dataKey="unique" stroke={purple[500]} strokeWidth={3} fill={purple[400]} />
              <Line type="monotone" dataKey="visits" stroke={pink[500]} strokeWidth={3} dot={false} />
              <Line type="monotone" dataKey="conversion_rate" stroke={blue[500]} strokeWidth={3} />
              <Tooltip />
            </ComposedChart>
          </ResponsiveContainer>
        </Widget>
      </Grid>
      {mock.bigStat.map(stat => (
        <Grid item md={4} sm={6} xs={12}>
          <BigStat {...stat} />
        </Grid>
      ))}
      <Grid item xs={12}>
        <Widget title="Support Requests" upperTitle noBodyPadding bodyClass={classes.tableWidget}>
          <Table data={mock.table} />
        </Widget>
      </Grid>
    </Grid>
  </React.Fragment>
);

const styles = theme => ({
  card: {
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  progressSection: {
    marginBottom: theme.spacing.unit * 2,
  },
  progressTitle: {
    marginBottom: theme.spacing.unit * 2,
  },
  progress: {
    marginBottom: theme.spacing.unit,
  },
  pieChartLegendWrapper: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  legendItemContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  dot: {
    width: 5,
    height: 5,
    marginRight: theme.spacing.unit,
    borderRadius: '50%',
  },
  visitsBody: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  tableWidget: {
    overflowX: 'auto',
  },
  progressBarSDK: {
    backgroundColor: COLORS[0],
  },
  progressBarIntegration: {
    backgroundColor: COLORS[1],
  },
  performanceLegendWrapper: {
    display: 'flex',
    marginBottom: theme.spacing.unit,
  },
  legendElement: {
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing.unit * 2,
  },
  serverOverviewElement: {
    display: 'flex',
    alignItems: 'center',
    maxWidth: '100%',
  },
  serverOverviewElementText: {
    minWidth: 145,
    paddingRight: theme.spacing.unit * 2,
  },
  serverOverviewElementChartWrapper: {
    width: '100%'
  }
});

export default withStyles(styles, { withTheme: true })(Dashboard);
