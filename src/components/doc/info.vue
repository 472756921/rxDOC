<template>
    <div class="info">
      <h3>姓名：{{ud.name}}</h3>
      <br/>
      <Row class="list">
        <Col span="12">在线状态： <i-Switch v-model="d.zx" @on-change="change"><span slot="open">开</span><span slot="close">关</span></i-Switch></Col>
        <Col span="12">电话预约： <i-Switch v-model="d.dh" @on-change="change"><span slot="open">开</span><span slot="close">关</span></i-Switch></Col>
        <Col span="12">视频预约： <i-Switch v-model="d.sp" @on-change="change"><span slot="open">开</span><span slot="close">关</span></i-Switch></Col>
        <Col span="12">在线问诊： <i-Switch v-model="d.wz" @on-change="change"><span slot="open">开</span><span slot="close">关</span></i-Switch></Col>
      </Row>
      <div>
        <h3>医生简介：</h3>
        <p>{{ud.remarks}}</p>
      </div>
      <div class="araB">
        <h3>服务统计<small>（已完成）</small><DatePicker type="month" v-model="date" placeholder="请选择查看月份" style="width: 160px;float: right" placement="bottom-end" :editable=false :transfer=true size="small" @on-change="dateChange" :options="options"></DatePicker></h3>
        <div>电话预约：{{st.phoneNum}}次  -  ￥{{st.phoneNum * st.phonePrice}}</div>
        <div>视频预约：{{st.videoNum}}次  -  ￥{{st.videoNum * st.videoPrice}}</div>
        <div>在线问诊：{{st.onlineNum}}次  -  ￥{{st.onlineNum * st.onlinePrice}}</div>
        <div style="color: red;font-size: 14px">总收入： ￥{{st.total}}</div>
      </div>
    </div>
</template>

<script>
  import {getDoctorById, saveDoctor, getServiceNum} from '../../interface';

  export default {
    name: 'info',
    created() {
      this.getData();
    },
    data() {
      return {
        ud: '',
        dID: '',
        date: '2018-01',
        d: {
          zx: false,
          dh: false,
          sp: false,
          wz: false,
        },
        st: {
          onlineNum: 0,
          phoneNum: 0,
          videoNum: 0,
        },
        options: {
          disabledDate (date) {
            return date && date.valueOf() > Date.now() - 86400000;
          }
        },
      }
    },
    methods: {
      change (status) {
        let type = '';
        if(this.d.wz) {
          type += '1';
        }
        if(this.d.sp) {
          type += '3';
        }
        if(this.d.dh) {
          type += '2';
        }
        this.$ajax({
          method: 'post',
          data: {
            "online": this.d.zx?1:0,
            "type": type,
            id: this.dID,
          },
          url: saveDoctor(),
        }).then((res) => {
        }).catch((error) => {
        });
      },
      dateChange(date) {
        this.date = date;
        this.getServiceT();
      },
      getData() {
        this.$ajax({
          method: 'get',
          url: getDoctorById(),
        }).then((res) => {
          this.ud = res.data
          res.data.onLine == 0?this.d.zx = false:this.d.zx = true;
          res.data.type.indexOf('1')!=-1?this.d.wz = true:this.d.wz = false;
          res.data.type.indexOf('2')!=-1?this.d.dh = true:this.d.dh = false;
          res.data.type.indexOf('3')!=-1?this.d.sp = true:this.d.sp = false;
          this.dID = res.data.id;
        }).catch((error) => {
          this.$Message.error('网络故障，无法获取');
        });
        this.getServiceT();
      },
      getServiceT() {
        this.$ajax({
          method: 'get',
          url: getServiceNum() + this.date,
        }).then((res) => {
          this.st = res.data;
        }).catch((error) => {
          this.$Message.error('网络故障，无法获取');
        });
      }
    },
  };
</script>

<style scoped>
  .info{
    padding: 10px;
  }
  .list{
   line-height: 2.2rem;
  }
  .araB{
    border-top: 1px solid #eee;
    margin-top: 1rem;
    padding: 1rem 0;
    line-height: 1.6rem;
  }
</style>
