import React, {Fragment} from 'react';
import {Breadcrumb, Row, Col, Card} from 'antd';
import {DashboardOutlined,DatabaseOutlined} from '@ant-design/icons';

const Dashboard = () => {
    return (
        <Fragment>
            <div style={{
                    margin: '0 6px'
                }}>
                <Breadcrumb>
                    <Breadcrumb.Item><DashboardOutlined/>&nbsp;&nbsp;Dashboard</Breadcrumb.Item>
                    <Breadcrumb.Item><DatabaseOutlined/>&nbsp;Data</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{margin:'15px 0'}}>
                <Row gutter={[24,24]}>
                    <Col span={16}>
                        <Card  bodyStyle={{padding:0,height:350}}></Card>
                    </Col>
                    <Col span={8}>
                        <Card bodyStyle={{padding:0,height:350}}></Card>
                    </Col>
                </Row>
                <Row gutter={[24,24]}>
                    <Col span={12}>
                        <Card  bodyStyle={{padding:0,height:350}}></Card>
                    </Col>
                    <Col span={12}>
                        <Card bodyStyle={{padding:0,height:350}}></Card>
                    </Col>
                </Row>
                <Row gutter={[24,24]}>
                    <Col span={24}>
                        <Card  bodyStyle={{padding:0,height:350}}></Card>
                    </Col>
                </Row>
                </div>
            </div>
        </Fragment>
    );
};

export default Dashboard;