import React, {Fragment, Component} from 'react';
import {Breadcrumb, Row, Col, Card} from 'antd';

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ReferenceLine,
    ResponsiveContainer
} from 'recharts';
import AudioSpectrum from 'react-audio-spectrum';

export class TempChart extends Component {
    randomDataArray(nb_elem) {
        var data_bar = [];
        for (var i = 1; i <= nb_elem; i++) {
            data_bar.push({
                name: i*20,
                temp: (30 + (Math.round(Math.random() * 20) / 10))
            });
        }
        return data_bar;
    }

    constructor(props) {
        super(props);
        this.state = {
            nb_bar: props.nb_bar,
            data: this.randomDataArray(props.nb_bar)
        };
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 10000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            data: this.randomDataArray(this.props.nb_bar)
        });
    }

    render() {
        let sum = this
            .state
            .data
            .reduce(function (prev, cur) {
                return prev + cur.temp
            }, 0);
        let avg = (Math.round((sum / 24) * 10) / 10);

        return (
            <div>
                <div
                    className="title"
                    style={{
                        fontSize: '16px',
                        margin: '0 0 0px 32px',
                        float:'left'
                    }}>FBG Temperature</div>
                    <div style={{
                        fontSize: '16px',
                        float:'right',
                        border: '1px solid #1890ff',
                        background: '#e6f7ff',
                        color: 'black',
                        padding:'5px'
                    }}>1분 단위</div>
                <ResponsiveContainer minHeight={300}>
                    <BarChart data={this.state.data}>
                        <XAxis dataKey="name" label={{ value: "(m)", position: 'insideBottomRight',offset: -3 }}/>
                        <YAxis domain={[0, 50]} label={{ value: "(°C)", position: 'insideTop',offset: -20 }}/>
                        <CartesianGrid stroke="#e0e0e0" strokeDasharray="3 3"/>
                        <Tooltip/>
                        <Legend
                            verticalAlign="top"
                            align="right"
                            wrapperStyle={{
                                top: '6px',
                                right: '90px'
                            }}/>
                        <Bar dataKey="temp" fill="#c1e0fc"/>
                        <ReferenceLine y={avg} stroke="red"/>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        );
    }
}

export class SoundChart extends Component {
    randomDataArray(nb_elem) {
        var data_bar = [];

        for (var i = 1; i <= nb_elem; i++) {
            data_bar.push({
                name: i*20,
                dB: (50 + (Math.round(Math.random() * 10)))
            });
        }
        return data_bar;
    }

    constructor(props) {
        super(props);
        this.state = {
            nb_bar: props.nb_bar,
            data: this.randomDataArray(props.nb_bar)
        };
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 10000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            data: this.randomDataArray(this.props.nb_bar)
        });
    }

    render() {
        let sum = this
            .state
            .data
            .reduce(function (prev, cur) {
                return prev + cur.dB
            }, 0);
        let avg = (Math.round((sum / 24) * 10) / 10);

        return (
            <div>
                <div
                    className="title"
                    style={{
                        fontSize: '16px',
                        margin: '0 0 0px 32px',
                        float: 'left'
                    }}>FBG Sound</div>
                    <div style={{
                        fontSize: '16px',
                        float:'right',
                        border: '1px solid #1890ff',
                        background: '#e6f7ff',
                        color: 'black',
                        padding:'5px'
                    }}>1분 단위</div>
                <ResponsiveContainer minHeight={300}>
                    <BarChart data={this.state.data}>
                        <XAxis dataKey="name" label={{ value: "(m)", position: 'insideBottomRight',offset: -3 }}/>
                        <YAxis domain={[0, 80]} label={{ value: "(dB)", position: 'insideTop', offset: -20 }}/>
                        <CartesianGrid stroke="#e0e0e0" strokeDasharray="3 3"/>
                        <Tooltip/>
                        <Legend
                            verticalAlign="top"
                            align="right"
                            wrapperStyle={{
                                top: '6px',
                                right: '90px'
                            }}/>
                        <Bar dataKey="dB" fill="#d6fbb5"/>
                        <ReferenceLine y={avg} stroke="red"/>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        );
    }
}

export class SagnacChart extends Component {
    render() {
        return (
            <Fragment>
                <div
                    className="title"
                    style={{
                        fontSize: '16px',
                        margin: '0 0 0px 32px',
                        float:'left'
                    }}>Sagnac</div>
                    <div style={{
                        fontSize: '16px',
                        float:'right',
                        border: '1px solid #1890ff',
                        background: '#e6f7ff',
                        color: 'black',
                        padding:'5px'
                    }}>1분 단위</div>
                    <div style={{marginLeft:'32px'}}>
                <audio id='audio-element' src='/accident.mp3' autoPlay="autoPlay" loop="loop"></audio>
                <AudioSpectrum
                    id='audio-canvas'
                    height='300'
                    width='750'
                    audioId='audio-element'
                    capColor={'red'}
                    capHeight={2}
                    meterWidth={24}
                    meterCount={24}
                    meterColor={[
                        {
                            stop: 0,
                            color: '#f00'
                        }, {
                            stop: 0.5,
                            color: '#0CD7FD'
                        }, {
                            stop: 1,
                            color: 'red'
                        }
                    ]}
                    gap={4}/></div>
            </Fragment>
        );
    }
}
/*const Sensor = () => {
    return (
        <Fragment>
            <div>
                <Breadcrumb
                    style={{
                        marginBottom: '20px'
                    }}>
                    <Breadcrumb.Item><DashboardOutlined/>&nbsp;&nbsp;Dashboard</Breadcrumb.Item>
                    <Breadcrumb.Item><BarChartOutlined/>&nbsp;Sensor</Breadcrumb.Item>
                </Breadcrumb>
                <div>
                <Row gutter={[0, 16]}>
                        <Col>
                            <Card title="Sensor">
                                <Audio/>
                            </Card>
                        </Col>
                    </Row>
                    <Row gutter={[0, 16]}>
                        <Col>
                            <Card title="온도">
                                <ResponsiveContainer minHeight={360}><TempChart nb_bar={24}/></ResponsiveContainer>
                            </Card>
                        </Col>
                    </Row>
                    <Row gutter={[0, 16]}>
                        <Col>
                            <Card title="소리">
                                <ResponsiveContainer minHeight={360}><SoundChart nb_bar={24}/></ResponsiveContainer>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </Fragment>
    );
};

export default Sensor;*/