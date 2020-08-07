import React, {Fragment} from 'react';
import {Breadcrumb} from 'antd';
import {CheckCircleOutlined} from '@ant-design/icons';

import '../Common.css';

const HealthCheck = () => {
    return (
        <Fragment>
            <Breadcrumb className="bread">
                <Breadcrumb.Item><CheckCircleOutlined/>&nbsp;&nbsp;헬스 체크</Breadcrumb.Item>
            </Breadcrumb>
            <div className="device contents">헬스 체크</div>
        </Fragment>
    );
};

export default HealthCheck;