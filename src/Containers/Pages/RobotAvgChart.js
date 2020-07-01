import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

let brobot = false

export const SagnacAvgChart = () => {
    const optionavg1 = {
        chart: {
            type: 'area',
            width: 1100,
            height: 320,
            marginTop: 70,
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
            text: ''
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
            enabled: true,
            align: 'top',
            verticalAlign: 'top',
            layout: 'horizontal',
            x: 280,
            y: 0
        },

        exporting: {
            enabled: false
        },

        series: [
            {
                name: 'FOS',
                color: '#ff8cac',
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
        <div>
        <div>
            <div
                className="title"
                style={{
                    fontSize: '16px',
                    margin: '0 0 0px 32px',
                    float: 'left'
                }}>Sagnac AVG Chart</div>
            <div
                style={{
                    fontSize: '16px',
                    float: 'right'
                }}>Update every minutes</div></div>
            <div style={{
                    marginLeft: '32px'
                }}>
                <HighchartsReact Highcharts={Highcharts} options={optionavg1} brobot={false}/></div>
                </div>
    );
}

export const TempAvgChart = () => {
    const optionavg2 = {
        chart: {
            type: 'area',
            width: 1100,
            height: 320,
            marginTop: 70,
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
            text: ''
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
            enabled: true,
            align: 'top',
            verticalAlign: 'top',
            layout: 'horizontal',
            x: 280,
            y: 0
        },

        exporting: {
            enabled: false
        },

        series: [
            {
                name: 'Temp AVG',
                color: 'rgb(193, 224, 252)',
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
        <div>
            <div
                className="title"
                style={{
                    fontSize: '16px',
                    margin: '0 0 0px 32px',
                    float: 'left'
                }}>Temp AVG Chart</div>
            <div
                style={{
                    fontSize: '16px',
                    float: 'right'
                }}>Update every minutes</div>
            <div style={{
                    marginLeft: '32px'
                }}>
                <HighchartsReact Highcharts={Highcharts} options={optionavg2} brobot={false}/></div>
        </div>
    );
}

export const SoundAvgChart = () => {
    const optionavg3 = {
        chart: {
            type: 'area',
            width: 1100,
            height: 320,
            marginTop: 70,
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
            text: ''
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
            enabled: true,
            align: 'top',
            verticalAlign: 'top',
            layout: 'horizontal',
            x: 280,
            y: 0
        },

        exporting: {
            enabled: false
        },

        series: [
            {
                name: 'Sound AVG',
                color: 'rgb(214, 251, 181)',
                data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;

                    for (i = -19; i <= 0; i += 1) {
                        data.push({
                            x: time + i * 5000,
                            y: (50 + ((Math.random() * 10) / 10))
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
        <div>
            <div
                className="title"
                style={{
                    fontSize: '16px',
                    margin: '0 0 0px 32px',
                    float: 'left'
                }}>Sound AVG Chart</div>
            <div
                style={{
                    fontSize: '16px',
                    float: 'right'
                }}>Update every minutes</div>
            <div style={{
                    marginLeft: '32px'
                }}>
                <HighchartsReact Highcharts={Highcharts} options={optionavg3} brobot={false}/></div>
        </div>
    );
}