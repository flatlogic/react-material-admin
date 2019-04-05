import React, { PureComponent } from "react";
import { Grid, Select, MenuItem, Input, withStyles } from "@material-ui/core";
import { ArrowForward as ArrowForwardIcon } from "@material-ui/icons";
import { BarChart, Bar } from "recharts";
import classnames from "classnames";

import Widget from "../../../../components/Widget";
import { Typography } from "../../../../components/Wrappers";

const getRandomData = () =>
  Array(7)
    .fill()
    .map(() => ({ value: Math.floor(Math.random() * 10) + 1 }));

class BigStat extends PureComponent {
  state = { value: "daily" };

  changeValue = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    const {
      product,
      theme,
      total,
      color,
      registrations,
      bounce,
      classes
    } = this.props;
    const { value } = this.state;

    return (
      <Widget
        header={
          <div className={classes.title}>
            <Typography variant="h5">{product}</Typography>

            <Select
              value={this.state.value}
              onChange={this.changeValue}
              input={
                <Input
                  disableUnderline
                  classes={{ input: classes.selectInput }}
                />
              }
              className={classes.select}
            >
              <MenuItem value="daily">Daily</MenuItem>
              <MenuItem value="weekly">Weekly</MenuItem>
              <MenuItem value="monthly">Monthly</MenuItem>
            </Select>
          </div>
        }
        upperTitle
      >
        <div className={classes.totalValueContainer}>
          <div className={classes.totalValue}>
            <Typography size="xxl" color="textSecondary">
              {total[value]}
            </Typography>
            <Typography color={total.percent.profit ? "success" : "secondary"}>
              &nbsp;{total.percent.profit ? "+" : "-"}
              {total.percent.value}%
            </Typography>
          </div>
          <BarChart width={150} height={70} data={getRandomData()}>
            <Bar
              dataKey="value"
              fill={theme.palette[color].main}
              radius={10}
              barSize={10}
            />
          </BarChart>
        </div>
        <div className={classes.bottomStatsContainer}>
          <div className={classnames(classes.statCell, classes.borderRight)}>
            <Grid container alignItems="center">
              <Typography variant="h6">{registrations[value].value}</Typography>
              <ArrowForwardIcon
                className={classnames(classes.profitArrow, {
                  [!registrations[value].profit]: classes.profitArrowDanger
                })}
              />
            </Grid>
            <Typography size="sm" color="textSecondary">
              Registrations
            </Typography>
          </div>
          <div className={classes.statCell}>
            <Grid container alignItems="center">
              <Typography variant="h6">{bounce[value].value}%</Typography>
              <ArrowForwardIcon
                className={classnames(classes.profitArrow, {
                  [!registrations[value].profit]: classes.profitArrowDanger
                })}
              />
            </Grid>
            <Typography size="sm" color="textSecondary">
              Bounce Rate
            </Typography>
          </div>
          <div className={classnames(classes.statCell, classes.borderRight)}>
            <Grid container alignItems="center">
              <Typography variant="h6">
                {registrations[value].value * 10}
              </Typography>
              <ArrowForwardIcon
                className={classnames(classes.profitArrow, {
                  [classes.profitArrowDanger]: !registrations[value].profit
                })}
              />
            </Grid>
            <Typography size="sm" color="textSecondary">
              Views
            </Typography>
          </div>
        </div>
      </Widget>
    );
  }
}

const styles = theme => ({
  title: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: theme.spacing.unit
  },
  bottomStatsContainer: {
    display: "flex",
    justifyContent: "space-between",
    margin: theme.spacing.unit * -2,
    marginTop: theme.spacing.unit
  },
  statCell: {
    padding: theme.spacing.unit * 2
  },
  totalValueContainer: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between"
  },
  totalValue: {
    display: "flex",
    alignItems: "baseline"
  },
  profitArrow: {
    transform: "rotate(-45deg)",
    fill: theme.palette.success.main
  },
  profitArrowDanger: {
    transform: "rotate(45deg)",
    fill: theme.palette.secondary.main
  },
  selectInput: {
    padding: 10,
    paddingRight: 25,
    "&:focus": {
      backgroundColor: "white"
    }
  }
});

export default withStyles(styles, { withTheme: true })(BigStat);
