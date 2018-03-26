<template>
  <div>
    <div style="margin: 0 15px">图例：<span class="cj1">三倍偏差</span>，<span class="cj2">两倍偏差</span>，<span class="cj3">一倍偏差</span>，<span class="cj4">正常</span></div>
    <Table :columns="columns1" :data="data1"></Table>
  </div>
</template>

<script>

  export default {
    name: 'growthList',
    data() {
      return {
        columns1: [
          {
            title: '月龄',
            key: 'age'
          },
          {
            title: '身高',
            key: 'sg'
          },
          {
            title: '体重',
            key: 'tz'
          },
          {
            title: '头围',
            key: 'tw'
          }
        ],
        data1: [
          {
            age: '6岁11个月23天',
            sg: '43CM',
            tz: '4KG',
            tw: '12CM',
          },
        ]
      };
    },
    methods: {
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
