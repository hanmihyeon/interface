import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import networkdata from './network.json';

export const NetworkChart = () => {
    const network = {
        chart: {
            zoomType: 'x',
            type: 'area',
            width: null,
            heigh: 200
        },
        title: {
            text: ''
        },
        subtitle: {
            text: document.ontouchstart === undefined ?
                '' : ''
        },
        xAxis: {
            type: 'datetime'
        },
        yAxis: {
            title: {
                text: ''
            }
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            area: {
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, Highcharts.getOptions().colors[0]],
                        [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                    ]
                },
                marker: {
                    radius: 2
                },
                lineWidth: 1,
                states: {
                    hover: {
                        lineWidth: 1
                    }
                },
                threshold: null
            }
        },

        series: [{
            
            name: 'USD to EUR',
            data: networkdata
        }]
    }

    return (
        <div style={{margin: '60px 0 0 16px'}}>
            <div>
                <HighchartsReact Highcharts={Highcharts} options={network}/></div>
        </div>
    )
}