import React, {Fragment} from 'react';
import {Breadcrumb, Row, Col, Card} from 'antd';
import {DashboardOutlined, DatabaseOutlined} from '@ant-design/icons';
// import { Line , StackedArea} from '@ant-design/charts';

import {GraphsTemp, GraphsEvent, GraphsCotwo} from './Graphs';

import './Common.css';

export default class TunnelCurrentA extends React.Component {

    //border:'solid 1px black'
    refreshDiv = () => {
        this.setState({});
    }

    render() {
        {
            setTimeout(this.refreshDiv, 8000)
        }
        return (
            <Fragment>
                <Breadcrumb class="bread">
                    <Breadcrumb.Item><DashboardOutlined/>&nbsp;&nbsp;Dashboard</Breadcrumb.Item>
                    <Breadcrumb.Item><DatabaseOutlined/>&nbsp;Data</Breadcrumb.Item>
                </Breadcrumb>
                <div className="tunnelcurrent contents">
                    <Card>
                        <Row
                            justify="center"
                            style={{
                                marginBottom: '3px'
                            }}>
                            <Col
                                style={{
                                    background: '#F9F9F9',
                                    width: '20%',
                                    height: '40px',
                                    boxShadow: '5px 5px 5px 5px gray'
                                }}>
                                <h2
                                    style={{
                                        textAlign: 'left',
                                        marginLeft: '20px'
                                    }}>Tunnel Name</h2>
                            </Col>
                            <Col
                                style={{
                                    marginLeft: '3px',
                                    background: '#F9F9F9',
                                    width: '70%',
                                    height: '40px',
                                    boxShadow: '5px 5px 5px 5px gray'
                                }}>
                                <h2
                                    style={{
                                        textAlign: 'left',
                                        marginLeft: '20px'
                                    }}>Graph</h2>
                            </Col>
                        </Row>

                        <Row
                            justify="center"
                            style={{
                                marginBottom: '3px'
                            }}>
                            <Col
                                style={{
                                    background: '#DEEBF7',
                                    width: '20%',
                                    height: '300px',
                                    boxShadow: '5px 5px 5px 5px gray'
                                }}>
                                <ul><br/>
                                    터널 A 상행
                                    <li>위치설명 : 어디어디 위치한 터널 입니다.</li>
                                    <li>온도</li>
                                    <li>혼잡도</li>
                                    <li>사고</li>

                                </ul>
                            </Col>
                            <Col
                                style={{
                                    marginLeft: '3px',
                                    background: 'white',
                                    width: '70%',
                                    height: '300px',
                                    boxShadow: '5px 5px 5px 5px gray'
                                }}>
                                <div
                                    style={{
                                        borderRight: '2px solid #F1F1F1',
                                        background: 'white',
                                        width: '33%',
                                        height: '300px',
                                        float: 'left'
                                    }}>
                                    <GraphsTemp/></div>
                                <div
                                    style={{
                                        borderRight: '2px solid #F1F1F1',
                                        background: 'white',
                                        width: '33%',
                                        height: '300px',
                                        float: 'left'
                                    }}><GraphsEvent/></div>
                                <div
                                    style={{
                                        background: 'white',
                                        width: '33%',
                                        height: '300px',
                                        float: 'left'
                                    }}><GraphsCotwo/></div>
                            </Col>
                        </Row>

                        <Row justify="center">
                            <Col
                                style={{
                                    background: '#DEEBF7',
                                    width: '20%',
                                    height: '300px',
                                    boxShadow: '5px 5px 5px 5px gray'
                                }}>
                                <ul><br/>
                                    터널 A 하행
                                    <li>위치설명 : 어디어디 위치한 터널 입니다.</li>
                                    <li>온도</li>
                                    <li>혼잡도</li>
                                    <li>사고</li>
                                </ul>
                            </Col>
                            <Col
                                style={{
                                    marginLeft: '3px',
                                    background: 'white',
                                    width: '70%',
                                    height: '300px',
                                    boxShadow: '5px 5px 5px 5px gray'
                                }}>
                                <div
                                    style={{
                                        borderRight: '2px solid #F1F1F1',
                                        background: 'white',
                                        width: '33%',
                                        height: '300px',
                                        float: 'left'
                                    }}>
                                    <GraphsTemp/></div>
                                <div
                                    style={{
                                        borderRight: '2px solid #F1F1F1',
                                        background: 'white',
                                        width: '33%',
                                        height: '300px',
                                        float: 'left'
                                    }}><GraphsEvent/></div>
                                <div
                                    style={{
                                        background: 'white',
                                        width: '33%',
                                        height: '300px',
                                        float: 'left'
                                    }}><GraphsCotwo/></div>
                            </Col>
                        </Row>
                    </Card>
                </div>
            </Fragment>
        );
    }
};
//<GraphsTemp/>