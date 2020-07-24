import React from 'react';
import ReactApexChart from 'react-apexcharts';

export const TunnelChart = () => {
    const option = {
        series: [70],
            options: {
                chart: {
                    height: 350,
                    type: 'radialBar',
                },
                plotOptions: {
                    radialBar: {
                        hollow: {
                            size: '70%',
                        }
                    },
                },
                labels: ['Cricket'],
            },
    }

    const options = {
        series: [67],
        chart: {
          height: 350,
          type: "radialBar",
          offsetY: -10
        },
        plotOptions: {
          radialBar: {
            dataLabels: {
              name: {
                offsetY: 20,
                color: "green",
                formatter: function () {
                  return ["Posts", "(30 days)"];
                }
              },
              value: {
                color: "#111",
                offsetY: -30,
                fontSize: "22px"
              }
            }
          }
        },
        labels: ["Median Ratio"]
      };

    return (
        <ReactApexChart options={options} type="radialBar" height={150} />
    );
}

/*
export class TunnelChart extends React {
    constructor(props) {
        super(props);
        this.state = {
            series: [70],
            options: {
                chart: {
                    height: 350,
                    type: 'radialBar',
                },
                plotOptions: {
                    radialBar: {
                        hollow: {
                            size: '70%',
                        }
                    },
                },
                labels: ['Cricket'],
            },
        };
    }
    render() {
        return (
            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={150} />
            </div>
        )
    }
}

export default TunnelChart;*/


