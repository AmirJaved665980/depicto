var d3 = require("d3");
var { barChart } = require("./charts/barchart");

var milesRun = [2, 5, 4, 1, 2, 6, 5];
var highTemperatures = [77, 71, 82, 87, 84, 78, 80, 84, 86, 72, 71, 68, 75, 73, 80, 85, 86, 80];

var runningChart = barChart().barPadding(2);
d3.select('#runningHistory')
        .datum(milesRun)
        .call(runningChart);

var weatherChart = barChart().fillColor('coral');
d3.select('#weatherHistory')
        .datum(highTemperatures)
        .call(weatherChart);
