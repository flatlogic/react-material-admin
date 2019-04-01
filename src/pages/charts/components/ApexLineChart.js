import React from 'react';
import ApexCharts from 'react-apexcharts';
import { blue, green } from '@material-ui/core/colors';

const options = {
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
    colors: [green[200], blue[200]]
  },
  colors: [green[500], blue[500]],
  chart: {
    toolbar: {
      show: false,
    },
  },
  legend: {
    show: false,
  }
};

const series = [{
  name: 'series1',
  data: [31, 40, 28, 51, 42, 109, 100]
}, {
  name: 'series2',
  data: [11, 32, 45, 32, 34, 52, 41]
}];

const ApexLineChart = () => (
  <ApexCharts options={options} series={series} type="area" height={350} />
);

export default ApexLineChart;