import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

export const TunnelChart = () => {

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

export class TodayStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [44, 55, 13, 43, 22],
      options: {
        chart: {
          width: 300,
          type: 'donut',
        },
        labels: ['화재', '사고', '정체', '원활', '기타'],
        colors: ['#F9120F','#F25A16','#FEFF37','#51B241','#2F92D2'],
        /*colors: ['#D63249','#E16929','#E0B74E','#39A048','#32A4D7'],
        colors: ['#9e3953', '#dd713e', '#9e8439', '#529e39', '#39539e'],*/
        dataLabels: {
          enabled: false,
          style: {
            fontWeight: '400',
          },
          dropShadow: {
            enablde: false,
            top: 0,
            left: 0,
            opacity: 0
          }
        },
        legend: {
          position: 'bottom'
        },
        stroke: {
          width: 0
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              show: false
            }
          }
        }]
      },
    };
  }
  render() {
    return (
      <div id="chart" style={{ margin: '15px 0 0 -17px' }}>
        <ReactApexChart options={this.state.options} series={this.state.series} type="donut" width={300} />
      </div>
    );
  }
}

export class TunnelRadial extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [70],
      options: {
        chart: {
          height: 250,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: '70%',
            }
          },
        },
        stroke: {
          lineCap: 'round',
        },
        labels: ['Data'],
        colors: ['#39539e']
      },
    };
  }
  render() {
    return (
      <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={180} />
      </div>
    );
  }
}


