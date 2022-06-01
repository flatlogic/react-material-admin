import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { useTheme } from "@mui/styles";
import ReactApexChart from "react-apexcharts";
import ApexCharts from "apexcharts";

// components
import Widget from "../../components/Widget/Widget";

//Realtime chart
var lastDate = 0;
var data = [];
var TICKINTERVAL = 86400000;
let XAXISRANGE = 777600000;
let _isMounted;
function getDayWiseTimeSeries(baseval, count, yrange) {
  var i = 0;
  while (i < count) {
    var x = baseval;
    var y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    data.push({
      x,
      y
    });
    lastDate = baseval;
    baseval += TICKINTERVAL;
    i++;
  }
}

function intervals() {
  if (_isMounted) {
    window.setInterval(() => {
      getNewSeries(lastDate, {
        min: 10,
        max: 90
      });

      ApexCharts.exec("realtime", "updateSeries", [
        {
          data: data
        }
      ]);
    }, 1000);
  }
}

getDayWiseTimeSeries(new Date("11 Feb 2019 GMT").getTime(), 10, {
  min: 10,
  max: 90
});

function getNewSeries(baseval, yrange) {
  var newDate = baseval + TICKINTERVAL;
  lastDate = newDate;

  for (var i = 0; i < data.length - 10; i++) {
    // IMPORTANT
    // we reset the x and y of the data which is out of drawing area
    // to prevent memory leaks
    data[i].x = newDate - XAXISRANGE - TICKINTERVAL;
    data[i].y = 0;
  }

  data.push({
    x: newDate,
    y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
  });
}

//Zoomable Timeseries
var ts2 = 1484418600000;
var dates = [];
for (var i = 0; i < 120; i++) {
  ts2 = ts2 + 86400000;
  var innerArr = [ts2, Math.round(Math.random(0) * 100)];
  dates.push(innerArr);
}

const themeOptions = theme => {
  return {
    // first container chart
    grid: {
      row: {
        colors: [theme.palette.primary.light, "transparent"], // takes an array which will be repeated on columns
        opacity: 0.1
      }
    },
    colors: [theme.palette.primary.main],
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
        "Sep"
      ]
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "smooth"
    },
    chart: {
      toolbar: {
        show: false
      }
    },
    legend: {
      show: false
    },
    // second container chart
    options: {
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      chart: {
        shadow: {
          enabled: true,
          color: "#000",
          top: 18,
          left: 7,
          blur: 10,
          opacity: 1
        },
        toolbar: {
          show: false
        }
      },
      colors: [theme.palette.primary.main, theme.palette.success.main],
      grid: {
        borderColor: "#e7e7e7",
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      markers: {
        size: 6
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        title: {
          text: "Month"
        }
      },
      yaxis: {
        title: {
          text: "Temperature"
        },
        min: 5,
        max: 40
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        floating: true,
        offsetY: -25,
        offsetX: -5
      }
    },
    // third container chart
    options2: {
      stroke: {
        curve: "smooth"
      },
      legend: {
        show: false
      },
      chart: {
        stacked: false,
        zoom: {
          type: "x",
          enabled: true,
          autoScaleYaxis: true
        },
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        line: {
          curve: "smooth"
        }
      },
      dataLabels: {
        enabled: false
      },
      markers: {
        size: 0,
        style: "full"
      },
      colors: [theme.palette.success.light],
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.5,
          opacityTo: 0,
          stops: [0, 90, 100]
        }
      },
      xaxis: {
        type: "datetime"
      },

      tooltip: {
        shared: false,
        y: {
          formatter: function(val) {
            return val;
          }
        }
      }
    },
    // fourth chart container
    options3: {
      colors: [theme.palette.primary.light],
      chart: {
        id: "realtime",
        animations: {
          enabled: true,
          easing: "linear",
          dynamicAnimation: {
            speed: 1000
          }
        },
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      markers: {
        size: 0
      },
      xaxis: {
        type: "datetime",
        range: XAXISRANGE
      },
      yaxis: {
        max: 100
      },
      legend: {
        show: false
      }
    }
  };
};

const values = {
  series: [
    {
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }
  ],
  series2: [
    {
      name: "High - 2019",
      data: [28, 29, 33, 36, 32, 32, 33]
    },
    {
      name: "Low - 2019",
      data: [12, 11, 14, 18, 17, 13, 13]
    }
  ],
  series3: [
    {
      name: "Flatlogic LLC",
      data: dates
    }
  ],
  series4: [
    {
      data: data.slice()
    }
  ]
};

export default function Charts(props) {
  useEffect(() => {
    intervals();
    return function cleanup() {
      _isMounted = false;
      data = data.slice(data.length - 10, data.length);
    };
  });
  const theme = useTheme();
  const [state] = useState(values);

  // local

  return (
    <>
      <Grid container spacing={4}>
        <Grid item md={6} xs={12}>
          <Widget title={"Line Basic"} noBodyPadding>
            <ReactApexChart
              options={themeOptions(theme)}
              series={state.series}
              type="line"
              height="350"
            />
          </Widget>
        </Grid>
        <Grid item md={6} xs={12}>
          <Widget title={"Line with Data Labels"} noBodyPadding>
            <ReactApexChart
              options={themeOptions(theme).options}
              series={state.series2}
              type="line"
              height="350"
            />
          </Widget>
        </Grid>
        <Grid item md={6} xs={12}>
          <Widget title={"Zoomable Timeseries"} noBodyPadding>
            <ReactApexChart
              options={themeOptions(theme).options2}
              series={state.series3}
              type="area"
              height="350"
            />
          </Widget>
        </Grid>
        <Grid item md={6} xs={12}>
          <Widget title={"Dynamic Updating Chart"} noBodyPadding>
            <ReactApexChart
              options={themeOptions(theme).options3}
              series={state.series4}
              type="line"
              height="350"
            />
          </Widget>
        </Grid>
      </Grid>
    </>
  );
}
