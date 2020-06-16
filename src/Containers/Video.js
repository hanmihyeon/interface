import React, {Fragment} from 'react';
import {Breadcrumb} from 'antd';
import {LaptopOutlined,VideoCameraOutlined} from '@ant-design/icons';

const Video = () => {
    return (
        <Fragment>
            <div style={{
                    marginLeft: '15px'
                }}>
                <Breadcrumb>
                    <Breadcrumb.Item><LaptopOutlined/>&nbsp;&nbsp;Multimedia</Breadcrumb.Item>
                    <Breadcrumb.Item><VideoCameraOutlined/>&nbsp;Video</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{marginTop:'5px'}}>Video</div>
            </div>
        </Fragment>
    );
};

export default Video;