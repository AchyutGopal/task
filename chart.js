let myChart = document.getElementById("myChart").getContext("2d");

// Global Options
Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = "#777";

let massPopChart = new Chart(myChart, {
  type: "bar", // bar, horizontalBar, pie, line, doughnut, radar, polarArea
  data: {
    labels: [
      "iPhone 4",
      "iPhone 4S",
      "iPhone 3GS",
      "iPhone 5",
      "iPhone 5S",
      "iPhone 6",
      "iPhone 6 Plus",
      "iPhone 6S ",
      "iPhone 6S Plus",
      "Others",
    ],
    datasets: [
      {
        label: "iPhones",
        data: [320, 640, 112, 1550, 650, 2200, 1100, 2300, 1470, 1420],
        //backgroundColor:'green',
        backgroundColor: [
          "rgba(32, 201, 151,0.9)",
          "rgba(32, 201, 151,0.9)",
          "rgba(32, 201, 151,0.9)",
          "rgba(32, 201, 151,0.9)",
          "rgba(32, 201, 151,0.9)",
          "rgba(32, 201, 151,0.9)",
          "rgba(32, 201, 151,0.9)",
          "rgba(32, 201, 151,0.9)",
          "rgba(32, 201, 151,0.9)",
          "rgba(32, 201, 151,0.9)",
        ],
        borderWidth: 1,
        borderColor: "#777",
        hoverBorderWidth: 3,
        hoverBorderColor: "#000",
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "Iphone Users",
      fontSize: 25,
    },

    scales: {
      yAxes: [
        {
          ticks: {
            max: 3000,
            min: 0,
            stepSize: 750,
          },
        },
      ],
    },

    legend: {
      display: true,
      position: "right",
      labels: {
        fontColor: "#000",
      },
    },
    layout: {
      padding: {
        left: 50,
        right: 0,
        bottom: 0,
        top: 0,
      },
    },
    tooltips: {
      enabled: true,
    },
  },
});
