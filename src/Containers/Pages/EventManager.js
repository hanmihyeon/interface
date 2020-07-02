import React, {Fragment} from 'react';
import {Breadcrumb, Card, Table, Row} from 'antd';
import {SettingOutlined, UserOutlined} from '@ant-design/icons';

import './Common.css';

const columns = [
    {
      title: '일시',
      dataIndex: 'date',
    },
    {
      title: '원인',
      dataIndex: 'cause',
    },
    {
      title: '결과',
      dataIndex: 'result',
    },
    {
        title: 'SMS 발송',
        dataIndex: 'sms',
      },
  ];
  
  const data = [];
  for (let i = 0; i < 50; i++) {
    data.push({
      key: i,
      date: `2020-07-01 17:${i}`,
      cause: 32,
      result: `사고`,
      sms: `o`
    });
  }

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