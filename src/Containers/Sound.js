import React, {Fragment} from 'react';
import {Breadcrumb} from 'antd';
import {LaptopOutlined,SoundOutlined} from '@ant-design/icons';

const Sound = () => {
    return (
        <Fragment>
            <div style={{
                    marginLeft: '15px'
                }}>
                <Breadcrumb>
                    <Breadcrumb.Item><LaptopOutlined/>&nbsp;&nbsp;Multimedia</Breadcrumb.Item>
                    <Breadcrumb.Item><SoundOutlined/>&nbsp;Sound</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{marginTop:'5px'}}>Sound</div>
            </div>
        </Fragment>
    );
};

export default Sound;