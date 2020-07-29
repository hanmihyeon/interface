import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import highchartsMore from 'highcharts/highcharts-more';
import solidGauge from 'highcharts/modules/solid-gauge';
import FusionCharts from 'fusioncharts';
import ReactFusioncharts from 'react-fusioncharts';
import charts from 'fusioncharts/fusioncharts.charts';
import ReactApexChart from 'react-apexcharts';
import GaugeChart from 'react-gauge-chart';
import ReactSpeedometer from 'react-d3-speedometer';

charts(FusionCharts);

highchartsMore(Highcharts);
solidGauge(Highcharts);

export const VoltChart = () => {
    return (
        <div className="volt-chart gauge-chart">
            <h5 className="gauge-title">전압</h5>
            <ReactSpeedometer
                value={220}
                minValue={150}
                maxValue={400}
                needleHeightRatio={0.7}
                segments={7}
                ringWidth={15}
                labelFontSize={"10px"}
                valueTextFontSize={"15px"}
                width={180}
                height={120}
                needleColor="red"
                startColor="green"
                endColor="red"
                needleTransitionDuration={4000}
                needleTransition="easeElastic"
                currentValueText="${value}V"
            /></div>
    );
}

export const CurrentChart = () => {
    return (
        <div className="current-chart gauge-chart">
            <h5 className="gauge-title">전류</h5>
            <ReactSpeedometer
                value={70}
                maxValue={100}
                minValue={65}
                segments={7}
                ringWidth={15}
                labelFontSize={"10px"}
                valueTextFontSize={"15px"}
                width={180}
                height={120}
                needleColor="red"
                startColor="green"
                endColor="red"
                needleTransitionDuration={4000}
                needleTransition="easeElastic"
                currentValueText="${value}A"
            /></div>
    );

}
export const TempChart = () => {
    return (
        <div className="temp-chart gauge-chart">
            <h5 className="gauge-title">온도</h5>
            <ReactSpeedometer
                value={25}
                maxValue={100}
                minValue={-10}
                segments={7}
                ringWidth={15}
                labelFontSize={"10px"}
                valueTextFontSize={"15px"}
                width={180}
                height={120}
                needleColor="red"
                startColor="green"
                endColor="red"
                needleTransitionDuration={4000}
                needleTransition="easeElastic"
                currentValueText="${value}°C"
            /></div>
    );
}

export const TempGaugeChart = () => {
    return (
        <GaugeChart id="gauge-chart1"
            nrOfLevels={20}
            percent={0.86}
            arcPadding={0.01} />
    )
}

export const HighGaugeChart = () => {
    const option = {
        chart: {
            type: 'solidgauge',
            width: 160,
            height: 150
        },

        title: null,

        pane: {
            center: ['50%', '85%'],
            size: '120%',
            startAngle: -90,
            endAngle: 90,
            background: {
                backgroundColor:
                    Highcharts.defaultOptions.legend.backgroundColor || '#EEE',
                innerRadius: '60%',
                outerRadius: '100%',
                shape: 'arc'
            }
        },

        exporting: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        tooltip: {
            enabled: false
        },

        // the value axis
        yAxis: {
            min: 0,
            max: 200,
            stops: [
                [0.1, '#55BF3B'], // green
                [0.5, '#DDDF0D'], // yellow
                [0.9, '#DF5353'] // red
            ],
            lineWidth: 0,
            tickWidth: 0,
            minorTickInterval: null,
            tickAmount: 2,
            title: {
                y: -70,
                text: '전압'
            },
            labels: {
                y: 16
            }
        },
        series: [{
            name: 'Speed',
            data: [150],
            dataLabels: {
                color: '#fff',
                format:
                    '<div style="text-align:center">' +
                    '<span style="font-size:18px">{y}</span><br/>' +
                    '<span style="font-size:12px;opacity:0.4">A</span>' +
                    '</div>'
            },

        }],
        plotOptions: {
            solidgauge: {
                dataLabels: {
                    y: 5,
                    borderWidth: 0,
                    useHTML: true
                }
            }
        },
    }

    return (
        <HighchartsReact Highcharts={Highcharts} options={option} />
    )
}

