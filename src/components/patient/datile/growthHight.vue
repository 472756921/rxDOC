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
        boyHeight:[
          [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78],
          [45.2, 48.7, 52.2, 55.3, 57.9, 59.9, 61.4, 62.7, 63.9, 65.2, 66.4, 67.5, 68.6, 71.2, 73.6, 76, 78.3, 80.5, 82.4, 84.4, 86.3, 87.5, 89.3, 90.9, 92.5, 94, 95.6, 97.1, 98.7, 100.2, 101.6, 103, 104.1, 105.3, 106.5, 107.9],
          [46.9, 50.7, 54.3, 57.5, 60.1, 62.1, 63.7, 65, 66.3, 67.6, 68.9, 70.1, 71.2, 74, 76.6, 79.1, 81.6, 83.9, 85.9, 88, 90, 91.2, 93, 94.6, 96.3, 97.9, 99.5, 101.1, 102.8, 104.4, 105.9, 107.3, 108.6, 109.8, 111.1, 112.6],
          [48.6, 52.7, 56.5, 59.7, 62.3, 64.4, 66, 67.4, 68.7, 70.1, 71.4, 72.7, 73.8, 76.9, 79.6, 82.3, 85.1, 87.5, 89.6, 91.6, 93.7, 94.9, 96.7, 98.5, 100.2, 101.9, 103.6, 105.3, 107, 108.7, 110.2, 111.7, 113.1, 114.4, 115.8, 117.4],
          [52.2, 56.9, 61, 64.3, 66.9, 69.1, 70.8, 72.3, 73.7, 75.2, 76.6, 78, 79.3, 82.8, 85.8, 89, 92.1, 94.8, 97.1, 99.3, 101.4, 102.7, 104.5, 106.4, 108.2, 110, 111.9, 113.8, 115.7, 117.5, 119.2, 120.9, 122.4, 124, 125.6, 127.3],
          [54, 59, 63.3, 66.6, 69.3, 71.5, 73.3, 74.8, 76.3, 77.8, 79.3, 80.8, 82.1, 85.8, 89.1, 92.4, 95.8, 98.6, 101, 103.2, 105.3, 106.7, 108.6, 110.4, 112.3, 114.2, 116.2, 118.2, 120.1, 122, 123.8, 125.6, 127.2, 128.8, 130.5, 132.4],
          [55.8, 61.2, 65.7, 69, 71.7, 73.9, 75.8, 77.4, 78.9, 80.5, 82.1, 83.6, 85, 88.9, 92.4, 95.9, 99.5, 102.5, 105, 107.2, 109.4, 110.7, 112.7, 114.6, 116.5, 118.5, 120.6, 122.6, 124.7, 126.7, 128.6, 130.4, 132.1, 133.8, 135.6, 137.6]
        ],
        girlHeight:[
          [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78],
          [44.7, 47.9, 51.1, 54.2, 56.7, 58.6, 60.1, 61.3, 62.5, 63.7, 64.9, 66.1, 67.2, 70.2, 72.8, 75.1, 77.3, 79.3, 81.4, 83.4, 85.4, 86.6, 88.4, 90.1, 91.7, 93.2, 94.8, 96.4, 97.8, 99.3, 100.7, 102, 103.2, 104.4, 105.5],
          [46.4, 49.8, 53.2, 56.3, 58.8, 60.8, 62.3, 63.6, 64.8, 66.1, 67.3, 68.6, 69.7, 72.9, 75.6, 78.1, 80.5, 82.7, 84.8, 86.9, 88.9, 90.1, 91.9, 93.7, 95.4, 97, 98.7, 100.3, 101.8, 103.4, 104.9, 106.3, 107.6, 108.8, 110.1],
          [48, 51.7, 55.3, 58.4, 61, 62.9, 64.5, 65.9, 67.2, 68.5, 69.8, 71.1, 72.3, 75.6, 78.5, 81.2, 83.8, 86.2, 88.4, 90.5, 92.5, 93.8, 95.6, 97.4, 99.2, 100.9, 102.7, 104.4, 106, 107.6, 109.2, 110.7, 112, 113.4, 114.7],
          [51.4, 55.7, 59.6, 62.8, 65.4, 67.4, 69.1, 70.6, 72.1, 73.6, 75, 76.4, 77.7, 81.4, 84.6, 87.7, 90.7, 93.5, 95.9, 98.1, 100.1, 101.4, 103.3, 105.1, 107, 109, 110.9, 112.8, 114.5, 116.2, 118, 119.7, 121.2, 122.7, 124.3],
          [53.2, 57.8, 61.8, 65.1, 67.7, 69.8, 71.5, 73.1, 74.7, 76.2, 77.7, 79.2, 80.5, 84.3, 87.7, 91.1, 94.3, 97.3, 99.8, 102, 104.1, 105.4, 107.2, 109.2, 111.1, 113.1, 115.2, 117.1, 118.9, 120.7, 122.6, 124.4, 126, 127.6, 129.2],
          [55, 59.9, 64.1, 67.5, 70, 72.1, 74, 75.6, 77.3, 78.9, 80.5, 82, 83.4, 87.4, 91, 94.5, 98, 101.2, 103.8, 106.1, 108.1, 109.4, 111.3, 113.3, 115.3, 117.4, 119.5, 121.6, 123.4, 125.3, 127.2, 129.1, 130.8, 132.5, 134.2]
        ],
        babyData:[],
        msg:"",
      }
    },
    created () {
    },
    mounted () {
      var _this = this;
      this.$ajax.get('/childrenGrowRecord/getAllChildrenGrowRecord', {
        childrenId: 12,
        page:1,
        size:1000,
      }, function (res) {
        var re= res.results;
        var birthDays=_this.$utils.getCurrentBaby().birthday.split("-");
        if(res.results.length!=0){
          var bayEndData=res.results[0];
          if(_this.$utils._null(bayEndData.height)) {
            if (_this.$utils.getCurrentBaby().sex == 1) {//男
              var ag = _this.$utils.countAgeDiff(birthDays.join('-'), bayEndData.measurementTime);
              var agMs = ag[0] * 12 + ag[1];
              var xAxis = _this.boyHeight[0];
              for (var i = 0; i < xAxis.length; i++) {

                if (agMs <= xAxis[i]) {
                  var babyHeight = parseFloat(bayEndData.height);
                  if (babyHeight <= _this.boyHeight[1][i]) {
                    _this.msg = "您的小王子，最近一次（" + bayEndData.measurementTime + "）测量身高为：" + babyHeight + "(cm),标准身高应在" + _this.boyHeight[3][i] + "(cm)到" + _this.boyHeight[4][i] + "(cm)之间,综上所述：身高 " + "超矮。";
                  } else if (babyHeight <= _this.boyHeight[2][i]) {
                    _this.msg = "您的小王子，最近一次（" + bayEndData.measurementTime + "）测量身高为：" + babyHeight + "(cm),标准身高应在" + _this.boyHeight[3][i] + "(cm)到" + _this.boyHeight[4][i] + "(cm)之间,综上所述：身高 " + "矮。";
                  } else if (babyHeight <= _this.boyHeight[3][i]) {
                    _this.msg = "您的小王子，最近一次（" + bayEndData.measurementTime + "）测量身高为：" + babyHeight + "(cm),标准身高应在" + _this.boyHeight[3][i] + "(cm)到" + _this.boyHeight[4][i] + "(cm)之间,综上所述：身高 " + "偏矮。";
                  } else if (babyHeight >= _this.boyHeight[6][i]) {
                    _this.msg = "您的小王子，最近一次（" + bayEndData.measurementTime + "）测量身高为：" + babyHeight + "(cm),标准身高应在" + _this.boyHeight[3][i] + "(cm)到" + _this.boyHeight[4][i] + "(cm)之间,综上所述：身高 " + "超高。";
                  } else if (babyHeight >= _this.boyHeight[5][i]) {
                    _this.msg = "您的小王子，最近一次（" + bayEndData.measurementTime + "）测量身高为：" + babyHeight + "(cm),标准身高应在" + _this.boyHeight[3][i] + "(cm)到" + _this.boyHeight[4][i] + "(cm)之间,综上所述：身高 " + "高。";
                  } else if (babyHeight >= _this.boyHeight[4][i]) {
                    _this.msg = "您的小王子，最近一次（" + bayEndData.measurementTime + "）测量身高为：" + babyHeight + "(cm),标准身高应在" + _this.boyHeight[3][i] + "(cm)到" + _this.boyHeight[4][i] + "(cm)之间,综上所述：身高 " + "偏高。";
                  } else {
                    _this.msg = "您的小王子，最近一次（" + bayEndData.measurementTime + "）测量身高为：" + babyHeight + "(cm),标准身高应在" + _this.boyHeight[3][i] + "(cm)到" + _this.boyHeight[4][i] + "(cm)之间,综上所述：身高 " + "正常。";
                  }
                  break;
                }
              }
            } else {
              var ag = _this.$utils.countAgeDiff(birthDays.join('-'), bayEndData.measurementTime);
              var agMs = ag[0] * 12 + ag[1];
              var xAxis = _this.girlHeight[0];
              for (var i = 0; i < xAxis.length; i++) {
                if (agMs <= xAxis[i]) {
                  var babyHeight = parseFloat(bayEndData.height);
                  if (babyHeight <= _this.girlHeight[1][i]) {
                    _this.msg = "您的小公主，最近一次（" + bayEndData.measurementTime + "）测量身高为：" + babyHeight + "(cm),标准身高应在" + _this.girlHeight[3][i] + "(cm)到" + _this.girlHeight[4][i] + "(cm)之间,综上所述：身高 " + "超矮。";
                  } else if (babyHeight <= _this.girlHeight[2][i]) {
                    _this.msg = "您的小公主，最近一次（" + bayEndData.measurementTime + "）测量身高为：" + babyHeight + "(cm),标准身高应在" + _this.girlHeight[3][i] + "(cm)到" + _this.girlHeight[4][i] + "(cm)之间,综上所述：身高 " + "矮。";
                  } else if (babyHeight <= _this.girlHeight[3][i]) {
                    _this.msg = "您的小公主，最近一次（" + bayEndData.measurementTime + "）测量身高为：" + babyHeight + "(cm),标准身高应在" + _this.girlHeight[3][i] + "(cm)到" + _this.girlHeight[4][i] + "(cm)之间,综上所述：身高 " + "偏矮。";
                  } else if (babyHeight >= _this.girlHeight[6][i]) {
                    _this.msg = "您的小公主，最近一次（" + bayEndData.measurementTime + "）测量身高为：" + babyHeight + "(cm),标准身高应在" + _this.girlHeight[3][i] + "(cm)到" + _this.girlHeight[4][i] + "(cm)之间,综上所述：身高 " + "超高。";
                  } else if (babyHeight >= _this.girlHeight[5][i]) {
                    _this.msg = "您的小公主，最近一次（" + bayEndData.measurementTime + "）测量身高为：" + babyHeight + "(cm),标准身高应在" + _this.girlHeight[3][i] + "(cm)到" + _this.girlHeight[4][i] + "(cm)之间,综上所述：身高 " + "高。";
                  } else if (babyHeight >= _this.girlHeight[4][i]) {
                    _this.msg = "您的小公主，最近一次（" + bayEndData.measurementTime + "）测量身高为：" + babyHeight + "(cm),标准身高应在" + _this.girlHeight[3][i] + "(cm)到" + _this.girlHeight[4][i] + "(cm)之间,综上所述：身高 " + "偏高。";
                  } else {
                    _this.msg = "您的小公主，最近一次（" + bayEndData.measurementTime + "）测量身高为：" + babyHeight + "(cm),标准身高应在" + _this.girlHeight[3][i] + "(cm)到" + _this.girlHeight[4][i] + "(cm)之间,综上所述：身高 " + "正常。";
                  }
                  break;
                }
              }
            }
          }
        }
        for(var i=0;i<re.length;i++){
          _this.babyData.push([re[i].measurementTime,parseFloat(re[i].height)]);
        }

        var data1 = [];
        var data2 = [];
        var data3 = [];
        var data4 = [];
        var data5 = [];
        var data6 = [];

        if(_this.$utils.getCurrentBaby().sex==1){//男
          var xAxis=_this.boyHeight[0];
          for(var i=0;i<xAxis.length;i++){
            var a=new Date(birthDays.join("/"));
            a.setMonth(a.getMonth()+xAxis[i]);
            data1.push([[a.getFullYear(),a.getMonth()+1,a.getDate()].join('-'),_this.boyHeight[1][i]]);
            data2.push([[a.getFullYear(),a.getMonth()+1,a.getDate()].join('-'),_this.boyHeight[2][i]]);
            data3.push([[a.getFullYear(),a.getMonth()+1,a.getDate()].join('-'),_this.boyHeight[3][i]]);
            data4.push([[a.getFullYear(),a.getMonth()+1,a.getDate()].join('-'),_this.boyHeight[4][i]]);
            data5.push([[a.getFullYear(),a.getMonth()+1,a.getDate()].join('-'),_this.boyHeight[5][i]]);
            data6.push([[a.getFullYear(),a.getMonth()+1,a.getDate()].join('-'),_this.boyHeight[6][i]]);
          }
        }else {
          var xAxis=_this.girlHeight[0];
          for(var i=0;i<xAxis.length;i++){
            var a=new Date(birthDays.join("/"));
            a.setMonth(a.getMonth()+xAxis[i]);
            data1.push([[a.getFullYear(),a.getMonth()+1,a.getDate()].join('-'),_this.girlHeight[1][i]]);
            data2.push([[a.getFullYear(),a.getMonth()+1,a.getDate()].join('-'),_this.girlHeight[2][i]]);
            data3.push([[a.getFullYear(),a.getMonth()+1,a.getDate()].join('-'),_this.girlHeight[3][i]]);
            data4.push([[a.getFullYear(),a.getMonth()+1,a.getDate()].join('-'),_this.girlHeight[4][i]]);
            data5.push([[a.getFullYear(),a.getMonth()+1,a.getDate()].join('-'),_this.girlHeight[5][i]]);
            data6.push([[a.getFullYear(),a.getMonth()+1,a.getDate()].join('-'),_this.girlHeight[6][i]]);
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
//              saveAsImage: {
//                type:'jpeg'
//              }
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
              name: '身高(cm)',
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
              name:'宝宝身高',
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
