<template>
  <div class="Ilst">
    <!--@on-row-click="datile"-->
    <Table :columns="columns1" :data="data1" style="font-size: 18px!important;"></Table>
    <Page :current="1" :total="total" size="small" style="text-align: center; margin-top: .4rem" @on-change="pageChange"></Page>
  </div>
</template>

<script>
  import {getJZList} from '../../interface';
  import expandRow from './expand.vue';

    export default {
      name: 'res',
      components: { expandRow },
      created() {
        this.type = sessionStorage.getItem('type');
      },
      data() {
        return {
          type: 1,
          pageN: 1,
          total: 1,
          closeQ: false,
          tempID: '',
          columns1: [
            {
              type: 'expand',
              width: 15,
              render: (h, params) => {
                return h(expandRow, {
                  props: {
                    row: params.row
                  }
                })
              }
            },
            {title: '宝宝名',key: 'childrenName', width: 78},
            {title: '类型',key: 'type',width: 100,
              render: (p, r) => {
                if(r.row.type == '1') {
                  return <div>在线问诊</div>
                } else if(r.row.type == '2') {
                  return <div>电话预约</div>
                }else if(r.row.type == '3') {
                  return <div>视频预约</div>
                }
              }
            },
            {title: '医生',key: 'doctorName'},
            {title: '状态',key: 'status',
              render: (p, r) => {
                if(r.row.status == null) {
                  return <div style='color: red'>未完成</div>
                } else if(r.row.status == '2') {
                  return <div style='color: green'>已完成</div>
                }else if(r.row.status == '1') {
                  return <div style='color: orangered'>进行中</div>
                }
              }
            },
          ],
          data1: []
        };
      },
      mounted() {
        this.getData(1);
      },
      methods: {
        pageChange(newPage) {
          this.pageN = newPage;
          this.getData();
        },
        getData() {
          this.$ajax({
            method: 'get',
            url: getJZList() + '?size=11&page=' + this.pageN,
            dataType: 'JSON',
            contentType: 'application/json;charset=UTF-8',
          }).then((res) => {
            this.total = res.data.total;
            this.data1 = res.data.results;
          }).catch((error) => {
            this.$Message.error('网络掉了，请您稍后');
          });
        },
        // datile(data, index) {
        //   if (this.type == 1 && data.status == null) {
        //     if(data.type != '1') {
        //       this.tempID = data.id;
        //     }
        //   }
        //   if(data.type == '1') {
        //     this.$router.push({path: '/chat/'+data.id, query: {data: data, type: this.type}})
        //   }
        // },
      },
    };
</script>

<style>
  .Ilst .ivu-table-cell{
    font-size: 14px!important;
  }
</style>