export const RobotChart1 = () => {
    const option1 = {
        chart: {
            backgroundColor: 'none',
            type: 'spline',
            height: 200,
            animation: Highcharts.svg, // don't animate in old IE
            marginRight: 10,
            events: {
                load: null
                /*function () {
                    // set up the updating of the chart each second
                    var series = this.series[0];
                    setInterval(function () {
                        var x = (new Date()).getTime(), // current time
                            y = (Math.round(Math.random() * 2))
                        series.addPoint([
                            x, y
                        ], true, true);
                    }, 5000);
                }*/
            }
        },

        time: {
            useUTC: false
        },

        title: {
            text: '일산화탄소',
            style: {
                fontSize: '14px'
            }
        },
        accessibility: {
            announceNewData: {
                enabled: true,
                minAnnounceInterval: 15000,
                announcementFormatter: function (allSeries, newSeries, newPoint) {
                    if (newPoint) {
                        return 'New point added. Value: ' + newPoint.y;
                    }
                    return false;
                }
            }
        },

        plotOptions: {
            series: {
                marker: {
                    enabled: false
                }
            }
        },

        xAxis: {
            type: 'datetime',
            tickPixelInterval: 150
        },

        yAxis: {
            title: {
                text: ''
            },
            plotLines: [
                {
                    value: 0,
                    width: 1,
                    color: '#808080'
                }
            ]
        },

        tooltip: {
            headerFormat: '<b>{series.name}</b><br/>',
            pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}'
        },

        legend: {
            enabled: false
        },

        exporting: {
            enabled: false
        },

        series: [
            {
                name: 'Random data',
                data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;

                    for (i = -19; i <= 0; i += 1) {
                        data.push({
                            x: time + i * 5000,
                            y: (30 + ((Math.random() * 10) / 10))
                        });
                    }

                    return data;
                }())
            }
        ]
    }

    return (
        <HighchartsReact Highcharts={Highcharts} options={option1} />
    );
}

export const RobotChart2 = () => {
    const option2 = {
        chart: {
            backgroundColor: 'none',
            type: 'spline',

            height: 200,
            animation: Highcharts.svg, // don't animate in old IE
            marginRight: 10,
            events: {
                load: null
                /*function () {
    
                    // set up the updating of the chart each second
                    var series = this.series[0];
                    setInterval(function () {
                        var x = (new Date()).getTime(), // current time
                            y = (Math.round(Math.random() * 2))
                        series.addPoint([
                            x, y
                        ], true, true);
                    }, 5000);
                }*/
            }
        },

        time: {
            useUTC: false
        },

        title: {
            text: '이산화탄소',
            style: {
                fontSize: '14px'
            }
        },
        accessibility: {
            announceNewData: {
                enabled: true,
                minAnnounceInterval: 15000,
                announcementFormatter: function (allSeries, newSeries, newPoint) {
                    if (newPoint) {
                        return 'New point added. Value: ' + newPoint.y;
                    }
                    return false;
                }
            }
        },

        plotOptions: {
            series: {
                marker: {
                    enabled: false
                }
            }
        },

        xAxis: {
            type: 'datetime',
            tickPixelInterval: 150
        },

        yAxis: {
            title: {
                text: ''
            },
            plotLines: [
                {
                    value: 0,
                    width: 1,
                    color: '#808080'
                }
            ]
        },

        tooltip: {
            headerFormat: '<b>{series.name}</b><br/>',
            pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}'
        },

        legend: {
            enabled: false
        },

        exporting: {
            enabled: false
        },

        series: [
            {
                name: 'Random data',
                data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;

                    for (i = -19; i <= 0; i += 1) {
                        data.push({
                            x: time + i * 5000,
                            y: (30 + ((Math.random() * 10) / 10))
                        });
                    }
                    return data;
                }())
            }
        ]
    }

    return (
        <HighchartsReact Highcharts={Highcharts} options={option2} />
    );

}

