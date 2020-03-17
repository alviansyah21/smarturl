$(function () {
  new Chart(document.getElementById("barChart"), {
    type: 'bar',
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      datasets: [
        {
          label: "SmartURL",
          backgroundColor: "#28a745",
          data: [133,221,76,98,124,76,98,133,124,98,212,167]
        }, {
          label: "SmartRBT",
          backgroundColor: "#5B2F99",
          data: [221,167,76,124,221,133,124,76,98,167,125,99]
        }, {
          label: "SmartDigitalStore",
          backgroundColor: "#4fd1c5;",
          data: [98,124,76,98,133,124,133,221,133,124,76,221,167]
        }, {
          label: "SmartEvent",
          backgroundColor: "#fd7e14",
          data: [59,5,80,64,76,98,74,73,70,60,15,19]
        }
      ]
    },
    options: {  
      title: {
        display: true,
        text: 'Predicted total click in 2020'
      }
    }
  });

  new Chart(document.getElementById("pieChart"), {
    type: 'doughnut',
    data: {
      labels: ["Desktop", "Mobile", "Tablet"],
      datasets: [
        {
          label: "Device Usage",
          backgroundColor: ["#00c0ef", "#f56954","#d2d6de"],
          data: [2478,5267,734]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Predicted device usage in 2020'
      }
    }
  });
});
