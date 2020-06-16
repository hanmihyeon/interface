import React, {Component, Fragment} from 'react';
import {Button, Row, Input, Form} from 'antd';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {GlobalFooter} from 'components';
import styles from './Login.css'
const FormItem = Form.Item

class Login extends Component {
    render() {
        

        return (
            <Router>
            <Fragment>
                <div className={styles.form}>
                    <div className={styles.logo}>
                        <span>Title</span>
                    </div>
                    <Form>
                        <FormItem
                            name="username"
                            rules={[{
                                    required: true
                                }
                            ]}
                            >
                            <Input placeholder={`Username`}/>
                        </FormItem>
                        <FormItem
                            name="password"
                            rules={[{
                                    required: true
                                }
                            ]}
                            >
                            <Input type="password" placeholder={`Password`}/>
                        </FormItem>
                        <Row>
                            <Button type="primary" htmlType="submit">
                                <Link to="/Home"/>
                                Sign in
                            </Button>
                            
                        </Row>
                    </Form>
                </div>
                <div className={styles.footer}>
          <GlobalFooter/>
        </div>
            </Fragment>
            </Router>
        )
    }
}

export default Login;