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
        boyHead:[
          [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15, 18, 21, 24, 27, 30, 33, 36, 42, 48, 54, 60, 66, 72],
          [30.9, 33.3, 35.2, 36.7, 38, 39, 39.8, 40.4, 41, 41.5, 41.9, 42.3, 42.6, 43.2, 43.7, 44.2, 44.6, 45, 45.3, 45.5, 45.7, 46.2, 46.5, 46.9, 47.2, 47.5, 47.8],
          [32.1, 34.5, 36.4, 37.9, 39.2, 40.2, 41, 41.7, 42.2, 42.7, 43.1, 43.5, 43.8, 44.5, 45, 45.5, 45.9, 46.2, 46.5, 46.8, 47, 47.4, 47.8, 48.1, 48.4, 48.7, 49],
          [33.3, 35.7, 37.6, 39.2, 40.4, 41.5, 42.3, 42.9, 43.5, 44, 44.4, 44.8, 45.1, 45.7, 46.3, 46.7, 47.1, 47.5, 47.8, 48, 48.3, 48.7, 49, 49.4, 49.7, 50, 50.2],
          [35.7, 38.2, 40.2, 41.8, 43.1, 44.1, 44.9, 45.5, 46.1, 46.6, 47, 47.4, 47.7, 48.4, 48.9, 49.4, 49.8, 50.1, 50.4, 50.6, 50.9, 51.3, 51.6, 51.9, 52.2, 52.5, 52.8],
          [36.8, 39.4, 41.5, 43.2, 44.5, 45.5, 46.3, 46.9, 47.5, 48, 48.4, 48.8, 49.1, 49.7, 50.2, 50.7, 51.1, 51.4, 51.7, 52, 52.2, 52.6, 52.9, 53.2, 53.6, 53.8, 54.1],
          [37.9, 40.7, 42.9, 44.6, 45.9, 46.9, 47.7, 48.4, 48.9, 49.4, 49.8, 50.2, 50.5, 51.1, 51.6, 52.1, 52.5, 52.8, 53.1, 53.3, 53.5, 53.9, 54.2, 54.6, 54.9, 55.2, 55.4]
        ],
        girlHead:[
          [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15, 18, 21, 24, 27, 30, 33, 36, 42, 48, 54, 60, 66, 72],
          [30.4, 32.6, 34.5, 36, 37.2, 38.1, 38.9, 39.5, 40.1, 40.5, 40.9, 41.3, 41.5, 42.2, 42.8, 43.2, 43.6, 44, 44.3, 44.6, 44.8, 45.3, 45.7, 46, 46.3, 46.6, 46.8],
          [31.6, 33.8, 35.6, 37.1, 38.3, 39.2, 40, 40.7, 41.2, 41.7, 42.1, 42.4, 42.7, 43.4, 43.9, 44.4, 44.8, 45.2, 45.5, 45.8, 46, 46.5, 46.9, 47.2, 47.5, 47.8, 48],
          [32.8, 35, 36.8, 38.3, 39.5, 40.4, 41.2, 41.8, 42.4, 42.9, 43.3, 43.6, 43.9, 44.6, 45.1, 45.6, 46, 46.4, 46.7, 47, 47.3, 47.7, 48.1, 48.4, 48.7, 49, 49.2],
          [34, 36.2, 38, 39.5, 40.7, 41.6, 42.4, 43.1, 43.6, 44.1, 44.5, 44.9, 45.1, 45.8, 46.4, 46.9, 47.3, 47.7, 48, 48.3, 48.5, 49, 49.4, 49.7, 50, 50.3, 50.5],
          [35.2, 37.4, 39.3, 40.8, 41.9, 42.9, 43.7, 44.4, 44.9, 45.4, 45.8, 46.2, 46.5, 47.2, 47.7, 48.2, 48.6, 49, 49.3, 49.6, 49.8, 50.3, 50.6, 51, 51.3, 51.5, 51.8],
          [36.4, 38.6, 40.5, 42.1, 43.3, 44.3, 45.1, 45.7, 46.3, 46.8, 47.2, 47.5, 47.8, 48.5, 49.1, 49.6, 50, 50.3, 50.7, 50.9, 51.2, 51.6, 52, 52.3, 52.6, 52.8, 53.1],
          [37.5, 39.9, 41.8, 43.4, 44.6, 45.7, 46.5, 47.2, 47.7, 48.2, 48.6, 49, 49.3, 50, 50.5, 51, 51.4, 51.7, 52.1, 52.3, 52.6, 53, 53.3, 53.7, 53.9, 54.2, 54.4]
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
          if(_this.$utils._null(bayEndData.headCircumference)){
            if(_this.$utils.getCurrentBaby().sex==1){//男
              var ag= _this.$utils.countAgeDiff(birthDays.join('-'),bayEndData.measurementTime);
              var agMs=ag[0]*12+ag[1];
              var xAxis=_this.boyHead[0];
              for(var i=0;i<xAxis.length;i++){
                if(agMs<=xAxis[i]){
                  var babyHeight=parseFloat(bayEndData.headCircumference);
                  if(babyHeight<=_this.boyHead[1][i]){
                    _this.msg="您的小王子，最近一次（"+bayEndData.measurementTime+"）测量头围为："+babyHeight+"(cm),标准头围应在"+_this.boyHead[3][i]+"(cm)到"+_this.boyHead[4][i]+"(cm)之间,综上所述：头围 "+"超低。";
                  }else if(babyHeight<=_this.boyHead[2][i]){
                    _this.msg="您的小王子，最近一次（"+bayEndData.measurementTime+"）测量头围为："+babyHeight+"(cm),标准头围应在"+_this.boyHead[3][i]+"(cm)到"+_this.boyHead[4][i]+"(cm)之间,综上所述：头围 "+"低。";
                  }else if(babyHeight<=_this.boyHead[3][i]){
                    _this.msg="您的小王子，最近一次（"+bayEndData.measurementTime+"）测量头围为："+babyHeight+"(cm),标准头围应在"+_this.boyHead[3][i]+"(cm)到"+_this.boyHead[4][i]+"(cm)之间,综上所述：头围 "+"偏低。";
                  }else if(babyHeight>=_this.boyHead[6][i]){
                    _this.msg="您的小王子，最近一次（"+bayEndData.measurementTime+"）测量头围为："+babyHeight+"(cm),标准头围应在"+_this.boyHead[3][i]+"(cm)到"+_this.boyHead[4][i]+"(cm)之间,综上所述：头围 "+"超高。";
                  }else if(babyHeight>=_this.boyHead[5][i]){
                    _this.msg="您的小王子，最近一次（"+bayEndData.measurementTime+"）测量头围为："+babyHeight+"(cm),标准头围应在"+_this.boyHead[3][i]+"(cm)到"+_this.boyHead[4][i]+"(cm)之间,综上所述：头围 "+"高。";
                  }else if(babyHeight>=_this.boyHead[4][i]){
                    _this.msg="您的小王子，最近一次（"+bayEndData.measurementTime+"）测量头围为："+babyHeight+"(cm),标准头围应在"+_this.boyHead[3][i]+"(cm)到"+_this.boyHead[4][i]+"(cm)之间,综上所述：头围 "+"偏高。";
                  }else {
                    _this.msg="您的小王子，最近一次（"+bayEndData.measurementTime+"）测量头围为："+babyHeight+"(cm),标准头围应在"+_this.boyHead[3][i]+"(cm)到"+_this.boyHead[4][i]+"(cm)之间,综上所述：头围 "+"正常。";
                  }
                  break;
                }
              }
            }else {
              var ag= _this.$utils.countAgeDiff(birthDays.join('-'),bayEndData.measurementTime);
              var agMs=ag[0]*12+ag[1];

              var xAxis=_this.girlHead[0];
              for(var i=0;i<xAxis.length;i++){
                if(agMs<=xAxis[i]){
                  var babyHeight=parseFloat(bayEndData.headCircumference);
                  if(babyHeight<=_this.girlHead[1][i]){
                    _this.msg="您的小公主，最近一次（"+bayEndData.measurementTime+"）测量头围为："+babyHeight+"(cm),标准头围应在"+_this.girlHead[3][i]+"(cm)到"+_this.girlHead[4][i]+"(cm)之间,综上所述：头围 "+"超低。";
                  }else if(babyHeight<=_this.girlHead[2][i]){
                    _this.msg="您的小公主，最近一次（"+bayEndData.measurementTime+"）测量头围为："+babyHeight+"(cm),标准头围应在"+_this.girlHead[3][i]+"(cm)到"+_this.girlHead[4][i]+"(cm)之间,综上所述：头围 "+"低。";
                  }else if(babyHeight<=_this.girlHead[3][i]){
                    _this.msg="您的小公主，最近一次（"+bayEndData.measurementTime+"）测量头围为："+babyHeight+"(cm),标准头围应在"+_this.girlHead[3][i]+"(cm)到"+_this.girlHead[4][i]+"(cm)之间,综上所述：头围 "+"偏低。";
                  }else if(babyHeight>=_this.girlHead[6][i]){
                    _this.msg="您的小公主，最近一次（"+bayEndData.measurementTime+"）测量头围为："+babyHeight+"(cm),标准头围应在"+_this.girlHead[3][i]+"(cm)到"+_this.girlHead[4][i]+"(cm)之间,综上所述：头围 "+"超高。";
                  }else if(babyHeight>=_this.girlHead[5][i]){
                    _this.msg="您的小公主，最近一次（"+bayEndData.measurementTime+"）测量头围为："+babyHeight+"(cm),标准头围应在"+_this.girlHead[3][i]+"(cm)到"+_this.girlHead[4][i]+"(cm)之间,综上所述：头围 "+"高。";
                  }else if(babyHeight>=_this.girlHead[4][i]){
                    _this.msg="您的小公主，最近一次（"+bayEndData.measurementTime+"）测量头围为："+babyHeight+"(cm),标准头围应在"+_this.girlHead[3][i]+"(cm)到"+_this.girlHead[4][i]+"(cm)之间,综上所述：头围 "+"偏高。";
                  }else {
                    _this.msg="您的小公主，最近一次（"+bayEndData.measurementTime+"）测量头围为："+babyHeight+"(cm),标准头围应在"+_this.girlHead[3][i]+"(cm)到"+_this.girlHead[4][i]+"(cm)之间,综上所述：头围 "+"正常。";
                  }
                  break;
                }
              }
            }
          }

        }
        for(var i=0;i<re.length;i++){
          _this.babyData.push([re[i].measurementTime,parseFloat(re[i].headCircumference)]);
        }

        var data1 = [];
        var data2 = [];
        var data3 = [];
        var data4 = [];
        var data5 = [];
        var data6 = [];

        if(_this.$utils.getCurrentBaby().sex==1){//男
          var xAxis=_this.boyHead[0];
          for(var i=0;i<xAxis.length;i++){
            var a=new Date(birthDays.join("/"));
            a.setMonth(a.getMonth()+xAxis[i]);
            data1.push([[a.getFullYear(),a.getMonth()+1,a.getDate()].join('-'),_this.boyHead[1][i]]);
            data2.push([[a.getFullYear(),a.getMonth()+1,a.getDate()].join('-'),_this.boyHead[2][i]]);
            data3.push([[a.getFullYear(),a.getMonth()+1,a.getDate()].join('-'),_this.boyHead[3][i]]);
            data4.push([[a.getFullYear(),a.getMonth()+1,a.getDate()].join('-'),_this.boyHead[4][i]]);
            data5.push([[a.getFullYear(),a.getMonth()+1,a.getDate()].join('-'),_this.boyHead[5][i]]);
            data6.push([[a.getFullYear(),a.getMonth()+1,a.getDate()].join('-'),_this.boyHead[6][i]]);
          }
        }else {
          var xAxis=_this.girlHead[0];
          for(var i=0;i<xAxis.length;i++){
            var a=new Date(birthDays.join("/"));
            a.setMonth(a.getMonth()+xAxis[i]);
            data1.push([[a.getFullYear(),a.getMonth()+1,a.getDate()].join('-'),_this.girlHead[1][i]]);
            data2.push([[a.getFullYear(),a.getMonth()+1,a.getDate()].join('-'),_this.girlHead[2][i]]);
            data3.push([[a.getFullYear(),a.getMonth()+1,a.getDate()].join('-'),_this.girlHead[3][i]]);
            data4.push([[a.getFullYear(),a.getMonth()+1,a.getDate()].join('-'),_this.girlHead[4][i]]);
            data5.push([[a.getFullYear(),a.getMonth()+1,a.getDate()].join('-'),_this.girlHead[5][i]]);
            data6.push([[a.getFullYear(),a.getMonth()+1,a.getDate()].join('-'),_this.girlHead[6][i]]);
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
              name: '头围(cm)',
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
              name:'宝宝头围',
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
