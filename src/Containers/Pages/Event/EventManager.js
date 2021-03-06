import React, { Fragment, Component } from 'react';
import {
    Breadcrumb,
    Card,
    Table,
    Row,
    Col,
    Drawer,
    Modal,
    Button,
    Popconfirm,
    Popover
} from 'antd';
import { UserOutlined, ZoomInOutlined, QuestionCircleOutlined } from '@ant-design/icons';

import '../Common.css';
import './Event.css';

// import DownloadLink from 'react-download-link';

const data = [
    {
        id: '25',
        date: '2020-07-03 16:00:05',
        class: '1',
        cause: '사고(충돌)',
        result: '처리 완료',
        sms: '송신 완료',
        description: 'test'
    }, {
        id: '24',
        date: '2020-07-03 15:10:55',
        class: '2',
        cause: '사고(화재)',
        result: '처리 완료',
        sms: '송신 완료',
        description: 'test2'
    }, {
        id: '23',
        date: '2020-07-03 15:01:27',
        class: '3',
        cause: '이상',
        result: '',
        sms: '',
        description: 'test2'
    }, {
        id: '22',
        date: '2020-07-03 15:00:00',
        class: '3',
        cause: '원활',
        result: '',
        sms: '',
        description: 'test2'
    }, {
        id: '21',
        date: '2020-07-03 14:40:05',
        class: '1',
        cause: '사고(충돌)',
        result: '',
        sms: '송신 실패',
        description: 'test2'
    }, {
        id: '20',
        date: '2020-07-03 14:00:58',
        class: '1',
        cause: '정체',
        result: '처리 완료',
        sms: '송신 완료',
        description: 'test2'
    }, {
        id: '19',
        date: '2020-07-03 13:50:05',
        class: '2',
        cause: '사고',
        result: '처리 완료',
        sms: '송신 완료',
        description: 'test2'
    }, {
        id: '18',
        date: '2020-07-03 13:10:10',
        class: '2',
        cause: '이상',
        result: '',
        sms: '',
        description: 'test2'
    }, {
        id: '17',
        date: '2020-07-03 13:00:01',
        class: '1',
        cause: '원활',
        result: '',
        sms: '',
        description: 'test2'
    }, {
        id: '16',
        date: '2020-07-03 12:40:30',
        class: '1',
        cause: '사고',
        result: '',
        sms: '송신 실패',
        description: 'test2'
    }, {
        id: '15',
        date: '2020-07-03 12:00:55',
        class: '3',
        cause: '정체',
        result: '처리 완료',
        sms: '',
        description: 'test2'
    }, {
        id: '14',
        date: '2020-07-03 11:15:20',
        class: '2',
        cause: '사고',
        result: '처리 완료',
        sms: '송신 완료',
        description: 'test2'
    }, {
        id: '13',
        date: '2020-07-03 11:10:10',
        class: '3',
        cause: '이상',
        result: '',
        sms: '',
        description: 'test2'
    }, {
        id: '12',
        date: '2020-07-03 10:20:17',
        class: '3',
        cause: '원활',
        result: '',
        sms: '',
        description: 'test2'
    }, {
        id: '11',
        date: '2020-07-03 10:17:28',
        class: '3',
        cause: '사고',
        result: '처리 완료',
        sms: '송신 완료',
        description: 'test2'
    }, {
        id: '10',
        date: '2020-07-03 09:45:30',
        class: '2',
        cause: '사고',
        result: '처리 완료',
        sms: '송신 완료',
        description: 'test2'
    }, {
        id: '9',
        date: '2020-07-03 09:20:10',
        class: '2',
        cause: '사고',
        result: '처리 완료',
        sms: '송신 완료',
        description: 'test2'
    }, {
        id: '8',
        date: '2020-07-03 09:10:30',
        class: '3',
        cause: '이상',
        result: '',
        sms: '',
        description: 'test2'
    }, {
        id: '7',
        date: '2020-07-03 09:00:02',
        class: '3',
        cause: '원활',
        result: '',
        sms: '',
        description: 'test2'
    }, {
        id: '6',
        date: '2020-07-03 08:55:35',
        class: '1',
        cause: '사고',
        result: '처리 완료',
        sms: '송신 완료',
        description: 'test2'
    }, {
        id: '5',
        date: '2020-07-03 08:30:33',
        class: '2',
        cause: '원활',
        result: '',
        sms: '',
        description: 'test2'
    }, {
        id: '4',
        date: '2020-07-03 08:10:13',
        class: '2',
        cause: '사고',
        result: '처리 완료',
        sms: '송신 완료',
        description: 'test2'
    }, {
        id: '3',
        date: '2020-07-03 08:05:25',
        class: '3',
        cause: '이상',
        result: '',
        sms: '',
        description: 'test2'
    }, {
        id: '2',
        date: '2020-07-03 08:00:17',
        class: '2',
        cause: '원활',
        result: '',
        sms: '',
        description: 'test2'
    }, {
        id: '1',
        date: '2020-07-03 07:40:25',
        class: '1',
        cause: '사고',
        result: '처리 완료',
        sms: '송신 완료',
        description: 'test2'
    }
]

