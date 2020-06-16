import React, {Fragment} from 'react';
import {Breadcrumb, Row, Col, Card} from 'antd';
import {DashboardOutlined,DatabaseOutlined} from '@ant-design/icons';

const Dashboard = () => {
    return (
        <Fragment>
            <div style={{
                    marginLeft: '15px'
                }}>
                <Breadcrumb>
                    <Breadcrumb.Item><DashboardOutlined/>&nbsp;&nbsp;Dashboard</Breadcrumb.Item>
                    <Breadcrumb.Item><DatabaseOutlined/>&nbsp;Data</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{marginTop:'5px'}}>.</div>
                <Row gutter={24}>
                    <Col lg={8} md={24}>
                        <Card  bodyStyle={{padding:0,height:204}}>
                            
                        </Card>
                    </Col>
                    <Col log={24} md={12}>
                        <Card bodyStyle={{padding:0,height:204,}}></Card>
                    </Col>
                </Row>
            </div>
        </Fragment>
    );
};

export default Dashboard;