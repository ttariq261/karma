'use strict';

angular.module('conanWebApp')
  .controller('SentController', function () {

        var pieData = [
        {
          value: 30,
          color:"#F38630"
        },
        {
          value : 50,
          color : "#E0E4CC"
        },
        {
          value : 100,
          color : "#69D2E7"
        }
        ];
        var myPie = new Chart(document.getElementById("qPie").getContext("2d")).Pie(pieData);

  });