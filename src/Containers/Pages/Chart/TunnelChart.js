import React from 'react';
import ReactApexChart from 'react-apexcharts';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

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
      series: [5, 15, 40, 65, 22],
      options: {
        chart: {
          width: 300,
          type: 'donut',
        },
        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: true,
                name: {
                  show: true,
                  offsetY: -10
                },
                value: {
                  offsetY: 0,
                  show: true
                },
                total: {
                  show: true,
                  label: 'Total',
                  color: '#d0d0d0',
                  fontSize: '12px',
                }
              }
            }
          }
        },
        labels: ['화재', '사고', '정체', '원활', '기타'],
        colors: ['#F9120F', '#F25A16', '#FEFF37', '#51B241', '#2F92D2'],
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
      <div id="chart" style={{ margin: '5px 0 0 -17px' }}>
        <ReactApexChart options={this.state.options} series={this.state.series} type="donut" width={300} />
      </div>
    );
  }
}

export class TunnelRadial1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [25],
      options: {
        chart: {
          height: 250,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: '60%',
            }
          },
        },
        stroke: {
          lineCap: 'round',
        },
        labels: ['온도'],
        dataLabels: {
          enabled: true,
          style: {
            color: '#fff'
          }
        },
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

export class TunnelRadial2 extends React.Component {
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
              size: '60%',
            }
          },
        },
        stroke: {
          lineCap: 'round',
        },
        labels: ['습도'],
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

export class TunnelRadial3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [40],
      options: {
        chart: {
          height: 250,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: '60%',
            }
          },
        },
        stroke: {
          lineCap: 'round',
        },
        labels: ['연기'],
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

export class TunnelRadial4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [40],
      options: {
        chart: {
          height: 250,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: '60%',
            }
          },
        },
        stroke: {
          lineCap: 'round',
        },
        labels: ['먼지'],
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

export const FBGChart = () => {
  const option1 = {
      chart: {
          zoomType: 'xy',
          backgroundColor: 'none',
          height: 280,
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
          text: 'FBG 센서',
          style: {
              fontSize: '14px',
              color: '#fff'
          }
      },
      /*accessibility: {
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
      },*/

      plotOptions: {
          series: {
              marker: {
                  enabled: false
              },
          }
      },

      legend: {
          enabled: true,
          itemStyle: {
              color: '#fff',
              fontWeight: '400'
          }
      },

      xAxis: {
          type: 'datetime',
          tickPixelInterval: 150,
          crosshair: true,
      },

      yAxis: [{
          labels: {
              format: '{value}°C',
              style: {
                  color: '#fff',
              }
          },
          title: {
              text: '',
              style: {
                  color: '#fff',
              }
          },
      }, {
          labels: {
              format: '{value}dB',
              style: {
                  color: '#fff'
                  // Highcharts.getOptions().colors[0]
              }
          },
          title: {
              text: '',
              style: {
                  color: '#fff'
                  // Highcharts.getOptions().colors[0]
              }
          },
          opposite: true
      }],

      tooltip: {
          shared: true,
          // headerFormat: '<b>{series.name}</b><br/>',
          // pointFormat: '<span style="color:{point.color}">●</span> {series.name} : <b>{point.y}</b><br/>',
      },

      exporting: {
          enabled: false
      },

      series: [
          {
              name: '온도',
              type: 'spline',
              yAxis: 0,
              color: '#51b241',
              tooltip: {
                  valueSuffix: ' °C',
              },
              data: (function () {
                  // generate an array of random data
                  var data = [],
                      time = (new Date()).getTime(),
                      i;

                  for (i = -19; i <= 0; i += 1) {
                      data.push({
                          x: time + i * 5000,
                          y: (25 + (Math.round((Math.random() * 100)) / 100))
                      });
                  }

                  return data;
              }())
          },
          {
              name: '음향',
              type: 'spline',
              yAxis: 1,
              tooltip: {
                  valueSuffix: ' dB'
              },
              data: (function () {
                  // generate an array of random data
                  var data = [],
                      time = (new Date()).getTime(),
                      i;

                  for (i = -19; i <= 0; i += 1) {
                      data.push({
                          x: time + i * 5000,
                          y: (60 + (Math.round((Math.random() * 100)) / 100))
                      });
                  }

                  return data;
              }())
          }
      ]
  }

  return (
      <HighchartsReact Highcharts={Highcharts} options={option1} style={{ marginTop: '15px' }} />
  );
}

