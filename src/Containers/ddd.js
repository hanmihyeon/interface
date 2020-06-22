import ReactApexChart from 'react-apexcharts';
import React, {Component, Fragment} from 'react';
import {Breadcrumb, Row, Col, Card} from 'antd';
import {DashboardOutlined, RobotOutlined} from '@ant-design/icons';

import './ddd.css';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from 'recharts';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
    chart: {
        type: 'spline',
        height: 200,
        animation: Highcharts.svg, // don't animate in old IE
        marginRight: 10,
        events: {
            load: function () {

                // set up the updating of the chart each second
                var series = this.series[0];
                setInterval(function () {
                    var x = (new Date()).getTime(), // current time
                        y = (30 + (Math.round(Math.random() * 10 )/10))
                    series.addPoint([
                        x, y
                    ], true, true);
                }, 1000);
            }
        }
    },

    time: {
        useUTC: false
    },

    title: {
        text: 'CO2'
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
                        x: time + i * 1000,
                        y: (30 + (Math.round(Math.random() * 10 )/10))
                    });
                }
                return data;
            }())
        }
    ]
}

const data = [
    {
        name: '1',
        uv: 4000,
        amt: 2400
    }, {
        name: '2',
        uv: 3000,
        amt: 2210
    }, {
        name: '3',
        uv: 2000,
        amt: 2290
    }, {
        name: '4',
        uv: 2780,
        amt: 2000
    }, {
        name: '5',
        uv: 1890,
        amt: 2181
    }, {
        name: '6',
        uv: 2390,
        amt: 2500
    }, {
        name: '7',
        uv: 3490,
        amt: 2100
    }
];

class ddd extends Component {

    render() {
        return (
            <Fragment>
                <div style={{
                        margin: '0 15px'
                    }}>
                    <Breadcrumb>
                        <Breadcrumb.Item><DashboardOutlined/>&nbsp;&nbsp;Dashboard</Breadcrumb.Item>
                        <Breadcrumb.Item><RobotOutlined/>&nbsp;Robot</Breadcrumb.Item>
                    </Breadcrumb>
                    <div
                        style={{
                            marginTop: '15px'
                        }}>
                        <Row gutter={24}>
                            <Col span={16}>
                                <Card title="레일 로봇 센서 현황(환경 정보)">
                                    <Row gutter={[16, 16]}>
                                        <Col span={8}>
                                            <div id="chart">
                                                <HighchartsReact Highcharts={Highcharts} options={options} height={180}
                                                    width={230}/>
                                            </div>
                                        </Col>
                                        <Col span={8}>
                                            <div id="chart">
                                            <HighchartsReact Highcharts={Highcharts} options={options} height={180}
                                                    width={230}/>
                                            </div>
                                        </Col>
                                        <Col span={8}>
                                            <div id="chart">
                                            <HighchartsReact Highcharts={Highcharts} options={options} height={180}
                                                    width={230}/>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row gutter={[16, 16]}>
                                        <Col span={8}>
                                            <div id="chart">
                                            <HighchartsReact Highcharts={Highcharts} options={options} height={180}
                                                    width={230}/>
                                            </div>
                                        </Col>
                                        <Col span={8}>
                                            <div id="chart">
                                            <HighchartsReact Highcharts={Highcharts} options={options} height={180}
                                                    width={230}/>
                                            </div>
                                        </Col>
                                        <Col span={8}>
                                            <div id="chart">
                                            <HighchartsReact Highcharts={Highcharts} options={options} height={180}
                                                    width={230}/>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card
                                    title="로봇 상태"
                                    style={{
                                        marginBottom: '20px'
                                    }}>
                                    <div className="robot-img"></div>
                                    <div className="robot-info">
                                        <p>
                                            전압: 220V<br/><br/>
                                            전류: 70A<br/><br/>
                                            내부온도: 30도<br/><br/>
                                            위치: 300m
                                        </p>
                                    </div>
                                </Card>
                                <Card title="레일 로봇 상태 추이">
                                    <LineChart
                                        width={340}
                                        height={120}
                                        data={data}
                                        margin={{
                                            top: 0,
                                            right: 0,
                                            left: 0,
                                            bottom: 0
                                        }}
                                        style={{
                                            marginLeft: '-20px'
                                        }}>
                                        <XAxis dataKey="name"/>
                                        <YAxis/>
                                        <CartesianGrid strokeDasharray="3 3"/>
                                        <Tooltip/>
                                        <Legend/>

                                        <Line type="monotone" dataKey="uv" stroke="#82ca9d"/>
                                    </LineChart>
                                </Card>
                            </Col>
                        </Row>

                    </div>
                </div>
            </Fragment>

        );

    }
}

export default ddd;