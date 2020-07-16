import React, {Fragment, Component} from 'react';
import {
    Breadcrumb,
    Card,
    Table,
    Tag,
    Row,
    Drawer,
} from 'antd';
import {SettingOutlined, UserOutlined, ZoomInOutlined, DownloadOutlined} from '@ant-design/icons';
import './Common.css';
import DownloadLink from 'react-download-link';

const data = [
    {
        key: '25',
        id: '25',
        date: '2020-07-03 16:00:05',
        tags: [`1`],
        cause: '사고(충돌)',
        result: '처리 완료',
        sms: '송신 완료',
        description: 'test'
    }, {
        key: '24',
        id: '24',
        date: '2020-07-03 15:10:55',
        tags: [`2`],
        cause: '사고(화재)',
        result: '처리 완료',
        sms: '송신 완료',
        description: 'test2'
    }, {
        key: '23',
        id: '23',
        date: '2020-07-03 15:01:27',
        tags: [`4`],
        cause: '이상',
        result: '',
        sms: '',
        description: 'test2'
    }, {
        key: '22',
        id: '22',
        date: '2020-07-03 15:00:00',
        tags: [`5`],
        cause: '원활',
        result: '',
        sms: '',
        description: 'test2'
    }, {
        key: '21',
        id: '21',
        date: '2020-07-03 14:40:05',
        tags: [`1`],
        cause: '사고(충돌)',
        result: '',
        sms: '송신 실패',
        description: 'test2'
    }, {
        key: '20',
        id: '20',
        date: '2020-07-03 14:00:58',
        tags: [`1`],
        cause: '정체',
        result: '처리 완료',
        sms: '송신 완료',
        description: 'test2'
    }, {
        key: '19',
        id: '19',
        date: '2020-07-03 13:50:05',
        tags: [`2`],
        cause: '사고',
        result: '처리 완료',
        sms: '송신 완료',
        description: 'test2'
    }, {
        key: '18',
        id: '18',
        date: '2020-07-03 13:10:10',
        tags: [`4`],
        cause: '이상',
        result: '',
        sms: '',
        description: 'test2'
    }, {
        key: '17',
        id: '17',
        date: '2020-07-03 13:00:01',
        tags: [`5`],
        cause: '원활',
        result: '',
        sms: '',
        description: 'test2'
    }, {
        key: '16',
        id: '16',
        date: '2020-07-03 12:40:30',
        tags: [`1`],
        cause: '사고',
        result: '',
        sms: '송신 실패',
        description: 'test2'
    }, {
        key: '15',
        id: '15',
        date: '2020-07-03 12:00:55',
        tags: [`3`],
        cause: '정체',
        result: '처리 완료',
        sms: '',
        description: 'test2'
    }, {
        key: '14',
        id: '14',
        date: '2020-07-03 11:15:20',
        tags: [`2`],
        cause: '사고',
        result: '처리 완료',
        sms: '송신 완료',
        description: 'test2'
    }, {
        key: '13',
        id: '13',
        date: '2020-07-03 11:10:10',
        tags: [`4`],
        cause: '이상',
        result: '',
        sms: '',
        description: 'test2'
    }, {
        key: '12',
        id: '12',
        date: '2020-07-03 10:20:17',
        tags: [`5`],
        cause: '원활',
        result: '',
        sms: '',
        description: 'test2'
    }, {
        key: '11',
        id: '11',
        date: '2020-07-03 10:17:28',
        tags: [`5`],
        cause: '사고',
        result: '처리 완료',
        sms: '송신 완료',
        description: 'test2'
    }, {
        key: '10',
        id: '10',
        date: '2020-07-03 09:45:30',
        tags: [`2`],
        cause: '사고',
        result: '처리 완료',
        sms: '송신 완료',
        description: 'test2'
    }, {
        key: '9',
        id: '9',
        date: '2020-07-03 09:20:10',
        tags: [`2`],
        cause: '사고',
        result: '처리 완료',
        sms: '송신 완료',
        description: 'test2'
    }, {
        key: '8',
        id: '8',
        date: '2020-07-03 09:10:30',
        tags: [`4`],
        cause: '이상',
        result: '',
        sms: '',
        description: 'test2'
    }, {
        key: '7',
        id: '7',
        date: '2020-07-03 09:00:02',
        tags: [`5`],
        cause: '원활',
        result: '',
        sms: '',
        description: 'test2'
    }, {
        key: '6',
        id: '6',
        date: '2020-07-03 08:55:35',
        tags: [`1`],
        cause: '사고',
        result: '처리 완료',
        sms: '송신 완료',
        description: 'test2'
    }, {
        key: '5',
        id: '5',
        date: '2020-07-03 08:30:33',
        tags: [`5`],
        cause: '원활',
        result: '',
        sms: '',
        description: 'test2'
    }, {
        key: '4',
        id: '4',
        date: '2020-07-03 08:10:13',
        tags: [`2`],
        cause: '사고',
        result: '처리 완료',
        sms: '송신 완료',
        description: 'test2'
    }, {
        key: '3',
        id: '3',
        date: '2020-07-03 08:05:25',
        tags: [`3`],
        cause: '이상',
        result: '',
        sms: '',
        description: 'test2'
    }, {
        key: '2',
        id: '2',
        date: '2020-07-03 08:00:17',
        tags: [`5`],
        cause: '원활',
        result: '',
        sms: '',
        description: 'test2'
    }, {
        key: '1',
        id: '1',
        date: '2020-07-03 07:40:25',
        tags: [`1`],
        cause: '사고',
        result: '처리 완료',
        sms: '송신 완료',
        description: 'test2'
    }
]
/*const data = [];
  for (let i = 50; i > 0; i--) {
    data.push({
      id: i,
      date: `2020-07-01 17:${i}`,
      class: Math.random()*5,
      cause: `차량`,
      result: `사고`,
      sms: `송신 완료`
    });
  }
*/
class EventManager extends Component {
    state = {
        filteredInfo: null,
        visible: false
    };

