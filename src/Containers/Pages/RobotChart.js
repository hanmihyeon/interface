import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

let brobot = false

export const RobotChart1 = () => {
    const option1 = {
        chart: {
            type: 'spline',
            width:265,
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
                fontSize:'14px'
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
                    if (brobot === true) {
                        return;
                    } else {
                        return data;
                    }
                   // return data;
                }())
            }
        ]
    }

    return (
        <HighchartsReact Highcharts={Highcharts} options={option1} brobot={false}/>
    );
}

export const RobotChart2 = () => {
    const option2 = {
        chart: {
            type: 'spline',
            width:265,
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
                fontSize:'14px'
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
                    if (brobot === true) {
                        return;
                    } else {
                        return data;
                    }
                   // return data;
                }())
            }
        ]
    }

    return (
        <HighchartsReact Highcharts={Highcharts} options={option2} brobot={false}/>
    );

}

export const RobotChart3 = () => {
    
    const option3 = {
        chart: {
            type: 'spline',
            width:265,
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
                fontSize:'14px'
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
                    if (brobot === true) {
                        return;
                    } else {
                        return data;
                    }
                   // return data;
                }())
            }
        ]
    }

    return (
        <HighchartsReact Highcharts={Highcharts} options={option3} brobot={false}/>
    );
}

export const RobotChart4 = () => {
    
    const option4 = {
        chart: {
            type: 'spline',
            width:265,
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
                fontSize:'14px'
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
                    if (brobot === true) {
                        return;
                    } else {
                        return data;
                    }
                   // return data;
                }())
            }
        ]
    }

    return (
        <HighchartsReact Highcharts={Highcharts} options={option4} brobot={false}/>
    );
}

export const RobotChart5 = () => {
    
    const option5 = {
        chart: {
            type: 'spline',
            width:265,
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
                fontSize:'14px'
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
                    if (brobot === true) {
                        return;
                    } else {
                        return data;
                    }
                   // return data;
                }())
            }
        ]
    }

    return (
        <HighchartsReact Highcharts={Highcharts} options={option5} brobot={false}/>
    );
}

export const RobotChart6 = () => {
    
    const option6 = {
        chart: {
            type: 'spline',
            width:265,
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
                fontSize:'14px'
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
                    if (brobot === true) {
                        return;
                    } else {
                        return data;
                    }
                   // return data;
                }())
            }
        ]
    }

    return (
        <HighchartsReact Highcharts={Highcharts} options={option6} brobot={false}/>
    );
}

export const SagnacChart = () => {
        
    const optionState = {
        chart: {
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
        <HighchartsReact Highcharts={Highcharts} options={optionState} brobot={false}/>
    )
}