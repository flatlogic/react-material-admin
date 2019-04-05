import React from 'react';
import ApexCharts from 'react-apexcharts';
import { withTheme } from "@material-ui/core";

const series = [{
  name: 'series1',
  data: [31, 40, 28, 51, 42, 109, 100]
}, {
  name: 'series2',
  data: [11, 32, 45, 32, 34, 52, 41]
}];

const themeOptions = (props) => {
  return {
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      type: 'datetime',
      categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00",
        "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00",
        "2018-09-19T06:30:00"
      ],
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      },
    },
    fill: {
      colors: [props.theme.palette.primary.light, props.theme.palette.success.light]
    },
    colors: [props.theme.palette.primary.main, props.theme.palette.success.main],
    chart: {
      toolbar: {
        show: false,
      },
    },
    legend: {
      show: false,
    }
  };
};

const ApexLineChart = (props) => (
  <ApexCharts options={themeOptions(props)} series={series} type="area" height={350} />
);

export default withTheme()(ApexLineChart);