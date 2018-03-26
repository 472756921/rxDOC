<template>
  <div>
    <div id="main" style="height:400px;width: 100%;"></div>
    <div style="text-align: center;color: #fc8c84;padding: 10px 15px;">{{msg}}</div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        boyWight:[
          [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81],
          [2.26, 3.09, 3.94, 4.69, 5.25, 5.66, 5.97, 6.24, 6.46, 6.67, 6.86, 7.04, 7.21, 7.68, 8.13, 8.61, 9.06, 9.47, 9.86, 10.24, 10.61, 10.97, 11.31, 11.66, 12.01, 12.37, 12.74, 13.12, 13.5, 13.86, 14.18, 14.48, 14.74, 15.01, 15.3, 15.66],
          [2.58, 3.52, 4.47, 5.29, 5.91, 6.36, 6.7, 6.99, 7.23, 7.46, 7.67, 7.87, 8.06, 8.57, 9.07, 9.59, 10.09, 10.54, 10.97, 11.39, 11.79, 12.19, 12.57, 12.96, 13.35, 13.76, 14.18, 14.61, 15.06, 15.48, 15.87, 16.24, 16.56, 16.9, 17.27, 17.73],
          [2.93, 3.99, 5.05, 5.97, 6.64, 7.14, 7.51, 7.83, 8.09, 8.35, 8.58, 8.8, 9, 9.57, 10.12, 10.69, 11.24, 11.75, 12.22, 12.68, 13.13, 13.57, 14, 14.44, 14.88, 15.35, 15.84, 16.34, 16.87, 17.38, 17.85, 18.31, 18.71, 19.14, 19.62, 20.22],
          [3.73, 5.07, 6.38, 7.51, 8.34, 8.95, 9.41, 9.79, 10.11, 10.42, 10.71, 10.98, 11.23, 11.93, 12.61, 13.33, 14.01, 14.64, 15.24, 15.82, 16.39, 16.95, 17.5, 18.07, 18.67, 19.3, 19.98, 20.69, 21.46, 22.21, 22.94, 23.66, 24.32, 25.06, 25.89, 26.95],
          [4.18, 5.67, 7.14, 8.4, 9.32, 9.99, 10.5, 10.93, 11.29, 11.64, 11.95, 12.26, 12.54, 13.32, 14.09, 14.9, 15.67, 16.38, 17.06, 17.72, 18.37, 19.02, 19.65, 20.32, 21.01, 21.76, 22.57, 23.43, 24.38, 25.32, 26.24, 27.17, 28.03, 29.01, 30.13, 31.56],
          [4.66, 6.33, 7.97, 9.37, 10.39, 11.15, 11.72, 12.2, 12.6, 12.99, 13.34, 13.68, 14, 14.88, 15.75, 16.66, 17.54, 18.36, 19.13, 19.89, 20.64, 21.39, 22.13, 22.91, 23.73, 24.63, 25.61, 26.68, 27.85, 29.04, 30.22, 31.43, 32.57, 33.89, 35.41, 37.39]
        ],
        girlWight:[
          [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81],
          [2.26, 2.98, 3.72, 4.4, 4.93, 5.33, 5.64, 5.9, 6.13, 6.34, 6.53, 6.71, 6.87, 7.34, 7.79, 8.26, 8.7, 9.1, 9.48, 9.86, 10.23, 10.6, 10.95, 11.29, 11.62, 11.96, 12.3, 12.62, 12.93, 13.23, 13.54, 13.84, 14.11, 14.38, 14.66, 14.96],
          [2.54, 3.33, 4.15, 4.9, 5.48, 5.92, 6.26, 6.55, 6.79, 7.03, 7.23, 7.43, 7.61, 8.12, 8.63, 9.15, 9.64, 10.09, 10.52, 10.94, 11.36, 11.77, 12.16, 12.55, 12.93, 13.32, 13.71, 14.08, 14.44, 14.8, 15.18, 15.54, 15.87, 16.21, 16.55, 16.92],
          [2.85, 3.74, 4.65, 5.47, 6.11, 6.59, 6.96, 7.28, 7.55, 7.81, 8.03, 8.25, 8.45, 9.01, 9.57, 10.15, 10.7, 11.21, 11.7, 12.18, 12.65, 13.11, 13.55, 14, 14.44, 14.88, 15.33, 15.78, 16.2, 16.64, 17.09, 17.53, 17.94, 18.35, 18.78, 19.25],
          [3.63, 4.74, 5.86, 6.87, 7.65, 8.23, 8.68, 9.06, 9.39, 9.7, 9.98, 10.24, 10.48, 11.18, 11.88, 12.61, 13.31, 13.97, 14.6, 15.22, 15.83, 16.43, 17.01, 17.6, 18.19, 18.79, 19.42, 20.05, 20.66, 21.3, 21.98, 22.65, 23.27, 23.92, 24.61, 25.37],
          [4.1, 5.35, 6.6, 7.73, 8.59, 9.23, 9.73, 10.15, 10.51, 10.86, 11.16, 11.46, 11.73, 12.5, 13.29, 14.12, 14.92, 15.67, 16.39, 17.11, 17.81, 18.5, 19.17, 19.85, 20.54, 21.25, 22, 22.75, 23.5, 24.28, 25.12, 25.96, 26.74, 27.57, 28.46, 29.42],
          [4.65, 6.05, 7.46, 8.71, 9.66, 10.38, 10.93, 11.4, 11.8, 12.18, 12.52, 12.85, 13.15, 14.02, 14.9, 15.85, 16.77, 17.63, 18.47, 19.29, 20.1, 20.9, 21.69, 22.49, 23.3, 24.14, 25.04, 25.96, 26.87, 27.84, 28.89, 29.95, 30.94, 32, 33.14, 34.4]
        ],
        babyData:[],
        msg:"",
      }
    },
    created () {
    },
    mounted () {
      var _this = this;
      this.$api.get('/childrenGrowRecord/getAllChildrenGrowRecord', {
        childrenId:_this.$utils.getCurrentBaby().id,
        page:1,
        size:1000,
      }, function (res) {
        var re= res.results;
        var birthDays=_this.$utils.getCurrentBaby().birthday.split("-");
        if(res.results.length!=0){
          var bayEndData=res.results[0];
          if(_this.$utils._null(bayEndData.weight)) {
            if (_this.$utils.getCurrentBaby().sex == 1) {//男
              var ag = _this.$utils.countAgeDiff(birthDays.join('-'), bayEndData.measurementTime);
              var agMs = ag[0] * 12 + ag[1];
              var xAxis = _this.boyWight[0];
              for (var i = 0; i < xAxis.length; i++) {
                if (agMs <= xAxis[i]) {
                  var babyHeight = parseFloat(bayEndData.weight);

                  if (babyHeight <= _this.boyWight[1][i]) {
                    _this.msg = "您的小王子，最近一次（" + bayEndData.measurementTime + "）测量体重为：" + babyHeight + "(kg),标准体重应在" + _this.boyWight[3][i] + "(kg)到" + _this.boyWight[4][i] + "(kg)之间,综上所述：体重 " + "超瘦。";
                  } else if (babyHeight <= _this.boyWight[2][i]) {
                    _this.msg = "您的小王子，最近一次（" + bayEndData.measurementTime + "）测量体重为：" + babyHeight + "(kg),标准体重应在" + _this.boyWight[3][i] + "(kg)到" + _this.boyWight[4][i] + "(kg)之间,综上所述：体重 " + "瘦。";
                  } else if (babyHeight <= _this.boyWight[3][i]) {
                    _this.msg = "您的小王子，最近一次（" + bayEndData.measurementTime + "）测量体重为：" + babyHeight + "(kg),标准体重应在" + _this.boyWight[3][i] + "(kg)到" + _this.boyWight[4][i] + "(kg)之间,综上所述：体重 " + "偏瘦。";
                  } else if (babyHeight >= _this.boyWight[6][i]) {
                    _this.msg = "您的小王子，最近一次（" + bayEndData.measurementTime + "）测量体重为：" + babyHeight + "(kg),标准体重应在" + _this.boyWight[3][i] + "(kg)到" + _this.boyWight[4][i] + "(kg)之间,综上所述：体重 " + "超胖。";
                  } else if (babyHeight >= _this.boyWight[5][i]) {
                    _this.msg = "您的小王子，最近一次（" + bayEndData.measurementTime + "）测量体重为：" + babyHeight + "(kg),标准体重应在" + _this.boyWight[3][i] + "(kg)到" + _this.boyWight[4][i] + "(kg)之间,综上所述：体重 " + "胖。";
                  } else if (babyHeight >= _this.boyWight[4][i]) {
                    _this.msg = "您的小王子，最近一次（" + bayEndData.measurementTime + "）测量体重为：" + babyHeight + "(kg),标准体重应在" + _this.boyWight[3][i] + "(kg)到" + _this.boyWight[4][i] + "(kg)之间,综上所述：体重 " + "偏胖。";
                  } else {
                    _this.msg = "您的小王子，最近一次（" + bayEndData.measurementTime + "）测量体重为：" + babyHeight + "(kg),标准体重应在" + _this.boyWight[3][i] + "(kg)到" + _this.boyWight[4][i] + "(kg)之间,综上所述：体重 " + "正常。";
                  }
                  break;
                }
              }
            } else {
              var ag = _this.$utils.countAgeDiff(birthDays.join('-'), bayEndData.measurementTime);
              var agMs = ag[0] * 12 + ag[1];
//              console.log(ag);

              var xAxis = _this.girlWight[0];
              for (var i = 0; i < xAxis.length; i++) {

                if (agMs <= xAxis[i]) {
                  var babyHeight = parseFloat(bayEndData.weight);

                  if (babyHeight <= _this.girlWight[1][i]) {
                    _this.msg = "您的小公主，最近一次（" + bayEndData.measurementTime + "）测量体重为：" + babyHeight + "(kg),标准体重应在" + _this.girlWight[3][i] + "(kg)到" + _this.girlWight[4][i] + "(kg)之间,综上所述：体重 " + "超瘦。";
                  } else if (babyHeight <= _this.girlWight[2][i]) {
                    _this.msg = "您的小公主，最近一次（" + bayEndData.measurementTime + "）测量体重为：" + babyHeight + "(kg),标准体重应在" + _this.girlWight[3][i] + "(kg)到" + _this.girlWight[4][i] + "(kg)之间,综上所述：体重 " + "瘦。";
                  } else if (babyHeight <= _this.girlWight[3][i]) {
                    _this.msg = "您的小公主，最近一次（" + bayEndData.measurementTime + "）测量体重为：" + babyHeight + "(kg),标准体重应在" + _this.girlWight[3][i] + "(kg)到" + _this.girlWight[4][i] + "(kg)之间,综上所述：体重 " + "偏瘦。";
                  } else if (babyHeight >= _this.girlWight[6][i]) {
                    _this.msg = "您的小公主，最近一次（" + bayEndData.measurementTime + "）测量体重为：" + babyHeight + "(kg),标准体重应在" + _this.girlWight[3][i] + "(kg)到" + _this.girlWight[4][i] + "(kg)之间,综上所述：体重 " + "超胖。";
                  } else if (babyHeight >= _this.girlWight[5][i]) {
                    _this.msg = "您的小公主，最近一次（" + bayEndData.measurementTime + "）测量体重为：" + babyHeight + "(kg),标准体重应在" + _this.girlWight[3][i] + "(kg)到" + _this.girlWight[4][i] + "(kg)之间,综上所述：体重 " + "胖。";
                  } else if (babyHeight >= _this.girlWight[4][i]) {
                    _this.msg = "您的小公主，最近一次（" + bayEndData.measurementTime + "）测量体重为：" + babyHeight + "(kg),标准体重应在" + _this.girlWight[3][i] + "(kg)到" + _this.girlWight[4][i] + "(kg)之间,综上所述：体重 " + "偏胖。";
                  } else {
                    _this.msg = "您的小公主，最近一次（" + bayEndData.measurementTime + "）测量体重为：" + babyHeight + "(kg),标准体重应在" + _this.girlWight[3][i] + "(kg)到" + _this.girlWight[4][i] + "(kg)之间,综上所述：体重 " + "正常。";
                  }
                  break;
                }
              }
            }
          }
        }
        for(var i=0;i<re.length;i++){
          _this.babyData.push([re[i].measurementTime,parseFloat(re[i].weight)]);
        }

        var data1 = [];
        var data2 = [];
        var data3 = [];
        var data4 = [];
        var data5 = [];
        var data6 = [];

        if(_this.$utils.getCurrentBaby().sex==1){//男
          var xAxis=_this.boyWight[0];
          for(var i=0;i<xAxis.length;i++){
            var a=new Date(birthDays.join("/"));
            a.setMonth(a.getMonth()+xAxis[i]);
            data1.push([[a.getFullYear(),a.getMonth()+1,a.getDate()].join('-'),_this.boyWight[1][i]]);
            data2.push([[a.getFullYear(),a.getMonth()+1,a.getDate()].join('-'),_this.boyWight[2][i]]);
            data3.push([[a.getFullYear(),a.getMonth()+1,a.getDate()].join('-'),_this.boyWight[3][i]]);
            data4.push([[a.getFullYear(),a.getMonth()+1,a.getDate()].join('-'),_this.boyWight[4][i]]);
            data5.push([[a.getFullYear(),a.getMonth()+1,a.getDate()].join('-'),_this.boyWight[5][i]]);
            data6.push([[a.getFullYear(),a.getMonth()+1,a.getDate()].join('-'),_this.boyWight[6][i]]);
          }
        }else {
          var xAxis=_this.girlWight[0];
          for(var i=0;i<xAxis.length;i++){
            var a=new Date(birthDays.join("/"));
            a.setMonth(a.getMonth()+xAxis[i]);
            data1.push([[a.getFullYear(),a.getMonth()+1,a.getDate()].join('-'),_this.girlWight[1][i]]);
            data2.push([[a.getFullYear(),a.getMonth()+1,a.getDate()].join('-'),_this.girlWight[2][i]]);
            data3.push([[a.getFullYear(),a.getMonth()+1,a.getDate()].join('-'),_this.girlWight[3][i]]);
            data4.push([[a.getFullYear(),a.getMonth()+1,a.getDate()].join('-'),_this.girlWight[4][i]]);
            data5.push([[a.getFullYear(),a.getMonth()+1,a.getDate()].join('-'),_this.girlWight[5][i]]);
            data6.push([[a.getFullYear(),a.getMonth()+1,a.getDate()].join('-'),_this.girlWight[6][i]]);
          }
        }

        // 引入 ECharts 主模块
        var echarts = require('echarts/lib/echarts');
        // 引入柱状图
        require('echarts/lib/chart/line');
        // 引入提示框和标题组件
        require('echarts/lib/component/tooltip');
        require('echarts/lib/component/title');
        require("echarts/lib/component/dataZoom");
        require("echarts/lib/component/legend");
        require("echarts/lib/component/toolbox");
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));
        // 绘制图表
        var  option = {
          grid: {
            bottom: 80
          },
//          toolbox: {
//            right:'30px',
//            top:'10px',
//            feature: {
//              saveAsImage: {}
//            }
//          },
          tooltip : {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              animation: false,
              label: {
                backgroundColor: '#505765'
              }
            }
          },
          legend: {
            left: '60px',
            top:'15px',
            textStyle: {
              fontSize: 12,
            }
          },
          dataZoom: [
            {
              show: true,
              realtime: true,
              start: 0,
              end: 100,
              handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
              handleSize: '80%',
              handleStyle: {
                color: '#fff',
                shadowBlur: 3,
                shadowColor: 'rgba(0, 0, 0, 0.6)',
                shadowOffsetX: 2,
                shadowOffsetY: 2
              }
            },
            {
              type: 'inside',
              realtime: true,
              start: 0,
              end: 100
            }
          ],
          xAxis: {
            type:'time',
            name:"年龄",
            boundaryGap : false,
            axisLabel: {
              formatter: function (value, index) {
                var a =new Date(value);
                var b=new Date(birthDays.join("/"));
                var c = a - b;
                c = new Date(c);
                var d=c.getFullYear() - 1970;
                if(d==0){
                  d="";
                }else {
                  d= (c.getFullYear() - 1970)+"岁\n"
                }
                var e=c.getMonth();
                if(e==0){
                  e="";
                }else {
                  e=c.getMonth()+"个月";
                }
                return d+e;
              }
            }
          },
          yAxis: [
            {
              name: '体重(kg)',
              type: 'value',
            }
          ],
          series: [
            {
              name:'-3sd',
              type:'line',
              symbol: 'none',
              itemStyle:{color:'rgba(0, 214, 178, 0.2)'},
              animation: false,
              areaStyle:{
                origin:'start'
              },
              lineStyle: {
                normal: {
                  width: 1
                }
              },
              data:data1
            },
            {
              name:'-2sd',
              type:'line',
              symbol: 'none',
              itemStyle:{color:'rgba(0, 214, 178, 0.2)'},
              animation: false,
              areaStyle:{
                origin:'start'
              },
              lineStyle: {
                normal: {
                  width: 1
                }
              },
              data:data2
            },
            {
              name:'-1sd',
              type:'line',
              symbol: 'none',
              itemStyle:{color:'rgba(0, 214, 178, 0.2)'},
              animation: false,
              areaStyle:{
                origin:'start'
              },
              lineStyle: {
                normal: {
                  width: 1
                }
              },
              data:data3
            },
            {
              name:'+1sd',
              type:'line',
              symbol: 'none',
              itemStyle:{color:'rgba(0, 214, 178, 0.2)'},
              animation: false,
              areaStyle:{
                origin:'end'
              },
              lineStyle: {
                normal: {
                  width: 1
                }
              },
              data:data4
            },
            {
              name:'+2sd',
              type:'line',
              symbol: 'none',
              itemStyle:{color:'rgba(0, 214, 178, 0.2)'},
              animation: false,
              areaStyle:{
                origin:'end'
              },
              lineStyle: {
                normal: {
                  width: 1
                }
              },
              data:data5
            },
            {
              name:'+3sd',
              type:'line',
              symbol: 'none',
              itemStyle:{color:'rgba(0, 214, 178, 0.2)'},
              animation: false,
              areaStyle:{
                origin:'end'
              },
              lineStyle: {
                normal: {
                  width: 1
                }
              },
              data:data6
            },
            {
              name:'宝宝体重',
              type:'line',
              symbol: 'circle',
              itemStyle:{color:'rgba(0, 214, 178, 1)'},
              animation: false,
              lineStyle: {
                normal: {
                  width: 1
                }
              },
              data:_this.babyData
            }
          ]
        };
        myChart.setOption(option);
      });

    },
    methods: {
    }
  }
</script>
<style>
</style>