export const RobotChart3 = () => {

    const option3 = {
        chart: {
            backgroundColor: 'none',
            type: 'spline',

            height: 200,
            animation: Highcharts.svg, // don't animate in old IE
            events: {
                load: null
                /*function () {
    
                    // set up the updating of the chart each second
                    var series = this.series[0];
                    setInterval(function () {
                        var x = (new Date()).getTime(), // current time
                            y = (Math.round(Math.random() * 2))
                        series.addPoint([
                            x, y
                        ], true, true);
                    }, 5000);
                }*/
            }
        },

        time: {
            useUTC: false
        },

        title: {
            text: '이산화질소',
            style: {
                fontSize: '14px'
            }
        },
        accessibility: {
            announceNewData: {
                enabled: true,
                minAnnounceInterval: 15000,
                announcementFormatter: function (allSeries, newSeries, newPoint) {
                    if (newPoint) {
                        return 'New point added. Value: ' + newPoint.y;
                    }
                    return false;
                }
            }
        },

        plotOptions: {
            series: {
                marker: {
                    enabled: false
                }
            }
        },

        xAxis: {
            type: 'datetime',
            tickPixelInterval: 150
        },

        yAxis: {
            title: {
                text: ''
            },
            plotLines: [
                {
                    value: 0,
                    width: 1,
                    color: '#808080'
                }
            ]
        },

        tooltip: {
            headerFormat: '<b>{series.name}</b><br/>',
            pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}'
        },

        legend: {
            enabled: false
        },

        exporting: {
            enabled: false
        },

        series: [
            {
                name: 'Random data',
                data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;

                    for (i = -19; i <= 0; i += 1) {
                        data.push({
                            x: time + i * 5000,
                            y: (30 + ((Math.random() * 10) / 10))
                        });
                    }
                    return data;
                }())
            }
        ]
    }

    return (
        <HighchartsReact Highcharts={Highcharts} options={option3} />
    );
}

export const RobotChart4 = () => {

    const option4 = {
        chart: {
            backgroundColor: 'none',
            type: 'spline',
            height: 200,
            animation: Highcharts.svg, // don't animate in old IE
            marginRight: 10,
            events: {
                load: null
                /*function () {
    
                    // set up the updating of the chart each second
                    var series = this.series[0];
                    setInterval(function () {
                        var x = (new Date()).getTime(), // current time
                            y = (Math.round(Math.random() * 2))
                        series.addPoint([
                            x, y
                        ], true, true);
                    }, 5000);
                }*/
            }
        },

        time: {
            useUTC: false
        },

        title: {
            text: '유기복합물(휘발성)',
            style: {
                fontSize: '14px'
            }
        },
        accessibility: {
            announceNewData: {
                enabled: true,
                minAnnounceInterval: 15000,
                announcementFormatter: function (allSeries, newSeries, newPoint) {
                    if (newPoint) {
                        return 'New point added. Value: ' + newPoint.y;
                    }
                    return false;
                }
            }
        },

        plotOptions: {
            series: {
                marker: {
                    enabled: false
                }
            }
        },

        xAxis: {
            type: 'datetime',
            tickPixelInterval: 150
        },

        yAxis: {
            title: {
                text: ''
            },
            plotLines: [
                {
                    value: 0,
                    width: 1,
                    color: '#808080'
                }
            ]
        },

        tooltip: {
            headerFormat: '<b>{series.name}</b><br/>',
            pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}'
        },

        legend: {
            enabled: false
        },

        exporting: {
            enabled: false
        },

        series: [
            {
                name: 'Random data',
                data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;

                    for (i = -19; i <= 0; i += 1) {
                        data.push({
                            x: time + i * 5000,
                            y: (30 + ((Math.random() * 10) / 10))
                        });
                    }
                    return data;
                }())
            }
        ]
    }

    return (
        <HighchartsReact Highcharts={Highcharts} options={option4} />
    );
}

