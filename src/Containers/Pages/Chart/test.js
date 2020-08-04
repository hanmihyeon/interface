import React, { useState } from 'react';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export const RobotDataColumn = () => {
    let data = {
        '온도': [
            ['온도',0]
        ],
        '습도': [
            ['습도',1]
        ],
        '연기': [
            ['연기',12]
        ],
        '먼지': [
            ['먼지',13]
        ],
        'CO': [
            ['CO',4]
        ],
        'CO2': [
            ['CO2',1]
        ],
        'O2': [
            ['O2',7]
        ],
        'VOC': [
            ['VOC',2]
        ],
        '황화수소': [
            ['황화수소',15]
        ],
        '이산화질소': [
            ['이산화질소',10]
        ],
        '암모니아': [
            ['암모니아',9]
        ]
    }

    let cols = [{
        name: '온도',
        flag: 197582,
        color: 'red',
    }, {
        name: '습도',
        flag: 197582,
        color: 'orange',
    }, {
        name: '연기',
        flag: 197582,
        color: 'orange',
    }, {
        name: '먼지',
        flag: 197582,
        color: 'orange',
    }, {
        name: 'CO',
        flag: 197582,
        color: 'orange',
    }, {
        name: 'CO2',
        flag: 197582,
        color: 'orange',
    }, {
        name: 'O2',
        flag: 197582,
        color: 'orange',
    }, {
        name: 'VOC',
        flag: 197582,
        color: 'orange',
    }, {
        name: '황화수소',
        flag: 197582,
        color: 'orange',
    }, {
        name: '이산화질소',
        flag: 197582,
        color: 'orange',
    }, {
        name: '암모니아',
        flag: 197582,
        color: 'orange',
    }]

    function getData(data) {
        return data.map(function (col,i) {
            return {
                name: col[0],
                y: col[1],
                color: cols[i].color
            }
        })
    }
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
                grouping: false,
                borderWidth: 0
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
            
        },

        yAxis: [{
            title: {
                text: ''
            },
            showFirstLabel: false
        }
            ],

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
                name:'온도',
                data:[
                    {x:'온도',y:25}
                ],
                labels: [],
                visible: true
            },
            {
                name:'온도',
                data:[
                    {x:'온도',y:44}
                ],
                labels: [],
                visible: true
            },
            {
                name:'연기',
                data:[
                    {x:'온도',y:225}
                ],
                labels: [],
                visible: true
            },
            {
                name:'먼지',
                data:[
                    {x:'온도',y:22}
                ],
                labels: [],
                visible: true
            }

        ],

        exporting: {
            allowHTML : true
        },

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 1000
                },
                chartOptions: {
                    legend: {
                        align: 'center',
                        verticalAlign: 'bottom',
                        layout: 'horizontal'
                    },
                    yAxis: {
                        labels: {
                            align: 'left',
                            // x: 0,
                            //y: -5
                        },
                        title: {
                            text: null
                        }
                    },
                    subtitle: {
                        text: null
                    },
                    credits: {
                        enabled: false
                    }
                }
            }]
        }
    }

    return (
        <HighchartsReact Highcharts={Highcharts} options={option1} style={{ marginTop: '15px' }} />
    );
}