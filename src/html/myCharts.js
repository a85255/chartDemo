/* eslint-disable */
/**
 * 各种画echarts图表的方法都封装在这里
 */

const install = function(Vue) {
  Object.defineProperties(Vue, {
    $chart: {
      get() {
        return {
          line: function(id, title, xAxis_data, series_data, legend_data, tooltip, dataZoom, bottom) {
            const bot = bottom || '3%'
            const tool = tooltip || {
              trigger: "axis",
              backgroundColor: "rgba(0,0,0,0.4)",
              padding: [5,8,8,5],
              textStyle: {
                fontSize: "12"
              },
              axisPointer: {
                type: "cross",
                label: {
                  backgroundColor: "rgba(0,0,0,0.4)"
                },
                lineStyle: {
                  color: "#e20013"
                }
              }
            }
            this.chart = echarts.init(document.getElementById(id));
            this.chart.clear();
            this.chart.off("click");

            let flowUp = {
              title: {
                text: title,
                x: "left",
                textStyle: {
                  fontSize: 15,
                  fontStyle: "italic"
                }
              },
              tooltip: tool,
              legend: {
                top: "-3",
                icon: "circle",
                itemWidth: 7,
                itemHeight: 7,
                itemGap: 15,
                data: legend_data,
                textStyle: { color: "#999" },
                x: "right",
                formatter: function(name) {
                  if (name.length > 6) {
                    return name.substr(0, 5) + name.slice(-5);
                  } else {
                    return name
                  }
                }
              },
              grid: {
                left: "3%",
                right: "3%",
                bottom: bot,
                top: 30,
                containLabel: true
              },
              dataZoom: dataZoom,
              xAxis: [
                {
                  type: "category",
                  boundaryGap: false,
                  axisLine: {
                    lineStyle: {
                      color: "#808080"
                    }
                  },
                  axisTick: {
                    show: false
                  },
                  data: xAxis_data
                }
              ],
              yAxis: [
                {
                  type: "value",
                  axisLine: {
                    show: false,
                    lineStyle: {
                      color: "#808080"
                    }
                  },
                  axisTick: {
                    show: false
                  }
                }
              ],
              series: series_data
            };

            this.chart.setOption(flowUp);
            return this.chart;
          },
          line_max: function(id, title, xAxis_data, series_data, legend_data) {
            this.chart = echarts.init(document.getElementById(id));
            this.chart.clear();
            this.chart.off("click");

            let flowUp = {
              title: {
                text: title,
                x: "left",
                textStyle: {
                  fontSize: 15,
                  fontStyle: "italic"
                }
              },
              tooltip: {
                trigger: "axis",
                backgroundColor: "rgba(0,0,0,0.4)",
                padding: [5,8,8,5],
                textStyle: {
                  fontSize: "12"
                },
                axisPointer: {
                  type: "cross",
                  label: {
                    backgroundColor: "rgba(0,0,0,0.4)"
                  },
                  lineStyle: {
                    color: "#e20013"
                  }
                }
              },
              legend: {
                top: "-5",
                icon: "circle",
                itemWidth: 7,
                itemHeight: 7,
                itemGap: 15,
                data: legend_data,
                textStyle: { color: "#808080" },
                x: "right",
                formatter: function(name) {
                  return name.substr(0, 5) + name.slice(-5);
                }
              },
              grid: {
                left: "3%",
                right: "2%",
                bottom: "3%",
                top: "30",
                containLabel: true
              },
              xAxis: [
                {
                  type: "category",
                  boundaryGap: false,
                  axisLine: {
                    lineStyle: {
                      color: "#808080"
                    }
                  },
                  axisTick: {
                    show: false
                  },
                  data: xAxis_data
                }
              ],
              yAxis: [
                {
                  type: "value",
                  max: 3000000,
                  axisLine: {
                    show: false,
                    lineStyle: {
                      color: "#808080"
                    }
                  },
                  axisTick: {
                    show: false
                  }
                }
              ],
              series: series_data
            };

            this.chart.setOption(flowUp);
            return this.chart;
          },
          line_liuliang: function(id, title, xAxis_data, series_data, legend_data, unit = 'Mbps') {
            this.chart = echarts.init(document.getElementById(id));
            this.chart.clear();
            this.chart.off("click");

            let flowUp = {
              title: {
                text: title,
                x: "left",
                textStyle: {
                  fontSize: 15,
                  fontStyle: "italic"
                }
              },
              tooltip: {
                trigger: "axis",
                backgroundColor: "rgba(0,0,0,0.4)",
                padding: [5,8,8,5],
                textStyle: {
                  fontSize: "12"
                },
                axisPointer: {
                  type: "cross",
                  label: {
                    backgroundColor: "rgba(0,0,0,0.4)"
                  },
                  lineStyle: {
                    color: "#999"
                  }
                },
                // formatter:"{a0} {a1} {a2}"
                formatter: (params, ticket, callback) => {
                  let params_len = params.length;
                  let str = params[0].name + "<br>";
                  for (let index = 0; index < params_len; index++) {
                    let tmp =
                      params[index].marker +
                      params[index].seriesName +
                      ":" +
                      Math.round(params[index].value, 0) +
                      unit +
                      "<br>";
                    str += tmp;
                  }
                  return str;
                }
              },
              legend: {
                top: "-3",
                icon: "circle",
                itemWidth: 7,
                itemHeight: 7,
                itemGap: 15,
                data: legend_data,
                textStyle: { color: "#808080" },
                x: "right"
              },
              grid: {
                left: "3%",
                right: "2%",
                bottom: "3%",
                top: "30",
                containLabel: true
              },
              xAxis: [
                {
                  type: "category",
                  boundaryGap: false,
                  axisLine: {
                    lineStyle: {
                      color: "#808080"
                    }
                  },
                  axisTick: {
                    show: false
                  },
                  data: xAxis_data
                }
              ],
              yAxis: [
                {
                  type: "value",
                  axisLine: {
                    show: false,
                    lineStyle: {
                      color: "#808080"
                    }
                  },
                  axisTick: {
                    show: false
                  }
                }
              ],
              series: series_data
            };

            this.chart.setOption(flowUp);
            return this.chart;
          },
          bar: function(id, title, series_name, x_data, ser_data, series, tooltip, y_max, xAxis_name, yAxis_name) {
            this.chart = echarts.init(document.getElementById(id));
            this.chart.clear();
            tooltip = tooltip || {
              trigger: "axis",
              axisPointer: {
                // 坐标轴指示器，坐标轴触发有效
                type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
              }
            }
            series = series || [
              {
                name: series_name,
                type: "bar",
                barWidth: "60%",
                data: ser_data,
                label: {
                  normal: {
                    show: true,
                    position: "top"
                  }
                },
                itemStyle: {
                  normal: {
                    color: {
                      x: 1,
                      y: 0,
                      x2: 0,
                      y2: 0,
                      type: "linear",
                      global: false,
                      colorStops: [
                        {
                          offset: 0,
                          color: "#ee7700"
                        },
                        {
                          offset: 1,
                          color: "#e20013"
                        }
                      ]
                    }
                  }
                }
              }
            ]
            const option = {
              // title: {
              //   text: title,
              //   textStyle: {
              //     fontSize: 15,
              //     fontStyle: "italic"
              //   }
              // },
              color: ["#3398DB"],
              tooltip: tooltip,
              grid: {
                left: "3%",
                right: "4%",
                bottom: "3%",
                containLabel: true
              },
              xAxis: [
                {
                  name: xAxis_name,
                  type: "category",
                  data: x_data,
                  splitLine: {
                    show: false
                  },
                  axisTick: {show: false},
                  axisLine: {
                    lineStyle: {
                      color: '#e7e7e7'
                    }
                  },
                  axisLabel: {
                    color: '#999'
                  }
                }
              ],
              yAxis: [
                {
                  name: yAxis_name,
                  type: "value",
                  splitLine: {
                    show: true,
                    lineStyle: {
                      color: '#eee'
                    }
                  },
                  min: 0,
                  max: y_max || null,
                  scale: true,
                  splitArea: {
                    show: true,
                    areaStyle: {
                      color: ['#fafafa', '#fff']
                    }
                  },
                  axisLine: {
                    lineStyle: {
                      color: '#e7e7e7'
                    }
                  },
                  axisLabel: {
                    color: '#999'
                  },
                }
              ],
              series: series
            };
            this.chart.setOption(option);
            return this.chart;
          },
          bar_rect: function (id, y_data, value1, tooltip,  dataZoom, value3 = null, title) {
            this.chart = echarts.init(document.getElementById(id));
            this.chart.clear();
            tooltip = tooltip ||  {
              trigger: 'axis',
              axisPointer: {
                type: 'shadow'
              },
              formatter: '{b} : {c}'
            }
            let max = value3 ? value3[0].value : null
            const option = {
              title: {
                text: title,
                textStyle: {
                  color: '#666',
                  fontSize: 14
                }
              },
              grid: {
                left: '15%',
                right: '5%',
                top: '8%',
                bottom: '8%',
                containLable: true    
              },
              dataZoom: dataZoom,
              tooltip: tooltip,
              xAxis: {
                type: 'value',
                splitLine: {
                  show: true,
                  lineStyle: {
                    color: '#f3f3f3'
                  }
                },
                axisTick: {show: false},
                axisLine: {
                  lineStyle: {
                    color: '#e7e7e7'
                  }
                },
                max: max,
                axisLabel: {
                  color: '#999'
                }
              },
              yAxis: {
                type: 'category',
                axisTick: {show: false},
                axisLine: {
                  lineStyle: {
                    color: '#e7e7e7'
                  }
                },
                axisLabel: {
                  color: '#999'
                },
                data: y_data
              },
              series: [{
                name: '数量',
                type:'pictorialBar',
                symbol: 'rect',
                z: 3,
                barGap: '-100%',
                symbolRepeat: true,
                symbolSize: [2, 9],
                symbolMargin: 1,
                barWidth: 8,
                label: {
                  normal: {
                    show: true,
                    position: 'right',
                    formatter: '{c}'
                  }
                },
                data: value1
              }]
            }
            this.chart.setOption(option);
            return this.chart;
          },
          bar_scroll: function (id, y_data, color, tooltip, value1, value2, show_value2 = true, start_end) {
            let max = 0
            tooltip = tooltip || {
              axisPointer: {
                type: 'shadow'
              },
              trigger: 'axis',
              formatter: '{b1}<br/>数量：{c1}<br/>排名：{b}'
            }
            start_end = start_end || [99, 100]
            this.chart = echarts.init(document.getElementById(id));
            this.chart.clear();
            const option = {
              grid: {
                left: '20%',
                right: '8%',
                top: '8%',
                bottom: '8%',
                containLable: true    
              },
              xAxis: {
                type: 'value',
                splitLine: {
                  show: true,
                  lineStyle: {
                    color: '#f3f3f3'
                  }
                },
                max: show_value2 ? function (value) { return  value.max} : null,
                axisTick: {show: false},
                axisLine: {
                  lineStyle: {
                    color: '#e7e7e7'
                  }
                },
                axisLabel: {
                  color: '#999'
                }
              },
              dataZoom: [{
                id: 'dataZoomY',
                show: true,
                type: 'slider',
                width: 8,
                handleSize: 8,
                cursor: 'pointer',
                start: start_end[0],
                end: start_end[1],
                yAxisIndex: 0,
                fillerColor: color,
                backgroundColor: '#e8e8e8',
                filterColor: '#ff7b01',
                borderColor: '#e8e8e8',
                right: '3%'
              }, {
                type: 'inside',
                yAxisIndex: 0,
                minSpan:1
              }],
              yAxis: {
                type: 'category',
                axisTick: {show: false},
                axisLine: {
                  lineStyle: {
                    color: '#e7e7e7'
                  }
                },
                axisLabel: {
                  color: '#999'
                },
                data: y_data
              },
              tooltip: tooltip,
              series: [
                {
                  name: '数量',
                  type:'bar',
                  barGap: '-100%',
                  barMaxWidth: 20,
                  barCategoryGap: '30%',
                  animation: false,
                  z: 0,
                  data: value2,
                  normal: {
                    show: show_value2
                  }
                },
                {
                  name: '数量',
                  type:'bar',
                  barGap: '-100%',
                  barCategoryGap: '70%',
                  barMaxWidth: 20,
                  z: 2,
                  label: {
                    normal: {
                      show: true,
                      position: 'right',
                      formatter: '{c}'
                    }
                  },
                  data: value1
                }
            ]
            }
            this.chart.setOption(option);
            return this.chart;
          },
          bar_datazomm: function(id, title, series_name, x_data, ser_data) {
            this.chart = echarts.init(document.getElementById(id));
            this.chart.clear();
            const option = {
              title: {
                text: title,
                textStyle: {
                  fontSize: 15,
                  fontStyle: "italic"
                }
              },
              color: ["#3398DB"],
              dataZoom: {
                show: true,
                realtime: true,
                bottom: -5,
                start: 0,
                end: 15
              },
              tooltip: {
                trigger: "axis",
                axisPointer: {
                  // 坐标轴指示器，坐标轴触发有效
                  type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
                }
              },
              xAxis: [
                {
                  type: "category",
                  data: x_data,
                  axisTick: {
                    alignWithLabel: true
                  },
                  axisLabel: {
                    //底部文字倾斜
                    interval: 0,
                    rotate: -35
                  }
                }
              ],
              grid: {
                // 控制图的大小，调整下面这些值就可以，
                x: 40,
                x2: 100,
                y2: 200 // y2可以控制 X轴跟Zoom控件之间的间隔，避免以为倾斜后造成 label重叠到zoom上
              },

              yAxis: [
                {
                  type: "value"
                }
              ],
              series: [
                {
                  name: series_name,
                  type: "bar",
                  barWidth: "60%",
                  data: ser_data,
                  label: {
                    normal: {
                      show: true,
                      position: "top"
                    }
                  },
                  itemStyle: {
                    normal: {
                      color: {
                        x: 1,
                        y: 0,
                        x2: 0,
                        y2: 0,
                        type: "linear",
                        global: false,
                        colorStops: [
                          {
                            offset: 0,
                            color: "#ee7700"
                          },
                          {
                            offset: 1,
                            color: "#e20013"
                          }
                        ]
                      }
                    }
                  }
                }
              ]
            };
            this.chart.setOption(option);
            return this.chart;
          },
          pie: function(id, title, subtext, legend_data, series_data) {
            let fontsize = 20;
            if (title.length > 4) {
              fontsize = 16;
            }

            this.chart = echarts.init(document.getElementById(id));
            this.chart.clear();

            let apModel = {
              title: {
                text: title,
                subtext: subtext,
                x: "center",
                y: "45%",
                textStyle: {
                  color: "#e20013",
                  fontSize: fontsize,
                  fontWeight: "normal",
                  align: "center"
                },
                subtextStyle: {
                  color: "#808080",
                  fontSize: 14
                }
              },
              legend: {
                // top: '-5',
                icon: "circle",
                itemWidth: 7,
                itemHeight: 7,
                itemGap: 15,
                data: legend_data,
                textStyle: { color: "#808080" },
                orient: "horizontal",
                x: 'right',
                y: "bottom"
              },
              tooltip: {
                trigger: "item",
                formatter: "{b} : {c} ({d}%)"
              },

              color: [
                "#fd1313",
                "#38bafc",
                "#ff4b4b",
                "#fc9e2f",
                "#ffed75",
                "#5fe35c",
                "#14ba4b",
                "#07c2ff",
                "#3a76ff",
                "#7431fd",
                "#b76aff",
                "#ff67b9",
                "#ee7700",
                "#7465fe",
                "#f7ee55",
                "#358b46",
                "#613087",
                "#39628d",
                "#1a1a1a"
              ],
              series: [
                {
                  type: "pie",
                  radius: ["60%", "70%"],
                  emphasis: {
                    itemStyle: {
                      opacity: 1,
                      shadowColor: "rgba(0, 0, 0, 0.1)",
                      shadowBlur: 10
                    }
                  },
                  labelLine: {
                    length: 8,
                    length2: 5
                    // smooth: true,
                  },
                  label: {
                    normal: {
                      show: false
                    },
                    emphasis: {
                      show: true
                    }
                  },
                  lableLine: {
                    normal: {
                      show: false
                    },
                    emphasis: {
                      show: true
                    }
                  },
                  data: series_data
                }
              ]
            };

            const option = {
              title: {
                text: title,
                subtext: subtext,
                x: "center",
                y: "center",
                textStyle: {
                  fontSize: 15,
                  fontStyle: "italic"
                }
              },
              color: ["#ff3300", "#3398DB"],
              tooltip: {
                trigger: "item",
                formatter: "{a} <br/>{b} : {c} ({d}%)"
              },
              legend: {
                orient: "vertical",
                left: "left",
                data: legend_data
              },
              series: [
                {
                  name: title,
                  type: "pie",
                  radius: "50%",
                  center: ["50%", "60%"],
                  data: series_data,
                  label: {
                    normal: {
                      show: true,
                      formatter: "{b} \n {c} ({d}%)",
                      backgroundColor: "#eee",
                      borderColor: "#aaa",
                      borderWidth: 1,
                      borderRadius: 4
                    }
                  }
                }
              ]
            };
            this.chart.setOption(apModel);
          },
          pie_liuliang: function(id, title, subtext, legend_data, series_data) {
            let fontsize = 20;
            if (title.length > 4) {
              fontsize = 16;
            }

            this.chart = echarts.init(document.getElementById(id));
            this.chart.clear();

            let apModel = {
              title: {
                text: title,
                subtext: subtext,
                x: "center",
                y: "45%",
                textStyle: {
                  color: "#333",
                  fontSize: fontsize,
                  fontWeight: "normal",
                  align: "center"
                },
                subtextStyle: {
                  color: "#666",
                  fontSize: 14
                }
              },
              legend: {
                // top: '-5',
                icon: "circle",
                itemWidth: 7,
                itemHeight: 7,
                itemGap: 15,
                data: legend_data,
                textStyle: { color: ["#5b82fc", "#ff4f11"] },
                orient: "horizontal",
                y: "bottom"
              },
              tooltip: {
                trigger: "item",
                formatter: "{b} : {c}Mbps ({d}%)"
              },

              color: [
                "#5b82fc",
                "#ff4f11",
                "#ff4b4b",
                "#fc9e2f",
                "#ffed75",
                "#5fe35c",
                "#14ba4b",
                "#07c2ff",
                "#3a76ff",
                "#7431fd",
                "#b76aff",
                "#ff67b9",
                "#e20013",
                "#3398DB",
                "#ee7700",
                "#7465fe",
                "#f7ee55",
                "#358b46",
                "#613087",
                "#39628d",
                "#1a1a1a"
              ],
              series: [
                {
                  type: "pie",
                  radius: ["60%", "70%"],
                  labelLine: {
                    length: 8,
                    length2: 5
                    // smooth: true,
                  },
                  label: {
                    normal: {
                      show: false
                    },
                    emphasis: {
                      show: true
                    }
                  },
                  lableLine: {
                    normal: {
                      show: false
                    },
                    emphasis: {
                      show: true
                    }
                  },
                  data: series_data
                }
              ]
            };

            const option = {
              title: {
                text: title,
                subtext: subtext,
                x: "center",
                textStyle: {
                  fontSize: 15,
                  fontStyle: "italic"
                }
              },
              color: ["#ff3300", "#3398DB"],
              tooltip: {
                trigger: "item",
                formatter: "{a} <br/>{b} : {c} ({d}%)"
              },
              legend: {
                orient: "vertical",
                left: "left",
                data: legend_data
              },
              series: [
                {
                  name: title,
                  type: "pie",
                  radius: "50%",
                  center: ["50%", "60%"],
                  data: series_data,
                  label: {
                    normal: {
                      show: true,
                      formatter: "{b} \n {c} ({d}%)",
                      backgroundColor: "#eee",
                      borderColor: "#aaa",
                      borderWidth: 1,
                      borderRadius: 4
                    }
                  }
                }
              ]
            };
            this.chart.setOption(apModel);
          },
          pie_liuliang2: function(id, title, subtext, legend_data, series_data) {
            
            this.chart = echarts.init(document.getElementById(id));
            this.chart.clear();

            let apModel = {
              title: {
                text: title,
                subtext: subtext,
                x: "center",
                y: "35%",
                textStyle: {
                  color: "#000",
                  fontSize: 20,
                  fontWeight: "600",
                  align: "center"
                },
                subtextStyle: {
                  color: "#000",
                  fontSize: 12
                }
              },
              tooltip: {
                trigger: "item",
                formatter: "{b} : {c}Mbps ({d}%)"
              },
              color: [
                "#ff4f11",
                "#5b82fc",
                "#ff4b4b",
                "#fc9e2f",
                "#ffed75",
                "#5fe35c",
                "#14ba4b",
                "#07c2ff",
                "#3a76ff",
                "#7431fd",
                "#b76aff",
                "#ff67b9",
                "#e20013",
                "#3398DB",
                "#ee7700",
                "#7465fe",
                "#f7ee55",
                "#358b46",
                "#613087",
                "#39628d",
                "#1a1a1a"
              ],
              series: [
                {
                  type: "pie",
                  radius: ["58%", "75%"],
                  itemStyle: {
                    borderColor: '#fff',
                    borderWidth: 2
                  },
                  labelLine: {
                    length: 8,
                    length2: 5
                    // smooth: true,
                  },
                  label: {
                    normal: {
                      show: false
                    },
                    emphasis: {
                      show: true
                    }
                  },
                  lableLine: {
                    normal: {
                      show: false
                    },
                    emphasis: {
                      show: true
                    }
                  },
                  data: series_data
                }
              ]
            };

            const option = {
              title: {
                text: title,
                subtext: subtext,
                x: "center",
                textStyle: {
                  fontSize: 15,
                  fontStyle: "italic"
                }
              },
              color: ["#ff3300", "#3398DB"],
              tooltip: {
                trigger: "item",
                formatter: "{a} <br/>{b} : {c} ({d}%)"
              },
              legend: {
                orient: "vertical",
                left: "left",
                data: legend_data
              },
              series: [
                {
                  name: title,
                  type: "pie",
                  radius: "50%",
                  center: ["50%", "60%"],
                  data: series_data,
                  label: {
                    normal: {
                      show: true,
                      formatter: "{b} \n {c} ({d}%)",
                      backgroundColor: "#eee",
                      borderColor: "#aaa",
                      borderWidth: 1,
                      borderRadius: 4
                    }
                  }
                }
              ]
            };
            this.chart.setOption(apModel);
          },
          huan: function(id, title, subtext, legend_data, series_data, legend) {
            this.chart = echarts.init(document.getElementById(id));
            this.chart.clear();

            let apModel = {
              title: {
                text: title,
                subtext: subtext,
                x: "center",
                y: "28%",
                textStyle: {
                  color: "#000",
                  fontSize: 20,
                  fontWeight: "bold",
                  align: "center"
                },
                subtextStyle: {
                  color: "#000",
                  fontSize: 12
                }
              },
              legend: legend,
              tooltip: {
                trigger: "item"
              },
              color: [
                "#ff4b4b",
                "#fc9e2f",
                "#ffed75",
                "#5fe35c",
                "#14ba4b",
                "#07c2ff",
                "#3a76ff",
                "#7431fd",
                "#b76aff",
                "#ff67b9",
                "#e20013",
                "#3398DB",
                "#ee7700",
                "#7465fe",
                "#f7ee55",
                "#358b46",
                "#613087",
                "#39628d",
                "#1a1a1a"
              ],
              series: [
                {
                  type: "pie",
                  radius: ["45%", "60%"],
                  center: ['50%', '40%'],
                  label: {
                    normal: {
                      position: 'center',
                      show: false,
                      padding: [35, 0, 0, 0]
                    },
                    emphasis: {
                      show: true
                    }
                  },
                  lableLine: {
                    normal: {
                      show: false
                    },
                    emphasis: {
                      show: true
                    }
                  },
                  data: series_data
                }
              ]
            };

            this.chart.setOption(apModel);
          }
        };
      }
    }
  });
};

