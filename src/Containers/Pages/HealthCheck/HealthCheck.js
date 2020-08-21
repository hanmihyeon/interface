import React, { Fragment, useState } from 'react';
import { Breadcrumb, Row, Col, Card } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import TrafficLight from 'react-trafficlight';
// import Tree from 'react-animated-tree';

import '../Common.css';
import './HealthCheck.css';

/*const treeStyles = {
    position: 'relative',
    padding: '4px 10px 0px',
    color: 'white',
    fill: 'white',
    width: '100%'
}

const typeStyles = {
    fontSize: '2em',
    verticalAlign: 'middle'
}

const trafficStyles2 = {
    transform: 'rotate(-90deg)',
    position: 'absolute',
    top: '-42px',
    left: '190px'
}

const trafficStyles1 = {
    transform: 'rotate(-90deg)',
    position: 'absolute',
    top: '-9px',
    left: '222px'
}

const trafficStyles = {
    transform: 'rotate(-90deg)',
    position: 'absolute',
    top: '-45px',
    left: '170px'
}*/

const HealthCheck = () => {
    const [conVisible1, setCon1] = useState(false);
    const [conVisible2, setCon2] = useState(false);
    const [conVisible3, setCon3] = useState(false);
    const [conVisible4, setCon4] = useState(false);

    return (
        <Fragment>
            <Breadcrumb className="bread">
                <Breadcrumb.Item><CheckCircleOutlined />&nbsp;&nbsp;헬스 체크</Breadcrumb.Item>
            </Breadcrumb>
            <div className="health-check contents" style={{ width: '91.6%' }}>
                <Row className="no-division-wrap">
                    <div><Card title="NVR" size="small" className="check-nvr no-division"></Card></div>
                    <div><Card title="로봇 게이트웨이" size="small" className="check-robot-gw no-division"></Card></div>
                    <div><Card title="FGB 광센싱 게이트웨이" size="small" className="check-fgb-gw no-division"></Card></div>
                    <div><Card title="Sagnac 광센싱 게이트웨이" size="small" className="check-sagnac-gw no-division"></Card></div>
                    <div><Card title="Sagnac 센서" size="small" className="check-sagnac no-division"></Card></div>
                    <div><Card title="GPU 서버" size="small" className="check-gpu-server no-division"></Card></div>
                    <div><Card title="운영 데이터베이스" size="small" className="check-op-db no-division"></Card></div>
                </Row>
                <Row>
                    <Col span={12} className="health-section-wrap health-1">
                        <Card title="부강->청주" size="small">
                            <Row>
                                <Col span={12} className="check-left">
                                    <div><Card title="CCTV" size="small" className="check-cctv division" extra={<TrafficLight Size="20" GreenOn className="trafficlight-title" />}>
                                        <div className="cctv-optical check-list">
                                            <div>
                                                <span>CCTV 일반 1</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>CCTV 일반 2</span>
                                                <TrafficLight Size="20" YellowOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>CCTV 일반 3</span>
                                                <TrafficLight Size="20" YellowOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>CCTV 일반 4</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                        </div>
                                        <div className="cctv-thermal check-list">
                                            <div>
                                                <span>CCTV 열화상 1</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>CCTV 열화상 2</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>CCTV 열화상 3</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>CCTV 열화상 4</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                        </div>
                                    </Card></div>
                                    <div><Card title="로봇 카메라" size="small" className="check-robotcam division" extra={<TrafficLight Size="20" GreenOn className="trafficlight-title" />}>
                                        <div className="robot-optical check-list">
                                            <div>
                                                <span>Robot 일반 1</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                        </div>
                                        <div className="robot-thermal check-list">
                                            <div>
                                                <span>Robot 열화상 1</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                        </div>
                                    </Card></div>
                                    <div><Card title="로봇" size="small" className="check-robot division" extra={<TrafficLight Size="20" GreenOn className="trafficlight-title" />}>
                                        <div className="check-list">
                                            <div>
                                                <span>로봇</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>CO</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>CO2</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>O2</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>VOC</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>온도</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>습도</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>연기</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>먼지</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>이산화질소</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>황화수소</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>암모니아</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                        </div>
                                    </Card></div>
                                    <div><Card title="FBG" size="small" className="check-fbg division" extra={<TrafficLight Size="20" GreenOn className="trafficlight-title" />}>
                                        <div className="check-list">
                                            <div>
                                                <span>FBGI</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div> 
                                            <div>
                                                <span>FBG 온도/음향</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>   
                                        </div>    
                                    </Card></div>
                                </Col>
                                <Col span={12} className="check-right">
                                    <div><Card title="고정연기센서" size="small" className="check-smoke division" extra={<TrafficLight Size="20" GreenOn className="trafficlight-title" />}>
                                        <div className="check-list">
                                            <div>
                                                <span>센서 1</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>센서 2</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>센서 3</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>센서 4</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>센서 5</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>센서 6</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>센서 7</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>센서 8</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>센서 9</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>센서 10</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>센서 11</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>센서 12</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>센서 13</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>센서 14</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>센서 15</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>센서 16</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>센서 17</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>센서 18</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>센서 19</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>센서 20</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>센서 21</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>센서 22</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>센서 23</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>센서 24</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>센서 25</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>센서 26</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>센서 27</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>센서 28</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>센서 29</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>센서 30</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                        </div>    
                                    </Card></div>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col span={12} className="health-section-wrap health-2">
                        <Card>
                            <h4>청주-&gt;부강</h4>
                            <Row>
                                <Col span={12} className="check-left">
                                    <div><Card title="CCTV" size="small" className="check-cctv division" extra={<TrafficLight Size="20" GreenOn className="trafficlight-title" />}>
                                        <div className="cctv-optical check-list">
                                            <div>
                                                <span>CCTV 일반 1</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>CCTV 일반 2</span>
                                                <TrafficLight Size="20" YellowOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>CCTV 일반 3</span>
                                                <TrafficLight Size="20" YellowOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>CCTV 일반 4</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                        </div>
                                        <div className="cctv-thermal check-list">
                                            <div>
                                                <span>CCTV 열화상 1</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>CCTV 열화상 2</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>CCTV 열화상 3</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>CCTV 열화상 4</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                        </div>
                                    </Card></div>
                                    <div><Card title="로봇 카메라" size="small" className="check-robotcam division" extra={<TrafficLight Size="20" GreenOn className="trafficlight-title" />}>
                                        <div className="robot-optical check-list">
                                            <div>
                                                <span>Robot 일반 1</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                        </div>
                                        <div className="robot-thermal check-list">
                                            <div>
                                                <span>Robot 열화상 1</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                        </div>
                                    </Card></div>
                                    <div><Card title="로봇" size="small" className="check-robot division" extra={<TrafficLight Size="20" GreenOn className="trafficlight-title" />}>
                                        <div className="check-list">
                                            <div>
                                                <span>로봇</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>CO</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>CO2</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>O2</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>VOC</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>온도</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>습도</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>연기</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>먼지</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>이산화질소</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>황화수소</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>암모니아</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                        </div>
                                    </Card></div>
                                    <div><Card title="FBG" size="small" className="check-fbg division" extra={<TrafficLight Size="20" GreenOn className="trafficlight-title" />}>
                                        <div className="check-list">
                                            <div>
                                                <span>FBGI</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div> 
                                            <div>
                                                <span>FBG 온도/음향</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>   
                                        </div>    
                                    </Card></div>
                                </Col>
                                <Col span={12} className="check-right">
                                    <div><Card title="고정연기센서" size="small" className="check-smoke division" extra={<TrafficLight Size="20" GreenOn className="trafficlight-title" />}>
                                        <div className="check-list">
                                            <div>
                                                <span>센서 1</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>센서 2</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>센서 3</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>센서 4</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>센서 5</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>센서 6</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>센서 7</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>센서 8</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>센서 9</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>센서 10</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>센서 11</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>센서 12</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>센서 13</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>센서 14</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>센서 15</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>센서 16</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>센서 17</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>센서 18</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>센서 19</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>센서 20</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>센서 21</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>센서 22</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>센서 23</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>센서 24</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>센서 25</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>센서 26</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>센서 27</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>센서 28</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>센서 29</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                            <div>
                                                <span>센서 30</span>
                                                <TrafficLight Size="20" GreenOn className="trafficlight" />
                                            </div>
                                        </div>    
                                    </Card></div>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </div >
        </Fragment >
    );
};

export default HealthCheck;