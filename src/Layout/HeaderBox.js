import React, {Component} from 'react';
import {Typography, Avatar, Layout} from 'antd';
import Menu from './Menu';
import {MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined} from '@ant-design/icons'

const {Header} = Layout
const {Title} = Typography

class HeaderBox extends Component {
    render() {
        return (
            <Layout>
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
                                fontSize: '18px',
                                alignItems: 'center'
                            }}>Login</div>
                        <div
                            style={{
                                float: 'left',
                                marginRight: '15px',
                                marginTop: '-10px',
                                fontSize: '18px',
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

            </Layout>

        )
    }
}

export default HeaderBox;
