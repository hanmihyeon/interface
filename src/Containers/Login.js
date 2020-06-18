import React, {Fragment} from 'react';
import {Button, Row, Input, Form} from 'antd';
import './Login.css'
import { Link } from 'react-router-dom';

const FormItem = Form.Item
const Login = () => {
    return (
            <Fragment>
                <div
                    className="formform"
                    >
                    <Form>
                        <div>
                            <span>h4tech-interface</span>
                        </div>
                        <FormItem
                            name="username"
                            rules={[{
                                    required: true
                                }
                            ]}>
                            <Input placeholder={`Username`}/>
                        </FormItem>
                        <FormItem
                            name="password"
                            rules={[{
                                    required: true
                                }
                            ]}>
                            <Input type="password" placeholder={`Password`}/>
                        </FormItem>
                        <Row>
                            <Button type="primary">
                                <Link to="/Home">
                                    Sign in</Link>
                            </Button>
                        </Row>
                    </Form>
                    <div>
                        <span>현재는 Sign in 버튼 클릭시 Home 이동</span>
                    </div>
                </div>

            </Fragment>
    );
};

export default Login;