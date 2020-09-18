import React from 'react';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import ReactSpeedometer from 'react-d3-speedometer';
import Thermometer from 'react-thermometer-ecotropy';

export const Thermom = () => {
    return (
        <div className="thermom">
            <h5 className="ther-chart gauge-title">온도</h5>
            <Thermometer
                theme="dark"
                value="285"
                max="285"
                steps="2"
                format="°C"
                size="small"
                height="120"
            />
        </div>
    )
}

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
                startColor="#005f00"
                endColor="#c0424e"//#005f00 #b50606
                needleTransitionDuration={4000}
                needleTransition="easeElastic"
                currentValueText="#{value}V"
                currentValuePlaceholderStyle={"#{value}"}
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
                startColor="#005f00"
                endColor="#c0424e" //c0424e
                needleTransitionDuration={4000}
                needleTransition="easeElastic"
                currentValueText="#{value}A"
                currentValuePlaceholderStyle={"#{value}"}
            /></div>
    );

}

export const RobotDataColumn = () => {

    const option1 = {
        chart: {
            // zoomType: 'xy',
            type: 'column',
            backgroundColor: 'none',
            height: 424,
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
            text: '로봇 환경 데이터',
            style: {
                fontSize: '14px',
                color: '#fff'
            }
        },
        /*accessibility: {
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
        },*/

        plotOptions: {
            column: {
                pointPadding: 0.15,
                borderWidth: 0,
                borderRadius: 15
            },
            series: {
                grouping: false
            }
        },

        legend: {
            enabled: true,
            itemStyle: {
                color: '#fff',
                fontWeight: '400'
            }
        },

        xAxis: {
            type: 'category',
            categories: ['온도', '습도', '연기', '먼지', 'CO', 'CO2', 'O2', 'VOC', '황화수소', '이산화질소', '암모니아'],
            crosshair: true
        },

        yAxis: [{
            labels: {
                format: '{value}°C',
                style: {
                    color: '#fff',
                }
            },
            title: {
                text: '온도',
                align: 'high',
                offset: 13,
                rotation: 0,
                y: -20,
                style: {
                    color: '#fff',
                }
            },
        }, {
            labels: {
                format: '{value}%',
                style: {
                    color: '#fff',
                }
            },
            title: {
                text: '습도',
                align: 'high',
                offset: 13,
                rotation: 0,
                y: -20,
                style: {
                    color: '#fff',
                }
            },
            opposite: true,
        }, {
            labels: {
                format: '{value}ppm',
                style: {
                    color: '#fff',
                }
            },
            title: {
                text: '그 외',
                align: 'high',
                offset: 13,
                rotation: 0,
                y: -20,
                style: {
                    color: '#fff',
                }
            },
            opposite: false,
        }],

        tooltip: {
            shared: true,
            // headerFormat: '<b>{series.name}</b><br/>',
            // pointFormat: '<span style="color:{point.color}">●</span> {series.name} : <b>{point.y}</b><br/>',
        },

        exporting: {
            enabled: false
        },

        series: [
            {
                name: '온도',
                yAxis: 0,
                tooltip: {
                    valueSuffix: ' °C',
                },
                data: [
                    { x: 0, y: 24 }
                ],
                color: '#396afc',
                // #3e5a76 #7cb5ec
                visible: true
            },
            {
                name: '습도',
                yAxis: 1,
                tooltip: {
                    valueSuffix: ' %',
                },
                data: [
                    { x: 1, y: 64 }
                ],
                color: '#396afc',
                // #3c3c40 434348
                visible: true
            },
            {
                name: '연기',
                yAxis: 2,
                tooltip: {
                    valueSuffix: ' ppm',
                },
                data: [
                    { x: 2, y: 5004 }
                ],
                color: '#396afc',
                // #48763e #90ed7d
                visible: true
            },
            {
                name: '먼지',
                yAxis: 2,
                tooltip: {
                    valueSuffix: ' ppm',
                },
                data: [
                    { x: 3, y: 5024 }
                ],
                color: '#396afc',
                // #7b512e #f7a35c
                visible: true
            },
            {
                name: 'co',
                yAxis: 2,
                tooltip: {
                    valueSuffix: ' ppm',
                },
                data: [
                    { x: 4, y: 5024 }
                ],
                color: '#396afc',
                // 404274 #8085e9
                visible: true
            },
            {
                name: 'co2',
                yAxis: 2,
                tooltip: {
                    valueSuffix: ' ppm',
                },
                data: [
                    { x: 5, y: 5204 }
                ],
                color: '#396afc',
                // 782e40 #f15c80
                visible: true
            },
            {
                name: 'o2',
                yAxis: 2,
                tooltip: {
                    valueSuffix: ' ppm',
                },
                data: [
                    { x: 6, y: 5054 }
                ],
                color: '#396afc',
                // 72692a #e4d354
                visible: true
            },
            {
                name: 'voc',
                yAxis: 2,
                tooltip: {
                    valueSuffix: ' ppm',
                },
                data: [
                    { x: 7, y: 5074 }
                ],
                color: '#396afc',
                // 154847 #2b908f
                visible: true
            },
            {
                name: '황화수소',
                yAxis: 2,
                tooltip: {
                    valueSuffix: ' ppm',
                },
                data: [
                    { x: 8, y: 5024 }
                ],
                color: '#396afc',
                // 7a2d2d #f45b5b
                visible: true
            },
            {
                name: '이산화질소',
                yAxis: 2,
                tooltip: {
                    valueSuffix: ' ppm',
                },
                data: [
                    { x: 9, y: 5004 }
                ],
                color: '#396afc',
                // 487470 #91e8e1
                visible: true
            },
            {
                name: '암모니아',
                yAxis: 2,
                tooltip: {
                    valueSuffix: ' ppm',
                },
                data: [
                    { x: 10, y: 5020 }
                ],
                color: '#396afc',
                // 3e5a76 #7cb5ec
                visible: true
            },
        ],
    }

    return (
        <HighchartsReact Highcharts={Highcharts} options={option1} style={{ marginTop: '15px' }} />
    );
}