class EventManager extends Component {
    state = {
        filteredInfo: null,
        visible: false,
        visiblemodal: false,
        disabled: false,
        robotvisible: false,
        visiblepop: false,
        rowColor: '#424242',
    };

    handleChange = (pagination, filters) => {
        console.log('Various parameter', pagination, filters);
        this.setState({ filteredInfo: filters });
    };

    clearFillters = () => {
        this.setState({ filteredInfo: null })
    };

    clearAll = () => {
        this.setState({ filteredInfo: null });
    };

    showDrawer = () => {
        this.setState({
            visible: true
        });
    };

    showModal = () => {
        this.setState({
            visiblemodal: true
        });
    }

    showPop = () => {
        this.setState({
            visiblepop: true
        })
    }

    handleOk = e => {
        console.log(e);
        this.setState({
            visiblemodal: false
        });
    }

    handleCancel = e => {
        console.log(e);
        this.setState({
            visiblemodal: false
        });
    }

    handlePopCancel = e => {
        this.setState({
            disabled: false
        })
    }

    hide = () => {
        this.setState({
            visiblepop: false,
        })
    }

    handleRobotVisibleChange = visiblepop => {
        this.setState({ visiblepop });
    }

    handleDisabled = e => {
        this.setState({
            disabled: true,
            rowColor: '#141414',
        })
    }

    onClose = () => {
        this.setState({
            visible: false
        });
    };

    confirmRow = (record) => {
        return {

        }
    }

