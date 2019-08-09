import React from "react";
import { useTheme } from "@material-ui/styles";
import ApexCharts from "react-apexcharts";

const series = [
  {
    name: "Metric1",
    data: generateData(18, {
      min: 0,
      max: 90,
    }),
  },
  {
    name: "Metric2",
    data: generateData(18, {
      min: 0,
      max: 90,
    }),
  },
  {
    name: "Metric3",
    data: generateData(18, {
      min: 0,
      max: 90,
    }),
  },
  {
    name: "Metric4",
    data: generateData(18, {
      min: 0,
      max: 90,
    }),
  },
  {
    name: "Metric5",
    data: generateData(18, {
      min: 0,
      max: 90,
    }),
  },
  {
    name: "Metric6",
    data: generateData(18, {
      min: 0,
      max: 90,
    }),
  },
  {
    name: "Metric7",
    data: generateData(18, {
      min: 0,
      max: 90,
    }),
  },
  {
    name: "Metric8",
    data: generateData(18, {
      min: 0,
      max: 90,
    }),
  },
  {
    name: "Metric9",
    data: generateData(18, {
      min: 0,
      max: 90,
    }),
  },
];

export default function ApexLineChart() {
  var theme = useTheme();

  return (
    <ApexCharts
      options={themeOptions(theme)}
      series={series}
      type="heatmap"
      height={350}
    />
  );
}

// ##################################################################
function generateData(count, yrange) {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = "w" + (i + 1).toString();
    var y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push({
      x: x,
      y: y,
    });
    i++;
  }

  return series;
}

function themeOptions(theme) {
  return {
    chart: {
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: [theme.palette.primary.main],
  };
}
