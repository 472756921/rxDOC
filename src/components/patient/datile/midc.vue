<template>
    <div>
      <Table :columns="columns1" :data="data1" @on-row-click="datile"></Table>
      <Page :current="pageN" :total="total" size="small" style="text-align: center; margin-top: .4rem" @on-change="pageChange"></Page>
    </div>
</template>

<script>
  import {getAllChildrenHealthRecord} from '../../../interface';
  export default {
    name: 'midc',
    created() {
      this.getData();
      this.type = sessionStorage.getItem('type');
    },
    data() {
      return {
        type: '1',
        pageN: 1,
        total: 1,
        columns1: [
          {
            title: '名字',
            key: 'childrenName'
          },
          {
            title: '状态',
            key: 'status',
            render: (p, r) => {
              if(r.row.type == 1){
                if(r.row.status == 2){
                  return <span>已完成</span>
                } else {
                  return <span style='color: red'>进行中</span>
                }
              }
            }
          },
          {
            title: '咨询类型',
            key: 'type',
            render: (p, r) => {
              if(r.row.type == 1){
                return <span>图文咨询</span>
              } else if(r.row.type == 2){
                return <span>电话咨询</span>
              } else if(r.row.type == 3){
                return <span>网络诊室</span>
              } else if(r.row.type == 4){
                return <span>预约门诊</span>
              } else if(r.row.type == null){
                return <span>就医记录</span>
              }
            }
          },
          {
            title: '时间',
            key: 'addTime'
          }
        ],
        data1: []
      };
    },
    methods: {
      pageChange(newPage) {
        this.pageN = newPage;
        this.getData();
      },
      datile(row) {
        if(row.type == 1){
          this.$router.push({path: '/chat/'+row.id, query: {data: row, type: this.type}});
        } else if(row.type == null) {
          this.$router.push({path: '/midcDatile/'+row.id});
        }
      },
      getData() {
        this.$ajax({
          method: 'get',
          url: getAllChildrenHealthRecord()+'?childrenId='+ this.$route.params.id + '&page=' + this.pageN + '&size=11',
        }).then((res) => {
          this.data1 = res.data.results;
          this.total = res.data.total;
        }).catch((error) => {
          this.$Message.error('网络出错，请稍后再试');
        });
      },
    },
  };
</script>

<style scoped>

</style>
