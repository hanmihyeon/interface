import React, {Fragment, Component} from 'react';
import {Breadcrumb, Row, Col, Card} from 'antd';
import {DashboardOutlined, BarChartOutlined} from '@ant-design/icons';
import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ReferenceLine
} from 'recharts';

class TempChart extends Component {
    randomDataArray(nb_elem) {
        var data_bar = [];
        for (var i = 1; i <= nb_elem; i++) {
            data_bar.push({
                name: i,
                temp: (30 + (Math.round(Math.random() * 20 )/10))
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
                    <ReferenceLine y={5} stroke="red"/>
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
                temp: (50 + (Math.round(Math.random() * 10 )))
            });
        }
        return data_bar;
    }

    randomAvg(nb_elem,data_bar) {
//        let avg = (sum(data_bar.temp)/nb_elem);
        
 //       return avg;
    }

    constructor(props) {
        super(props);
        this.state = {
            nb_bar: props.nb_bar,
            data: this.randomDataArray(props.nb_bar),
            avg: this.randomAvg(props.nb_bar)
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
            avg: this.randomAvg(this.props.nb_bar)
            
        });
    }

    render() {
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
                    <ReferenceLine y={this.state.avg} stroke="red"/>
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
                            <Card title="온도"><TempChart nb_bar={24}/></Card>
                        </Col>
                    </Row>
                    <Row gutter={[0, 16]}>
                        <Col>
                            <Card title="소리"><SoundChart nb_bar={24}/></Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </Fragment>
    );
};

export default Sensor;