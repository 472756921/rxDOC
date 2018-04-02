<template>
  <div>
    <Table :columns="columns1" :data="data1" @on-row-click="datile"></Table>
    <Page :current="pageN" :total="total" size="small" style="text-align: center; margin-top: .4rem" @on-change="pageChange"></Page>
    <Button type="info" class="Sbtn" @click="posthj" v-if="utype==1">写一条</Button>
  </div>
</template>

<script>
  import {getAllCustomerShare} from '../../interface';

  export default {
    name: 'shared',
    props: ['type'],
    created() {
      this.utype = sessionStorage.getItem('type');
      this.getData();
    },
    data() {
      return {
        utype: 1,
        pageN: 1,
        total: 1,
        columns1: [
          {title: '标题',key: 'title'},
          {title: '发布者',key: 'customerName'},
          {title: '发布时间',key: 'addTime'},
          {title: '评论总数',key: 'commentCount'},
        ],
        data1: [],
      };
    },
    methods: {
      datile(data, index){
        this.$router.push({path: '/s_datile/'+data.id, query: {type: this.type}});
      },
      posthj() {
        this.$router.push({path: '/n_shared'});
      },
      getData() {
        this.$ajax({
          method: 'get',
          url: getAllCustomerShare() + '?size=11&page=' + this.pageN,
        }).then((res) => {
          this.data1 = res.data.results;
          this.total = res.data.total;
        }).catch((error) => {
          this.$Message.error('网络故障，获取失败');
        });
      },
      pageChange(newPage) {
        this.pageN = newPage;
      },
    },
  };
</script>

<style scoped>
  .Sbtn{
    width: 95%;
    margin: .4rem auto;
    position: fixed;
    bottom: 10px;
    left: calc(5% / 2);
  }
</style>
