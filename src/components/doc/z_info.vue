<template>
    <div class="info">
      <div>
        <h3>助手：{{name}}</h3>
      </div>
      <br/>
      <div>
        <span>医生选择：</span>
        <Select v-model="doc" style="width:200px" @on-change="changeDOC">
          <Option v-for="item in docList" :value="item.id" :key="item.id">{{ item.name }}</Option>
        </Select>
        <div style="padding:.4rem">{{remarks}}</div>
      </div>
      <br/>
      <Row class="list">
        <Col span="12">在线状态： <i-Switch v-model="d.zx" @on-change="change"><span slot="open">开</span><span slot="close">关</span></i-Switch></Col>
        <Col span="12">电话预约： <i-Switch v-model="d.dh" @on-change="change"><span slot="open">开</span><span slot="close">关</span></i-Switch></Col>
        <Col span="12">视频预约： <i-Switch v-model="d.sp" @on-change="change"><span slot="open">开</span><span slot="close">关</span></i-Switch></Col>
        <Col span="12">在线问诊： <i-Switch v-model="d.wz" @on-change="change"><span slot="open">开</span><span slot="close">关</span></i-Switch></Col>
      </Row>
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
  import {doctorAll, getUserInfo, getDoctorIdDetail, getServiceNum, saveDoctor} from '../../interface';

  export default {
    name: 'z_info',
    data() {
      return {
        doc: '',
        date: '',
        name: '',
        remarks: '',
        docList: [],
        st: {
          onlineNum: 0,
          phoneNum: 0,
          videoNum: 0,
        },
        d: {
          zx: false,
          dh: false,
          sp: false,
          wz: false,
        },
        options: {
          disabledDate (date) {
            return date && date.valueOf() > Date.now() - 86400000;
          }
        },
      }
    },
    mounted() {
      this.getData();
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
            id: this.doc,
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
          url: getUserInfo(),
        }).then((res) => {
          this.name = res.data.data.name;
          sessionStorage.setItem('uid', res.data.data.id);
        }).catch((error) => {
          this.$Message.error('网络故障，无法获取');
        });
        this.$ajax({
          method: 'post',
          url: doctorAll(),
        }).then((res) => {
          this.docList = res.data.data;
        }).catch((error) => {
          this.$Message.error('网络故障，无法获取');
        });
      },
      changeDOC () {
        this.$ajax({
          method: 'get',
          url: getDoctorIdDetail() + this.doc,
        }).then((res) => {
          this.remarks = res.data.remarks;
          res.data.onLine == 0?this.d.zx = false:this.d.zx = true;
          res.data.type.indexOf('1')!=-1?this.d.wz = true:this.d.wz = false;
          res.data.type.indexOf('2')!=-1?this.d.dh = true:this.d.dh = false;
          res.data.type.indexOf('3')!=-1?this.d.sp = true:this.d.sp = false;
        }).catch((error) => {
          this.$Message.error('网络故障，无法获取');
        });
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
      },
      change(staus) {},
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
