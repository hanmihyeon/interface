import React, {Component} from 'react';
import {Breadcrumb} from 'antd';
import {HomeOutlined} from '@ant-design/icons'
class Content extends Component {
    render() {
        return (
            <div style={{padding:'10px'}}>
                 
                <Breadcrumb><HomeOutlined/>  Home</Breadcrumb>
                <div style={{
                        marginTop: '15px'
                    }}>hello</div>
            </div>
        )
    }
}

export default Content;