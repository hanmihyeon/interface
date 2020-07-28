import React, {Fragment, useState, useEffect} from 'react';
import {Breadcrumb, Table} from 'antd';
import {SettingOutlined, UserOutlined} from '@ant-design/icons';

import './Common.css';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const User = () => {
    let [data, setData] = useState({
        fbg_id: '',
        fbg_ts: '',
        fbg_temp: '',
    });

    // let [id_data, setidData] = useState(null);
    // let [ts_data, settsData] = useState(null);
    // let [temp_data, settempData] = useState(null);

    /*const handleData = useCallback(() => {
        /*id_data = dataRef.current.focus();
        ts_data = dataRef.current.focus();
        temp_data = dataRef.current.focus();
        dataRef.current.fbg_id();
        dataRef.current.fbg_ts();
        dataRef.current.fbg_temp();
    }, [])*/

    useEffect(() => {
        fetch('http://localhost:5000/a')
            .then(res => res.json())
            .then(res => {
                let receivedData = res.map((datapost) => {
                    return (
                        {
                            fbg_id : datapost.fbg_id,
                            fbg_ts: datapost.fbg_ts,
                            fbg_temp : datapost.fbg_temp
                        }
                    )
                })
                setData(receivedData);
                // let id = receivedData.map(receivedData=>receivedData.fbg_id);
                // setidData(id_data=receivedData.map(receivedData=>receivedData.fbg_id));
                // settsData(ts_data=receivedData.map(receivedData=>receivedData.fbg_ts));
                // settempData(temp_data=receivedData.map(receivedData=>receivedData.fbg_temp));
                
                // let temp = temp_data.map(Number);
                // console.log(temp);
            }
            )
    }, []);
    console.log(data);
    
    const optionavg1 = {
        chart: {
            type: 'line',
            marginTop: 50,
            height: 300,
            width:null,
            animation: Highcharts.svg, // don't animate in old IE
            events: {
                load: null
                /*function () {
                    // set up the updating of the chart each second
                    var series = this.series[0];
                    setInterval(function () {
                        var x = (new Date()).getTime(), // current time
                            y = (Math.round(Math.random() * 2))
                        series.addPoint([
                            x, y
                        ], true, true);
                    }, 5000);
                }*/
            }
        },

        time: {
            useUTC: false
        },

        title: {
            text: ''
        },
        accessibility: {
            announceNewData: {
                enabled: true,
                minAnnounceInterval: 15000,
                announcementFormatter: function (allSeries, newSeries, newPoint) {
                    if (newPoint) {
                        return 'New point added. Value: ' + newPoint.y;
                    }
                    return false;
                }
            }
        },

        plotOptions: {
            series: {
                marker: {
                    enabled: false
                }
            }
        },

        xAxis: {
            type: 'datetime',
            tickPixelInterval: 150
        },

        yAxis: {
            title: {
                text: ''
            },
            plotLines: [
                {
                    value: 0,
                    width: 1,
                    color: '#808080'
                }
            ]
        },

        tooltip: {
            headerFormat: '<b>{series.name}</b><br/>',
            pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}'
        },

        legend: {
            enabled: false,
            
        },

        exporting: {
            enabled: false
        },

        series: [
            {
                name: 'AVG',
                color: '#ff8cac',
                data:data,
                key: data,
                turboThreshold: 1500,
            }
        ]
    }

    const columns = [
        {
            title: 'id',
            dataIndex: 'fbg_id',
            key: 'fbg_id'
        },
        {
            title:'ts',
            dataIndex: 'fbg_ts',
            key: 'fbg_ts'
        },
        {
            title: 'temp',
            dataIndex: 'fbg_temp',
            key: 'fbg_temp'
        }
    ]

    return (
        <Fragment>
            <Breadcrumb className="bread">
                <Breadcrumb.Item><SettingOutlined/>&nbsp;&nbsp;Setting</Breadcrumb.Item>
                <Breadcrumb.Item><UserOutlined/>&nbsp;User</Breadcrumb.Item>
            </Breadcrumb>

            <div className="user contents">User</div>
            <div>
                <Table
                    bordered="bordered"
                    columns={columns}
                    dataSource={data}
                simple="simple" />
                <div>
                    <HighchartsReact Highcharts={Highcharts} options={optionavg1}  style={{overflow:'visible'}}/>
                </div>
            </div>
        </Fragment>
    );
};

export default User;