export const RobotDataColumn1 = () => {

    const option1 = {
        chart: {
            // zoomType: 'xy',
            type: 'column',
            backgroundColor: '#242424',
            height: 424,
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
            text: '로봇 환경 데이터',
            style: {
                fontSize: '14px',
                color: '#fff',
                fontWeight: '600'
            }
        },
        /*accessibility: {
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
        },*/

        plotOptions: {
            column: {
                // pointPadding: 0.2,
                borderWidth: 0
            },
            series: {
                grouping: false
            }
        },

        legend: {
            enabled: true,
            itemStyle: {
                color: '#fff',
                fontWeight: '400'
            }
        },

        xAxis: {
            type: 'category',
            categories: ['온도', '습도', '연기', '먼지', 'CO', 'CO2', 'O2', 'VOC', '황화수소', '이산화질소', '암모니아'],
            crosshair: true,
            labels: {
                style: {
                    color: '#fff'
                }
            }
        },

        yAxis: [{
            labels: {
                format: '{value}°C',
                style: {
                    color: '#fff',
                }
            },
            title: {
                text: '온도',
                align: 'high',
                offset: 13,
                rotation: 0,
                y: -20,
                style: {
                    color: '#fff',
                }
            },
        }, {
            labels: {
                format: '{value}%',
                style: {
                    color: '#fff',
                }
            },
            title: {
                text: '습도',
                align: 'high',
                offset: 13,
                rotation: 0,
                y: -20,
                style: {
                    color: '#fff',
                }
            },
            // opposite: true,
        }, {
            labels: {
                format: '{value}ppm',
                style: {
                    color: '#fff',
                }
            },
            title: {
                text: '그 외',
                align: 'high',
                offset: 13,
                rotation: 0,
                y: -20,
                style: {
                    color: '#fff',
                }
            },
            opposite: true,
        }],

        tooltip: {
            shared: true,
            // headerFormat: '<b>{series.name}</b><br/>',
            // pointFormat: '<span style="color:{point.color}">●</span> {series.name} : <b>{point.y}</b><br/>',
        },

        exporting: {
            enabled: false
        },

        series: [
            {
                name: '온도',
                yAxis: 0,
                tooltip: {
                    valueSuffix: ' °C',
                },
                data: [
                    { x: 0, y: 24 }
                ],
                color: '#e2dbea',
                // 25425c #7cb5ec
                visible: true
            },
            {
                name: '습도',
                yAxis: 1,
                tooltip: {
                    valueSuffix: ' %',
                },
                data: [
                    { x: 1, y: 64 }
                ],
                color: '#c5b8d5',
                // d6d4a1 #434348
                visible: true
            },
            {
                name: '연기',
                yAxis: 2,
                tooltip: {
                    valueSuffix: ' ppm',
                },
                data: [
                    { x: 2, y: 5004 }
                ],
                color: '#a997c1',
                // 83b490 #90ed7d
                visible: true
            },
            {
                name: '먼지',
                yAxis: 2,
                tooltip: {
                    valueSuffix: ' ppm',
                },
                data: [
                    { x: 3, y: 5024 }
                ],
                color: '#8d76ac',
                // 307671 #f7a35c
                visible: true
            },
            {
                name: 'co',
                yAxis: 2,
                tooltip: {
                    valueSuffix: ' ppm',
                },
                data: [
                    { x: 4, y: 5024 }
                ],
                color: '#715698',
                // 610019 #8085e9
                visible: true
            },
            {
                name: 'co2',
                yAxis: 2,
                tooltip: {
                    valueSuffix: ' ppm',
                },
                data: [
                    { x: 5, y: 5204 }
                ],
                color: '#543884',
                // 3b0056 #f15c80
                visible: true
            },
            {
                name: 'o2',
                yAxis: 2,
                tooltip: {
                    valueSuffix: ' ppm',
                },
                data: [
                    { x: 6, y: 5054 }
                ],
                color: '#47306d',
                // d2691e #e4d354
                visible: true
            },
            {
                name: 'voc',
                yAxis: 2,
                tooltip: {
                    valueSuffix: ' ppm',
                },
                data: [
                    { x: 7, y: 5074 }
                ],
                color: '#392757',
                // 798488 #2b908f
                visible: true
            },
            {
                name: '황화수소',
                yAxis: 2,
                tooltip: {
                    valueSuffix: ' ppm',
                },
                data: [
                    { x: 8, y: 5024 }
                ],
                color: '#2d1f41',
                // 75537c #f45b5b
                visible: true
            },
            {
                name: '이산화질소',
                yAxis: 2,
                tooltip: {
                    valueSuffix: ' ppm',
                },
                data: [
                    { x: 9, y: 5004 }
                ],
                color: '#20182d',
                // 487470 #91e8e1
                visible: true
            },
            {
                name: '암모니아',
                yAxis: 2,
                tooltip: {
                    valueSuffix: ' ppm',
                },
                data: [
                    { x: 10, y: 5020 }
                ],
                color: '#150f1a',
                // c76345 #7cb5ec
                visible: true
            },
        ],
    }

    return (
        <HighchartsReact Highcharts={Highcharts} options={option1} style={{ marginTop: '15px' }} />
    );
}

