import React, {Fragment} from 'react';
import {Breadcrumb} from 'antd';
import {DashboardOutlined,LineChartOutlined} from '@ant-design/icons';

const Chart = () => {
    return (
        <Fragment>
            <div style={{
                    marginLeft: '15px'
                }}>
                <Breadcrumb>
                    <Breadcrumb.Item><DashboardOutlined/>&nbsp;&nbsp;Dashboard</Breadcrumb.Item>
                    <Breadcrumb.Item><LineChartOutlined/>&nbsp;Chart</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{marginTop:'5px'}}>Dashboard</div>
            </div>
        </Fragment>
    );
};

export default Chart;