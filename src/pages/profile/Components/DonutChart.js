import React, { useState } from 'react';
import { Button } from '../../../components/Wrappers';
import { Grid, Typography } from "@material-ui/core";
import Dot from "./Dot";
import { withStyles } from '@material-ui/core/styles';
import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
  } from "recharts";
import chartsData from './mock';

const PieChartData = [
  { name: "New", value: 400 ,color: "#536DFE" },
  { name: "In Progress", value: 300 ,color: "#FFC35F" },
  { name: "Completed", value: 300 ,color: "#3CD4A0" },
  { name: "Cancel", value: 200 ,color: "#FF5C93" }
];

const styles = (theme) => ({
  legendItemContainer: {
      display: 'flex',
      alignItems: 'center',

  },
  detailsWrapper: {
      display: 'flex',
      justifyContent: 'flex-end',
      paddingRight: 0,
      paddingLeft: 0,
      width: '100%',
      bottom: 5,
  },
  pieChartLegendWrapper: {
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginRight: theme.spacing(1)
  },
})

const DonutChart = (classes) => {
  const [donutData, setDonutData] = useState(chartsData);
  const [age, setAge] = React.useState('');

  return (
    <Grid container spacing={0}>
      <Grid
        item
        lg={6}
        md={12} xs={12}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: 'relative',
          padding: 0,
        }}
      >
        <Typography
          variant={"caption"}
          style={{ position: "absolute", top: 85, fontWeight: "bold", fontSize: 18 }}
        >
          121
        </Typography>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={PieChartData}
              innerRadius={33}
              outerRadius={50}
              dataKey="value"
            >
              {PieChartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color}
                  stroke={""}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </Grid>
      <Grid item lg={6} md={12} xs={12} style={{ display: "flex", alignItems: "center"}}>
        <div className={classes.pieChartLegendWrapper}>
          {PieChartData.map(({ name, value, color }, index) => (
            <div key={color} className={classes.legendItemContainer}>
              <Dot color={color} style={{ marginLeft: 5 }} />
              <Typography
                color="text"
                colorBrightness={"hint"}
                variant={"caption"}
                style={{ fontSize: 12 }}
                //  Как сделать записи на одном уровне с точками
              >
                &nbsp;{name}&nbsp;
              </Typography>
            </div>
          ))}
        </div>
      </Grid>
      <div className={classes.detailsWrapper}>
      {/* Как отодвинуть кнопку к краю без хардкода */}
        <Button 
          variant="outlined" 
          color="primary" 
        >
          DETAILS
        </Button>
      </div>
    </Grid>
  )
}

export default withStyles(styles)(DonutChart)