import React, {Component} from 'react';
import {Avatar, Layout} from 'antd';
import './HeaderBox.css';
import {UserOutlined} from '@ant-design/icons'

const {Header} = Layout

class HeaderBox extends Component {
    render() {
        return (
            <Layout>
                <Header className="header">
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                    <div
                        style={{
                            maxWidth: '20px'
                        }}>
                        {
                            /*React.createElement(
                                        this.state.collapsed
                                            ? MenuUnfoldOutlined
                                            : MenuFoldOutlined,
                                        {
                                            className: 'trigger',
                                            onClick: this.toggle
                                        }
                                    )*/
                        }
                    </div>
                    <div
                        style={{
                            position: 'absolute',
                            top: '10px',
                            right: '40px',
                            float: 'right'
                        }}>
                        <div
                            style={{
                                float: 'left',
                                marginRight: '15px',
                                marginTop: '-10px',
                                fontSize: '13px',
                                alignItems: 'center'
                            }}>Login</div>
                        <div
                            style={{
                                float: 'left',
                                marginRight: '15px',
                                marginTop: '-10px',
                                fontSize: '13px',
                                alignItems: 'center'
                            }}>hello</div>
                        <div
                            style={{
                                float: 'left'
                            }}>
                            <Avatar
                                size={42}
                                style={{
                                    backgroundColor: '#aaaaaa',
                                    float: 'right'
                                }}
                                icon={<UserOutlined />
}/>
                        </div>
                    </div>
                </div>
                </Header>
            </Layout>

        )
    }
}

export default HeaderBox;
