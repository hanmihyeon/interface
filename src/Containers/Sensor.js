import React, {Fragment} from 'react';
import {Breadcrumb} from 'antd';
import {DashboardOutlined,BarChartOutlined} from '@ant-design/icons';

const Sensor = () => {
    return (
        <Fragment>
            <div style={{
                    marginLeft: '15px'
                }}>
                <Breadcrumb>
                    <Breadcrumb.Item><DashboardOutlined/>&nbsp;&nbsp;Dashboard</Breadcrumb.Item>
                    <Breadcrumb.Item><BarChartOutlined/>&nbsp;Sensor</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{marginTop:'5px'}}>Sensor</div>
            </div>
        </Fragment>
    );
};

export default Sensor;