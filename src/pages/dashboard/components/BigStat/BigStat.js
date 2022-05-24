import React, { useState } from "react";
import { Grid, Select, MenuItem, Input } from "@mui/material";
import { ArrowForward as ArrowForwardIcon } from "@mui/icons-material";
import { useTheme } from "@mui/styles";
import { BarChart, Bar } from "recharts";
import classnames from "classnames";

// styles
import useStyles from "./styles";

// components
import Widget from "../../../../components/Widget";
import { Typography } from "../../../../components/Wrappers";

export default function BigStat(props) {
  var { product, total, color, registrations, bounce } = props;
  var classes = useStyles();
  var theme = useTheme();

  // local
  var [value, setValue] = useState("daily");

  const getRandomData = React.useMemo(
    function getRandomData() {
      return Array(7)
        .fill()
        .map(() => ({ value: Math.floor(Math.random() * 10) + 1 }));
    },
    [value] // eslint-disable-line
  );

  return (
    <Widget
      header={
        <div className={classes.title}>
          <Typography variant="h5" color="text" colorBrightness={"secondary"}>
            {product}
          </Typography>

          <Select
            value={value}
            onChange={e => setValue(e.target.value)}
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
    >
      <div className={classes.totalValueContainer}>
        <div className={classes.totalValue}>
          <Typography
            variant={"h2"}
            weight={"medium"}
            style={{ marginRight: 8 }}
          >
            {total[value]}
          </Typography>
          <Typography color={total.percent.profit ? "success" : "error"}>
            &nbsp;{total.percent.profit ? "+" : "-"}
            {total.percent.value}%
          </Typography>
        </div>
        <BarChart width={100} height={70} data={getRandomData}>
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
            <Typography
              color={"text"}
              weight="bold"
              colorBrightness={"secondary"}
              variant={"h6"}
            >
              {registrations[value].value}
            </Typography>
            <ArrowForwardIcon
              className={classnames(classes.profitArrow, {
                [!registrations[value].profit]: classes.profitArrowDanger
              })}
            />
          </Grid>
          <Typography color="text" variant="caption" colorBrightness="hint">
            Registrations
          </Typography>
        </div>
        <div className={classes.statCell}>
          <Grid container alignItems="center">
            <Typography
              color={"text"}
              weight="bold"
              colorBrightness={"secondary"}
              variant={"h6"}
            >
              {bounce[value].value}%
            </Typography>
            <ArrowForwardIcon
              className={classnames(classes.profitArrow, {
                [!registrations[value].profit]: classes.profitArrowDanger
              })}
            />
          </Grid>
          <Typography color="text" variant="caption" colorBrightness="hint">
            Bounce Rate
          </Typography>
        </div>
        <div className={classnames(classes.statCell, classes.borderRight)}>
          <Grid container alignItems="center">
            <Typography
              color={"text"}
              weight="bold"
              colorBrightness={"secondary"}
              variant={"h6"}
            >
              {registrations[value].value * 10}
            </Typography>
            <ArrowForwardIcon
              className={classnames(classes.profitArrow, {
                [classes.profitArrowDanger]: !registrations[value].profit
              })}
            />
          </Grid>
          <Typography color="text" variant="caption" colorBrightness="hint">
            Views
          </Typography>
        </div>
      </div>
    </Widget>
  );
}
