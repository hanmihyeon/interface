import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

let brobot = false

export const SagnacAvgChart = () => {
    const optionavg1 = {
        chart: {
            type: 'area',
            marginTop: 50,
            height: 300,
            width:null,
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
            enabled: false,
            
        },

        exporting: {
            enabled: false
        },

        series: [
            {
                name: 'AVG',
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
        <div style={{margin: '40px 0 0 30px'}}>
            <div>
                <HighchartsReact Highcharts={Highcharts} options={optionavg1} brobot={false} style={{overflow:'visible'}}/></div>
        </div>
    );
}

export const TempAvgChart = () => {
    const optionavg2 = {
        chart: {
            type: 'area',
            marginTop: 50,
            height: 300,
            width:null,
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
                name: 'AVG',
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
            
            <div style={{margin: '40px 0 0 30px'}}>
                <HighchartsReact Highcharts={Highcharts} options={optionavg2} brobot={false}/></div>
        </div>
    );
}

export const SoundAvgChart = () => {
    const optionavg3 = {
        chart: {
            type: 'area',
            marginTop: 50,
            height: 280,
            width:null,
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
                name: 'AVG',
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
            
            <div style={{margin: '60px 0 0 30px'}}>
                <HighchartsReact Highcharts={Highcharts} options={optionavg3} brobot={false}/></div>
        </div>
    );
}