import React, {Fragment} from 'react';
import {Breadcrumb} from 'antd';
import {HomeOutlined} from '@ant-design/icons';

const Home = () => {
    return (
        <Fragment>
            <div style={{
                    marginLeft: '15px'
                }}>
                <Breadcrumb>
                    <Breadcrumb.Item><HomeOutlined/>&nbsp;&nbsp;Home</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{marginTop:'5px'}}>Home</div>
            </div>
        </Fragment>
    );
};

export default Home;