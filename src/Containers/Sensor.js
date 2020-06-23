import React, {Fragment, Component} from 'react';
import {Breadcrumb, Row, Col, Card} from 'antd';
import {DashboardOutlined, BarChartOutlined} from '@ant-design/icons';
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

class TempChart extends Component {
    randomDataArray(nb_elem) {
        var data_bar = [];
        for (var i = 1; i <= nb_elem; i++) {
            data_bar.push({
                name: i,
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
        let sum = this.state.data .reduce(function (prev, cur) {
                return prev + cur.temp
            }, 0);
        let avg = (Math.round((sum / 24) * 10) / 10);

        return (
            <BarChart
                width={1170}
                height={340}
                data={this.state.data}
                style={{
                    marginLeft: '-32px'
                }}>
                <XAxis dataKey="name"/>
                <YAxis/>
                <CartesianGrid strokeDasharray="5 5"/>
                <Tooltip/>
                <Legend/>
                <Bar dataKey="temp" fill="#c1e0fc"/>
                <ReferenceLine y={avg} stroke="red"/>
            </BarChart>
        );
    }
}

class SoundChart extends Component {
    randomDataArray(nb_elem) {
        var data_bar = [];

        for (var i = 1; i <= nb_elem; i++) {
            data_bar.push({
                name: i,
                temp: (50 + (Math.round(Math.random() * 10)))
            });
        }

        return data_bar;
    }

    constructor(props) {
        super(props);
        this.state = {
            nb_bar: props.nb_bar,
            data: this.randomDataArray(props.nb_bar),
            avg: this.randomDataArray(props.nb_bar)
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
            data: this.randomDataArray(this.props.nb_bar),
            // avg: this.randomDataArray(this.props.nb_bar)
        });
    }

    render() {
        let sum = this.state.data.reduce(function (prev, cur) {
                return prev + cur.temp
            }, 0);
        let avg = (Math.round((sum / 24) * 10) / 10);

        return (
            <BarChart
                width={1170}
                height={340}
                data={this.state.data}
                style={{
                    marginLeft: '-32px'
                }}>
                <XAxis dataKey="name"/>
                <YAxis/>
                <CartesianGrid strokeDasharray="5 5"/>
                <Tooltip/>
                <Legend/>
                <Bar dataKey="temp" fill="#d6fbb5"/>
                <ReferenceLine y={avg} stroke="red"/>
            </BarChart>
        );
    }
}
const Sensor = () => {
    return (
        <Fragment>
            <div style={{
                    marginLeft: '15px'
                }}>
                <Breadcrumb>
                    <Breadcrumb.Item><DashboardOutlined/>&nbsp;&nbsp;Dashboard</Breadcrumb.Item>
                    <Breadcrumb.Item><BarChartOutlined/>&nbsp;Sensor</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{
                        marginTop: '5px'
                    }}>
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

export default Sensor;