export const RobotDataChart1 = () => {
    const option1 = {
        chart: {
            zoomType: 'xy',
            backgroundColor: 'none',
            height: 300,
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
            text: '온도 / 습도',
            style: {
                fontSize: '14px',
                color: '#fff'
            }
        },
        /*accessibility: {
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
        },*/

        plotOptions: {
            series: {
                marker: {
                    enabled: false
                },
            }
        },

        legend: {
            enabled: true,
            itemStyle: {
                color: '#fff',
                fontWeight: '400'
            }
        },

        xAxis: {
            type: 'datetime',
            tickPixelInterval: 150,
            crosshair: true,
        },

        yAxis: [{
            labels: {
                format: '{value}°C',
                style: {
                    color: '#fff',
                }
            },
            title: {
                text: '온도',
                style: {
                    color: '#fff',
                }
            },
        }, {
            labels: {
                format: '{value}%',
                style: {
                    color: '#fff'
                    // Highcharts.getOptions().colors[0]
                }
            },
            title: {
                text: '습도',
                style: {
                    color: '#fff'
                    // Highcharts.getOptions().colors[0]
                }
            },
            opposite: true
        }],

        tooltip: {
            shared: true,
            // headerFormat: '<b>{series.name}</b><br/>',
            // pointFormat: '<span style="color:{point.color}">●</span> {series.name} : <b>{point.y}</b><br/>',
        },

        exporting: {
            enabled: false
        },

        series: [
            {
                name: '온도',
                type: 'spline',
                yAxis: 0,
                color: '#51b241',
                tooltip: {
                    valueSuffix: ' °C',
                },
                data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;

                    for (i = -19; i <= 0; i += 1) {
                        data.push({
                            x: time + i * 5000,
                            y: (25 + (Math.round((Math.random() * 100)) / 100))
                        });
                    }

                    return data;
                }())
            },
            {
                name: '습도',
                type: 'spline',
                yAxis: 1,
                tooltip: {
                    valueSuffix: ' %',
                },
                data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;

                    for (i = -19; i <= 0; i += 1) {
                        data.push({
                            x: time + i * 5000,
                            y: (60 + (Math.round((Math.random() * 100)) / 100))
                        });
                    }

                    return data;
                }())
            },
        ]
    }

    return (
        <HighchartsReact Highcharts={Highcharts} options={option1} style={{ marginTop: '15px' }} />
    );
}