export const SagnacChart = () => {
  const option1 = {
      chart: {
          backgroundColor: 'none',
          height: 280,
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
          text: 'Sagnac 센서',
          style: {
              fontSize: '14px',
              color: '#fff'
          }
      },
      /*accessibility: {
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
      },*/

      plotOptions: {
          series: {
              marker: {
                  enabled: false
              },
          }
      },

      legend: {
          enabled: true,
          itemStyle: {
              color: '#fff',
              fontWeight: '400'
          }
      },

      xAxis: {
          type: 'datetime',
          tickPixelInterval: 150,
          crosshair: true,
      },

      yAxis: {
          labels: {
              format: '{value}dB',
              style: {
                  color: '#fff',
              }
          },
          title: {
              text: '',
              style: {
                  color: '#fff',
              }
          },
      },

      tooltip: {
          shared: true,
          // headerFormat: '<b>{series.name}</b><br/>',
          // pointFormat: '<span style="color:{point.color}">●</span> {series.name} : <b>{point.y}</b><br/>',
      },

      exporting: {
          enabled: false
      },

      series: [
          {
              name: '음향',
              type: 'spline',
              yAxis: 0,
              tooltip: {
                  valueSuffix: ' dB'
              },
              data: (function () {
                  // generate an array of random data
                  var data = [],
                      time = (new Date()).getTime(),
                      i;

                  for (i = -19; i <= 0; i += 1) {
                      data.push({
                          x: time + i * 5000,
                          y: (60 + (Math.round((Math.random() * 100)) / 100))
                      });
                  }

                  return data;
              }())
          }
      ]
  }

  return (
      <HighchartsReact Highcharts={Highcharts} options={option1} style={{ marginTop: '15px' }} />
  );
}