    render() {
        let { filteredInfo } = this.state;
        filteredInfo = filteredInfo || {};

        const columns = [
            {
                title: 'ID',
                dataIndex: 'id',
                align: 'center',
                width: '5%',
            }, {
                title: '클래스',
                key: 'class',
                dataIndex: 'class',
                align: 'center',
                width: '5%',
                filters: [
                    {
                        text: '1',
                        value: '1'
                    }, {
                        text: '2',
                        value: '2'
                    }, {
                        text: '3',
                        value: '3'
                    }
                ],
                filteredValue: filteredInfo.class || null,
                onFilter: (value, record) => record
                    .class
                    .includes(value),
                render(text) {
                    return {
                        props: {
                            style: {
                                background:
                                    parseInt(text) === 1
                                        ? '#2a1215' /*'rgba(192,66,78,0.5) rgb(249, 18, 15, 0.5) #F9120F#fbc0c0' '#ff6666'*/
                                        : (parseInt(text) === 2
                                            ? '#2b2111' /* rgba(245,172,78,0.5) rgb(242, 90, 22,0.5) '#F25A16#ffdaa1' '#ffbd55'*/
                                            : (parseInt(text) === 3
                                                ? '#162312' /* rgba(54,117,137,0.5) rgb(254, 255, 55,0.5)'#FEFF37#f9ffc9' '#ffff66'*/
                                                 : 'black')),
                                                /* : (parseInt(text) === 4
                                                    ? 'rgb(81, 178, 65,0.5)' /*'#51B241#baffe5' '#9de24f'
                                                    : (parseInt(text) === 5
                                                        ? 'rgb(47, 146, 210,0.5)''#2F92D2#a9cdff' '#87cefa'*/
                                color: '#fff',
                                fontSize: '16px',
                                fontWeight: '400',
                                /*textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'*/
                            }
                        },
                        children: <div>{text}</div>
                    }
                }
                /* tag기능
                tags => (
                    <>
                        {tags.map(tag => {
                            let color = tag === `1` ? 'volcano' : 'volcano';
                            let backgroundColor = tag === `1` ? 'volcano' : 'volcano';
                            if (tag === `2`) {
                                color = 'orange';
                                backgroundColor = 'orange';
                            } else if (tag === `3`) {
                                color = 'yellow';
                            } else if (tag === `4`) {
                                color = 'green';
                            } else if (tag === `5`) {
                                color = 'geekblue';
                            }
                            return (
                                <Tag color={color} key={tag}>
                                    {tag}
                                </Tag>
                            );
                        })}
                    </>
                )*/
            }, {
                title: '터널',
                dataIndex: 'tunnel',
                align: 'center',
                width: '14%',
                filters: [
                    {
                        text: '터널1',
                        value: '터널1'
                    }, {
                        text: '터널2',
                        value: '터널2'
                    }
                ],
                filteredValue: filteredInfo.tunnel || null,
                onFilter: (value, record) => record
                    .tunnel
                    .includes(value)
            }, {
                title: '이벤트 발생 센서',
                dataIndex: 'sensor',
                align: 'center',
                width: '9%',
                render: () => (
                    <span onClick={this.showDrawer} className="event-click"><ZoomInOutlined /></span>
                )
            }, {
                title: '발생 시각',
                dataIndex: 'date',
                align: 'center',
                width: '10%',
            }, {
                title: '종료 시각',
                dataIndex: 'endtime',
                align: 'center',
                width: '10%',
            }, {
                title: '원인',
                dataIndex: 'cause',
                align: 'center',
                width: '7%',
                filters: [
                    {
                        text: '충돌',
                        value: '사고(충돌)'
                    }, {
                        text: '화재',
                        value: '사고(화재)'
                    }
                ],
                filteredValue: filteredInfo.cause || null,
                onFilter: (value, record) => record
                    .cause
                    .includes(value)
            }, {
                title: 'SMS 발송',
                dataIndex: 'sms',
                align: 'center',
                width: '7%',
            }, {
                title: '로봇 출동',
                dataIndex: 'robot',
                align: 'center',
                width: '5%',
                render: () => (
                    <div>
                        <div>
                            <span onClick={this.showPop} className="event-click">O</span>
                        </div>
                        <div>
                            <Popover
                                title="로봇 출동"
                                placement="bottom"
                                content={<div><p>로봇출동완료</p><span onClick={this.hide}>Close</span></div>}
                                trigger="click"
                                visible={this.state.visiblepop}
                                onVisibleChange={this.handleRobotVisibleChange}
                            >
                            </Popover>
                        </div>
                    </div>
                )
            }, {
                title: '이벤트 리포트',
                dataIndex: 'eventreport',
                align: 'center',
                width: '7%',
                render: () => (
                    <div>
                        <span onClick={this.showModal} className="event-click">조회</span>
                        <Modal
                            className="event-report-modal"
                            title="이벤트 리포트"
                            visible={this.state.visiblemodal}
                            onOk={this.handleOk}
                            onCancel={this.handleCancel}>
                            <p>dfdfdfd</p>
                        </Modal>
                    </div>
                    /*<Modal
                        isOpen={this.modalIsOpen}
                        onAfterOpen={this.afterOpenModal}
                        onRequestClose={this.closeModal}
                        style={customStyles}
                        contentLabel='example'>
                            <h2>hello</h2>
                            <button onClick={this.closeModal}>close</button>
                            <div>idididididi</div>
                    </Modal>*/
                    /*<DownloadLink
                      className="download"
                      label={<DownloadOutlined/>}
                      filename="myfile.txt"
                      exportFile={() => Promise.resolve("my data")} />*/
                )
            }, {
                title: '운영자 확인',
                dataIndex: 'confirm',
                align: 'center',
                width: '7%',
                render: () => (
                    <div>
                        <Popconfirm
                            title="이벤트 확인"
                            placement="bottom"
                            onConfirm={this.handleDisabled}
                            onCancel={this.handlePopCancel}
                            icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
                        >
                            <Button type="link" disabled={this.state.disabled} className="user-confirm">확인</Button>
                        </Popconfirm>
                    </div>
                )
            }
        ];
        return (
            <Fragment>
                <Breadcrumb className="bread">
                    <Breadcrumb.Item><UserOutlined />&nbsp; 이벤트 매니저</Breadcrumb.Item>
                </Breadcrumb>
                <div className="event-manager contents" style={{ width: '91.6%' }} id="event">
                    <Row gutter={[6, 6]}>
                        <Col span={24}>
                            <Card title="Event" size="small">
                                <Table
                                    className={(this.state.disabled ? 'row-active' : 'row-default')}
                                    size="small"
                                    onChange={this.handleChange}
                                    columns={columns}
                                    dataSource={data}
                                    bordered={true}
                                    pagination={{
                                        pageSize: 25
                                    }}
                                    scroll={{
                                        y: 400
                                    }}
                                    onRow={this.confirmRow}
                                />
                            </Card>
                        </Col>
                        {/*<Col span={24}>
                            <Card bodyStyle={{
                                height: '500px'
                            }}></Card>
                        </Col>*/}
                    </Row>
                    <Drawer
                        title="Sensor Data"
                        width={300}
                        height={300}
                        placement="right"
                        onClose={this.onClose}
                        visible={this.state.visible}
                        bodyStyle={{ paddingBottom: 80 }} >
                        센서데이터
                      </Drawer>
                </div>
            </Fragment>
        );
    };
};

export default EventManager;