<template>
    <div>
      <div class="title">
        我的病人
        <Input v-model="search" size="small" placeholder="输入宝宝名字">
          <Button slot="append" icon="ios-search" @click="searchBB"></Button>
        </Input>
      </div>
      <Table :columns="columns1" :data="data1" @on-row-click="datile"></Table>
      <Page :current="pageN" :total="total" size="small" style="text-align: center; margin-top: .4rem" @on-change="pageChange"></Page>
    </div>
</template>

<script>
  import {getChildrent} from '../../interface';

  export default {
    name: 'index',
    data() {
      return {
        search: '',
        columns1: [
          {title: '宝宝名',key: 'name'},
          {title: '月龄',key: 'age'},
          {title: '性别',key: 'sex'},
        ],
        data1: [],
        pageN: 1,
        total: 1,
      };
    },
    mounted() {
      this.getData();
    },
    methods: {
      pageChange(newPage) {
        this.pageN = newPage;
        this.getData();
      },
      datile(data, index) {
        this.$router.push({path: '/patientdatile/'+data.id})
      },
      searchBB() {
        if(this.search == '') {
          this.getData();
          return false;
        }
        this.$ajax({
          method: 'get',
          url: getChildrent() + this.pageN + '&name=' + this.search,
        }).then((res) => {
          this.data1 = res.data.content;
          this.total = res.data.totalElements;
        }).catch((error) => {
          this.$Message.error('网络出错，请稍后再试');
        });
      },
      getData() {
        this.$ajax({
          method: 'get',
          url: getChildrent() + this.pageN,
        }).then((res) => {
          this.data1 = res.data.content;
          this.total = res.data.totalElements;
        }).catch((error) => {
          this.$Message.error('网络出错，请稍后再试');
        });
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
