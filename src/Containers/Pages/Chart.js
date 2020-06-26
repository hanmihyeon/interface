import React, {Fragment} from 'react';
import {Breadcrumb, Row, Col, Card} from 'antd';
import {DashboardOutlined, LineChartOutlined} from '@ant-design/icons';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    AreaChart,
    Area,
    ComposedChart,
    Bar,
    ResponsiveContainer
} from 'recharts';

import './Common.css';

const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400
    }, {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210
    }, {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290
    }, {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000
    }, {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181
    }, {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500
    }, {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100
    }
];

const data1 = [
    {
        month: '2015.01',
        a: 4000,
        b: 2400,
        c: 2400
    }, {
        month: '2015.02',
        a: 3000,
        b: 1398,
        c: 2210
    }, {
        month: '2015.03',
        a: 2000,
        b: 9800,
        c: 2290
    }, {
        month: '2015.04',
        a: 2780,
        b: 3908,
        c: 2000
    }, {
        month: '2015.05',
        a: 1890,
        b: 4800,
        c: 2181
    }, {
        month: '2015.06',
        a: 2390,
        b: 3800,
        c: 2500
    }, {
        month: '2015.07',
        a: 3490,
        b: 4300,
        c: 2100
    }
];

const data2 = [
    {
        name: 'Page A',
        uv: 590,
        pv: 800,
        amt: 1400,
        avg: 930
    }, {
        name: 'Page B',
        uv: 868,
        pv: 967,
        amt: 1506,
        avg: 1113
    }, {
        name: 'Page C',
        uv: 1397,
        pv: 1098,
        amt: 989,
        avg: 1161
    }, {
        name: 'Page D',
        uv: 1480,
        pv: 1200,
        amt: 1228,
        avg: 1302
    }, {
        name: 'Page E',
        uv: 1520,
        pv: 1108,
        amt: 1100,
        avg: 1242
    }, {
        name: 'Page F',
        uv: 1400,
        pv: 680,
        amt: 1700,
        avg: 1260
    }
];
const getPercent = (value, total) => {
    const ratio = total > 0
        ? value / total
        : 0;

    return toPercent(ratio, 2);
};

const toPercent = (decimal, fixed = 0) => `${ (decimal * 100).toFixed(fixed)}%`;

const renderTooltipContent = (o) => {
    const {payload, label} = o;
    const total = payload.reduce((result, entry) => (result + entry.value), 0);

    return (
        <div className="customized-tooltip-content">
            <p className="total">{`${label} (Total: ${total})`}</p>
            <ul className="list">
                {
                    payload.map((entry, index) => (
                        <li
                            key={`item-${index}`}
                            style={{
                                color: entry.color
                            }}>
                            {`${entry.name}: ${entry.value}(${getPercent(entry.value, total)})`}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};
const Chart = () => {
    return (
        <Fragment>
            <Breadcrumb className="bread">
                <Breadcrumb.Item><DashboardOutlined/>&nbsp;&nbsp;Dashboard</Breadcrumb.Item>
                <Breadcrumb.Item><LineChartOutlined/>&nbsp;Chart</Breadcrumb.Item>
            </Breadcrumb>
            <div className="chart contents">
                <Row gutter={24}>
                    <Col span={8}>
                        <Card title="Chart 1">
                            <ResponsiveContainer minHeight={360}>
                                <LineChart
                                    width={420}
                                    height={300}
                                    data={data}
                                    margin={{
                                        top: 5,
                                        right: 20,
                                        left: 20,
                                        bottom: 5
                                    }}>
                                    <XAxis dataKey="name"/>
                                    <YAxis/>
                                    <CartesianGrid strokeDasharray="3 3"/>
                                    <Tooltip/>
                                    <Legend/>
                                    <Line
                                        type="monotone"
                                        dataKey="pv"
                                        stroke="#8884d8"
                                        activeDot={{
                                            r: 8
                                        }}/>
                                    <Line type="monotone" dataKey="uv" stroke="#82ca9d"/>
                                </LineChart>
                            </ResponsiveContainer>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Chart2">
                            <ResponsiveContainer minHeight={360}>
                                <AreaChart
                                    width={420}
                                    height={300}
                                    data={data1}
                                    stackOffset="expand"
                                    margin={{
                                        top: 5,
                                        right: 20,
                                        left: 20,
                                        bottom: 5
                                    }}>
                                    <XAxis dataKey="month"/>
                                    <YAxis tickFormatter={toPercent}/>
                                    <Tooltip content={renderTooltipContent}/>
                                    <Area type='monotone' dataKey='a' stackId="1" stroke='#8884d8' fill='#8884d8'/>
                                    <Area type='monotone' dataKey='b' stackId="1" stroke='#82ca9d' fill='#82ca9d'/>
                                    <Area type='monotone' dataKey='c' stackId="1" stroke='#ffc658' fill='#ffc658'/>
                                </AreaChart>
                            </ResponsiveContainer>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Chart 3">
                            <ResponsiveContainer minHeight={360}>
                                <ComposedChart
                                    width={500}
                                    height={300}
                                    data={data2}
                                    margin={{
                                        top: 5,
                                        right: 20,
                                        bottom: 5,
                                        left: 0
                                    }}>
                                    <CartesianGrid stroke="#f5f5f5"/>
                                    <XAxis dataKey="name"/>
                                    <YAxis/>
                                    <Tooltip/>
                                    <Legend/>
                                    <Bar dataKey="uv" barSize={20} fill="#413ea0"/>
                                    <Line type="monotone" dataKey="avg" stroke="#ff7300"/>
                                </ComposedChart>
                            </ResponsiveContainer>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Fragment>
    );
};

export default Chart;