'use strict';

angular.module('conanWebApp')
  .controller('StatsController', function () {

        var pieData = [
        {
          value: 7,
          color:"#F38630"
        },
        {
          value : 3,
          color : "#E0E4CC"
        },
        {
          value : 15,
          color : "#69D2E7"
        }
        ];

        var myPie = new Chart(document.getElementById("statsPie").getContext("2d")).Pie(pieData);

  });
