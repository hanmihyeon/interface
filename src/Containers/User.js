import React, {Fragment} from 'react';
import {Breadcrumb} from 'antd';
import {SettingOutlined,UserOutlined} from '@ant-design/icons';

const User = () => {
    return (
        <Fragment>
            <div style={{
                    marginLeft: '15px'
                }}>
                <Breadcrumb>
                    <Breadcrumb.Item><SettingOutlined/>&nbsp;&nbsp;Setting</Breadcrumb.Item>
                    <Breadcrumb.Item><UserOutlined/>&nbsp;User</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{marginTop:'5px'}}>User</div>
            </div>
        </Fragment>
    );
};

export default User;