export const RobotChart5 = () => {

    const option5 = {
        chart: {
            backgroundColor: 'none',
            type: 'spline',

            height: 200,
            animation: Highcharts.svg, // don't animate in old IE
            marginRight: 10,
            events: {
                load: null
                /*function () {
    
                    // set up the updating of the chart each second
                    var series = this.series[0];
                    setInterval(function () {
                        var x = (new Date()).getTime(), // current time
                            y = (Math.round(Math.random() * 2))
                        series.addPoint([
                            x, y
                        ], true, true);
                    }, 5000);
                }*/
            }
        },

        time: {
            useUTC: false
        },

        title: {
            text: '습도',
            style: {
                fontSize: '14px'
            }
        },
        accessibility: {
            announceNewData: {
                enabled: true,
                minAnnounceInterval: 15000,
                announcementFormatter: function (allSeries, newSeries, newPoint) {
                    if (newPoint) {
                        return 'New point added. Value: ' + newPoint.y;
                    }
                    return false;
                }
            }
        },

        plotOptions: {
            series: {
                marker: {
                    enabled: false
                }
            }
        },

        xAxis: {
            type: 'datetime',
            tickPixelInterval: 150
        },

        yAxis: {
            title: {
                text: ''
            },
            plotLines: [
                {
                    value: 0,
                    width: 1,
                    color: '#808080'
                }
            ]
        },

        tooltip: {
            headerFormat: '<b>{series.name}</b><br/>',
            pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}'
        },

        legend: {
            enabled: false
        },

        exporting: {
            enabled: false
        },

        series: [
            {
                name: 'Random data',
                data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;

                    for (i = -19; i <= 0; i += 1) {
                        data.push({
                            x: time + i * 5000,
                            y: (30 + ((Math.random() * 10) / 10))
                        });
                    }
                    return data;
                }())
            }
        ]
    }

    return (
        <HighchartsReact Highcharts={Highcharts} options={option5} />
    );
}

export const RobotChart6 = () => {

    const option6 = {
        chart: {
            backgroundColor: 'none',
            type: 'spline',

            height: 200,
            animation: Highcharts.svg, // don't animate in old IE
            events: {
                load: null
                /*function () {
    
                    // set up the updating of the chart each second
                    var series = this.series[0];
                    setInterval(function () {
                        var x = (new Date()).getTime(), // current time
                            y = (Math.round(Math.random() * 2))
                        series.addPoint([
                            x, y
                        ], true, true);
                    }, 5000);
                }*/
            }
        },

        time: {
            useUTC: false
        },

        title: {
            text: '온도',
            style: {
                fontSize: '14px'
            }
        },
        accessibility: {
            announceNewData: {
                enabled: true,
                minAnnounceInterval: 15000,
                announcementFormatter: function (allSeries, newSeries, newPoint) {
                    if (newPoint) {
                        return 'New point added. Value: ' + newPoint.y;
                    }
                    return false;
                }
            }
        },

        plotOptions: {
            series: {
                marker: {
                    enabled: false
                }
            }
        },

        xAxis: {
            type: 'datetime',
            tickPixelInterval: 150
        },

        yAxis: {
            title: {
                text: ''
            },
            plotLines: [
                {
                    value: 0,
                    width: 1,
                    color: '#808080'
                }
            ]
        },

        tooltip: {
            headerFormat: '<b>{series.name}</b><br/>',
            pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}'
        },

        legend: {
            enabled: false
        },

        exporting: {
            enabled: false
        },

        series: [
            {
                name: 'Random data',
                data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;

                    for (i = -19; i <= 0; i += 1) {
                        data.push({
                            x: time + i * 5000,
                            y: (30 + ((Math.random() * 10) / 10))
                        });
                    }
                    return data;
                }())
            },
        ]
    }

    return (
        <HighchartsReact Highcharts={Highcharts} options={option6} />
    );
}

