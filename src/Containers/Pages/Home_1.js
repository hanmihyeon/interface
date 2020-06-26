import React, {Fragment} from 'react';
import {Breadcrumb} from 'antd';
import {HomeOutlined} from '@ant-design/icons';

import './Common.css';

const Home = () => {
    return (
        <Fragment>
            <Breadcrumb className="bread">
                <Breadcrumb.Item><HomeOutlined/>&nbsp;&nbsp;Home</Breadcrumb.Item>
            </Breadcrumb>
            <div className="home contents">Home</div>
        </Fragment>
    );
};

export default Home;