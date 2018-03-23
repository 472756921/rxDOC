<template>
    <div class="info">
      <h3>姓名：刘德华</h3>
      <br/>
      <Row class="list">
        <Col span="12">在线状态： <i-Switch v-model="d.zx" @on-change="change"><span slot="open">开</span><span slot="close">关</span></i-Switch></Col>
        <Col span="12">电话预约： <i-Switch v-model="d.dh" @on-change="change"><span slot="open">开</span><span slot="close">关</span></i-Switch></Col>
        <Col span="12">视频预约： <i-Switch v-model="d.sp" @on-change="change"><span slot="open">开</span><span slot="close">关</span></i-Switch></Col>
        <Col span="12">在线问诊： <i-Switch v-model="d.wz" @on-change="change"><span slot="open">开</span><span slot="close">关</span></i-Switch></Col>
      </Row>
      <div class="araB">
        <h3>服务统计<small>（已完成）</small><DatePicker type="month" placeholder="请选择查看月份" style="width: 160px;float: right" :editable=false :transfer=true size="small" :options="options"></DatePicker></h3>
        <div>电话预约：12次</div>
        <div>视频预约：12次</div>
        <div>在线问诊：12次</div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'z_info',
    data() {
      return {
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
    methods: {
      change (status) {
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
