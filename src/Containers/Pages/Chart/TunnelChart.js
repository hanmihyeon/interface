import React from 'react';
import ReactApexChart from 'react-apexcharts';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

/*colors: ['#F9120F', '#F25A16', '#FEFF37', '#51B241', '#2F92D2'],
colors: ['#D63249','#E16929','#E0B74E','#39A048','#32A4D7'],
colors: ['#9e3953', '#dd713e', '#9e8439', '#529e39', '#39539e'],*/

export const FBG = () => {
  const option1 = {
      chart: {
          // zoomType: 'xy',
          type: 'column',
          backgroundColor: 'none',
          height: 160,
          animation: Highcharts.svg, // don't animate in old IE
          events: {
              load: null
          }
      },

      time: {
          useUTC: false
      },

      title: {
          text: 'FBG 센서 데이터',
          style: {
              fontSize: '14px',
              color: '#fff'
          }
      },

      plotOptions: {
          series: {
              marker: {
                  enabled: false
              },
          },
          column: {
            pointPadding: 0.2,
            borderWidth: 0
          }
      },

      legend: {
          align: 'right',
          verticalAlign: 'top',
          floating: true,
          x: -42,
          y: -6,
          enabled: true,
          itemStyle: {
              color: '#fff',
              fontWeight: '400'
          }
      },

      xAxis: {
          categories: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'],
          crosshair: true
      },

      yAxis: [{
          labels: {
              format: '{value}°C',
              style: {
                  color: '#fff',
              }
          },
          title: {
              text: '온도',
              align:'high',
              offset: 19,
              rotation: 0,
              y: -20,
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
              text: '음향',
              align:'high',
              offset: 18,
              rotation: 0,
              y: -20,
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
              yAxis: 0,
              color: '#51b241',
              tooltip: {
                  valueSuffix: ' °C',
              },
              data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4, 95.6, 54.4]
          },
          {
              name: '음향',
              yAxis: 1,
              tooltip: {
                  valueSuffix: ' dB',
              },
              data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4, 95.6, 54.4]
          },
      ]
  }

  return (
      <HighchartsReact Highcharts={Highcharts} options={option1} />
  );
}


export class TodayStatus extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [1,2,3,4,5],
      options: {
        chart: {
          width: 380,
          type: 'donut',
        },
        labels: ['화재', '사고', '정체', '원활', '기타'],
        colors: ['#5f0000', '#d26b0b', '#e8ea00', '#005f00', '#206794'],
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
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }],
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
        legend: {
          position: 'bottom'
        },
        stroke: {
          width: 0
        },
      },
    };
  }
  render() {
    return (
      <div id="chart" style={{ margin: '5px 0 0 -17px' }}>
        <ReactApexChart options={this.state.options} series={this.state.series} type="donut" />
      </div>);
  }
}



export class TunnelRadial1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [25],
      options: {
        chart: {
          height: 350,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: '65%',
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
      <div id="chart" style={{marginTop: '15%'}}>
        <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={230} />
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
              size: '65%',
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
      <div id="chart" style={{marginTop: '15%'}}>
        <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={230} />
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
      height: 290,
      animation: Highcharts.svg, // don't animate in old IE
      events: {
        load: null
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