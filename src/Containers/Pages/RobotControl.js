import React, {Fragment} from 'react';
import {Breadcrumb, Row, Col, Card, Button} from 'antd';
import {DashboardOutlined, DatabaseOutlined} from '@ant-design/icons';

import {Player} from 'video-react';
import 'video-react/dist/video-react.css';

import './Common.css';

import {
    RobotChart1,
    RobotChart2,
    RobotChart3,
    RobotChart4,
    RobotChart5,
    RobotChart6,
    RobotStateChart
} from './RobotChart';

import './Robot1.css';
import {Joystick} from 'react-joystick-component';

import TweenOne from 'rc-tween-one';
import BezierPlugin from 'rc-tween-one/lib/plugin/BezierPlugin';
TweenOne.plugins.push(BezierPlugin);

//조이스틱 컬러 파스텔 변경
const RobotControl = () => {

    const animation = {
        bezier: {
          type: 'soft',
          vars: [
            { x: 300, y: 0 },
            { x: 300, y: 0 },
          ],
        },
        repeat: -1,
        yoyo: true,
        duration: 10000,
      };
  
    return (
        <Fragment>
            <Breadcrumb className="bread">
                <Breadcrumb.Item><DashboardOutlined/>&nbsp;&nbsp;Event</Breadcrumb.Item>
                <Breadcrumb.Item><DatabaseOutlined/>&nbsp;Robot Control</Breadcrumb.Item>
            </Breadcrumb>
            <div className="robot-control contents">
 {/*               <Row gutter={[6, 6]}>
                    <Col span={8}>
                        <Card>
                            <Player
                                playsInline="playsInline"
                                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                                autoPlay={true}
                                muted={true}/>
                            <div
                                style={{
                                    position: 'absolute',
                                    color: 'white',
                                    marginTop: '-50%'
                                }}>[부강 -&gt; 청주] 로봇 카메라(일반)</div>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card>
                            <Player
                                playsInline="playsInline"
                                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                                autoPlay={true}
                                muted={true}/>
                            <div
                                style={{
                                    position: 'absolute',
                                    color: 'white',
                                    marginTop: '-50%'
                                }}>[부강 -&gt; 청주] 로봇 카메라(열화상)</div>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            style={{
                                width: '100%',
                                height: '100%'
                            }}
                            bodyStyle={{padding:'10px'}}>
                            <Card
                                bodyStyle={{
                                    background: '#e6f7ff',
                                    width: '100%',
                                    height: '100%',
                                    padding:0
                                }}
                                style={{padding:0}}>
                                <div>
                                    <h3>카메라 조정 (확대, 축소)</h3>
                                </div>
                                <div style={{marginTop:'15px'}}>
                                <div
                                    style={{
                                        width:'100px',
                                        height:'200px',
                                        float: 'left',
                                        position:'relative',
                                        margin:'0 0 20px 10px'
                                    }}>
                                    <div
                                        style={{
                                            width: '7%',
                                            position:'absolute',
                                            top: 20,
                                            left: 45
                                        }}>
                                        <Button type="primary">▲</Button>
                                    </div>
                                    <div>
                                    <div
                                        style={{
                                            width: '7%',
                                            float:'left',
                                            position: 'absolute',
                                            top:65,
                                            left:0
                                        }}>
                                        <Button type="primary">◀</Button>
                                    </div>
                                    <div
                                        style={{
                                            width: '7%',
                                            height: '10%',
                                            float:'left',
                                            position: 'absolute',
                                            top:60,
                                            left:38
                                        }}>
                                        <Joystick size={50} baseColor="#1890ff" stickColor="black"></Joystick>
                                    </div>
                                    <div
                                        style={{
                                            width: '7%',
                                            float:'left',
                                            position:'absolute',
                                            top:65,
                                            right:0
                                        }}>
                                        <Button type="primary">▶</Button>
                                    </div></div>
                                    <div
                                        style={{
                                            width: '7%',
                                            position:'absolute',
                                            bottom:50,
                                            left:45
                                        }}>
                                        <Button type="primary">▼</Button>
                                    </div>
                                    
                                </div>
                                <div
                                    className="card3-control-button"
                                    style={{
                                        width:'100px',
                                        height:'200px',
                                        float: 'left',
                                        position:'relative',
                                        margin:'0 0 20px 20px'
                                    }}>
                                    <img
                                        style={{
                                            border: '1px solid black',
                                            height: '180px',
                                            marginLeft:'50px'
                                        }}
                                        src='/scalebar.png'/>
                                </div>

                                <div
                                    className="card3-control-button"
                                    style={{
                                        width:'100px',
                                        height:'200px',
                                        float: 'left',
                                        position:'relative',
                                        margin:'0 0 20px 50px'
                                    }}>
                                    <div>
                                        <Button
                                            type="primary"
                                            style={{
                                                border: '1px solid black'
                                            }}>자동순찰정지</Button>
                                    </div>
                                    <div
                                        style={{
                                            marginTop: '15px'
                                        }}>
                                        <Button
                                            type="primary"
                                            style={{
                                                border: '1px solid black'
                                            }}>자동순찰전환</Button>
                                    </div>
                                    <div
                                        style={{
                                            marginTop: '15px'
                                        }}>
                                        <Button
                                            type="primary"
                                            style={{
                                                border: '1px solid black'
                                            }}>설정 리셋</Button>
                                    </div>
                                </div></div>
                            </Card>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            bodyStyle={{
                                height: 520
                            }}>
                            <Card
                                title="로봇 상태"
                                size="small"
                                style={{
                                    marginBottom: '15px'
                                }}>
                                <div className="robot-img">
                                    <img
                                        src="/robotcamera.png"
                                        alt=""
                                        style={{
                                            width: '100%',
                                            height: '100%'
                                        }}/>
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
                            <Card title="레일 로봇 상태 추이" size="small">
                                <RobotStateChart/>
                            </Card>
                        </Card>
                    </Col>
                    <Col span={16}>
                        <Card
                            bodyStyle={{
                                padding: '24px 36px 24px 36px',
                                height: 520
                            }}>
                            <Row>
                                <Col
                                    span={24}
                                    style={{
                                        marginBottom: '20px',
                                        fontSize: '16px'
                                    }}>
                                    <div
                                                        style={{
                                                            float: 'left'
                                                        }}>로봇 환경 센서</div>
                                                    <div
                                                        style={{
                                                            float: 'right',
                                                            border: '1px solid #f0faff',
                                                            background: '#e6f7ff',
                                                            color: 'black',
                                                            padding: '5px'
                                                        }}>1분 단위</div>
                                </Col>
                                <Col
                                                    span={8}
                                                    style={{
                                                        border: '0.5px solid #b0b0b0',
                                                        padding:'3px'
                                                    }}><RobotChart1/></Col>
                                                <Col
                                                    span={8}
                                                    style={{
                                                        border: '0.5px solid #b0b0b0',
                                                    }}><RobotChart2/></Col>
                                                <Col
                                                    span={8}
                                                    style={{
                                                        border:'0.5px solid #b0b0b0',
                                                    }}><RobotChart3/></Col>
                                                <Col
                                                    span={8}
                                                    style={{
                                                        border:'0.5px solid #b0b0b0',
                                                    }}><RobotChart4/></Col>
                                                <Col
                                                    span={8}
                                                    style={{
                                                        border: '0.5px solid #b0b0b0',
                                                    }}><RobotChart5/></Col>
                                                <Col
                                                    span={8}
                                                    style={{
                                                        border:'0.5px solid #b0b0b0',
                                                    }}><RobotChart6/></Col>
                            </Row>
                        </Card>
                    </Col>
                                                </Row>*/}
                                                                <Row gutter={[6, 6]}>
                    <Col span={8}>
                        <Card style={{height:'400px'}}>
                            <Player
                                playsInline="playsInline"
                                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                                autoPlay={true}
                                muted={true}/>
                            <div
                                style={{
                                    position: 'absolute',
                                    color: 'white',
                                    marginTop: '-50%'
                                }}>[부강 -&gt; 청주] 로봇 카메라(일반)</div>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card style={{height:'400px'}}>
                            <Player
                                playsInline="playsInline"
                                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                                autoPlay={true}
                                muted={true}/>
                            <div
                                style={{
                                    position: 'absolute',
                                    color: 'white',
                                    marginTop: '-50%'
                                }}>[부강 -&gt; 청주] 로봇 카메라(열화상)</div>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            style={{
                                width: '100%',
                                height: '100%'
                            }}
                            bodyStyle={{padding:'10px'}}>
                            <Card
                                bodyStyle={{
                                    background: '#e6f7ff',
                                    width: '100%',
                                    height: '100%',
                                    padding:0,
                                    justifyContent:'center'
                                }}
                                style={{padding:0}}>
                                <div>
                                    <h3>카메라 조정 (확대, 축소)</h3>
                                </div>
                                <div style={{marginTop:'15px'}}>
                                <div
                                    style={{
                                        width:'20%',
                                        height:'200px',
                                        float: 'left',
                                        padding:'10px',
                                        position:'relative',
                                        margin:'0 0 20px 13px',
                                        border:'3px solid #c8c8c8',
                                    }}>
                                    <div
                                        style={{
                                            width: '7%',
                                            position:'absolute',
                                            top: 20,
                                            left: 30
                                        }}>
                                        <Button type="primary">▲</Button>
                                    </div>

                                    <div
                                        style={{
                                            width: '7%',
                                            height: '10%',
                                            float:'left',
                                            position: 'absolute',
                                            top:60,
                                            left:23
                                        }}>
                                        <Joystick size={50} baseColor="#1890ff" stickColor="black"></Joystick>
                                    </div>

                                    <div
                                        style={{
                                            width: '7%',
                                            position:'absolute',
                                            bottom:50,
                                            left:30
                                        }}>
                                        <Button type="primary">▼</Button>
                                    </div>
                                    <div
                                        style={{
                                            width: '100%',
                                            position:'absolute',
                                            bottom:0,
                                            left:20
                                        }}>
                                        로봇이동
                                    </div>
                                </div>

                                <div
                                    style={{
                                        width:'40%',
                                        height:'200px',
                                        float: 'left',
                                        position:'relative',
                                        margin:'0 0 20px 10px',
                                        border:'3px solid #c8c8c8'
                                    }}>

                                    <div
                                        style={{
                                            width: '7%',
                                            position:'absolute',
                                            top: 20,
                                            left: 55
                                        }}>
                                        <Button type="primary">▲</Button>
                                    </div>
                                    <div>
                                    <div
                                        style={{
                                            width: '7%',
                                            float:'left',
                                            position: 'absolute',
                                            top:65,
                                            left:10
                                        }}>
                                        <Button type="primary">◀</Button>
                                    </div>
                                    <div
                                        style={{
                                            width: '7%',
                                            height: '10%',
                                            float:'left',
                                            position: 'absolute',
                                            top:60,
                                            left:48
                                        }}>
                                        <Joystick size={50} baseColor="#1890ff" stickColor="black"></Joystick>
                                    </div>
                                    <div
                                        style={{
                                            width: '7%',
                                            float:'left',
                                            position:'absolute',
                                            top:65,
                                            left:105
                                        }}>
                                        <Button type="primary">▶</Button>
                                    </div></div>
                                    <div
                                        style={{
                                            width: '7%',
                                            position:'absolute',
                                            bottom:50,
                                            left:55
                                        }}>
                                        <Button type="primary">▼</Button>
                                    </div>
                                    <img
                                        style={{
                                            border: '1px solid black',
                                            width:'15%',
                                            height: '180px',
                                            marginLeft:'145px',
                                            marginTop:'10px'
                                        }}
                                        src='/scalebar.png'/>
                                    <div
                                        style={{
                                            width: '100%',
                                            position:'absolute',
                                            bottom:0,
                                            left:35
                                        }}>
                                        카메라 조절
                                    </div>
                                </div>

                                <div
                                    className="card3-control-button"
                                    style={{
                                        width:'30%',
                                        height:'200px',
                                        float: 'left',
                                        padding:'10px',
                                        paddingLeft:'20px',
                                        position:'relative',
                                        margin:'0 0 20px 10px',
                                        border:'3px solid #c8c8c8'
                                    }}>

                                        <div style={{  marginTop:'30px'}}>
                                            <Button
                                                type="primary"
                                                style={{ padding:'5px',
                                                    border: '1px solid black',
                                                    width:'90%'
                                                }}>자동순찰정지</Button>
                                        </div>
                                        <div
                                            style={{
                                                marginTop: '15px'
                                            }}>
                                            <Button
                                                type="primary"
                                                style={{
                                                    padding:'5px',
                                                    border: '1px solid black',
                                                      width:'90%'
                                                }}>자동순찰전환</Button>
                                        </div>
                                        <div
                                            style={{
                                                marginTop: '15px'
                                            }}>
                                            <Button
                                                type="primary"
                                                style={{
                                                    border: '1px solid black',
                                                      width:'90%'
                                                }}>설정 리셋</Button>

                                      </div>
                                </div></div>
                            </Card>
                            <div className="robot-img"  style={{border:'0px'}} >

                            <TweenOne animation={animation} >
                             <div style={{position:'absolute' , margin:'48px 0 0 120px',width:30 , height:30, background:'#1890ff' , border:'3px solid blue'}}></div>
                            </TweenOne>    <img
                                    src="/tunnel_front.png"
                                    alt=""
                                    style={{
                                       height:'100%',
                                       width:'203%'
                                    }}/>
                            </div>
                        </Card>
                    </Col>

                    <Col span={16}>
                        <Card style={{marginTop:'-90px' , height:610}}
                            bodyStyle={{
                                padding: '24px 36px 24px 36px',
                                height: 580
                            }}>
                            <Row>
                                <Col
                                    span={24}
                                    style={{
                                        marginBottom: '20px',
                                        fontSize: '16px'
                                    }}>
                                    <div
                                                        style={{
                                                            float: 'left'
                                                        }}>로봇 환경 센서</div>
                                                    <div
                                                        style={{
                                                            float: 'right',
                                                            fontSize:'12px',
                                                            border: '1px solid #f0faff',
                                                            background: '#e6f7ff',
                                                            color: 'black',
                                                            padding: '5px'
                                                        }}>1분 단위</div>
                                </Col>
                                <Col
                                                    span={8}
                                                    style={{
                                                        border: '0.5px solid #b0b0b0',
                                                        padding:'3px'
                                                    }}><RobotChart1/></Col>
                                                <Col
                                                    span={8}
                                                    style={{
                                                        border: '0.5px solid #b0b0b0',
                                                    }}><RobotChart2/></Col>
                                                <Col
                                                    span={8}
                                                    style={{
                                                        border:'0.5px solid #b0b0b0',
                                                    }}><RobotChart3/></Col>
                                                <Col
                                                    span={8}
                                                    style={{
                                                        border:'0.5px solid #b0b0b0',
                                                    }}><RobotChart4/></Col>
                                                <Col
                                                    span={8}
                                                    style={{
                                                        border: '0.5px solid #b0b0b0',
                                                    }}><RobotChart5/></Col>
                                                <Col
                                                    span={8}
                                                    style={{
                                                        border:'0.5px solid #b0b0b0',
                                                    }}><RobotChart6/></Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            bodyStyle={{
                                height: 520
                            }}>
                            <Card
                                title="로봇 상태"
                                size="small"
                                style={{
                                    marginBottom: '15px'
                                }}>
                                <div className="robot-img">
                                    <img
                                        src="/robotcamera.png"
                                        alt=""
                                        style={{
                                            width: '100%',
                                            height: '100%'
                                        }}/>
                                </div>
                                <div className="robot-info">
                                    <p>
                                        전압: 220.{Math.floor(Math.random()*100)}V<br/>
                                        전류: 70.{Math.floor(Math.random()*100)}A<br/>
                                        내부온도: 30.{Math.floor(Math.random()*10)}도<br/>
                                        위치: {Math.floor(Math.random()*500)}m
                                    </p>
                                </div>
                            </Card>
                            <Card title="레일 로봇 상태 추이" size="small">
                                <RobotStateChart/>
                            </Card>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Fragment>
    );
};

export default RobotControl;