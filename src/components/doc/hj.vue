<template>
  <div id="hjinfo">
    <div>
      <Button type="primary" class="Sbtn" @click="posthj">发布患教</Button>
    </div>
    <Table :columns="columns1" :data="data1" @on-row-click="datile"></Table>
    <Page :current="1" :total="50" size="small" style="text-align: center; margin-top: .4rem"></Page>
  </div>
</template>

<script>
    export default {
      name: 'hj',
      mounted() {
      },
      data() {
        return {
          columns1: [
            {title: '名称',key: 'name'},
            {title: '提交时间',key: 'date'},
            {title: '发布者',key: 'user'},
            {title: '状态',key: 'status',
              render: (p, r) => {
                if(r.row.status == '未通过') {
                  return <div style='color: red'>未通过</div>
                } else if(r.row.status == '已通过') {
                  return <div style='color: green'>已通过</div>
                } else if(r.row.status == '审核中') {
                  return <div style='color: orange'>审核中</div>
                }
              }
            },
          ],
          data1: [
            {name: '溜溜', date: '2012-12-12', status: '未通过', user: 'xxx'},
            {name: '溜溜', date: '2012-12-12', status: '未通过', user: 'xxx'},
            {name: '溜溜', date: '2012-12-12', status: '审核中', user: 'xxx'},
            {name: '溜溜', date: '2012-12-12', status: '已通过', user: 'xxx'},
            {name: '溜溜', date: '2012-12-12', status: '已通过', user: 'xxx'},
            {name: '溜溜', date: '2012-12-12', status: '已通过', user: 'xxx'},
            {name: '溜溜', date: '2012-12-12', status: '已通过', user: 'xxx'},
            {name: '溜溜', date: '2012-12-12', status: '已通过', user: 'xxx'},
            {name: '溜溜', date: '2012-12-12', status: '已通过', user: 'xxx'},
            {name: '溜溜', date: '2012-12-12', status: '已通过', user: 'xxx'},
          ]
        };
      },
      methods: {
        posthj() {
          this.$router.push({path: 'posthj/0'});
        },
        datile(data, index) {
          let type = 1;
          if(data.status == '未通过') {
            type = 1;
          } else if(data.status == '审核中') {
            type = 2;
          } else if(data.status == '已通过') {
            type = 3;
          }
          this.$router.push({path: '/posthj/'+type, query: {data: data}})
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