export const RobotStateChart = () => {

    const optionState = {
        chart: {
            backgroundColor: 'none',
            type: 'areaspline',
            height: 110,
            animation: Highcharts.svg, // don't animate in old IE
            marginRight: 10,
            events: {
                load: null
                /*function () {
    
                    // set up the updating of the chart each second
                    var series = this.series[0];
                    setInterval(function () {
                        var x = (new Date()).getTime(), // current time
                            y = (Math.round(Math.random() * 2))
                        series.addPoint([
                            x, y
                        ], true, true);
                    }, 5000);
                }*/
            }
        },

        time: {
            useUTC: false
        },
        title: {
            text: ''
        },

        accessibility: {
            announceNewData: {
                enabled: true,
                minAnnounceInterval: 1500,
                announcementFormatter: function (allSeries, newSeries, newPoint) {
                    if (newPoint) {
                        return 'New point added. Value: ' + newPoint.y;
                    }
                    return false;
                }
            }
        },

        xAxis: {
            type: 'datetime',
            tickPixelInterval: 5000
        },

        yAxis: {
            title: {
                text: ''
            },
            plotLines: [
                {
                    value: 0,
                    width: 1,
                    color: '#808080'
                }
            ]
        },

        tooltip: {
            headerFormat: '<b>{series.name}</b><br/>',
            pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}'
        },

        legend: {
            enabled: false
        },

        exporting: {
            enabled: false
        },

        series: [
            {
                name: 'Random data',
                data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;

                    for (i = -19; i <= 0; i += 1) {
                        data.push({
                            x: time + i * 5000,
                            y: (Math.round(Math.random() * 2))
                        });
                    }
                    return data;
                }()),
                color: '#59ff7d'
            }
        ]
    }

    return (
        <HighchartsReact Highcharts={Highcharts} options={optionState} />
    )
}

export const RobotChart7 = () => {

    const option7 = {
        chart: {
            backgroundColor: 'none',
            type: 'spline',
            width: 530,
            height: 250,
            animation: Highcharts.svg, // don't animate in old IE
            events: {
                load: null
                /*function () {
    
                    // set up the updating of the chart each second
                    var series = this.series[0];
                    setInterval(function () {
                        var x = (new Date()).getTime(), // current time
                            y = (Math.round(Math.random() * 2))
                        series.addPoint([
                            x, y
                        ], true, true);
                    }, 5000);
                }*/
            }
        },

        time: {
            useUTC: false
        },

        title: {
            text: '온도',
            style: {
                fontSize: '14px'
            }
        },
        accessibility: {
            announceNewData: {
                enabled: true,
                minAnnounceInterval: 15000,
                announcementFormatter: function (allSeries, newSeries, newPoint) {
                    if (newPoint) {
                        return 'New point added. Value: ' + newPoint.y;
                    }
                    return false;
                }
            }
        },

        plotOptions: {
            series: {
                marker: {
                    enabled: false
                }
            }
        },

        xAxis: {
            type: 'datetime',
            tickPixelInterval: 150
        },

        yAxis: {
            title: {
                text: ''
            },
            plotLines: [
                {
                    value: 0,
                    width: 1,
                    color: '#808080'
                }
            ]
        },

        tooltip: {
            headerFormat: '<b>{series.name}</b><br/>',
            pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}'
        },

        legend: {
            enabled: false
        },

        exporting: {
            enabled: false
        },

        series: [
            {
                name: 'Random data',
                data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;

                    for (i = -19; i <= 0; i += 1) {
                        data.push({
                            x: time + i * 5000,
                            y: (30 + ((Math.random() * 10) / 10))
                        });
                    }

                    return data;
                }())
            },
            {
                name: 'Random data',
                data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;

                    for (i = -19; i <= 0; i += 1) {
                        data.push({
                            x: time + i * 5000,
                            y: (30 + ((Math.random() * 10) / 10))
                        });
                    }

                    return data;
                }())
            },
            {
                name: 'Random data',
                data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;

                    for (i = -19; i <= 0; i += 1) {
                        data.push({
                            x: time + i * 5000,
                            y: (30 + ((Math.random() * 10) / 10))
                        });
                    }

                    return data;
                }())
            },
        ]
    }

    return (
        <HighchartsReact Highcharts={Highcharts} options={option7} />
    );
}

/*
export const TempChart = () => {
    const dataSource = {
        chart: {
          caption: "Nordstorm's Customer Satisfaction Score for 2017",
          lowerlimit: "0",
          upperlimit: "100",
          showvalue: "1",
          numbersuffix: "%",
          theme: "fusion",
          showtooltip: "0"
        },
        colorrange: {
          color: [
            {
              minvalue: "0",
              maxvalue: "50",
              code: "#F2726F"
            },
            {
              minvalue: "50",
              maxvalue: "75",
              code: "#FFC533"
            },
            {
              minvalue: "75",
              maxvalue: "100",
              code: "#62B58F"
            }
          ]
        },
        dials: {
          dial: [
            {
              value: "81"
            }
          ]
        }
      };

      return (
          <ReactFusioncharts
            type="angulargauge"
            width="100%"
            height="100%"
            dataSource={dataSource} />
      )
}
*/

