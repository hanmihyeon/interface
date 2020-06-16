import React, {Fragment} from 'react';
import {Breadcrumb} from 'antd';
import {SettingOutlined,SafetyOutlined} from '@ant-design/icons';

const Device = () => {
    return (
        <Fragment>
            <div style={{
                    marginLeft: '15px'
                }}>
                <Breadcrumb>
                    <Breadcrumb.Item><SettingOutlined/>&nbsp;&nbsp;Setting</Breadcrumb.Item>
                    <Breadcrumb.Item><SafetyOutlined/>&nbsp;Device</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{marginTop:'5px'}}>Device</div>
            </div>
        </Fragment>
    );
};

export default Device;