import React, {Fragment} from 'react';
import {Breadcrumb} from 'antd';
import {SettingOutlined, UserOutlined} from '@ant-design/icons';

import './Common.css';

const User = () => {
    return (
        <Fragment>
            <Breadcrumb className="bread">
                <Breadcrumb.Item><SettingOutlined/>&nbsp;&nbsp;Setting</Breadcrumb.Item>
                <Breadcrumb.Item><UserOutlined/>&nbsp;User</Breadcrumb.Item>
            </Breadcrumb>
            <div className="user contents">User</div>
        </Fragment>
    );
};

export default User;