const dataSource = {
    chart: {
        caption: "Nordstorm's Customer Satisfaction Score for 2017",
        lowerlimit: "0",
        upperlimit: "100",
        showvalue: "1",
        numbersuffix: "%",
        theme: "fusion",
        showtooltip: "0"
    },
    colorrange: {
        color: [
            {
                minvalue: "0",
                maxvalue: "50",
                code: "#F2726F"
            },
            {
                minvalue: "50",
                maxvalue: "75",
                code: "#FFC533"
            },
            {
                minvalue: "75",
                maxvalue: "100",
                code: "#62B58F"
            }
        ]
    },
    dials: {
        dial: [
            {
                value: "81"
            }
        ]
    }
};

export class TempFusion extends React.Component {
    render() {
        return (
            <ReactFusioncharts
                type="angulargauge"
                width="100%"
                height="100%"
                dataFormat="JSON"
                dataSource={dataSource}
            />
        );
    }
}

export class VoltRadial extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [220],
            options: {
                chart: {
                    height: 150,
                    type: 'radialBar',
                    offsetY: 0
                },
                plotOptions: {
                    radialBar: {
                        dataLabels: {
                            name: {
                                show: true,
                                fontWeight: '600',
                            },
                            value: {
                                show: true,
                                fontSize: '12px',
                                formatter: function (val) {
                                    return val + 'V'
                                },
                                offsetY: 0
                            },
                        },
                        hollow: {
                            size: '55%',
                        }
                    },
                },
                stroke: {
                    lineCap: 'round',
                },

                labels: ['전압'],
                colors: ['#3caea3']/*8EB6E0*/
            },
        };
    }
    render() {
        return (
            <div id="chart" style={{ width: '33.33333333%', borderRight: '0.5px solid #303030' }}>
                <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={125} />
            </div>
        );
    }
}

export class CurrentRadial extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [70],
            options: {
                chart: {
                    height: 150,
                    type: 'radialBar',
                    offsetY: 0
                },
                plotOptions: {
                    radialBar: {
                        dataLabels: {
                            name: {
                                show: true,
                                fontWeight: '600',
                            },
                            value: {
                                show: true,
                                fontSize: '12px',
                                formatter: function (val) {
                                    return val + 'A'
                                },
                                offsetY: 0
                            },
                        },
                        hollow: {
                            size: '55%',
                        }
                    },
                },
                stroke: {
                    lineCap: 'round',
                },
                dataLabels: {
                    showOn: 'always',
                    name: {
                        show: true,
                        offsetY: -10,
                    },
                    value: {
                        show: true,
                        offsetY: -16,
                    }
                },
                labels: ['전류'],
                colors: ['#3caea3']/*8EB6E0*/
            },
        };
    }
    render() {
        return (
            <div id="chart" style={{ width: '33.33333333%', borderRight: '0.5px solid #303030' }}>
                <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={125} />
            </div>
        );
    }
}

export class TempRadial extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [25],
            options: {
                chart: {
                    height: 150,
                    type: 'radialBar',
                    offsetY: 0
                },
                plotOptions: {
                    radialBar: {
                        dataLabels: {
                            name: {
                                show: true,
                                fontWeight: '600',
                            },
                            value: {
                                show: true,
                                fontSize: '12px',
                                formatter: function (val) {
                                    return val + '°C'
                                },
                                offsetY: 0
                            },
                        },
                        hollow: {
                            size: '55%',
                        }
                    },
                },
                stroke: {
                    lineCap: 'round',
                },
                dataLabels: {
                    name: {
                        show: true,
                        offsetY: -10,
                    },
                    value: {
                        show: false,
                        offsetY: 50,
                    }
                },
                labels: ['온도'],
                colors: ['#3caea3']/*8EB6E0*/
            },
        };
    }
    render() {
        return (
            <div id="chart" style={{ width: '33.33333333%', borderRight: '0.5px solid #303030' }}>
                <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={125} />
            </div>
        );
    }
}
