import React from 'react';
import FusionCharts from 'fusioncharts';
import ReactFusioncharts from 'react-fusioncharts';
// import charts from 'fusioncharts/fusioncharts.charts';
// charts(FusionCharts);

import Widgets from 'fusioncharts/fusioncharts.widgets';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// Adding the chart and theme as dependency to the core fusioncharts
ReactFusioncharts.fcRoot(FusionCharts, Widgets, FusionTheme);




//STEP 2 - Defining the dataset for the angular gauge along with the color configuration
const colorRange = {
  "color": [{
    "minValue": "0",
    "maxValue": "50",
    "code": "#6baa01"
  }, {
    "minValue": "50",
    "maxValue": "75",
    "code": "#f8bd19"
  }, {
    "minValue": "75",
    "maxValue": "100",
    "code": "#e44a00"
  }]
};

const dials = {
  "dial": [{
    "value": "67"
  }]
};

// STEP 3 - Creating the JSON object to store the chart configurations
const chartConfigs = {
    type: 'angulargauge',// The chart type
    width: '400', // Width of the chart
    height: '200', // Height of the chart
    dataFormat: 'json', // Data type
    dataSource: {
        "chart": {
          "caption": "전압",
          "lowerLimit": "0",
          "upperLimit": "100",
          "theme": "fusion"
        },
        "colorRange": colorRange,
        "dials": dials
    }
}


// STEP 3 - Creating the DOM element to pass the react-fusioncharts component
export class Gauge extends React.Component {
  render() {
     return (
     <ReactFusioncharts
        {...chartConfigs}/>
     );
  }
}


/*
const TherChart = () => {

}
FusionCharts.ready(function() {
    var myChart = new FusionCharts({
       type: "thermometer",
       renderAt: "chart-container",
       width: "320",
       height: "400",
       dataFormat: "json",
       dataSource: {
          chart: {
             caption: "Temperature Monitor",
             subCaption: "Kansas City Cold Storage",
             lowerLimit: "-60",
             upperLimit: "10",
             numberSuffix: "°F",
             thmFillColor: "#29C3BE",
             plotToolText: "Temperature: <b>$datavalue</b> ",
             theme: "fusion"
          },
          value: "-13"
       },
       events: {
          initialized: function(evt, arg) {
             var chartRef = evt.sender;
             chartRef.intervalUpdateId = setInterval(function() {
                var num = parseInt(Math.random() * (-50 - 5 + 1) + -5);
                chartRef.feedData("&value=" + num);
             }, 2000);
          },
 
          disposed: function(evt, args) {
             clearInterval(evt.sender.intervalUpdateId);
          }
       }
    }).render();
 });
 
 */