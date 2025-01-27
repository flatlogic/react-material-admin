import React, { useState } from "react";
import { useTheme } from "@mui/styles";
import ReactApexChart from "react-apexcharts";

const themeOptions = theme => {
  return {
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        "South Korea",
        "Canada",
        "United Kingdom",
        "Netherlands",
        "Italy",
        "France",
        "Japan",
        "United States",
        "China",
        "Germany",
      ],
    },
    stroke: {
      curve: "smooth",
    },
    chart: {
      toolbar: {
        show: false,
      },
    },
    legend: {
      show: false,
    },
    labels: ["January", "February", "March", "April", "May", "June"],
    fill: {
      colors: [theme.palette.primary.main],
    },
  };
};

const values = {
  series: [
    {
      data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
    },
  ],
};

const ApexBarChart = () => {
  const theme = useTheme();
  const [state] = useState(values);
  return (
    <ReactApexChart
      options={themeOptions(theme)}
      series={state.series}
      type="bar"
      height="350"
    />
  );
};

export default ApexBarChart;
