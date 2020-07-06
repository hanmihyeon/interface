import React, {Fragment} from 'react';
import {Breadcrumb, Card, Table, Tag, Row} from 'antd';
import {SettingOutlined, UserOutlined} from '@ant-design/icons';

import './Common.css';

const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      width:100
    },
    {
      title: '일시',
      dataIndex: 'date',
      width:250
    },
    {
      title: '클래스',
      key: 'tags',
      dataIndex: 'tags',
      width:100,
      render: tags => (
        <>
          {tags.map(tag => {
            let color = tag === `      1      ` ? 'volcano' : 'volcano';
            if (tag === `      2      `) {
              color = 'orange';
            } else if (tag === `      3      `) {
              color = 'yellow';
            } else if (tag === `      4      `) {
              color = 'green';
            } else if(tag === `      5      `) {
              color = 'geekblue';
            }
            return (
              <Tag color={color} key={tag}>
                {tag}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: '원인',
      dataIndex: 'cause',
      width:150,
    },
    {
      title: '결과',
      dataIndex: 'result',
      width:150
    },
    {
        title: 'SMS 발송',
        dataIndex: 'sms',
        width:150
      },
  ];
  
  const data = [
    {
      id : '25',
      date : '2020-07-03 16:00:05',
      tags : [`      1      `],
      cause: '사고(충돌)',
      result: '처리 완료',
      sms: '송신 완료'
    },
    {
      id : '24',
      date : '2020-07-03 15:10:55',
      tags : [`      2      `],
      cause: '사고(화재)',
      result: '처리 완료',
      sms: '송신 완료'
    },
    {
      id : '23',
      date : '2020-07-03 15:01:27',
      tags : [`      4      `],
      cause: '이상',
      result: '',
      sms: ''
    },
    {
      id : '22',
      date : '2020-07-03 15:00:00',
      tags : [`      5      `],
      cause: '원활',
      result: '',
      sms: ''
    },
    {
      id : '21',
      date : '2020-07-03 14:40:05',
      tags : [`      1      `],
      cause: '사고(충돌)',
      result: '',
      sms: '송신 실패'
    },
    {
      id : '20',
      date : '2020-07-03 14:00:58',
      tags : [`      1      `],
      cause: '정체',
      result: '처리 완료',
      sms: '송신 완료'
    },
    {
      id : '19',
      date : '2020-07-03 13:50:05',
      tags : [`      2      `],
      cause: '사고',
      result: '처리 완료',
      sms: '송신 완료'
    },
    {
      id : '18',
      date : '2020-07-03 13:10:10',
      tags : [`      4      `],
      cause: '이상',
      result: '',
      sms: ''
    },
    {
      id : '17',
      date : '2020-07-03 13:00:01',
      tags : [`      5      `],
      cause: '원활',
      result: '',
      sms: ''
    },
    {
      id : '16',
      date : '2020-07-03 12:40:30',
      tags : [`      1      `],
      cause: '사고',
      result: '',
      sms: '송신 실패'
    },
    {
      id : '15',
      date : '2020-07-03 12:00:55',
      tags : [`      3      `],
      cause: '정체',
      result: '처리 완료',
      sms: ''
    },
    {
      id : '14',
      date : '2020-07-03 11:15:20',
      tags : [`      2      `],
      cause: '사고',
      result: '처리 완료',
      sms: '송신 완료'
    },
    {
      id : '13',
      date : '2020-07-03 11:10:10',
      tags : [`      4      `],
      cause: '이상',
      result: '',
      sms: ''
    },
    {
      id : '12',
      date : '2020-07-03 10:20:17',
      tags : [`      5      `],
      cause: '원활',
      result: '',
      sms: ''
    },
    {
      id : '11',
      date : '2020-07-03 10:17:28',
      tags : [`      5      `],
      cause: '사고',
      result: '처리 완료',
      sms: '송신 완료'
    },
    {
      id : '10',
      date : '2020-07-03 09:45:30',
      tags : [`      2      `],
      cause: '사고',
      result: '처리 완료',
      sms: '송신 완료'
    },
    {
      id : '9',
      date : '2020-07-03 09:20:10',
      tags : [`      2      `],
      cause: '사고',
      result: '처리 완료',
      sms: '송신 완료'
    },
    {
      id : '8',
      date : '2020-07-03 09:10:30',
      tags : [`      4      `],
      cause: '이상',
      result: '',
      sms: ''
    },
    {
      id : '7',
      date : '2020-07-03 09:00:02',
      tags : [`      5      `],
      cause: '원활',
      result: '',
      sms: ''
    },
    {
      id : '6',
      date : '2020-07-03 08:55:35',
      tags : [`      1      `],
      cause: '사고',
      result: '처리 완료',
      sms: '송신 완료'
    },
    {
      id : '5',
      date : '2020-07-03 08:30:33',
      tags : [`      5      `],
      cause: '원활',
      result: '',
      sms: ''
    },
    {
      id : '4',
      date : '2020-07-03 08:10:13',
      tags : [`      2      `],
      cause: '사고',
      result: '처리 완료',
      sms: '송신 완료'
    },
    {
      id : '3',
      date : '2020-07-03 08:05:25',
      tags : [`      4      `],
      cause: '이상',
      result: '',
      sms: ''
    },
    {
      id : '2',
      date : '2020-07-03 08:00:17',
      tags : [`      5      `],
      cause: '원활',
      result: '',
      sms: ''
    },
    {
      id : '1',
      date : '2020-07-03 07:40:25',
      tags : [`      1      `],
      cause: '사고',
      result: '처리 완료',
      sms: '송신 완료'
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
const EventManager = () => {
    return (
        <Fragment>
            <Breadcrumb className="bread">
                <Breadcrumb.Item><SettingOutlined/>&nbsp;&nbsp;Event</Breadcrumb.Item>
                <Breadcrumb.Item><UserOutlined/>&nbsp;Event Manager</Breadcrumb.Item>
            </Breadcrumb>
            <div className="event-manager contents" >
              <Row gutter={[6,6]}>
                <Card title="Event" size="middle">
                    <Table columns={columns} dataSource={data} pagination={{ pageSize: 25 }} scroll={{ y: 360 }} />
                </Card></Row>
            </div>
        </Fragment>
    );
};

export default EventManager;