export const RobotDataChart2 = () => {
    const option1 = {
        chart: {
            zoomType: 'xy',
            backgroundColor: 'none',
            height: 300,
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
            text: '연기 / 먼지',
            style: {
                fontSize: '14px',
                color: '#fff'
            }
        },
        /*accessibility: {
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
        },*/

        plotOptions: {
            series: {
                marker: {
                    enabled: false
                }
            }
        },

        xAxis: {
            type: 'datetime',
            tickPixelInterval: 150,
            crosshair: true,
        },

        yAxis: [{
            labels: {
                format: '{value}ppm',
                style: {
                    color: '#fff',
                }
            },
            title: {
                text: '',
                style: {
                    color: '#fff',
                }
            },
        }, {
            labels: {
                format: '{value}ppm',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            title: {
                text: '',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            opposite: true
        }],

        tooltip: {
            shared: true,
            // headerFormat: '<b>{series.name}</b><br/>',
            // pointFormat: '<span style="color:{point.color}">●</span> {series.name} : <b>{point.y:.2f}ppm</b><br/>'
        },

        legend: {
            enabled: true,
            itemStyle: {
                color: '#fff',
                fontWeight: '400'
            }
        },

        exporting: {
            enabled: false
        },

        series: [
            {
                name: '연기',
                type: 'spline',
                yAxis: 0,
                color: '#51b241',
                tooltip: {
                    valueSuffix: ' ppm',
                },
                data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;

                    for (i = -19; i <= 0; i += 1) {
                        data.push({
                            x: time + i * 5000,
                            y: (5010 + (Math.round((Math.random() * 100)) / 100))
                        });
                    }

                    return data;
                }())
            },
            {
                name: '먼지',
                type: 'spline',
                yAxis: 0,
                tooltip: {
                    valueSuffix: ' ppm',
                },
                data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;

                    for (i = -19; i <= 0; i += 1) {
                        data.push({
                            x: time + i * 5000,
                            y: (5000 + (Math.round((Math.random() * 100)) / 100))
                        });
                    }

                    return data;
                }())
            }
        ]
    }

    return (
        <HighchartsReact Highcharts={Highcharts} options={option1} style={{ width: '50%' }} />
    );
}

