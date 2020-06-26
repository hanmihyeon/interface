import React, {Fragment} from 'react';
import {Breadcrumb, Row, Col, Card} from 'antd';
import {DashboardOutlined, LineChartOutlined} from '@ant-design/icons';
import Iframe from 'react-iframe'
// import { Line } from '@ant-design/charts';
import {GraphsAccid} from './Graphs';
import './Camera.css'
import './Common.css';

const CameraList = ({camList}) => {
    const bold = {
        fontWeight: 'bold'
    };
    const clCss = {
        width: '25%',
        height: '100%',
        position: 'relative'
    };

    return (
        <> < Col style = {
            clCss
        } > <h5 style={bold}>카메라 {camList}</h5>
        <Iframe
            className={camList === 6 || camList === 12
                ? "cl_iframe cl_blink_orange"
                : camList === 16
                    ? "cl_iframe cl_blink_red"
                    : "cl_iframe"}
            url={`http://www.youtube.com/embed/EQEIg9j-gDI`}/>
    </Col>
</>
    )
}

const Camera = () => {
    const bold = {
        fontWeight: 'bold'
    };
    const camList = [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16
    ];
    return (
        <Fragment>
            <Breadcrumb className="bread">
                <Breadcrumb.Item><DashboardOutlined/>&nbsp;&nbsp;Dashboard</Breadcrumb.Item>
                <Breadcrumb.Item><LineChartOutlined/>&nbsp;Camera</Breadcrumb.Item>
            </Breadcrumb>
            <div className="camera contents">
                <Card>
                    <Row gutter={[16, 16]}>
                        <Col
                            style={{
                                width: '45%',
                                height: '100%',
                                marginTop: '10px'
                            }}>
                            <Row
                                style={{
                                    width: '80%',
                                    height: '100%',
                                    marginTop: '20px',
                                    marginLeft: '12%'
                                }}>
                                <div
                                    style={{
                                        position: 'relative',
                                        marginTop: '-4%'
                                    }}>
                                    <h4 style={bold}>카메라1</h4>
                                </div>
                                <Iframe url={`http://www.youtube.com/embed/EQEIg9j-gDI`} className="c_iframe"/>
                            </Row>
                            <div
                                style={{
                                    width: '80%',
                                    height: '250px',
                                    marginTop: '6%',
                                    marginLeft: '10%',
                                    background: ''
                                }}>
                                <GraphsAccid/>
                            </div>
                        </Col>
                        <Col
                            style={{
                                width: '54%',
                                height: '100%',
                                marginTop: '10px'
                            }}>
                            <Row gutter={[16, 16]}>
                                {
                                    camList.map(
                                        camList => (<CameraList camList={camList} key={camList.id}></CameraList>)
                                    )
                                }
                            </Row>
                        </Col>
                    </Row>
                </Card>
            </div>
    </Fragment>
    );
};

export default Camera;
