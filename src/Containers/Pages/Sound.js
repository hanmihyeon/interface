import React, {Fragment} from 'react';
import {Breadcrumb} from 'antd';
import {LaptopOutlined,SoundOutlined} from '@ant-design/icons';

const Sound = () => {
    return (
        <Fragment>
            <div>
                <Breadcrumb style={{
                            marginBottom: '20px'
                        }}>
                    <Breadcrumb.Item><LaptopOutlined/>&nbsp;&nbsp;Multimedia</Breadcrumb.Item>
                    <Breadcrumb.Item><SoundOutlined/>&nbsp;Sound</Breadcrumb.Item>
                </Breadcrumb>
                <div>Sound</div>
            </div>
        </Fragment>
    );
};

export default Sound;