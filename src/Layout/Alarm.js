import React, { Component, Fragment } from 'react';
import { Col, Card, Modal, Alert } from 'antd';
import './Alarm.css';

class Alarm extends Component {
    state = {
        visiblemodal: false,
    }

    showModal = () => {
        this.setState({
            visiblemodal: true
        });
    }

    handleOk = e => {
        console.log(e);
        this.setState({
            visiblemodal: false
        });
    }

    handleCancel = e => {
        console.log(e);
        this.setState({
            visiblemodal: false
        });
    }

    render() {
        return (
            <Fragment>
                <Col span={2}>
                    <Card title="알림" size="small" className="alarm-list-wrap">
                        <div className="alarm-list">
                            <div>
                                <Alert
                                    onClick={this.showModal}
                                    message="Alert"
                                    description="화재 발생"
                                    type="error"
                                />
                                <Modal
                                    className="alert-modal alert-background"
                                    title="Alert"
                                    visible={this.state.visiblemodal}
                                    onOk={this.handleOk}
                                    onCancel={this.handleCancel}>
                                    <p>화재 발생</p>
                                </Modal>
                            </div>
                            <div>
                                <Alert
                                    onClick={this.showModal}
                                    message="Warning"
                                    description="사고 발생"
                                    type="warning"
                                />
                                <Modal
                                    className="warn"
                                    title="Alert"
                                    visible={this.state.visiblemodal}
                                    onOk={this.handleOk}
                                    onCancel={this.handleCancel}>
                                    <p>사고 발생</p>
                                </Modal>
                            </div>
                            <div>
                                <Alert
                                    onClick={this.showModal}
                                    message="Success"
                                    description="해결"
                                    type="success"
                                />
                                <Modal
                                    className="warn"
                                    title="Alert"
                                    visible={this.state.visiblemodal}
                                    onOk={this.handleOk}
                                    onCancel={this.handleCancel}>
                                    <p>사고 해결</p>
                                </Modal>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Fragment>
        )
    }
}

export default Alarm;

