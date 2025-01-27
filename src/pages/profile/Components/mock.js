export default {
  donut: {
    labels: {
      show: true,
    },
    series: [44, 15, 41, 55],
    options: {
      tooltip: {
        theme: 'dark',
      },
      legend: {
        labels: {
          colors: ['#27282C'],
        }
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
            height: 300,
          },
          legend: {
            position: 'bottom',
          }
        }
      }],
      stroke: {
        show: false,
        width: 0,
      },
      colors: ['#4B9FFE', '#FF4D3A', '#FEAA4B', '#1ACA95'],
    }
  },
}