export const RobotDataChart3 = () => {
    const option1 = {
        chart: {
            zoomType: 'xy',
            backgroundColor: 'none',
            height: 300,
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
            text: 'CO / CO2 / O2',
            style: {
                fontSize: '14px',
                color: '#fff'
            }
        },
        /*accessibility: {
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
        },*/

        plotOptions: {
            series: {
                marker: {
                    enabled: false
                }
            }
        },

        xAxis: {
            type: 'datetime',
            tickPixelInterval: 150,
            crosshair: true,
        },

        yAxis: [{
            labels: {
                format: '{value}ppm',
                style: {
                    color: '#fff',
                }
            },
            title: {
                text: '',
                style: {
                    color: '#fff',
                }
            },
        }, {
            labels: {
                format: '{value}ppm',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            title: {
                text: '',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            opposite: true
        }, {
            labels: {
                format: '{value}ppm',
                style: {
                    color: '#fff',
                }
            },
            title: {
                text: '',
                style: {
                    color: '#fff',
                }
            },
        }],

        tooltip: {
            shared: true,
            // headerFormat: '<b>{series.name}</b><br/>',
            // pointFormat: '<span style="color:{point.color}">●</span> {series.name} : <b>{point.y:.2f}ppm</b><br/>'
        },

        legend: {
            enabled: true,
            itemStyle: {
                color: '#fff',
                fontWeight: '400'
            }
        },

        exporting: {
            enabled: false
        },

        series: [
            {
                name: 'CO',
                type: 'spline',
                yAxis: 0,
                color: '#51b241',
                tooltip: {
                    valueSuffix: ' ppm',
                },
                data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;

                    for (i = -19; i <= 0; i += 1) {
                        data.push({
                            x: time + i * 5000,
                            y: (50 + (Math.round((Math.random() * 100)) / 100))
                        });
                    }

                    return data;
                }())
            },
            {
                name: 'CO2',
                type: 'spline',
                yAxis: 0,
                tooltip: {
                    valueSuffix: ' ppm',
                },
                data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;

                    for (i = -19; i <= 0; i += 1) {
                        data.push({
                            x: time + i * 5000,
                            y: (60 + (Math.round((Math.random() * 100)) / 100))
                        });
                    }

                    return data;
                }())
            },
            {
                name: 'O2',
                type: 'spline',
                yAxis: 0,
                color: '#feff37',
                tooltip: {
                    valueSuffix: ' ppm',
                },
                data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;

                    for (i = -19; i <= 0; i += 1) {
                        data.push({
                            x: time + i * 5000,
                            y: (60 + (Math.round((Math.random() * 100)) / 100))
                        });
                    }

                    return data;
                }())
            }
        ]
    }

    return (
        <HighchartsReact Highcharts={Highcharts} options={option1} style={{ width: '50%' }} />
    );
}

