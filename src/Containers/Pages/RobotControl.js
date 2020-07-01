import React, {Fragment} from 'react';
import {Breadcrumb} from 'antd';
import {SettingOutlined, UserOutlined} from '@ant-design/icons';

import './Common.css';

const RobotControl = () => {
    return (
        <Fragment>
            <Breadcrumb className="bread">
                <Breadcrumb.Item><SettingOutlined/>&nbsp;&nbsp;Event</Breadcrumb.Item>
                <Breadcrumb.Item><UserOutlined/>&nbsp;Robot Control</Breadcrumb.Item>
            </Breadcrumb>
            <div className="robot-control contents">Robot Control</div>
        </Fragment>
    );
};

export default RobotControl;