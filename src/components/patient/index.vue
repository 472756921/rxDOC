<template>
    <div>
      <div class="title">我的病人</div>
      <Table :columns="columns1" :data="data1" @on-row-click="datile"></Table>
      <Page :current="1" :total="20" size="small" style="text-align: center; margin-top: .4rem"></Page>
    </div>
</template>

<script>
  export default {
    name: 'index',
    data() {
      return {
        columns1: [
          {title: '宝宝名',key: 'name'},
          {title: '月龄',key: 'age'},
        ],
        data1: [
          {name: 'XXX', age: '12', id: 12},
          {name: 'asdf', age: '12', id: 12},
          {name: 'ww', age: '12', id: 12},
          {name: 'ee', age: '12', id: 12},
          {name: 'dd', age: '12', id: 12},
          {name: 'rrr', age: '12', id: 12},
          {name: 'fff', age: '12', id: 12},
          {name: 'feefe', age: '12', id: 12},
          {name: 'feefe', age: '12', id: 12},
          {name: 'feefe', age: '12', id: 12},
          {name: 'feefe', age: '12', id: 12},
        ],
      };
    },
    methods: {
      datile(data, index) {
        this.$router.push({path: '/patientdatile/'+data.id})
      },
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
</style>
