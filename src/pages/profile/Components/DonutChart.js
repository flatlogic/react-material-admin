import React, { useState } from 'react';
import { Button } from '../../../components/Wrappers';
import { Grid, Typography } from "@mui/material";
import Dot from '../../../components/Dot/Dot';
import { withStyles } from '@mui/styles';
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
    marginBottom: 8,
    paddingLeft: 10
  },
  detailsWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingRight: 0,
    paddingLeft: 0,
    width: '100%',
    bottom: 5,
  },
  legendItemsContainer: {
    display: 'flex', 
    alignItems: 'center', 
    flexWrap: 'wrap'
  }
})

const DonutChart = ({ classes }) => {
  // eslint-disable-next-line no-unused-vars
  const [donutData, setDonutData] = useState(chartsData);
  // eslint-disable-next-line no-unused-vars
  const [age, setAge] = React.useState('');

  return (
    <Grid container spacing={0}>
      <Grid
        item
        lg={12}
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
          style={{ position: "absolute", top: 60, fontWeight: "bold", fontSize: 18 }}
        >
          121
        </Typography>
        <ResponsiveContainer width="100%" height={150}>
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
      <Grid item lg={12} md={12} xs={12} className={classes.legendItemsContainer}>
          {PieChartData.map(({ name, value, color }, index) => (
            <div key={color} className={classes.legendItemContainer}>
              <Dot color={color} style={{ marginLeft: 5 }} />
              <Typography
                color="text"
                variant={"caption"}
                style={{ fontSize: 14 }}
                noWrap
              >
                &nbsp;{name}&nbsp;
              </Typography>
            </div>
          ))}
      </Grid>
      <div className={classes.detailsWrapper} >
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