export const RobotDataChart = () => {
  const option1 = {
    chart: {
      zoomType: 'xy',
      backgroundColor: 'none',
      height: 280,
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
      text: '기타 센서 데이터',
      style: {
        fontSize: '14px',
        color: '#fff'
      }
    },
    /*accessibility: {
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
    },*/

    plotOptions: {
      series: {
        marker: {
          enabled: false
        }
      }
    },

    xAxis: {
      type: 'datetime',
      tickPixelInterval: 150,
      crosshair: true,
    },

    yAxis: [{
      labels: {
        format: '{value}ppm',
        style: {
          color: '#fff',
        }
      },
      title: {
        text: '',
        style: {
          color: '#fff',
        }
      },
    }, {
      labels: {
        format: '{value}ppm',
        style: {
          color: Highcharts.getOptions().colors[0]
        }
      },
      title: {
        text: '',
        style: {
          color: Highcharts.getOptions().colors[0]
        }
      },
      opposite: true
    }, {
      labels: {
        format: '{value}ppm',
        style: {
          color: Highcharts.getOptions().colors[0]
        }
      },
      title: {
        text: '',
        style: {
          color: Highcharts.getOptions().colors[0]
        }
      },
      opposite: true
    }, {
      labels: {
        format: '{value}ppm',
        style: {
          color: Highcharts.getOptions().colors[0]
        }
      },
      title: {
        text: '',
        style: {
          color: Highcharts.getOptions().colors[0]
        }
      },
      opposite: true
    }, {
      labels: {
        format: '{value}ppm',
        style: {
          color: Highcharts.getOptions().colors[0]
        }
      },
      title: {
        text: '',
        style: {
          color: Highcharts.getOptions().colors[0]
        }
      },
      opposite: true
    }, {
      labels: {
        format: '{value}ppm',
        style: {
          color: Highcharts.getOptions().colors[0]
        }
      },
      title: {
        text: '',
        style: {
          color: Highcharts.getOptions().colors[0]
        }
      },
      opposite: true
    }, {
      labels: {
        format: '{value}ppm',
        style: {
          color: Highcharts.getOptions().colors[0]
        }
      },
      title: {
        text: '',
        style: {
          color: Highcharts.getOptions().colors[0]
        }
      },
      opposite: true
    }, {
      labels: {
        format: '{value}ppm',
        style: {
          color: Highcharts.getOptions().colors[0]
        }
      },
      title: {
        text: '',
        style: {
          color: Highcharts.getOptions().colors[0]
        }
      },
      opposite: true
    }, {
      labels: {
        format: '{value}ppm',
        style: {
          color: Highcharts.getOptions().colors[0]
        }
      },
      title: {
        text: '',
        style: {
          color: Highcharts.getOptions().colors[0]
        }
      },
      opposite: true
    }],

    tooltip: {
      shared: true,
      // headerFormat: '<b>{series.name}</b><br/>',
      // pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}<br/>'
    },

    legend: {
      enabled: false
    },

    exporting: {
      enabled: false
    },

    series: [
      {
        name: '연기',
        type: 'spline',
        yAxis: 0,
        color: '#51b241',
        tooltip: {
          valueSuffix: ' ppm',
        },
        data: (function () {
          // generate an array of random data
          var data = [],
            time = (new Date()).getTime(),
            i;

          for (i = -19; i <= 0; i += 1) {
            data.push({
              x: time + i * 5000,
              y: (5010 + (Math.round((Math.random() * 100)) / 100))
            });
          }

          return data;
        }())
      },
      {
        name: '먼지',
        type: 'spline',
        yAxis: 0,
        tooltip: {
          valueSuffix: ' ppm',
        },
        data: (function () {
          // generate an array of random data
          var data = [],
            time = (new Date()).getTime(),
            i;

          for (i = -19; i <= 0; i += 1) {
            data.push({
              x: time + i * 5000,
              y: (5020 + (Math.round((Math.random() * 100)) / 100))
            });
          }

          return data;
        }())
      },
      {
        name: 'CO2',
        type: 'spline',
        yAxis: 0,
        color: '#feff37',
        tooltip: {
          valueSuffix: ' ppm',
        },
        data: (function () {
          // generate an array of random data
          var data = [],
            time = (new Date()).getTime(),
            i;

          for (i = -19; i <= 0; i += 1) {
            data.push({
              x: time + i * 5000,
              y: (5010 + (Math.round((Math.random() * 100)) / 100))
            });
          }

          return data;
        }())
      },
      {
        name: 'O2',
        type: 'spline',
        yAxis: 0,
        color: '#f25a16',
        tooltip: {
          valueSuffix: ' ppm',
        },
        data: (function () {
          // generate an array of random data
          var data = [],
            time = (new Date()).getTime(),
            i;

          for (i = -19; i <= 0; i += 1) {
            data.push({
              x: time + i * 5000,
              y: (5010 + (Math.round((Math.random() * 100)) / 100))
            });
          }

          return data;
        }())
      },
      {
        name: '황화수소',
        type: 'spline',
        yAxis: 0,
        color: '#f9120f',
        tooltip: {
          valueSuffix: ' ppm',
        },
        data: (function () {
          // generate an array of random data
          var data = [],
            time = (new Date()).getTime(),
            i;

          for (i = -19; i <= 0; i += 1) {
            data.push({
              x: time + i * 5000,
              y: (5010 + (Math.round((Math.random() * 100)) / 100))
            });
          }

          return data;
        }())
      },
      {
        name: 'CO',
        type: 'spline',
        yAxis: 0,
        color: '#a600ba',
        tooltip: {
          valueSuffix: ' ppm',
        },
        data: (function () {
          // generate an array of random data
          var data = [],
            time = (new Date()).getTime(),
            i;

          for (i = -19; i <= 0; i += 1) {
            data.push({
              x: time + i * 5000,
              y: (5010 + (Math.round((Math.random() * 100)) / 100))
            });
          }

          return data;
        }())
      },
      {
        name: 'VOC',
        type: 'spline',
        yAxis: 0,
        color: '#4f9694',
        tooltip: {
          valueSuffix: ' ppm',
        },
        data: (function () {
          // generate an array of random data
          var data = [],
            time = (new Date()).getTime(),
            i;

          for (i = -19; i <= 0; i += 1) {
            data.push({
              x: time + i * 5000,
              y: (5010 + (Math.round((Math.random() * 100)) / 100))
            });
          }

          return data;
        }())
      },
      {
        name: '이산화질소',
        type: 'spline',
        yAxis: 0,
        color: '#d0d0d0',
        tooltip: {
          valueSuffix: ' ppm',
        },
        data: (function () {
          // generate an array of random data
          var data = [],
            time = (new Date()).getTime(),
            i;

          for (i = -19; i <= 0; i += 1) {
            data.push({
              x: time + i * 5000,
              y: (5010 + (Math.round((Math.random() * 100)) / 100))
            });
          }

          return data;
        }())
      },
      {
        name: '암모니아',
        type: 'spline',
        yAxis: 0,
        color: '#fff',
        tooltip: {
          valueSuffix: ' ppm',
        },
        data: (function () {
          // generate an array of random data
          var data = [],
            time = (new Date()).getTime(),
            i;

          for (i = -19; i <= 0; i += 1) {
            data.push({
              x: time + i * 5000,
              y: (5010 + (Math.round((Math.random() * 100)) / 100))
            });
          }

          return data;
        }())
      },
    ]
  }

  return (
    <HighchartsReact Highcharts={Highcharts} options={option1} style={{ width: '50%' }} />
  );
}


