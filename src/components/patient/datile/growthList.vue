<template>
  <div>
    <div style="margin: 0 15px">图例：<span class="cj1">三倍偏差</span>，<span class="cj2">两倍偏差</span>，<span class="cj3">一倍偏差</span>，<span class="cj4">正常</span></div>
    <Table :columns="columns1" :data="data1"></Table>
  </div>
</template>

<script>
import {getAllChildrenGrowRecord} from '../../../interface';
  export default {
    name: 'growthList',
    data() {
      return {
        columns1: [
          {
            title: '测量时间',
            key: 'measurementTime'
          },
          {
            title: '身高(cm)',
            key: 'height'
          },
          {
            title: '体重(kg)',
            key: 'weight'
          },
          {
            title: '头围(cm)',
            key: 'headCircumference'
          }
        ],
        data1: []
      };
    },
    created() {
      this.getData();
    },
    methods: {
      getData() {
        this.$ajax({
          method: 'get',
          url: getAllChildrenGrowRecord() + this.$route.params.id,
        }).then((res) => {
          this.data1 = res.data.results;
        }).catch((error) => {
          this.$Message.error('网络出错，请稍后再试');
        });
      }
    },
  };
</script>

<style scoped>
  .title{
    font-size: 14px;
    text-align: center;
    padding: .8rem .4rem;
    color: #fff;
    background: #1c2438;
  }
  .cj1{
    color: #dc134e;
  }
  .cj2{
    color: #e69f82;
  }
  .cj3{
    color: #3b769f;
  }
  .cj4{
    color: #8bb26a;
  }
</style>
