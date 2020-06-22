import ReactApexChart from 'react-apexcharts';
import React, {Component, Fragment} from 'react';
import {Breadcrumb, Row, Col, Card} from 'antd';
import {DashboardOutlined, RobotOutlined} from '@ant-design/icons';
import './ddd.css';

class ddd extends Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [
                {
                    name: "Desktops",
                    data: [
                        10,
                        41,
                        35,
                        51,
                        49,
                        62,
                        69,
                        91,
                        148
                    ]
                }
            ],
            options: {
                chart: {
                    height: 350,
                    type: 'line',
                    zoom: {
                        enabled: false
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'straight'
                },
                title: {
                    text: 'Co2',
                    align: 'left'
                },
                grid: {
                    row: {
                        colors: [
                            '#f3f3f3', 'transparent'
                        ], // takes an array which will be repeated on columns
                        opacity: 0.5
                    }
                },
                xaxis: {
                    categories: [
                        '1',
                        '2',
                        '3',
                        '4',
                        '5',
                        '6',
                        '7',
                        '8',
                        '9'
                    ]
                }
            }
        };
    }

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
                                                    <ReactApexChart
                                                        options={this.state.options}
                                                        series={this.state.series}
                                                        type="line"
                                                        height={180}
                                                        width={230}/>
                                                </div>
                                                </Col>
                                                <Col span={8}>
                                                <div id="chart">
                                                    <ReactApexChart
                                                        options={this.state.options}
                                                        series={this.state.series}
                                                        type="line"
                                                        height={180}
                                                        width={230}/>
                                                </div></Col><Col span={8}>
                                                <div id="chart">
                                                    <ReactApexChart
                                                        options={this.state.options}
                                                        series={this.state.series}
                                                        type="line"
                                                        height={180}
                                                        width={230}/>
                                                </div></Col>
                                    </Row>
                                    <Row gutter={[16, 16]}><Col span={8}>
                                                <div id="chart">
                                                    <ReactApexChart
                                                        options={this.state.options}
                                                        series={this.state.series}
                                                        type="line"
                                                        height={180}
                                                        width={230}/>
                                                </div></Col><Col span={8}>
                                                <div id="chart">
                                                    <ReactApexChart
                                                        options={this.state.options}
                                                        series={this.state.series}
                                                        type="line"
                                                        height={180}
                                                        width={230}/>
                                                </div></Col><Col span={8}>
                                                <div id="chart">
                                                    <ReactApexChart
                                                        options={this.state.options}
                                                        series={this.state.series}
                                                        type="line"
                                                        height={180}
                                                        width={230}/>
                                                </div></Col>
                                    </Row>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card title="로봇 상태"></Card>
                            </Col>
                        </Row>

                    </div>
                </div>
            </Fragment>

        );

    }
}

export default ddd;