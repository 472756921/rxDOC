<template>
  <div>
    <Table :columns="columns1" :data="data1" @on-row-click="datile"></Table>
    <Page :current="1" :total="50" size="small" style="text-align: center; margin-top: .4rem"></Page>
  </div>
</template>

<script>
    export default {
      name: 'res',
      data() {
        return {
          columns1: [
            {title: '宝宝名',key: 'name'},
            {title: '类型',key: 'type'},
            {title: '联系电话',key: 'phone'},
            {title: '时间',key: 'date'},
            {title: '状态',key: 'status',
              render: (p, r) => {
                if(r.row.status == '未完成') {
                  return <div style='color: red'>未完成</div>
                } else if(r.row.status == '已完成') {
                  return <div style='color: green'>已完成</div>
                }
              }
            },
          ],
          data1: [
            {name: '溜溜', type: '视频预约', phone: '17782293840', date: '2012-12-12', status: '未完成', id: 12},
            {name: '溜溜', type: '在线咨询', phone: '17782293840', date: '2012-12-12', status: '未完成', id: 12},
            {name: '溜溜', type: '视频预约', phone: '17782293840', date: '2012-12-12', status: '已完成', id: 12},
            {name: '溜溜', type: '电话预约', phone: '17782293840', date: '2012-12-12', status: '已完成', id: 12},
            {name: '溜溜', type: '在线咨询', phone: '17782293840', date: '2012-12-12', status: '已完成', id: 12},
          ]
        };
      },
      methods: {
        datile(data, index) {
          if(data.type == '在线咨询') {
            this.$router.push({path: '/chat/'+data.id, query: {data: data}})
          }
        },
      },
    };
</script>

<style scoped>

</style>
