import React, { PureComponent } from 'react';
import { Grid, Typography, Select, MenuItem, OutlinedInput, FormControl, InputLabel, withStyles } from "@material-ui/core";
import { grey, green, red } from '@material-ui/core/colors';
import { ShowChart as ShowChartIcon } from '@material-ui/icons';
import classnames from 'classnames';

import Widget from "../../../../components/Widget";

class BigStat extends PureComponent {
  state = { value: 'daily' };

  changeValue = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    const { product, total, registrations, bounce, classes } = this.props;
    const { value } = this.state;

    return (
      <Widget
        title={
          <div className={classes.title}>
            <Typography variant="h5">{product}</Typography>
            <FormControl variant="outlined">
              <InputLabel htmlFor="outlined-age-simple">
                Period
              </InputLabel>
              <Select
                value={this.state.value}
                onChange={this.changeValue}
                input={
                  <OutlinedInput
                    labelWidth={45}
                    name="age"
                    id="outlined-age-simple"
                  />
                }
              >
                <MenuItem value="daily">Daily</MenuItem>
                <MenuItem value="weekly">Weekly</MenuItem>
                <MenuItem value="monthly">Monthly</MenuItem>
              </Select>
            </FormControl>
          </div>
        }
        upperTitle
      >
        <Typography variant="h3">{total[value]}</Typography>
        <div className={classes.bottomStatsContainer}>
          <div className={classnames(classes.statCell, classes.borderRight)}>
            <Grid container alignItems="center" justify="space-between">
              <Typography variant="h6">{registrations[value].value}</Typography>
              <ShowChartIcon style={{ fill: registrations[value].profit ? green[500] : red[500], transform: !registrations[value].profit && 'scale(1, -1)'  }} />
            </Grid>
            <Typography>Registrations</Typography>
          </div>
          <div className={classes.statCell}>
            <Grid container alignItems="center" justify="space-between">
              <Typography variant="h6">{bounce[value].value}%</Typography>
              <ShowChartIcon style={{ fill: bounce[value].profit ? green[500] : red[500], transform: !bounce[value].profit && 'scale(1, -1)' }} />
            </Grid>
            <Typography>Bounce Rate</Typography>
          </div>
        </div>
      </Widget>
    );
  }
}

const styles = theme => ({
  title: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.unit,
  },
  bottomStatsContainer: {
    display: 'flex',
    borderTop: '1px solid',
    borderColor: grey[300],
    margin: theme.spacing.unit * -2,
    marginTop: theme.spacing.unit * 2,
  },
  statCell: {
    width: '50%',
    padding: theme.spacing.unit * 2,
  },
  borderRight: {
    borderRight: '1px solid',
    borderColor: grey[300],
  },
});

export default withStyles(styles, { withTheme: true })(BigStat);
