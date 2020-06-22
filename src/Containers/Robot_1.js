import React, {Component, Fragment} from 'react';
import {Breadcrumb, Row, Col, Card} from 'antd';
import {DashboardOutlined, RobotOutlined} from '@ant-design/icons';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import './Robot_1.css';

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
                        y = (30 + ((Math.random() * 10 )/10))
                    series.addPoint([
                        x, y
                    ], true, true);
                }, 5000);
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
                        y: (30 + ((Math.random() * 10 )/10))
                    });
                }
                return data;
            }())
        }
    ]
}

const options_2 = {
    chart: {
        type: 'areaspline',
        height: 120,
        animation: Highcharts.svg, // don't animate in old IE
        marginRight: 10,
        events: {
            load: function () {

                // set up the updating of the chart each second
                var series = this.series[0];
                setInterval(function () {
                    var x = (new Date()).getTime(), // current time
                        y = (30 + ((Math.random() * 10 )/10))
                    series.addPoint([
                        x, y
                    ], true, true);
                }, 5000);
            }
        }
    },

    time: {
        useUTC: false
    },
    title: {
        text: '',
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
                        y: (30 + ((Math.random() * 10 )/10))
                    });
                }
                return data;
            }()),
            color: '#59ff7d'
        }
    ]
}


class ddd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : ''
        }
    }
    render() {
        return (
            <Fragment>
                <div style={{
                        margin: '0 6px'
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
                                                <HighchartsReact Highcharts={Highcharts} options={options} />
                                            </div>
                                        </Col>
                                        <Col span={8}>
                                            <div id="chart">
                                            <HighchartsReact Highcharts={Highcharts} options={options} />
                                            </div>
                                        </Col>
                                        <Col span={8}>
                                            <div id="chart">
                                            <HighchartsReact Highcharts={Highcharts} options={options} />
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row gutter={[16, 16]}>
                                        <Col span={8}>
                                            <div id="chart">
                                            <HighchartsReact Highcharts={Highcharts} options={options} />
                                            </div>
                                        </Col>
                                        <Col span={8}>
                                            <div id="chart">
                                            <HighchartsReact Highcharts={Highcharts} options={options} />
                                            </div>
                                        </Col>
                                        <Col span={8}>
                                            <div id="chart">
                                            <HighchartsReact Highcharts={Highcharts} options={options} />
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
                                <HighchartsReact Highcharts={Highcharts} options={options_2}/>
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