    handleChange = (pagination, filters) => {
        console.log('Various parameter', pagination, filters);
        this.setState({filteredInfo: filters});
    };

    clearFillters = () => {
        this.setState({filteredInfo: null})
    };

    clearAll = () => {
        this.setState({filteredInfo: null});
    };

    showDrawer = () => {
      this.setState({
        visible: true
      });
    };

    onClose = () => {
      this.setState({
        visible: false
      });
    };

    makeFile = () => {
      return {
        mime: 'text/plain',
        filename: 'myfile.txt',
        contents: 'test',
      }
    }

    render() {
        let {filteredInfo} = this.state;
        filteredInfo = filteredInfo || {};

        const columns = [
            {
                title: 'ID',
                dataIndex: 'id',
                align: 'center',
            }, {
                title: '클래스',
                key: 'tags',
                dataIndex: 'tags',
                align: 'center',
                render: tags => (
                  <>
                    {tags.map(tag => {
                      let color = tag === `1` ? 'volcano' : 'volcano';
                      if (tag === `2`) {
                        color = 'orange';
                      } else if (tag === `3`) {
                        color = 'yellow';
                      } else if (tag === `4`) {
                        color = 'green';
                      } else if(tag === `5`) {
                        color = 'geekblue';
                      }
                      return (
                        <Tag color={color} key={tag}>
                          {tag}
                        </Tag>
                      );
                    })}
                  </>
                )
            }, {
                title: '터널',
                dataIndex: 'tunnel',
                align: 'center',
            }, {
                title: '소스',
                dataIndex: 'source',
                align: 'center',
            }, {
                title: 'Start time',
                dataIndex: 'starttime',
                align: 'center',
            }, {
                title: 'End time',
                dataIndex: 'endtime',
                align: 'center',
            }, {
                title: '원인',
                dataIndex: 'cause',
                align: 'center',
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
            }, {
                title: '로봇 출동',
                dataIndex: 'robot',
                align: 'center',
            }, {
                title: '센서',
                dataIndex: 'sensor',
                align: 'center',
                render: () => (
                  <a onClick={this.showDrawer}><ZoomInOutlined/></a>
                )
            }, {
                title: '이벤트 리포트',
                dataIndex: 'eventreport',
                align: 'center',
                render: () => (
                  <DownloadLink
                    className="download"
                    label={<DownloadOutlined/>}
                    filename="myfile.txt"
                    exportFile={() => Promise.resolve("my data")} />
                )
            }
        ];
        return (
            <Fragment>
                <Breadcrumb className="bread">
                    <Breadcrumb.Item><SettingOutlined/>&nbsp;&nbsp;Event</Breadcrumb.Item>
                    <Breadcrumb.Item><UserOutlined/>&nbsp;Event Manager</Breadcrumb.Item>
                </Breadcrumb>
                <div className="event-manager contents">
                    <Row gutter={[6, 6]}>
                        <Card title="Event" size="small">
                            <Table
                                size="small"
                                onChange={this.handleChange}
                                /*expandable={{
                                    expandedRowRender: record => (<p
                                        style={{
                                            margin: 0
                                        }}>{record.description}</p>),
                                    expandIcon: ({expanded, onExpand, record}) => expanded
                                        ? (<MinusCircleTwoTone onClick={e => onExpand(record, e)}/>)
                                        : (<PlusCircleTwoTone onClick={e => onExpand(record, e)}/>)
                                }}*/
                                columns={columns}
                                dataSource={data}
                                bordered={true}
                                pagination={{
                                    pageSize: 25
                                }}
                                scroll={{
                                    y: 425
                                }}/>
                        </Card>
                    </Row>
                    <Drawer
                      title="Sensor Data"
                      width={300}
                      height={300}
                      placement="right"
                      onClose={this.onClose}
                      visible={this.state.visible}
                      bodyStyle={{paddingBottom:80}} >
                        센서데이터
                      </Drawer>
                </div>
            </Fragment>
        );
    };
};

export default EventManager;