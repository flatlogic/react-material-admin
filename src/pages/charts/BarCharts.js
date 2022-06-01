import React, { useState } from "react";
import { Grid } from "@mui/material";
import { useTheme } from "@mui/styles";
import ReactApexChart from "react-apexcharts";
import img from "../../images/carousel/2.jpg";

// components
import Widget from "../../components/Widget/Widget";

const themeOptions = theme => {
  return {
    plotOptions: {
      bar: {
        horizontal: true
      }
    },
    dataLabels: {
      enabled: false
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
        "Germany"
      ]
    },
    stroke: {
      curve: "smooth"
    },
    legend: {
      show: false
    },
    chart: {
      stacked: false,
      toolbar: {
        show: false
      }
    },
    tooltip: {
      shared: false
    },
    colors: [theme.palette.primary.main],
    options: {
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            position: "top"
          }
        }
      },
      dataLabels: {
        enabled: true,
        offsetX: -6,
        style: {
          fontSize: "12px",
          colors: ["#fff"]
        }
      },
      stroke: {
        show: true,
        width: 1,
        colors: ["#fff"]
      },

      xaxis: {
        categories: [2013, 2014, 2015, 2016, 2017, 2018, 2019]
      },
      colors: [theme.palette.primary.main, theme.palette.success.light]
    },
    options2: {
      chart: {
        stacked: true,
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      stroke: {
        width: 1,
        colors: ["#fff"]
      },
      xaxis: {
        categories: [2013, 2014, 2015, 2016, 2017, 2018, 2019],
        labels: {
          formatter: function(val) {
            return val + "K";
          }
        }
      },
      yaxis: {
        title: {
          text: undefined
        }
      },
      tooltip: {
        y: {
          formatter: function(val) {
            return val + "K";
          }
        }
      },
      fill: {
        opacity: 1
      },
      colors: [
        theme.palette.primary.main,
        theme.palette.secondary.main,
        theme.palette.warning.main,
        theme.palette.success.light,
        theme.palette.info.main
      ],
      legend: {
        position: "top",
        horizontalAlign: "left",
        offsetX: 40
      }
    },
    options3: {
      chart: {
        animations: {
          enabled: false
        },
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: "100%"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        colors: ["#fff"],
        width: 0.2
      },
      labels: Array.apply(null, { length: 39 }).map(function(el, index) {
        return index + 1;
      }),
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false
        }
      },
      grid: {
        position: "back"
      },
      fill: {
        type: "image",
        opacity: 0.87,
        image: {
          src: [img],
          width: 466,
          height: 406
        }
      }
    }
  };
};

const values = {
  series: [
    {
      data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
    }
  ],
  series2: [
    {
      data: [44, 55, 41, 64, 22, 43, 21]
    },
    {
      data: [53, 32, 33, 52, 13, 44, 32]
    }
  ],
  series3: [
    {
      name: "Marine Sprite",
      data: [44, 55, 41, 37, 22, 43, 21]
    },
    {
      name: "Striking Calf",
      data: [53, 32, 33, 52, 13, 43, 32]
    },
    {
      name: "Tank Picture",
      data: [12, 17, 11, 9, 15, 11, 20]
    },
    {
      name: "Bucket Slope",
      data: [9, 7, 5, 8, 6, 9, 4]
    },
    {
      name: "Reborn Kid",
      data: [25, 12, 19, 32, 25, 24, 10]
    }
  ],
  series4: [
    {
      name: "coins",
      data: [
        2,
        4,
        3,
        4,
        3,
        5,
        5,
        6.5,
        6,
        5,
        4,
        5,
        8,
        7,
        7,
        8,
        8,
        10,
        9,
        9,
        12,
        12,
        11,
        12,
        13,
        14,
        16,
        14,
        15,
        17,
        19,
        21
      ]
    }
  ]
};

export default function Charts(props) {
  const theme = useTheme();
  const [state] = useState(values);

  // local

  return (
    <>
      <Grid container spacing={4}>
        <Grid item md={6} xs={12}>
          <Widget title={"Bar Basic"} noBodyPadding>
            <ReactApexChart
              options={themeOptions(theme)}
              series={state.series}
              type="bar"
              height="350"
            />
          </Widget>
        </Grid>
        <Grid item md={6} xs={12}>
          <Widget title={"Grouped Basic"} noBodyPadding>
            <ReactApexChart
              options={themeOptions(theme).options}
              series={state.series2}
              type="bar"
              height="350"
            />
          </Widget>
        </Grid>
        <Grid item md={6} xs={12}>
          <Widget title={"Stacked Basic"} noBodyPadding>
            <ReactApexChart
              options={themeOptions(theme).options2}
              series={state.series3}
              type="bar"
              height="350"
            />
          </Widget>
        </Grid>
        <Grid item md={6} xs={12}>
          <Widget title={"Bar with Images"} noBodyPadding>
            <ReactApexChart
              options={themeOptions(theme).options3}
              series={state.series4}
              type="bar"
              height="350"
            />
          </Widget>
        </Grid>
      </Grid>
    </>
  );
}
