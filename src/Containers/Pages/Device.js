import React, {Fragment} from 'react';
import {Breadcrumb} from 'antd';
import {SettingOutlined, SafetyOutlined} from '@ant-design/icons';

import './Common.css';

const Device = () => {
    return (
        <Fragment>
            <Breadcrumb className="bread">
                <Breadcrumb.Item><SettingOutlined/>&nbsp;&nbsp;Setting</Breadcrumb.Item>
                <Breadcrumb.Item><SafetyOutlined/>&nbsp;Device</Breadcrumb.Item>
            </Breadcrumb>
            <div className="device contents">Device</div>
        </Fragment>
    );
};

export default Device;