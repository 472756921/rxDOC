<template>
  <div id="hjinfo">
    <div>
      <Button type="primary" class="Sbtn" @click="posthj">发布患教</Button>
    </div>
    <Table :columns="columns1" :data="data1" @on-row-click="datile"></Table>
    <Page :current="pageN" :total="total" size="small" style="text-align: center; margin-top: .4rem" @on-change="pageChange"></Page>
  </div>
</template>

<script>
  import {getAllPatientEducation} from '../../interface';

  export default {
    name: 'hj',
    mounted() {
      this.getData();
    },
    data() {
      return {
        columns1: [
          {title: '名称',key: 'title'},
          {title: '提交时间',key: 'addTime'},
          {title: '发布者',key: 'name'},
          {title: '状态',key: 'status',
            render: (p, r) => {
              if(r.row.status == '2') {
                return <div style='color: red'>未通过</div>
              } else if(r.row.status == '1') {
                return <div style='color: green'>已通过</div>
              } else if(r.row.status == '0') {
                return <div style='color: orange'>审核中</div>
              }
            }
          },
        ],
        data1: [],
        pageN: 1,
        total: 1,
      };
    },
    methods: {
      posthj() {
        this.$router.push({path: 'posthj/0'});
      },
      pageChange(newPage) {
        this.pageN = newPage;
        this.getData();
      },
      datile(data, index) {
        let type = 1;
        if(data.status == '2') {
          type = 1;
        } else if(data.status == '0') {
          type = 2;
        } else if(data.status == '1') {
          type = 3;
        }
        this.$router.push({path: '/posthj/'+type, query: {data: data}})
      },
      getData() {
        this.$ajax({
          method: 'get',
          url: getAllPatientEducation() + this.pageN,
          dataType: 'JSON',
          contentType: 'application/json;charset=UTF-8',
        }).then((res) => {
          this.total = res.data.total;
          this.data1 = res.data.results;
        }).catch((error) => {
          this.$Message.error('网络掉了，请您稍后');
        });
      },
    },
  };
</script>

<style scoped>
  .Sbtn{
    margin: .4rem;
    width: calc(100% - .8rem);
  }
</style>
