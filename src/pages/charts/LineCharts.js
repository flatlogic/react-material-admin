import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import ReactApexChart from "react-apexcharts";

// components
import Widget from "../../components/Widget/Widget";
import PageTitle from "../../components/PageTitle/PageTitle";

const themeOptions = theme => {
  return {
    grid: {
      row: {
        colors: [theme.palette.primary.light, "transparent"], // takes an array which will be repeated on columns
        opacity: 0.1,
      },
    },
    color: theme.palette.primary.main,
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
    dataLabels: {
      enabled: false,
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
    options: {
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      chart: {
        shadow: {
          enabled: true,
          color: '#000',
          top: 18,
          left: 7,
          blur: 10,
          opacity: 1
        },
        toolbar: {
          show: false,
        },
      },
      colors: [theme.palette.primary.main, theme.palette.success.main],
     grid: {
        borderColor: '#e7e7e7',
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      markers: {
        size: 6
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        title: {
          text: 'Month'
        }
      },
      yaxis: {
        title: {
          text: 'Temperature'
        },
        min: 5,
        max: 40
      },
      legend: {
        position: 'top',
        horizontalAlign: 'right',
        floating: true,
        offsetY: -25,
        offsetX: -5
      }
    },
  }
};

const values = {
  series: [
    {
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
    },
  ],
  series2: [
    {
      name: "High - 2013",
      data: [28, 29, 33, 36, 32, 32, 33]
    },
    {
      name: "Low - 2013",
      data: [12, 11, 14, 18, 17, 13, 13]
    }
  ],
};

export default function Charts(props) {
  const theme = useTheme();
  const [state] = useState(values);

  // local

  return (
    <>
      <PageTitle title="Line Charts" button="Latest Reports" />
      <Grid container spacing={4}>
        <Grid item md={6} xs={12}>
          <Widget title={"Line Basic"} upperTitle noBodyPadding>
            <ReactApexChart
              options={themeOptions(theme)}
              series={state.series}
              type="line"
              height="350"
            />
          </Widget>
        </Grid>
        <Grid item md={6} xs={12}>
          <Widget title={"Line with Data Labels"} upperTitle noBodyPadding>
            <ReactApexChart
              options={themeOptions(theme).options}
              series={state.series2}
              type="line"
              height="350"
            />
          </Widget>
        </Grid>
      </Grid>
    </>
  );
}