export const RobotDataChart4 = () => {
    const option1 = {
        chart: {
            zoomType: 'xy',
            backgroundColor: 'none',
            height: 300,
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
            text: 'VOC / 이산화질소 / 황화수소 / 암모니아',
            style: {
                fontSize: '14px',
                color: '#fff'
            }
        },
        /*accessibility: {
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
        },*/

        plotOptions: {
            series: {
                marker: {
                    enabled: false
                }
            }
        },

        xAxis: {
            type: 'datetime',
            tickPixelInterval: 150,
            crosshair: true,
        },

        yAxis: [{
            labels: {
                format: '{value}ppm',
                style: {
                    color: '#fff',
                }
            },
            title: {
                text: ''
            }
        }, {
            labels: {
                format: '{value}ppm',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            title: {
                text: ''
            }
        }, {
            labels: {
                format: '{value}ppm',
                style: {
                    color: '#fff',
                }
            },
            title: {
                text: ''
            }
        }, {
            labels: {
                format: '{value}ppm',
                style: {
                    color: '#fff',
                }
            },
            title: {
                text: ''
            }
        }],

        tooltip: {
            shared: true,
            // headerFormat: '<b>{series.name}</b><br/>',
            pointFormat: '<span style="color:{point.color}">●</span> {series.name} : <b>{point.y:.2f}ppm</b><br/>'
        },

        legend: {
            enabled: true,
            itemStyle: {
                color: '#fff',
                fontWeight: '400'
            }
        },

        exporting: {
            enabled: false
        },

        series: [
            {
                name: 'VOC',
                type: 'spline',
                yAxis: 0,
                color: '#51b241',
                tooltip: {
                    valueSuffix: ' ppm',
                },
                data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;

                    for (i = -19; i <= 0; i += 1) {
                        data.push({
                            x: time + i * 5000,
                            y: (55 + (Math.round((Math.random() * 100)) / 100))
                        });
                    }

                    return data;
                }())
            },
            {
                name: '이산화질소',
                type: 'spline',
                yAxis: 0,
                tooltip: {
                    valueSuffix: ' ppm',
                },
                data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;

                    for (i = -19; i <= 0; i += 1) {
                        data.push({
                            x: time + i * 5000,
                            y: (60 + (Math.round((Math.random() * 100)) / 100))
                        });
                    }

                    return data;
                }())
            },
            {
                name: '황화수소',
                type: 'spline',
                yAxis: 0,
                color: '#feff37',
                tooltip: {
                    valueSuffix: ' ppm',
                },
                data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;

                    for (i = -19; i <= 0; i += 1) {
                        data.push({
                            x: time + i * 5000,
                            y: (60 + (Math.round((Math.random() * 100)) / 100))
                        });
                    }

                    return data;
                }())
            },
            {
                name: '암모니아',
                type: 'spline',
                yAxis: 0,
                color: '#f25a16',
                tooltip: {
                    valueSuffix: ' ppm',
                },
                data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;

                    for (i = -19; i <= 0; i += 1) {
                        data.push({
                            x: time + i * 5000,
                            y: (60 + (Math.round((Math.random() * 100)) / 100))
                        });
                    }

                    return data;
                }())
            }
        ]
    }

    return (
        <HighchartsReact Highcharts={Highcharts} options={option1} style={{ width: '50%' }} />
    );
}

export const RobotStateChart = () => {

    const optionState = {
        chart: {
            backgroundColor: 'none',
            type: 'areaspline',
            height: 180,
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
            enabled: false,
            itemStyle: {
                color: '#fff',
                fontWeight: '400'
            }
        },

        exporting: {
            enabled: false
        },

        series: [
            {
                name: '로봇 상태',
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
                color: '#396afc'//#005f00
            }
        ]
    }

    return (
        <HighchartsReact Highcharts={Highcharts} options={optionState} />
    )
}

export const ModeChart = () => {

    const optionMode = {
        chart: {
            backgroundColor: 'none',
            type: 'column',
            height: 160,
            // width: 500,
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
            text: '',
            style: {
                fontSize: '14px',
                color: '#fff'
            }
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
            dateTimeLabelFormats: {
                day: '%e of %b'
            }
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
            headerFormat: '<b>{point.x:%Y-%m-%d %H:%M:%S}</b><br/>',
            pointFormat: '<span style="color:{point.color}">●</span> {series.name}: <b>{point.y}</b>'
        },

        legend: {
            floating: false,
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            backgroundColor: '#d0d0d0',
            borderColor: '#fff',
            borderWidth: 1,
            itemStyle: {
                color: '#000',
                fontSize: '11px',
                fontWeight: '400'
            },
        },

        exporting: {
            enabled: false
        },

        series: [
            {
                name: '자동 모드',
                pointInterval: 24 * 3600 * 1000, // one day
                pointStart: Date.UTC(2020, 6, 31),
                data: [1, 2, 5, 2, 1, 0, 4],
            },
            {
                name: '수동 모드',
                pointInterval: 24 * 3600 * 1000, // one day
                pointStart: Date.UTC(2020, 6, 31),
                data: [3, 2, 5, 2, 5, 9, 1],
            }
        ]
    }

    return (
        <HighchartsReact Highcharts={Highcharts} options={optionMode} />
    )
}