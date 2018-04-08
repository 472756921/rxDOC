<template>
  <div style="padding: .6rem;line-height: 1.8rem">
    <h3 style="text-align: center">就医记录</h3>
    <div>医院：{{data.hospitalName}}</div>
    <div>日期：{{data.addTime }}</div>
    <div>主要症状：{{data.problemContent }}</div>
    <div>诊断：{{data.diagnosis }}</div>
    <div>用药记录：{{data.medicationRecord }}</div>
    <div>检查结果：{{data.checkRecord }}</div>
    <div>用药记录图片：
      <img v-for="item,i in data.medicationRecordJsonList" :key="i" :src="item.norImageUrl" width="100%"/>
    </div>
    <div>检查结果图片：
      <img v-for="item,i in data.checkRecordJsonList" :key="i" :src="item.norImageUrl" width="100%"/>
    </div>
  </div>
</template>

<script>
  import {getChildrenHealthRecordById} from '../../interface';
  export default {
    name: 'midc-datile',
    created() {
      this.id = this.$route.params.id;
      this.getData()
    },
    data() {
      return{
        data: '',
        id: '',
      }
    },
    methods: {
      getData() {
        this.$ajax({
          method: 'get',
          url: getChildrenHealthRecordById()+ this.$route.params.id,
        }).then((res) => {
          this.data = res.data;
        }).catch((error) => {
          this.$Message.error('网络出错，请稍后再试');
        });
      },
    }
  };
</script>

<style scoped>

</style>
