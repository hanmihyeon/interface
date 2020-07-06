import React, {Component, Fragment} from 'react';
import {Breadcrumb, Row, Col, Card} from 'antd';
import {DashboardOutlined, RobotOutlined} from '@ant-design/icons';
import {RobotChart1, RobotChart2, RobotChart3, RobotChart4, RobotChart5, RobotChart6, RobotStateChart} from './RobotChart';

import './Robot1.css';

// var date = new Date().getTime();

/*options.series[0].addPoint({
    x : date,
    y : (30 + ((Math.random() * 10 )/10))
})*/

class ddd extends Component {

    componentDidMount() {}

    componentWillUnmount() {}

    render() {
        return (
            <Fragment>

                    <Breadcrumb>
                        <Breadcrumb.Item><DashboardOutlined/>&nbsp;&nbsp;Dashboard</Breadcrumb.Item>
                        <Breadcrumb.Item><RobotOutlined/>&nbsp;Robot</Breadcrumb.Item>
                    </Breadcrumb>
                    <div>
                    <div
                    className="title"
                    style={{
                        fontSize: '16px',
                        margin: '0 0 0px 32px',
                        float:'left'
                    }}>FOS</div>
                    <div style={{
                        fontSize: '16px',
                        float:'right'
                    }}>Update every minutes</div>
                                    <Row gutter={[16, 16]}>
                                        <Col span={8}>
                                            <div id="chart">
                                                <RobotChart1/>
                                            </div>
                                        </Col>
                                        <Col span={8}>
                                            <div id="chart">
                                                <RobotChart2/>
                                            </div>
                                        </Col>
                                        <Col span={8}>
                                            <div id="chart">
                                                <RobotChart3/>
                                            </div>
                                        </Col>
                                   
                                        <Col span={8}>
                                            <div id="chart">
                                                <RobotChart4/>
                                            </div>
                                        </Col>
                                        <Col span={8}>
                                            <div id="chart">
                                                <RobotChart5/>
                                            </div>
                                        </Col>
                                        <Col span={8}>
                                            <div id="chart">
                                                <RobotChart6/>
                                            </div>
                                        </Col>

                            <Col span={8}>
                                <Card
                                    
                                    style={{
                                        marginBottom: '20px',
                                        width:'100%'
                                    }}>
                                    <div className="robot-img">
                                        <img src="/robotcamera.png" alt="" style={{width:'100%',height:'100%',}}/>
                                    </div>
                                    <div className="robot-info">
                                        <p>
                                            전압: 220V<br/>
                                            전류: 70A<br/>
                                            내부온도: 30도<br/>
                                            위치: 300m
                                        </p>
                                    </div>
                                </Card>
                                <Card
                                    <RobotStateChart/>
                                </Card>
                            </Col>
                        </Row>

                    </div>

            </Fragment>

        );

    }
}

export default ddd;